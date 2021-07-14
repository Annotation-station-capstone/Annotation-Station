$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: '/collections/public',
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
                    let userId = $('#userId.val')
                    let sections = data[i].sections;
                    let cardContainer = $('#cardContainerHome');

                    let image = `<img src="${collection_image}" class='img-fluid shadow-4 rounded-5' alt='img'><a id='${collection_id}' href='/collections/single?collection_id=${collection_id}'><div class='mask' style='background-color: rgba(251, 251, 251, 0.15);'></div></a>`;

                    let cardBody = `<div class='card-body shadow-4 rounded-5 Ctop-card'><h1 class='card-text CTitle'> ${collection_title} </h1><p class='card-text CDescrip' > ${collection_description}</p><p class='card-text CUser'>Made by: ${collection_user}</p><p style="display: none">${collection_id}</p><div></div></div>`;

                    let sectionsHtml = '';
                    for (var j = 0; j < sections.length; j++) {
                        console.log(sections[j].title);
                        sectionsHtml += `${sections[j].title},`
                    }
                    $(cardContainer).append("<div class='col-lg-3 col-md-3 mb-3 collectionCards card d-flex align-items-stretch shadow-4 rounded-5'><div class='card shadow-4 rounded-5'>" + image + cardBody + '<p class=\'card-text CSections\'> Sections: ' + sectionsHtml + '</p>' + "</div></div>");
                }
            }

    })


    // console.clear();
    // gsap.registerPlugin(MotionPathPlugin);
    // gsap.set("#target", {
    //     yPercent: -50,
    //     xPercent: -50,
    //     transformOrigin: "50% 50%"
    // });
    // gsap.set("#path2", { drawSVG: 0 });
    //
    // const tl = gsap.timeline({ repeat: -1 });
    // tl.to("#target", { duration: 3, motionPath: { path: "#path1" } });
    // tl.to("#target", { duration: 2, x: 160.52, y: 479.74 });
    // tl.add("label");
    // tl.to("#path2", { duration: 3, drawSVG: true }, "label");
    // tl.to("#target", { duration: 3, motionPath: { path: "#path2" } }, "label");
    // tl.to("#target", { duration: 2, x: 169.52, y: 107 }, "end");
    // tl.to("#path2", { duration: 1, autoAlpha: 0 }, "end+=1");



})