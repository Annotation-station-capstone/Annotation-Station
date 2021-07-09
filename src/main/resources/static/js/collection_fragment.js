

$(document).ready(function () {
    let videoUrl = '';
    let timeStamp= '';
    let singleNoteId= '';


    $.ajax({
        type: 'GET',
        url: '/collections/Id/1',
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
                let collection_title = data.title;
                let collection_description = data.description;
                let collection_image = data.image;
                let collection_is_private = data.is_private;
                let collection_id= data.id;
                let collection_data = $('#section-data');
                let sections = data.sections;
                for(let i = 0; i < sections.length; i++) {
                    let accordian_item = `
                    <div class="accordion-item w-100">
                    `;
                    console.log(sections[i].title);
                    console.log(sections[i].id);
                    console.log(sections[i].videos);
                    let section_title =  sections[i].title;
                    let section_id = sections[i].id;
                    let section_video = sections[i].videos;

                    let body = `<h1 class="accordion-header" id="heading${i}"><a class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapseOne">${section_title}</a></h1><div id="collapse${i}" class="accordion-collapse collapse w-100" aria-labelledby="heading${i}"data-bs-parent="#accordionExample"><div class="accordion-body">`;


                    $('.top_accord').attr('id','section'+i);
                    $('.anchor-accord').attr('data-bs-target', '#collapse'+i).attr('aria-controls', '#collapse'+i);
                    $('.bottom_accord').attr('aria-labelledby', 'section'+i);

                    for(let j = 0; j < sections[i].videos.length; j++) {
                        let videoData = sections[i].videos[j];
                        console.log(videoData.video_url);
                        console.log(videoData.notes);
                        videoUrl += videoData.video_url;



                        let noteData = videoData.notes;
                        for(var l = 0; l < noteData.length; l++) {
                            console.log(noteData[l]);
                            console.log(noteData[l].time_stamp);
                            console.log(noteData[l].note);
                            let singleNote = noteData[l].note;
                            singleNoteId += noteData[l].id;
                            timeStamp += noteData[l].time_stamp;

                            let note_tag = `<strong><a id="${singleNoteId}" onclick="location.href='http://localhost:8080/create'">${singleNote}: </a></strong><p>${timeStamp}</p><p>Tag</p>`;

                            body += note_tag;
                        }
                    }
                    accordian_item += body + '</div></div></div>'
                    $(collection_data).append(accordian_item);
                }


                    $(`#${singleNoteId}`).on('click', async function() {
                            await setupPlayer();
                            $("#videoPlayer").attr("src", `https://www.youtube.com/embed/${videoUrl}?enablejsapi=1${timeStamp}`);
                        })

                }

                // var comments = data.comments;
                // console.log(comments);
                // for(var c = 0; c < comments.length; c++) {
                //     console.log(comments[c]);
                //     $(comment_data).append("<li> " + comments[c].comment + "</li>");
                // }
            })
    })







// function loadNote() {
//     window.location.replace('/create', $(document).ready(function () {
//         $("#videoPlayer").attr("src", `https://www.youtube.com/embed/${youtubeId}?enablejsapi=1${time_stamp}`);
//     }))
// }
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
// <button src=" (javascript: loadNote() )"
//
//function(){
//$('#button').click(function,{
// let Id =$('#collectionId');
// })
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
