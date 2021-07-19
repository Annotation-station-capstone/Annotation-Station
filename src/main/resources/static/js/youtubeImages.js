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
                    let defaultThumbnails = thumbnails.high;
                    let url = defaultThumbnails.url;
                    let title = snippet.title;
                    let vidId = video.id.videoId;

                    $('#results').append("<div id='get"+ [i] +"' value='" + url + "' class='YTcard col'><p id='get" + [i] +"'  class='YTPic'><img class='tubeThumbs YTImage' alt='pic' id='img'" + [i]+ " src ='" + url +  "'></p></div>");
                    // $('#results').append("<p id='get" + [i] +"' value='" + url + "'><img id='img'" + [i]+ " src ='" + url +  "'> " + title + " </p>");

                    console.log(defaultThumbnails.url)
                }
            },
            type: "GET"
        });
    }

    let Url = document.getElementById("Url");

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
        Url.setAttribute("value", id0)
        console.log(id0);
        alert("Collection Image Updated, Please click Submit Edit to continue");
    })
    $(document).on("click", "img0", function(){
        let id0 = $("#get0").attr('value');
        Url.setAttribute("value", id0)
        console.log(id0);
        alert("Collection Image Updated, Please click Submit Edit to continue");
    })

    $(document).on("click", "p#get1", function(){
        let id1 = $("#get1").attr('value');
        Url.setAttribute("value", id1)
        console.log(id1);
        alert("Collection Image Updated, Please click Submit Edit to continue");
    })

    $(document).on("click", "img1", function(){
        let id1 = $("#get1").attr('value');
        Url.setAttribute("value", id1)
        console.log(id1);
        alert("Collection Image Updated, Please click Submit Edit to continue");
    })

    $(document).on("click", "p#get2", function(){
        let id2 = $("#get2").attr('value');
        Url.setAttribute("value",id2 )
        console.log(id2);
        alert("Collection Image Updated, Please click Submit Edit to continue");
    })

    $(document).on("click", "img2", function(){
        let id2 = $("#get2").attr('value');
        Url.setAttribute("value", id2 )
        console.log(id2);
        alert("Collection Image Updated, Please click Submit Edit to continue");
    })

    $(document).on("click", "p#get3", function(){
        let id3 = $("#get3").attr('value');
        Url.setAttribute("value",id3 )
        console.log(id3);
        alert("Collection Image Updated, Please click Submit Edit to continue");
    })

    $(document).on("click", "img3", function(){
        let id3 = $("#get3").attr('value');
        Url.setAttribute("value",id3 )
        console.log(id3);
        alert("Collection Image Updated, Please click Submit Edit to continue");
    })

    $(document).on("click", "p#get4", function(){
        let id4 = $("#get4").attr('value');
        Url.setAttribute("value", id4)
        console.log(id4);
        alert("Collection Image Updated, Please click Submit Edit to continue");
    })
    $(document).on("click", "img4", function(){
        let id4 = $("#get4").attr('value');
        Url.setAttribute("value", id4)
        console.log(id4);
        alert("Collection Image Updated, Please click Submit Edit to continue");
    })

    // $(document).on("click", "#toggle", function(){
    //
    //     if ($('#is_private').val === true){
    //         console.log("it's true")
    //         $('#is_private').val(false);
    //     } else {
    //         console.log("it's false")
    //         $('#is_private').val(true);
    //     }
    // })

    // $(document).on("click", "#toggle", function(){
    //
    //     if(document.getElementById('toggle').checked) {
    //         console.log('checked');
    //         $('#is_private').val(true);
    //     } else if (document.getElementById('toggle').checked){
    //         console.log('unchecked');
    //         $('#is_private').val(false);
    //     }
    // })

        $('#private').click(function() {
            if ($(this).prop("checked") === true) {
                console.log("Private is checked.");
                alert("This collection's visibility has been set to Private, Please click Submit Edit to continue")
                $('#is_private').val(true);
            }
        })

        $('#public').click(function() {
            if ($(this).prop("checked") === true) {
                console.log("Public is checked.");
                $('#is_private').val(false);
                alert("This collection's visibility has been set to Public, Please click Submit Edit to continue")
            }
        })


    let imageUrl = $('#Url').val();
    $('#DisplayImage').attr('src',imageUrl );


    // $( window ).load(function() {
    //     $('#hiddenUrl').val($('#Url').val())
    // });
    // let pastedUrl = $('#hiddenUrl').val();
    // let UrlVal = $('#Url').val()
    // if (UrlVal !== pastedUrl){
    //     alert("Image updated");
    // }


});


