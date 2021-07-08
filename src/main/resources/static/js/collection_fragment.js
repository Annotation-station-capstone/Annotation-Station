$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: '/collections/Id/15',
        dataType: "json",
        data: {},
        success:
            function (data) {
                console.log(data);
                console.log(data.title);
                console.log(data.description);
                console.log(data.image);
                console.log(data.is_private);
                console.log(data.id);
                var collection_data = ('#collection-data');
                var collection_title = ('#title');
                var section_data = ('#section-data');
                var comment_data = ('#comment-data')
                $(collection_title).append(data.title);
                $(collection_data).append("<li> " + data.description + "</li>");
                document.getElementById("collection_image").setAttribute("src", data.image);
                $(collection_data).append(data.is_private);
                var sections = data.sections;
                for(var i = 0; i < sections.length; i++) {
                    console.log(sections[i].videos);
                    $(section_data).append("<li> " + sections[i].title + "</li>");
                    for(var j = 0; j < sections[i].videos.length; j++) {
                        var videoData = sections[i].videos[j];
                        console.log(videoData.video_url);
                        $(section_data).append("<li> " + videoData.video_url + "</li>");
                        console.log(videoData.notes);
                        var noteData = videoData.notes;
                        for(var l = 0; l < noteData.length; l++) {
                            console.log(noteData[l]);
                            var singleNote = noteData[l].note;
                            var time = noteData[l].time_stamp;
                            console.log(time);
                            $(section_data).append("<li> " + time + "</li>");
                            console.log(singleNote);
                            $(section_data).append("<li> " + singleNote + "</li>");
                        }
                    }
                }
                var comments = data.comments;
                console.log(comments);
                for(var c = 0; c < comments.length; c++) {
                    console.log(comments[c]);
                    $(comment_data).append("<li> " + comments[c].comment + "</li>");
                }
            }
    })
})


// $(document).ready(function () {
//     $.ajax({
//         type: 'GET',
//
//         url: '/collections/Id/15',
//         dataType: "json",
//         data: {},
//         success:
//
//             function (data) {
//                 console.log(data);
//
//                 let testDiv = $('#testDiv');
//                 $(testDiv).append('<h1>' + data.id + ' ' + data.title + '</h1>');
//                 let collectionTitle = data.title;
//                 let collectionId = data.id;
//                 console.log(data.id);
//
//                 console.log(data.title);
//
//                 console.log(data.description);
//                 console.log(data.image);
//                 console.log(data.is_private);
//                 console.log(data.id);
//
//                     var collection_data = ('#collection-data');
//                     var collection_title = ('#title');
//                     var section_data = ('#section-data');
//
//                         $(collection_title).append(data.title);
//                         $(collection_data).append("<h3> " + data.description + "</h3>");
//                         // document.getElementById("collection_image").setAttribute("src", data.image);
//                         $(collection_data).append(data.is_private);
//
//                 var sections = data.sections;
//
//                 for(var i = 0; i < sections.length; i++) {
//                     console.log(sections[i].videos);
//                     for(var j = 0; j < sections[i].videos.length; j++) {
//                         var videoData = sections[i].videos[j];
//
//                         console.log(videoData.video_url);
//                             $(section_data).append("<h3> " + videoData.video_url + "</h3>");
//
//                         console.log(videoData.notes);
//
//                         var noteData = videoData.notes;
//                         let videoUrl = videoData.video_url;
//                         $(testDiv).append('<br><h3>' + videoData.video_url + '</h3>')
//                         //console.log(sections[i].videos[j].notes);
//
//
//
//
//
//                         for(var l = 0; l < noteData.length; l++) {
//                         console.log(noteData[l]);
//
//                             var singleNote = noteData[l].note;
//                             var time = noteData[l].time_stamp;
//                             console.log(time);
//                                 $(section_data).append("<li> " + time + "</li>");
//                             console.log(singleNote);
//
//                             // $(testDiv).append('<br><h3>'+ collectionId + ' ' + collectionTitle + ' ' + time + ' ' + singleNote + ' ' + singleNote + ' ' + videoUrl + '</h3>')
//
//                                 $(section_data).append("<li> " + singleNote + "</li>");
//
//
//                         }
//
//
//                     }
//                 }
//                 var comments = data.comments;
//                 console.log(comments);
//                 for(var c = 0; c < comments.length; c++) {
//                     console.log(comments[c]);
//                 }
//             }
//     })
// })
//
