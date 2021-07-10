// //AIzaSyB3EYKIF8__Mq5SXkMKzGlC6WK8cB6228c
// $(document).ready(function() {
//     function videoSearch() {
//         let search = document.getElementById("search").value;
//         console.log(search);
//         const key = "AIzaSyCBGdtk0uvKjYzDqYe87wCn9Xcw5NNWXdI";
//         const maxResults = 5;
//         $.ajax({
//             url:'https://www.googleapis.com/youtube/v3/search?key=' + key + '&part=snippet&q=' + search,
//             dataType: "json",
//             success: function (data) {
//                 console.log(data);
//                 var items = data.items;
//                 console.log(items);
//                 for(let i = 0; i < items.length; i++) {
//                     let video = items[i];
//                     let snippet = video.snippet;
//                     let thumbnails = snippet.thumbnails;
//                     let defaultThumbnails = thumbnails.default;
//                     let url = defaultThumbnails.url;
//                     let title = snippet.title;
//                     let vidId = video.id.videoId;
//                     // console.log(vidId, snippet, video);
//                     // console.log(title);
//                     // console.log(defaultThumbnails);
//                     // $('#thumbnails').append("<img src ='" + url + "'>");
//                     $('#results').append("<p class='getVid' value='" + vidId + "'><img src ='" + url +  "'> " + title + " </p>");
//
//                 }
//
//             },
//             type: "GET"
//         });
//     }
//
//     let results = $('#results').val();

//     var submitButton = document.querySelector('#submit');
//     submitButton.addEventListener('click', videoSearch);
//
//
//     var videoId = $(".getVid").attr();
//
//     $('.getvid').click(function() {
//         videoId;
//     });
//
// });

