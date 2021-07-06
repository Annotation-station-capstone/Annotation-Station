$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: '/collections/Id/15',
        dataType: "json",
        data: {},
        success:
            function (data) {
                console.log(data);
                console.log(data.id);
                console.log(data.description);
                console.log(data.image);
                console.log(data.is_private);


                for(var i = 0; i < data.sections.length; i++) {
                    console.log(data.sections[i].title);
                    console.log(data.sections[i].id);
                    console.log(data.sections[i].videos);
                    var videoData = data.sections[i].videos;


                    for(var i = 0; i < data.sections.videos.length; i++) {
                        console.log(videoData[i].video_url);
                        // console.log(videoData[i].notes);
                        // console.log(videoData[i].id);
                    };
                }
                // var videoData = data.sections[1].videos;
                //
                // for(var i = 0; i < videoData.length; i++) {
                //     console.log(videoData[i].video_url);
                //     console.log(videoData[i].notes);
                //
                // }
            }
    })
})




























// $(document).ready(function () {
//     //TODO Create the accordion from db info
//
//     $(document).ready(function () {
//         $.ajax({
//             type: 'GET',
//             url: '/collections/Id/15',
//             dataType: "json",
//             data: {},
//             success:
//                 function (data) {
//                     console.log(data);
//                     $.each(data, function () {
//                         for (var i = 0; i < data.length; i++) {
//                             console.log(data.sections[i].title);
//                         }
//                         // $.each(data, function (data) {
//                         //     console.log(data.videos);
//
//                     })
//                 }
//         })
//     })
// })

                            // let html = "";
                            // html += `<div class="accordion">`;
                            // html += `<div class="card">`;
                            // html += `<h5 class="mb-0">`;
                            // html += `<button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">"${data.title}"</button>`;
                            // html += `<div class="card-header" id="headingOne">`;
                            // html += `</h5>`;
                            // html += `</div>`;
                            // html += `<div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">`;
                            // html += `<div class="card-body">`;
                            // html += `<div class="row cardText">`;
                            // html += `<div class="col">`;
                            // html += `<div class="col-9">`;
                            // html += `<p>${data.is_private}</p>`;
                            // html += `<p>${data.image}</p>`;
                            // html += `</div>`;
                            // html += `</div>`;
                            // html += `<table class="table">`;
                            // html += `<thead>`;
                            // html += `<tr>`;
                            // html += `<th scope="col">Movie Title</th>`;
                            // html += `<th scope="col">Movie Rating</th>`;
                            // html += `<th scope="col">Release Year</th>`;
                            // html += `<th scope="col">Genre</th>`;
                            // html += `<th scope="col">Director</th>`;
                            // html += `</tr>`;
                            // html += `</thead>`;
                            // html += `<tbody>`;
                            // html += `<tr>`;
                            // html += `<th scope="row">${data.title}</th>`;
                            // html += `<td>${data.title}</td>`;
                            // html += `<td>${data.description}</td>`;
                            // html += `<td>${data.is_private}</td>`;
                            // html += `<td>${data.image}</td>`;
                            // html += `<td>${data.user}</td>`;
                            // html += `</tr>`;
                            // html += `</tbody>`;
                            // html += `</table>`;
                            // html += `<h2>Id #</h2>`;
                            // html += `</div>`;
                            // html += `</div>`;
                            // html += `</div>`;
                            //
                            // $("#accordion").append(html);
//                         })
//
//             }
//         })
//     })
//
//
// });




// for (var i = 0; i < data.length; i++) {
// var html = '';
// data.forEach(function(ad) {
//     html += '<div>';
//     html += '<h1>' + title + '</h1>';
//     html += '<p>' + description + '</p>';
//     html += '<p>this is ' + image + '</p>';
//     html += '</div>';
// });

// + '<p class="accordion"><a href="<!--javascript: loadNote()-->">'+ note.title +'</a></p>'
// + '<p>Tag:'+ note.tag +'</p>'

// }

//             url: '/collections/Id/{id}',
//             dataType: "json",
//             data: {},
//             success: function (data) {
//                 console.log(data);
//                 let accordion = $("#accordion")
//                 $(accordion).empty();
//                 for (var i = 0; i < data.length; i++) {
//                     $(accordion).append('<button class="accordion">Section 1:'+ section.title +'</button>'
//                     + '<div class="panel">'

//                     + '<p class="accordion"><a href="javascript: loadNote()">'+ note.title +'</a></p>'
//                     + '<p>Tag:'+ note.tag +'</p>'
//                     + '</div>')
//                 }


// let youtubeId = video.video_url;
// let time_stamp = note.time_stamp;
//
// function loadNote() {
//     window.location.replace('/create', $(document).ready(function () {
//         $("#videoPlayer").attr("src", `https://www.youtube.com/embed/${youtubeId}?enablejsapi=1${time_stamp}`);
//     }))
// }