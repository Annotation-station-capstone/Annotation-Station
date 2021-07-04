$(document).ready(function () {
    //TODO Create the accordion from db info

    $(document).ready(function () {
        $.ajax({
            type: 'GET',
            url: '/collections/Id/{id}',
            dataType: "json",
            data: {},
            success: function (data) {
                console.log(data);
                let accordion = $("#accordion")
                $(accordion).empty();
                for (var i = 0; i < data.length; i++) {
                    $(accordion).append('<button class="accordion">Section 1:'+ section.title +'</button>'
                    + '<div class="panel">'

                    + '<p class="accordion"><a href="javascript: loadNote()">'+ note.title +'</a></p>'
                    + '<p>Tag:'+ note.tag +'</p>'
                    + '</div>')
                }
            }
        })
    })

        let youtubeId = video.video_url;
        let time_stamp = note.time_stamp;

        function loadNote() {
            window.location.replace('/create', $(document).ready(function () {
                $("#videoPlayer").attr("src", `https://www.youtube.com/embed/${youtubeId}?enablejsapi=1${time_stamp}`);
            }))
        }
});