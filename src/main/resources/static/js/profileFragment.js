$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: '/collections/userid/1',
        dataType: "json",
        data: {},
        success:
            function (data) {

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
<<<<<<< HEAD
<<<<<<< HEAD
                    let collection_user_id = (data[i].user.id);
                    let userId = $('#userId.val')
=======



>>>>>>> c1f33ef3d98dca003003dfc6474be033132c9beb
=======

                    let collection_user_id = (data[i].user.id);
                    let userId = $('#userId.val')

>>>>>>> 38cc51dd9f511f53263a6f31437519048a36ea0d
                    let sections = data[i].sections;
                    let cardContainer = $('#cardContainerProfile');
                    let buttonContainer = $('#buttonContainerProfile');

                    let image = `<img src="${collection_image}" class='img-fluid shadow-4 rounded-5' alt='img'><a id='${collection_id}' href='/collections/single?collection_id=${collection_id}'><div class='mask' style='background-color: rgba(251, 251, 251, 0.15);'></div></a>`;

                    let cardBody = `<div class='card-body shadow-4 rounded-5 Ctop-card'><h1 class='card-text CTitle'> ${collection_title} </h1><p class='card-text CDescrip' > ${collection_description}</p><p class='card-text CUser'>Made by: ${collection_user}</p><p style="display: none">${collection_id}</p><div></div></div>`;

                    let sectionsHtml = '';
                    for (var j = 0; j < sections.length; j++) {
                        console.log(sections[j].title);
                        sectionsHtml += `${sections[j].title},`
                    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 38cc51dd9f511f53263a6f31437519048a36ea0d
                    console.log(collection_id);
                    $(cardContainer).append("<div class='col-lg-3 col-md-3 mb-3 collectionCards card d-flex align-items-stretch shadow-4 rounded-5'><div class='card shadow-4 rounded-5'>" + image + cardBody + '<p class=\'card-text CSections\'> Sections: ' + sectionsHtml + '</p>' + "</div></div>");
                    $(buttonContainer).append("<button class='btn btn-select' id='" + data[i].id + "' data-user='" + collection_user_id + "' value='" + collection_id + "'>Edit/Delete</button>");
                    console.log(data[i].id);
                    $(`#${data[i].id}`).on('click', function(){
                        console.log('hello');
                        $('#collectionIdField').val(this.value);
                        // $('#userIdField').val(this.data-id);
                    });
<<<<<<< HEAD
=======
                    let currentUserId  = /*[[${currentUserId}]]*/ 0;
                    $(cardContainer).append("<div class='col-lg-4 col-md-4 mb-4 collectionCards'><div class='card'>" + image + cardBody + '<p> Sections in this Collection: ' + sectionsHtml + '</p>' + "</div></div>");
>>>>>>> c1f33ef3d98dca003003dfc6474be033132c9beb
=======

>>>>>>> 38cc51dd9f511f53263a6f31437519048a36ea0d
                }

            }
    })

})




//     })
// })

// var collection_data = ('#collection-data');
// var collection_title = ('.title');
// var section_data = ('#section-data');
// var comment_data = ('#comment-data')
// $(collection_title).text("You selected the " + data.title + " Collection");
// $(collection_title).text("You selected the " + data.title + " Collection");
// $(collection_data).append("<li> " + data.description + "</li>");
// $("#collection_image").attr("src", data.image);
// $(collection_data).append(data.is_private);

// $('.top_accord').attr('id','section'+i);
// $('.anchor-accord').attr('data-bs-target', '#collapse'+i).attr('aria-controls', '#collapse'+i);
// $('.bottom_accord').attr('aria-labelledby', 'section'+i);
// $(section_data).append("<div class='accordion-item top_accord' style='width: 1000px'><h2 class='accordion-header' id='section'><a class='accordion-button anchor-accord' type='button' data-bs-toggle='collapse' data-bs-target='#collapse[i]' aria-expanded='true' aria-controls='collapse[i]'> " + sections[i].title + " </a></h2></div></div>");

// <div class="col-lg-4 col-md-4 mb-4" th:each="Collection: ${collection}">
//     <div class="card">
//         <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
//             <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" class="img-fluid"
//                  alt="img"/>
//             <a href="#">
//                 <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
//             </a>
//         </div>
//         <div class="card-body">
//             <h5 class="card-title" th:text="${Collection.title}"></h5>
//             <p class="card-text" th:text="${Collection.description}">
//                 <div th:if="${single}"></div>
//                 <p><a th:href="${singleCollection}" class="btn btn-primary" th:method="GET">View
//                     Collection</a></p>
//         </div>
//     </div>
// </div>