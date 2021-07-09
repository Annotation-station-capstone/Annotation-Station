$(document).ready(function () {

    const API_KEY = "AIzaSyCBGdtk0uvKjYzDqYe87wCn9Xcw5NNWXdI";

    $("search-form").submit(function (event){
        event.preventDefault();

        var searchResult = $("#searchResult").val();

        videoSearch(API_KEY, searchResult, 5)
    })

    function videoSearch(API_KEY, searchResult, maxResults) {

        $.get('https://www.googleapis.com/youtube/v3/search?API_KEY=' + API_KEY + '&type=video&part=snippet&maxResults=' + maxResults + '&q=' + searchResult, function (data) {

                    console.log(data);

                })
    };




    });