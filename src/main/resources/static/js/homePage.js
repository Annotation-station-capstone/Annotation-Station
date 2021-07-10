$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: '/collections/userid/1',
        dataType: "json",
        data: {},
        success:
            function (data) {

                for (let i = 0; i < data.length; i++) {
                    console.log(data[i]);
                    console.log(data[i].id);
                    console.log(data[i].is_private);
                    console.log(data[i].image);
                    console.log(data[i].title);
                    console.log(data[i].description);
                    console.log(data[i].user.username);
                    let collection_id = (data[i].id);
                    let collection_image = (data[i].image);
                    let collection_title = (data[i].title);
                    let collection_description = (data[i].description);
                    let collection_user = (data[i].user.username);

                    let sections = data[i].sections;
                    let cardContainer = $('#cardContainer');

                    let image = `<img src="${collection_image}" class='img-fluid' alt='img'><a id='${collection_id}' href='/collections/single?collection_id=${collection_id}'><div class='mask' style='background-color: rgba(251, 251, 251, 0.15);'></div></a>`;

                    let cardBody = `<div class='card-body '><h1 class='card-title'> ${collection_title} </h1><p class='card-text' > ${collection_description}</p><p>${collection_user}</p><p style="visibility: hidden">${collection_id}</p><div></div></div>`;

                    let sectionsHtml = '';
                    for (var j = 0; j < sections.length; j++) {
                        console.log(sections[j].title);
                        sectionsHtml += `${sections[j].title},`
                    }
                    $(cardContainer).append("<div class='col-lg-3 col-md-3 mb-3 collectionCards card'><div class='card'>" + image + cardBody + '<p> Sections in this Collection: ' + sectionsHtml + '</p>' + "</div></div>");
                }
            }

    })

})