//AIzaSyB3EYKIF8__Mq5SXkMKzGlC6WK8cB6228c
$(document).ready(function() {
    function videoSearch() {
        let search = document.getElementById("search").value;
        console.log(search);
        const key = "AIzaSyCBGdtk0uvKjYzDqYe87wCn9Xcw5NNWXdI";
        const maxResults = 5;
        $.ajax({
            url:'https://www.googleapis.com/youtube/v3/search?key=' + key + '&part=snippet&q=' + search,
            dataType: "json",
            success: function (data) {
                console.log(data);
                var items = data.items;
                console.log(items);
                for(let i = 0; i < items.length; i++) {
                    let video = items[i];
                    let snippet = video.snippet;
                    let thumbnails = snippet.thumbnails;
                    let defaultThumbnails = thumbnails.default;
                    let title = snippet.title;
                    let vidId = video.id.videoId
                    console.log(vidId, snippet, video);
                    console.log(title);
                    console.log(defaultThumbnails);
                }
            },
            type: "GET"
        });
    }
    var submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', videoSearch);
});