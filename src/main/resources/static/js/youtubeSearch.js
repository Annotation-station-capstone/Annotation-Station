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
                    let url = defaultThumbnails.url;
                    let title = snippet.title;
                    let vidId = video.id.videoId;
                    // console.log(vidId, snippet, video);
                    // console.log(title);
                    // console.log(defaultThumbnails);
                    // $('#thumbnails').append("<img src ='" + url + "'>");
                    $('#results').append("<p id='get" + [i] +"' value='" + vidId + "'><img src ='" + url +  "'> " + title + " </p>");
                    console.log($("#get0").attr('value'));
                    console.log($("#get1").attr('value'));
                    console.log($("#get2").attr('value'));
                    console.log($("#get3").attr('value'));
                    console.log($("#get4").attr('value'));
                }

            },
            type: "GET"
        });
    }

    let url = document.getElementById("userInputtedUrl");

    let submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', videoSearch);

    let enterSubmit = document.querySelector('#submit');
    enterSubmit.addEventListener('keypress', videoSearch);

    let enterSearch = document.querySelector('#search');
    enterSearch.addEventListener('keypress', videoSearch);

    let g0 = document.getElementById('get0');
    let g1 = document.getElementById('get1');
    let g2 = document.getElementById('get2');
    let g3 = document.getElementById('get3');
    let g4 = document.getElementById('get4');


    $(document).on("click", "p#get0", function(){
        let id0 = $("#get0").attr('value');
        let thisUrl0 = "https://www.youtube.com/watch?v=" + id0;
        url.setAttribute("value", thisUrl0)
        console.log(thisUrl0);
    })

    $(document).on("click", "p#get1", function(){
        let id1 = $("#get1").attr('value');
        let thisUrl1 = "https://www.youtube.com/watch?v=" + id1;

        url.setAttribute("value", thisUrl1)
        console.log(thisUrl1);
    })
    $(document).on("click", "p#get2", function(){
        let id2 = $("#get2").attr('value');
        let thisUrl2 = "https://www.youtube.com/watch?v=" + id2;

        url.setAttribute("value", thisUrl2)
        console.log(thisUrl2);
    })
    $(document).on("click", "p#get3", function(){
        let id3 = $("#get3").attr('value');
        let thisUrl3 = "https://www.youtube.com/watch?v=" + id3;
        url.setAttribute("value", thisUrl3)
        console.log(thisUrl3);
    })
    $(document).on("click", "p#get4", function(){
        let id4 = $("#get4").attr('value');
        let thisUrl4 = "https://www.youtube.com/watch?v=" + id4;
        url.setAttribute("value", thisUrl4)
        console.log(thisUrl4);
    })


});

