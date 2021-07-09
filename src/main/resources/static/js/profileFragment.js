$(document).ready(function () {



    $.ajax({
        type: 'GET',
        url: '/collections/userid/1',
        dataType: "json",
        data: {},
        success:
            function (data) {

                let collection_user = '';

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
                    collection_user += (data[i].user.username);



                    let sections = data[i].sections;
                    let cardContainer = $('#cardContainer');

                    let image = `<img src="${collection_image}" class='img-fluid' alt='img'><a id='${collection_id}' href='javascript: loadCollection(${collection_id});'><div class='mask' style='background-color: rgba(251, 251, 251, 0.15);'></div></a>`;


                    let cardBody = `<div class='card-body'><h1 class='card-title'> ${collection_title} </h1><p class='card-text' > ${collection_description}</p><p>${collection_user}</p><p style="visibility: hidden">${collection_id}</p><div></div></div>`;


                    let sectionsHtml = '';
                    for (var j = 0; j < sections.length; j++) {
                        console.log(sections[j].title);
                        sectionsHtml += `${sections[j].title}, `

                    }
                    $(cardContainer).append("<div class='col-lg-4 col-md-4 mb-4 collectionCards'><div class='card'>" + image + cardBody + '<p> Sections in this Collection: ' + sectionsHtml + '</p>' + "</div></div>");
                }
                $('#userTitle').append('Value', `Welcome ${collection_user} your users profile`)
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