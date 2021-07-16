$(document).ready(function () {
    let currentUser = $('#currentUser').text();
    console.log(currentUser);
    const urlSearchParam = new URLSearchParams(window.location.search);
    let entries = Object.fromEntries(urlSearchParam.entries());
    console.log(entries.collection_id);


    let videoId = '';
    let timeStamp = '';
    let singleNoteId = '';
    let counter= 1;

    $.ajax({
        type: 'GET',

        url: `/collections/Id/${entries.collection_id}`,

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
                let collection_id = data.id;
                let collection_data = $('#section-data');
                let deleteButton = $('#delete');
                let sections = data.sections;
                $('#collectionTitle').append(collection_title);
                $('#collectionTitle2').append(collection_title);
                $('#collectionImage').attr('src', collection_image);
                $('#collectionDescription').append('<br><br><br> Description: ' + collection_description)

                for (let i = 0; i < sections.length; i++) {
                    let accordian_item = `

                    <div class="accordion-item w-100 row" xmlns="http://www.w3.org/1999/html"><div class="dropdown col-4 text-*-center"></div>

                    `;
                    let delete_form = '    <form class="dropdown-menu dropdown-menu-dark" action="/collections/delete" method="post" aria-labelledby="dropdownMenuButton2">\n' +
                        '\n' +
                        '     <input type="hidden" name="section_id" value="${section_id}">\n' +
                        '     <input class="dropdown-item btn btn-danger btn-sm" data-id="" type="submit" value="Delete">Delete Section</input>\n' +
                        '   </form>';
                    // console.log(sections[i].title);
                    // console.log(sections[i].id);
                    console.log(sections[i].videos);
                    let section_title = sections[i].title;
                    let section_id = sections[i].id;
                    let section_video = sections[i].videos;

                    let body = `<h1 class="accordion-header col-12" id="heading${i}"><a class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapseOne">Section ${i+1}: ${section_title}</a></h1><div id="collapse${i}" class="accordion-collapse collapse w-100" aria-labelledby="heading${i}"data-bs-parent="#accordionExample"><div class="accordion-body">`;


                    $('.top_accord').attr('id', 'section' + i);
                    $('.anchor-accord').attr('data-bs-target', '#collapse' + i).attr('aria-controls', '#collapse' + i);
                    $('.bottom_accord').attr('aria-labelledby', 'section' + i);

                    for (let j = 0; j < sections[i].videos.length; j++) {
                        let videoData = sections[i].videos[j];
                        console.log(videoData.video_url);
                        console.log(videoData.notes);
                        videoId = videoData.video_url;


                        let noteData = videoData.notes;
                        for (var l = 0; l < noteData.length; l++) {
                            console.log(noteData[l]);
                            console.log(noteData[l].time_stamp);
                            console.log(noteData[l].note);
                            let singleNote = noteData[l].note;
                            let singleNoteId = noteData[l].id;
                            let timeStamp = noteData[l].time_stamp;

                            // /create?url=https://www.youtube.com/embed/${videoUrl}?enablejsapi=1&start=${timeStamp}"
                            let note_tag = `<div class="row"><div class="col-4>"<strong><a id="${singleNoteId}" href="/create?url=${videoId}&timeStamp=${timeStamp}">${counter++})${singleNote} </a></strong></div>`




                            //<div class="btn-group col-4">
                        //  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        //   Small button
                        //  </button>
                        //  <ul class="dropdown-menu">
                        // <li><a class="dropdown-item active" data-id="" href="#">Delete Section</a></li>
                        //   <li><a class="dropdown-item" data-id="" href="#">Edit Section</a></li>
                        //  </ul>
                        // </div></div>

                            body += note_tag;
                        }
                    }
                    accordian_item += body + '</div></div></div>'
                    collection_data.append(accordian_item);
                }

            }

        // var comments = data.comments;
        // console.log(comments);
        // for(var c = 0; c < comments.length; c++) {
        //     console.log(comments[c]);
        //     $(comment_data).append("<li> " + comments[c].comment + "</li>");
        // }

    })
})


// $(`#${singleNoteId}`).on('click',  function() {
//     // await setupPlayer();
//     $("#userInputtedUrl").prop("value", `https://www.youtube.com/embed/${videoUrl}?enablejsapi=1${timeStamp}`);
// })


// let query = window.location.search.substring(1);
//
//
//
//
//
//



//</form action="/products/delete" method="post">
//                         <input type="hidden" name="product_id" value="${product.id}">
//                         <input class="btn btn-danger btn-sm" type="submit" value="Delete">
//                     </form>

// let paramList = query.split('&');
//
// for (let i=0; i < paramList.length; i++)
// {
//     let param = paramList[i].split('=');
//
//     if(param[0] === 'url')
//     {
//         // //change this to ID of target element
//         // let element = document.getElementById('userInputtedUrl');
//         //
//         // if (element)
//         // {
//         $('#userInputtedUrl').attr('value', param[0])
//             break
//     // }
//     }
// }


// $(`#${singleNoteId}`).on('click', async function() {
//         await setupPlayer();
//         $("#videoPlayer").attr("src", `https://www.youtube.com/embed/${videoUrl}?enablejsapi=1${timeStamp}`);
//     })

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
