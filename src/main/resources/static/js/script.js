$(document).ready(function () {
    console.log('im connected')
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

    // function startPlayBack(){
    //     $("#videoPlayer").attr("src", `https://www.youtube.com/embed/${youtubeId}?enablejsapi=1?autoplay=1&rel=0`).contentWindow.location.reload(true);
    // }

    let youtubeId = "";
    $("#userURLSubmit").click(function (e) {
        e.preventDefault()
        let searchVid = $('#userInputtedUrl').val();
        youtubeId = getYoutubeVideoID(searchVid)
        $("#videoPlayer").attr("src", `https://www.youtube.com/embed/${youtubeId}?enablejsapi=1`)
        $("#ytId").attr("value", `${youtubeId}`);
        $("#userURLSubmit").removeAttr('data-balloon-visible')
        $("#collection-tip").attr('data-balloon-visible', true)
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
        var time = mins + "m" + ((secs < 10) ? "0" + secs : secs) + "s";
        return time;
    }

    // Runs the fetched Json Captions and converts them to CSV

    // const main = async () => {
    //     const
    //         defaultId = getYoutubeVideoID($('#userInputtedUrl').val()), /* Queen – Bohemian Rhapsody */
    //         json = YouTubeCaptionUtil
    //             .fetchCaptions(YouTubeCaptionUtil.videoId() || defaultId),
    //         csv = CsvUtil.fromJson(json);
    //     document.getElementById("captions").innerHTML = csv;
    //     console.log(csv);
    //
    // };
    //
    // // fetch Json caption data
    // class YouTubeCaptionUtil {
    //     static async fetchCaptions(videoId, options) {
    //         const
    //             opts = {...YouTubeCaptionUtil.defaultOptions, ...options},
    //             response = await fetch(YouTubeCaptionUtil.__requestUrl(videoId, opts)),
    //             json = await response.json();
    //         return YouTubeCaptionUtil.__parseTranscript(json);
    //     }
    //
    //     //prep user-inputted YT URL
    //     static videoId() {
    //         const video_id = window.location.search.split('v=')[1];
    //         if (video_id != null) {
    //             const ampersandPosition = video_id.indexOf('&');
    //             if (ampersandPosition != -1) {
    //                 return video_id.substring(0, ampersandPosition);
    //             }
    //         }
    //         return null;
    //     }
    //
    //
    //     static __requestUrl(videoId, {baseUrl, languageId}) {
    //         return `${baseUrl}?lang=${languageId}&v=${videoId}&fmt=json3`;
    //     }
    //
    //     static __parseTranscript({events}) {
    //         return events.map(({tStartMs, dDurationMs, segs: [{utf8}]}) => ({
    //             start: YouTubeCaptionUtil.__formatTime(tStartMs),
    //             dur: YouTubeCaptionUtil.__formatTime(dDurationMs),
    //             text: utf8
    //         }));
    //     }
    //
    //     static __formatTime(seconds) {
    //         const date = new Date(null);
    //         date.setSeconds(seconds);
    //         return date.toISOString().substr(11, 8);
    //     };
    // }
    //
    // YouTubeCaptionUtil.defaultOptions = {
    //     baseUrl: 'https://video.google.com/timedtext',
    //     languageId: 'en'
    // };


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
            function (res) {
                $("#user_id").val(res.filesUploaded[0].url);
                res.filesUploaded
            }
    }

    //
    // function getProjects() {
    //     var selectionList; // keep this local to the function - implicit globals are risky
    //
    //     $.getJSON("php/getProjects.php", function (data) {
    //         selectionList = "<form><select>";
    //         for (var i = 0; i < data.length; i++) {
    //             selectionList += "<option name='prjTitle'>" + data[i].ProjectTitle + "</option>";
    //         }
    //         selectionList += "</select></form>";
    //     }).complete(function() {
    //         $('#project-selection-menu').append(selectionList).removeClass('hidden');
    //         firstLoad = false;
    //     });
    // }


    //TODO drop down selections are entered into associated input fields and those fields are colored differently

    //TODO disable submit until all user inputs are entered

    //TODO change field class/ look of fields to guide users to fill in required info

    $("#userInputtedUrl").on('change', function () {
        $(this).addClass("textField").removeClass("notFilled");
        $("#collection").addClass("notFilled").removeClass("textField");
        $('#userURLSubmit').removeAttr('data-balloon-visible').removeAttr('data-balloon-pos');
        $('#collection-tip').attr('data-balloon-visible', true);
        $('#collection').removeAttr('disabled');
        $('#collection_drop').removeAttr('disabled');
    })


    $("#collection_drop").on('change', function () {
    //     if ($(this).children('option:selected').attr('value', this.value) === "") {
    //         $("#collection").attr($(this).children('option:selected').attr('value', true)).removeClass("notFilled").addClass("textField");
    //     }
    //     else
    //         $("#collection").attr("").removeClass("notFilled").addClass("textField");
    // });
        $('#collection').attr('value', this.value).removeClass("notFilled").addClass("textField");
    })

    $("#collection").on('change', function () {
        $('#collection').removeClass("notFilled").addClass("textField");
    })

    $("#collection, #collection_drop").on('change', function () {
        if ($(this).val() === "") {

        } else {
            $("#section").addClass("notFilled").removeClass("textField");
            $('#collection-tip').removeAttr('data-balloon-visible').removeAttr('data-balloon-pos');
            $('#section-tip').attr('data-balloon-visible', true);
            $('#section').removeAttr('disabled');
            $('#section_drop').removeAttr('disabled');
        }
    })

    $("#section_drop").on('change', function () {
        $('#section').attr('value', this.value).removeClass("notFilled").addClass("textField");
    })

    $("#section").on('change', function () {
        $('#section').removeClass("notFilled").addClass("textField");
    })

    $("#section, #section_drop").on('change', function () {
        if ($(this).val() === "") {

        } else {
            $("#note").addClass("notFilled").removeClass("textField");
            $('#section-tip').removeAttr('data-balloon-visible').removeAttr('data-balloon-pos');
            $('#note-tip').attr('data-balloon-visible', true);
            $('#tag-tip').attr('data-balloon-visible', true);
            $('#note').removeAttr('disabled');
        }
    })

    $("#note").on('change', function () {
        if ($(this).val() === "") {
            $(this).addClass("notFilled").removeClass("textField");
            $('#createFormSubmit').attr('disabled', true)
        } else {
            $(this).addClass("textField").removeClass("notFilled");
            $('#note-tip').removeAttr('data-balloon-visible').removeAttr('data-balloon-pos');
            $('#createFormSubmit').removeAttr('disabled')
        }
    })


    $("#tags_drop").on('change', function () {
        if ($(this).val() === "") {

        } else {
            $("#tag").addClass("textField");
            $('#tag-tip').removeAttr('data-balloon-visible').removeAttr('data-balloon-pos');
            $('#tag').attr('value', this.value);
            $('#collectionId').attr('value', this.value);

            //TODO Sections drop down menu create and show
            $.ajax({
                type: 'GET',
                url: '/section/sectionId/$(\'#collectionId\').val();',
                dataType: "json",
                data: {},
                success: function (data) {

                    console.log(data);
                    var section_drop = ('#section_drop');
                    $(section_drop).empty();
                    for (var i = 0; i < data.length; i++) {
                        $(section_drop).append('<option value="' + data[i].id + " : " + data[i].title + '">' + data[i].title + '</option>');
                    }
                }
            });

        }
    })

    // //TODO Collections drop down menu create and show

    $(document).ready(function () {
        $.ajax({
            type: 'GET',
            url: '/collections/userid/1',
            dataType: "json",
            data: {},
            success: function (data) {
                console.log(data);
                var collection_drop = ('#collection_drop');
                // $(collection_drop).empty();
                for (var i = 0; i < data.length; i++) {
                    $(collection_drop).append('<option value="' + data[i].id+ " : " + data[i].title + '">' + data[i].title + '</option>');
                    // $(collection_drop).append('<li><a class="dropdown-item" data-value="' + data[i].id + '">' + data[i].title + '</a></li>');
                }
            }
        });
    });


    // $('#collection_drop').on('change', function () {
    //     console.log(this.innerText);
    //     $('#collection').attr('value', this.value).removeClass("notFilled").addClass("textField");
    //     $('#section_drop').removeAttr('disabled')
    // })

    //TODO post method to send newly created collections/sections/and notes to the db

    $("#createFormSubmit").click(function (e) {
        $("#createFormSubmit").attr("disabled", true);
        e.preventDefault()
        $.ajax({
            url: '/collections/create',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(
                {
                    "collection": {
                        "user": {"id": "1"},
                        "title": $("#collection").val(),
                        "is_private": "true",
                        "description": "Enter your Collection Description here",
                        "image": "https://lakelandescaperoom.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg"
                    },
                    "section": {
                        "title": $("#section").val()
                    },
                    "note":
                        {
                            "note": $("#note").val(),
                            "video": {"video_url": $("#ytId").val()},
                            "time_stamp": $("#counter").html(),
                            "tag": $("#select-tags option:selected").attr("data-value")
                        }
                }), success: function () {
                $("#note").val('');
                $("#select-tags >option:eq(1)").attr('selected', true)
            }
        });
    });

    //pause on keydown and play on submit

    // get video element id
    var vidClip = document.getElementById("videoPlayer");
    console.log(vidClip);

// play video event
    function playVid() {
        // vidClip.play();
        vidClip.contentWindow.postMessage(JSON.stringify({event: "command", func: "playVideo"}), "*")
    }

// pause video event
    function pauseVid() {
        // vidClip.pause();
        vidClip.contentWindow.postMessage(JSON.stringify({event: "command", func: "pauseVideo"}), "*")
    }

    $('#createFormSubmit').click(function () {
        playVid();

        console.log("im clicked");
    })

    $('#note').keypress(function () {
        pauseVid();
        console.log("key pressed");
    })
// password and confirm password are the same
    let password = document.getElementById("reg_password")
        , confirm_password = document.getElementById("confirm_password");

    function validatePassword(){
        if(password.value !== confirm_password.value) {
            confirm_password.setCustomValidity("Passwords Don't Match");
        } else {
            confirm_password.setCustomValidity('');
        }
    }
    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;



        $("#reg_password").keyup(function(){
            check_pass();
        });





//password strength meter
    function check_pass()
    {
        var val=document.getElementById("reg_password").value;
        var meter=document.getElementById("meter");
        var no=0;
        if(val!="")
        {

            // If the password length is less than or equal to 6
            if (val.length <= 6) no = 1;

            // If the password length is greater than 6 and contain any lowercase alphabet or any number or any special character
            if (val.length > 6 && (val.match(/[a-z]/) || val.match(/\d+/) || val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))) no = 2;

            // If the password length is greater than 6 and contain alphabet,number,special character respectively
            if (val.length > 6 && ((val.match(/[a-z]/) && val.match(/\d+/)) || (val.match(/\d+/) && val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) || (val.match(/[a-z]/) && val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)))) no = 3;

            // If the password length is greater than 6 and must contain alphabets,numbers and special characters
            if (val.length > 6 && val.match(/[a-z]/) && val.match(/\d+/) && val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) no = 4;

            if(no===1)
            {
                $("#meter").animate({width:'50px'},150);
                meter.style.backgroundColor="red";
                document.getElementById("pass_type").innerHTML="Very Weak";
            }

            if(no===2)
            {
                $("#meter").animate({width:'100px'},150);
                meter.style.backgroundColor="#f82004";
                document.getElementById("pass_type").innerHTML="Weak";
            }

            if(no===3)
            {
                $("#meter").animate({width:'150px'},150);
                meter.style.backgroundColor="#fad203";
                document.getElementById("pass_type").innerHTML="Good";
            }


            if(no===4)
            {
                $("#meter").animate({width:'200px'},150);
                meter.style.backgroundColor="#089c2d";
                document.getElementById("pass_type").innerHTML="Strong";
<<<<<<< HEAD

            if (no === 4) {
                $("#meter").animate({width: '200px'}, 300);
                meter.style.backgroundColor = "#089c2d";
                document.getElementById("pass_type").innerHTML = "Strong";

            }

=======
>>>>>>> 008bda70eabfd27d0ca11b499b9525db2232f07c
        }

        else
        {
            meter.style.backgroundColor="white";
            document.getElementById("pass_type").innerHTML="";

        }


}






}
});

