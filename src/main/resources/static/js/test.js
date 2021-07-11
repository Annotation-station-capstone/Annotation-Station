$(document).ready(function () {


    // $(document).ready(function () {
    //         $.ajax({
    //             type: 'GET',
    //             url: '/collections/userid/1',
    //             dataType: "json",
    //             data: {},
    //             success: function (data) {
    //                 console.log(data);
    //                 var collection_drop = ('#collection_drop');
    //                 for (var i = 0; i < data.length; i++) {
    //                     $(collection_drop).append('<option data-id="'+ data[i].id +'" value="' + data[i].title + '">' + data[i].title + '</option>');
    //
    //
    //
    // $("#createFormSubmit").click(function (e) {
    // e.preventDefault()
    //
    // if(
    // any in array of collections names = current value of #collection input and
    // any in array of section names = current value of #sections input
    // ){
    // ajax post that passes just a new note
    // }
    // elseif(
    // any in array of collections names = current value of #collection input and
    // ){
    // ajax post that passes just a new section and new note
    // }
    // else{
    // ajax post that sends a new collection, new section, and new note
    // }
    //
    //   }
    //             }
    //         });
    //     });
    //





    //TODO post method to send newly created collections/sections/and notes to the db

    // $("#createFormSubmit").click(function (e) {
    //     $("#createFormSubmit").attr("disabled", true);
    //     e.preventDefault()
    //     $.ajax({
    //         url: '/collections/create',
    //         type: 'POST',
    //         contentType: 'application/json; charset=utf-8',
    //         data: JSON.stringify(
    //             {
    //                 "collection": {
    //                     "user": {"id": "1"},
    //                     "title": $("#collection").val(),
    //                     "is_private": "true",
    //                     "description": "Enter your Collection Description here",
    //                     "image": "https://lakelandescaperoom.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg"
    //                 },
    //                 "section": {
    //                     "title": $("#section").val()
    //                 },
    //                 "note":
    //                     {
    //                         "note": $("#note").val(),
    //                         "video": {"video_url": $("#ytId").val()},
    //                         "time_stamp": $("#counter").html(),
    //                         "tag": $("#select-tags option:selected").attr("data-value")
    //                     }
    //             }), success: function () {
    //             $("#note").val('');
    //             $("#select-tags >option:eq(1)").attr('selected', true)
    //         }
    //     });
    // });






});