$(document).ready(function () {
    $.ajax({
        type: 'GET',

        url: '/collections/Id/15',
        dataType: "json",
        data: {},
        success:

            function (data) {
                console.log(data);
<<<<<<< HEAD
                let testDiv = $('#testDiv');
                $(testDiv).append('<h1>' + data.id + ' ' + data.title + '</h1>');
                let collectionTitle = data.title;
                let collectionId = data.id;
                console.log(data.id);
=======
                console.log(data.title);
>>>>>>> 008bda70eabfd27d0ca11b499b9525db2232f07c
                console.log(data.description);
                console.log(data.image);
                console.log(data.is_private);
                console.log(data.id);

                    var collection_data = ('#collection-data');
                    var collection_title = ('#title');
                    var section_data = ('#section-data');

                        $(collection_title).append(data.title);
                        $(collection_data).append("<li> " + data.description + "</li>");
                        document.getElementById("collection_image").setAttribute("src", data.image);
                        $(collection_data).append(data.is_private);

                var sections = data.sections;

                for(var i = 0; i < sections.length; i++) {
                    console.log(sections[i].videos);
                    for(var j = 0; j < sections[i].videos.length; j++) {
                        var videoData = sections[i].videos[j];

                        console.log(videoData.video_url);
                            $(section_data).append("<li> " + videoData.video_url + "</li>");

                        console.log(videoData.notes);
<<<<<<< HEAD
                        var noteData = videoData.notes;
                        let videoUrl = videoData.video_url;
                        $(testDiv).append('<br><h3>' + videoData.video_url + '</h3>')
                        //console.log(sections[i].videos[j].notes);
=======

                        var noteData = videoData.notes;
>>>>>>> 008bda70eabfd27d0ca11b499b9525db2232f07c

                        for(var l = 0; l < noteData.length; l++) {
                        console.log(noteData[l]);

                            var singleNote = noteData[l].note;
                            var time = noteData[l].time_stamp;
                            console.log(time);
                                $(section_data).append("<li> " + time + "</li>");
                            console.log(singleNote);
<<<<<<< HEAD
                            $(testDiv).append('<br><h3>'+ collectionId + ' ' + collectionTitle + ' ' + time + ' ' + singleNote + ' ' + singleNote + ' ' + videoUrl + '</h3>')
=======
                                $(section_data).append("<li> " + singleNote + "</li>");

>>>>>>> 008bda70eabfd27d0ca11b499b9525db2232f07c
                        }


                    }
                }
                var comments = data.comments;
                console.log(comments);
                for(var c = 0; c < comments.length; c++) {
                    console.log(comments[c]);
                }
            }
    })
})

