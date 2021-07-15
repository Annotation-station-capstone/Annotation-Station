$(document).ready(function () {

    let currentUser = $('#currentUser').text();
    console.log(currentUser);
    $.ajax({
        type: 'GET',
        url: `/collections/userid/${currentUser}`,
        dataType: "json",
        data: {},
        success:
            function (data) {
                let collection_user1 = (data[0].user.username).toUpperCase();
                let userTitle = $('#userTitle')

                $(userTitle).append("<div class='p-4 m-4 shadow-4 rounded-3 jumbotron text-center' style='background-color: lightgrey;'><h2 class='Cbanners'>WELCOME "+  collection_user1 +",  HERE ARE YOUR PERSONAL COLLECTIONS </h2></div>")

                for (let i = 0; i < data.length; i++) {
                    // console.log(data[i]);
                    // console.log(data[i].id);
                    // console.log(data[i].is_private);
                    // console.log(data[i].image);
                    // console.log(data[i].title);
                    // console.log(data[i].description);
                    // console.log(data[i].user.username);
                    let collection_id = (data[i].id);
                    let collection_image = (data[i].image);
                    let collection_title = (data[i].title);
                    let collection_description = (data[i].description);
                    let collection_user = (data[i].user.username);
                    let collection_user_id = (data[i].user.id);
                    let userId = $('#userId.val');
                    let sections = data[i].sections;
                    let cardContainer = $('#cardContainerProfile');
                    let buttonContainer = $('#buttonContainerProfile');




                    let image = `<img src="${collection_image}" class='img-fluid shadow-4 rounded-5 CImage' alt='img'><a id='${collection_id}' href='/collections/single?collection_id=${collection_id}'><div class='mask' style='background-color: rgba(251, 251, 251, 0.15);'></div></a>`;

                    let cardBody = `<div class='card-body shadow-4 rounded-5 Ctop-card'><h1 class='card-text CTitle'> ${collection_title} </h1><p class='card-text CDescrip' > ${collection_description}</p><p class='card-text CUser'>Made by: ${collection_user}</p><p style="display: none">${collection_id}</p><div></div></div>`;

                    let sectionsHtml = '';
                    for (var j = 0; j < sections.length; j++) {
                        console.log(sections[j].title);
                        sectionsHtml += `${sections[j].title},`
                    }

                    console.log(collection_id);
                    $(cardContainer).append("<div class='col-lg-3 col-md-3 mb-3 collectionCards card d-flex align-items-stretch shadow-4 rounded-5'><div class='card shadow-4 rounded-5'>" + image + cardBody + '<p class=\'card-text CSections\'> Sections: ' + sectionsHtml + '</p>' + "</div></div>");
                    $(buttonContainer).append("<div class='flex-grow-1'><button class='btn btn-select'  id='" + [i] + "' data-user='" + collection_user_id + "' value='" + collection_id + "'>  <br>Edit/Delete</button></div>");
                    console.log([i]);
                    $(`#${[i]}`).on('click', function(){
                        console.log('hello');
                        $('#collectionIdField').val(this.value);
                        $('#colIdEdit').val(this.value);
                        $('#colIdDelete').val(this.value);

                        // $('#userIdField').val(this.data-id);
                    });

                }

            }
    })

})

