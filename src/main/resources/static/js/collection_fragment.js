$(document).ready(function () {
    $.ajax({
        type: 'GET',

        url: '/collections/Id/15',
        dataType: "json",
        data: {},
        success:

            function (data) {
                console.log(data);
                let testDiv = $('#testDiv');
                $(testDiv).append('<h1>' + data.id + ' ' + data.title + '</h1>');
                let collectionTitle = data.title;
                let collectionId = data.id;
                console.log(data.id);
                console.log(data.description);
                console.log(data.image);
                console.log(data.is_private);
                var sections = data.sections;

                for(var i = 0; i < sections.length; i++) {
                    console.log(sections[i].videos);
                    for(var j = 0; j < sections[i].videos.length; j++) {
                        var videoData = sections[i].videos[j];
                        console.log(videoData.video_url);
                        console.log(videoData.notes);
                        var noteData = videoData.notes;
                        let videoUrl = videoData.video_url;
                        $(testDiv).append('<br><h3>' + videoData.video_url + '</h3>')
                        //console.log(sections[i].videos[j].notes);

                        for(var l = 0; l < noteData.length; l++) {
                            console.log(noteData[l]);


                            var singleNote = noteData[l].note;
                            var time = noteData[l].time_stamp;
                            console.log(time);
                            console.log(singleNote);
                            $(testDiv).append('<br><h3>'+ collectionId + ' ' + collectionTitle + ' ' + time + ' ' + singleNote + ' ' + singleNote + ' ' + videoUrl + '</h3>')
                        }


                    }


                }

            }
        // for(var i = 0; i < data.sections.length; i++) {
        //         console.log(data.sections[i].title);
        //     console.log(data.sections[i].id);
        //     console.log(data.sections[i].videos);
        //
        //     var videoData = data.sections[i];
        //     for(var i = 0; i < videoData.length; i++) {
        //         console.log(videoData[i].videos.video_url);
        //         // console.log(videoData[i].notes);
        //         // console.log(videoData[i].id);
        //
        //     }
        // }
        // var videoData = data.sections[1].videos;
        //
        // for(var i = 0; i < videoData.length; i++) {
        //     console.log(videoData[i].video_url);
        //     console.log(videoData[i].notes);
        //
        // }

        //}


    })
})

