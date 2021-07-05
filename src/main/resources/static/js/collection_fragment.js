$(document).ready(function () {
    //TODO Create the accordion from db info

    $(document).ready(function () {
        $.ajax({
            type: 'GET',
            url: '/collections/Id/12',
            dataType: "json",
            data: {},
            success:

                // function (data) {

                // let accordion = $('#accordion')
                // console.log(accordion);
                // $(accordion).empty();

                    function (data) {
                        console.log(data);
                        $.each(data, function () {

                            let html = "";
                            html += `<div class="accordion">`;
                            html += `<div class="card">`;
                            html += `<h5 class="mb-0">`;
                            html += `<button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">"${title}"</button>`;
                            html += `<div class="card-header" id="headingOne">`;
                            html += `</h5>`;
                            html += `</div>`;
                            html += `<div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">`;
                            html += `<div class="card-body">`;
                            html += `<div class="row cardText">`;
                            html += `<div class="col">`;
                            html += `<img class="col" id="moviePoster" src="${collection.description}" alt="media/missing movie poster.png">`;
                            html += `<div class="col-9">`;
                            html += `<p>${is_private}</p>`;
                            html += `<p>${image}</p>`;
                            html += `</div>`;
                            html += `</div>`;
                            html += `<table class="table">`;
                            html += `<thead>`;
                            html += `<tr>`;
                            html += `<th scope="col">Movie Title</th>`;
                            html += `<th scope="col">Movie Rating</th>`;
                            html += `<th scope="col">Release Year</th>`;
                            html += `<th scope="col">Genre</th>`;
                            html += `<th scope="col">Director</th>`;
                            html += `</tr>`;
                            html += `</thead>`;
                            html += `<tbody>`;
                            html += `<tr>`;
                            html += `<th scope="row">${movies.Title}</th>`;
                            html += `<td>${title}</td>`;
                            html += `<td>${description}</td>`;
                            html += `<td>${is_private}</td>`;
                            html += `<td>${image}</td>`;
                            html += `<td>${user}</td>`;
                            html += `</tr>`;
                            html += `</tbody>`;
                            html += `</table>`;
                            html += `<h2>Id #</h2>`;
                            html += `</div>`;
                            html += `</div>`;
                            html += `</div>`;

                            $("#accordion").append(html);
                        })





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
            }
        })
    })

        // let youtubeId = video.video_url;
        // let time_stamp = note.time_stamp;
        //
        // function loadNote() {
        //     window.location.replace('/create', $(document).ready(function () {
        //         $("#videoPlayer").attr("src", `https://www.youtube.com/embed/${youtubeId}?enablejsapi=1${time_stamp}`);
        //     }))
        // }
});