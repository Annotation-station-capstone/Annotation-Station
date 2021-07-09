//AIzaSyB3EYKIF8__Mq5SXkMKzGlC6WK8cB6228c
$(document).ready(function() {


    function videoSearch() {
        let search = document.getElementById("search").value;
        console.log(search);
        const key = "AIzaSyCBGdtk0uvKjYzDqYe87wCn9Xcw5NNWXdI";
        const maxResults = 5;

        $.ajax({
            url:'https://www.googleapis.com/youtube/v3/search?key=' + key +'&q=' + search,
            dataType: "json",
            success: function (data) {
                console.log(data);
                var items = data.items;
                console.log(items);
                for(let i = 0; i < items; i++) {
                    let video = items[i].id.videoId;
                    console.log(video);
                }


                },
            type: "GET"
        });
    }
    var submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', videoSearch);


});