$(document).ready(function () {

    console.info(`loadVideo called`);

    (function loadYoutubeIFrameApiScript() {

        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        tag.onload = setupPlayer;
    })();
    var player = null;

    function setupPlayer() {
        console.log("playerSetup")
        window.YT.ready(function () {
            player = new YT.Player('videoPlayer', {
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        });
    }

    const getYoutubeVideoID = (youtubeURL) => {
        youtubeURL = youtubeURL.replace("?v=", "?fakeparam=100&video=");
        let urlParam = new URLSearchParams(youtubeURL);
        let videoID = urlParam.get('video');
        return videoID;
    }


    let youtubeId = "";
    $("#userURLSubmit").click(function (e) {
        e.preventDefault()
        let searchVid = $('#userInputtedUrl').val();
        youtubeId = getYoutubeVideoID(searchVid)
        $("#videoPlayer").attr("src", `https://www.youtube.com/embed/${youtubeId}?enablejsapi=1`);
        $("#ytId").attr("value", `${youtubeId}`);
    });

    function onPlayerReady(event) {
        event.target.playVideo();
        time_total = convert_to_mins_and_secs(player.getDuration(), 1);
        // authenticate().then(loadClient);
        // loadClient.ready(execute());
        generateProgressBar();
        buildCurrentTimeDisplay();
    }

    //for the durations bar (currently functioning and being called)
    function generateProgressBar() {
        var current_time = convert_to_mins_and_secs(player.getCurrentTime(), 0);
        document.getElementById("progress-bar").style.width = (player.getCurrentTime() / player.getDuration()) * 100 + "%";
        timeout_setter = setTimeout(generateProgressBar, 1000);
    }

    //for video time display (currently functioning and being called)
    function buildCurrentTimeDisplay() {
        var current_time = convert_to_mins_and_secs(player.getCurrentTime(), 0);
        document.getElementById("counter").innerHTML = current_time;
        console.log(current_time + " / " + time_total);
        timeout_setter = setTimeout(buildCurrentTimeDisplay, 1000);
    }

    //converts seconds to minutes to be used in the progress bar and timer (currently functioning and being called)
    function convert_to_mins_and_secs(seconds, minus1) {
        var mins = (seconds >= 60) ? Math.round(seconds / 60) : 0;
        var secs = (seconds % 60 != 0) ? Math.round(seconds % 60) : 0;
        var secs = (minus1 == true) ? (secs - 1) : secs; //Youtube always displays 1 sec less than its duration time!!! Then we have to set minus1 flag to true for converting player.getDuration()
        var time = mins + "m" + ((secs < 10) ? "0" + secs : secs)+ "s";
        return time;
    }

    // Runs the fetched Json Captions and converts them to CSV

    const main = async () => {
        const
            defaultId = getYoutubeVideoID($('#userInputtedUrl').val()), /* Queen – Bohemian Rhapsody */
            json = YouTubeCaptionUtil
                .fetchCaptions(YouTubeCaptionUtil.videoId() || defaultId),
            csv = CsvUtil.fromJson(json);
        document.getElementById("captions").innerHTML = csv;
        console.log(csv);

    };

    // fetch Json caption data
    class YouTubeCaptionUtil {
        static async fetchCaptions(videoId, options) {
            const
                opts = {...YouTubeCaptionUtil.defaultOptions, ...options},
                response = await fetch(YouTubeCaptionUtil.__requestUrl(videoId, opts)),
                json = await response.json();
            return YouTubeCaptionUtil.__parseTranscript(json);
        }

        //prep user-inputted YT URL
        static videoId() {
            const video_id = window.location.search.split('v=')[1];
            if (video_id != null) {
                const ampersandPosition = video_id.indexOf('&');
                if (ampersandPosition != -1) {
                    return video_id.substring(0, ampersandPosition);
                }
            }
            return null;
        }


        static __requestUrl(videoId, {baseUrl, languageId}) {
            return `${baseUrl}?lang=${languageId}&v=${videoId}&fmt=json3`;
        }

        static __parseTranscript({events}) {
            return events.map(({tStartMs, dDurationMs, segs: [{utf8}]}) => ({
                start: YouTubeCaptionUtil.__formatTime(tStartMs),
                dur: YouTubeCaptionUtil.__formatTime(dDurationMs),
                text: utf8
            }));
        }

        static __formatTime(seconds) {
            const date = new Date(null);
            date.setSeconds(seconds);
            return date.toISOString().substr(11, 8);
        };
    }

    YouTubeCaptionUtil.defaultOptions = {
        baseUrl: 'https://video.google.com/timedtext',
        languageId: 'en'
    };


    // 5. The API calls this function when the player's state changes (works)
    function onPlayerStateChange(event) {
        if (event.data === YT.PlayerState.ENDED) {
            console.log("END!");
            clearTimeout(timeout_setter);
        } else {
            console.log(event.data);
        }
    }

    const options = {
        onUploadDone:
        function (res){
            $("#user_id").val(res.filesUploaded[0].url);
            res.filesUploaded
        }
}

    // $('#note input[type="text"]').blur(function(e) {
    //     if(!$(this).val()){
    //         $(this).addClass("error");
    //     } else {
    //         $(this).removeClass("error");
    //     }
    // });

    //#time_stamp, #ytId, #user_id

    //change field class/ look of fields to guide users to fill in required info
    $("#note, #section, #collection").on('change', function() {

        if ($(this).val() === "") {
            $(this).addClass("notFilled").removeClass("textField");
        } else {
            $(this).removeClass("notFilled").addClass("textField");
        }
    });

    // function onChange() {
    //     var x = document.getElementById("note").value;
    //     document.getElementById("demo").innerHTML = "You selected: " + x;
    // }
    //
    // function onInput() {
    //     var x = document.getElementById("section").value;
    //     document.getElementById("demo").innerHTML = "You wrote: " + x;
    // }
    //, #ytId

    //disable submit until all user inputs are entered
    $('#note, #section, #collection').bind('change', function() {
        if(allFilled()) $('#createFormSubmit').removeAttr('disabled');
    });

    function allFilled() {
        let filled = true;
        $('form .needed').each(function() {
            if($(this).val() === '') filled = false;
        });
        return filled;
    }

    //drop down menus create and show
    // $('#collection_btn').click(function () {
    //
    //     var url = "/collections";
    //
    //     $.getJSON(url, function (data) {
    //         $.each(data, function (index, value) {
    //             // APPEND OR INSERT DATA TO SELECT ELEMENT.
    //             $('#collection_drop').append('<li><a class="dropdown-item" value="' + value.id + '">' + value.title + '</a></li>');
    //         });
    //     });
    // });

    // // $('#id_trial').click(function() {
    //
    //     $.ajax({
    //         type: "GET",
    //         url:"/collections",
    //         dataType: "json",
    //         success: function (data) {
    //             $.each(data.aaData,function(i,data)
    //             {
    //                 var div_data='<li><a class="dropdown-item" value="' + collection.id + '">' + collection.title + '</a></li>';
    //                 $(div_data).appendTo('#collection_drop');
    //             });
    //         }
    //     });
    //
    // // SHOW SELECTED VALUE.
    // $('#collection').change(function () {
    //     $('#msg').text('Selected Item: ' + this.options[this.selectedIndex].text);
    // });


    $("#createFormSubmit").click(function (e) {
        $("#createFormSubmit").attr("disabled", true);
        e.preventDefault()
        $.ajax({
            url: '/collections/create',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(
        {"collection": {
            "user": {"id": "1"},
            "title" : $("#collection").val(),
                "is_private" : "true",
                "description" : "Enter your Collection Description here",
                "image" : "https://lakelandescaperoom.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg"
        },
            "section":{
            "title" : $("#section").val()
        },
            "note":
            {
                "note" : $("#note").val(),
                "video": {"video_url" : $("#ytId").val()},
                // "time_stamp": $("#time_stamp").val().toString()
            }
        }), success : $("#note").val(''),
        });
    });

});

