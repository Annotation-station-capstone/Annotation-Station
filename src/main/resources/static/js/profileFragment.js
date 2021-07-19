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
                let collection_user1 = (data[0].user.username);
                let userTitle = $('#userTitle')

                $(userTitle).append("<div class='p-4 m-4 shadow-4 rounded-3 jumbotron text-center' id='profileHeader' " +
                    "style='background-color: white;" +
                    "font-family: \"American Typewriter\", serif;" +
                    " color: black;'>" +
                    "<h2>Welcome "+  collection_user1 +",  here are your personal collections </h2></div>")
                $('#bannerUser').append(collection_user1);



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
                    console.log(collection_user);
                    $('#bannerUser1').append(collection_user);


                    let image = `<img src="${collection_image}" class='img-fluid shadow-4 rounded-5 CImage' alt='img'><a id='${collection_id}' href='/collections/single?collection_id=${collection_id}'><div class='mask' style='background-color: rgba(251, 251, 251, 0.15);'></div></a>`;

                    let cardBody = `<div class='card-body shadow-4 rounded-5 Ctop-card'><h1 class='card-text CTitle'> ${collection_title} </h1><p class='card-text CDescrip' > ${collection_description}</p><p class='card-text CUser'>Made by: ${collection_user}</p><p style="display: none">${collection_id}</p><div></div></div>`;

                    let sectionsHtml = '';
                    for (var j = 0; j < sections.length; j++) {
                        console.log(sections[j].title);
                        sectionsHtml += `${sections[j].title}, `
                    }

                    console.log(collection_id);

                    $(cardContainer).append("<div class='col-lg-3 col-md-3 mb-3 collectionCards card d-flex align-items-stretch shadow-4 rounded-5'><div class='card shadow-4 rounded-5 container'>" + image + cardBody + '<p class=\'card-text CSections\'> Sections: ' + sectionsHtml + '</p>' +  "</div> " + "<div class='row' ><div class='btn-group m-1' role='group' aria-label='Basic example'><button style='border-right: solid #444444' class='col-sm btn btn-select'  id='edit" + [i] + "' data-user='" + collection_user_id + "' value='" + collection_id + "'>Edit</button><button class='col-sm btn btn-select'  id='delete" + [i] + "' data-user='" + collection_user_id + "' value='" + collection_id + "'>Delete</button>" +"</div></div>");

                    // $('.collectionCards').append("<div ><button class='btn btn-select'  id='edit" + [i] + "' data-user='" + collection_user_id + "' value='" + collection_id + "'>  <br>Edit</button></div>");
                    // $('.collectionCards').append("<div ><button class='btn btn-select'  id='delete" + [i] + "' data-user='" + collection_user_id + "' value='" + collection_id + "'>  <br>Delete</button></div>")
                    // ;

                    console.log([i]);
                    $(`#${'edit'+[i]}`).on('click', function(){
                        console.log('hello');
                        $('#collectionIdField').val(this.value);
                        $('#colIdEdit').val(this.value);
                        $('#colIdDelete').val(this.value);

                        if ((`#${'edit'+[i]}`).val !== ""){
                            $('#linkToEdit').submit();
                            console.log("BANG!");
                        }
                        // $('#userIdField').val(this.data-id);
                    });


                        $(`#${'delete'+[i]}`).on('click', function(){
                        console.log('hello');
                        $('#collectionIdField').val(this.value);
                        $('#colIdDelete').val(this.value);



                            if ((`#${'delete'+[i]}`).val !== ""){
                                var confirmation = confirm("Are you sure you want to delete?");
                                if (confirmation === true) {
                                    $('#linkToDelete').submit();
                                } else {
                                    console.log("did not delete");
                                }
                            }

                        // $('#userIdField').val(this.data-id);
                    });


                }

            }
    })

})

