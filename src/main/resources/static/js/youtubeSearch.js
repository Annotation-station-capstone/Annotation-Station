//AIzaSyB3EYKIF8__Mq5SXkMKzGlC6WK8cB6228c
$(document).ready(function() {
    function videoSearch() {
        let search = document.getElementById("search").value;
        console.log(search);
        const key = "AIzaSyB3EYKIF8__Mq5SXkMKzGlC6WK8cB6228c";
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
                    $('#results').append("<div id='YTcard"+ [i] +"' class='YTcard col'><p id='get" + [i] +"' value='" + vidId + "' class='YTtitle'><img class='tubeThumbs YTImage' id='img'" + [i]+ " src ='" + url +  "'> " + title + " </p></div>");
                    // $('#results').append("<div class='col-lg-3 col-md-3 mb-3 collectionCards card d-flex align-items-stretch shadow-4 rounded-5'><div class='card shadow-4 rounded-5'><div class='card-body shadow-4 rounded-5 Ctop-card'><img class='img-fluid shadow-4 rounded-5 CImage' alt='img' id='img'" + [i]+ " src ='" + url +  "'><h6 class='card-text YTtitle' > " + title + " </h6><div class='mask'style='background-color: rgba(251, 251, 251, 0.15);'></div></div></div></div>");
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

    $('#submitYt').on('click',function(e) {
        $("#results").html('');
            videoSearch();
    });

    $('#search').on('keypress',function(e) {
        $("#results").html('');
        if(e.which == 13) {
            videoSearch();
        }
    });

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
    $(document).on("click", "img0", function(){
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

    $(document).on("click", "img1", function(){
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

    $(document).on("click", "img2", function(){
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

    $(document).on("click", "img3", function(){
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
    $(document).on("click", "img4", function(){
        let id4 = $("#get4").attr('value');
        let thisUrl4 = "https://www.youtube.com/watch?v=" + id4;
        url.setAttribute("value", thisUrl4)
        console.log(thisUrl4);
    })




});


