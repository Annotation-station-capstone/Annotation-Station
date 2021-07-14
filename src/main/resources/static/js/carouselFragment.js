$(document).ready(function () {

    $.ajax({
        type: 'GET',
        url: '/collections/userid/1',
        dataType: "json",
        data: {},
        success:
            function (data) {
                let collection_user1 = data[0].user.username;
                let userTitle = $('#userTitle')
                $(userTitle).append("<div class='profileBannerTop'><h1>Welcome to your Profile " + collection_user1 + "</h1></div>")


                //<div class="col-md-4">
                //                 <div class="card">
                //                     <div class="card-img-top card-img-top-250">
                //                         <img class="img-fluid" src="img/29223655865_4b8b01989e.jpg" alt="Carousel 1">
                //                     </div>
                //                     <div class="card-block p-t-2">
                //                         <div class="card-header"><h3>flower1</h3></div>
                //                         <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium animi molestias veritatis, pariatur dolorem error non reprehenderit vero, id. Incidunt hic laudantium soluta recusandae, voluptas libero et! Ipsa, maiores, ratione.</div>
                //                     </div>
                //                 </div>
                //             </div>
                //

                for (let i = 0; i < data.length; i++) {
                    console.log('testing testing 123');
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
                    let cardContainer = $('#cardContainerCarousel');

                    let image = `<div class="card-img-top card-img-top-250"><img src="${collection_image}" class='img-fluid' alt="Carousel 1"><a class="" id='${collection_id}' href='/collections/single/${collection_id}'>
                                 <div class='mask' style='background-color: rgba(251, 251, 251, 0.15);'></div></a></div>`;

                    let cardBody = `<div class="card-block p-t-2 card-body"><h2 class='card-title'> ${collection_title} </h2><p class='card-text'> ${collection_description} </p>
                                    <p>${collection_user}</p><p style="visibility: hidden">${collection_id}</p></div>`;

                    let sectionsHtml = '';
                    for (var j = 0; j < sections.length; j++) {
                        console.log(sections[j].title);
                        sectionsHtml += `${sections[j].title}, `
                    }

                    $(cardContainer).append("<div class='row row-equal carousel-item active m-t-0'><div class='col-lg-3 col-md-3 mb-3'><div class='card'>" + image + cardBody + '<p> Sections in this Collection: ' + sectionsHtml + '</p>' + "</div></div></div>");
                }

                $('.next').click(function(){ $('.carousel').carousel('next');return false; });
                $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
            }

    })

})