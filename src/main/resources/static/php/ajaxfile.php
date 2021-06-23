<?php

include "config.php";

$request = 2;

// Read $_GET value
if(isset($_GET['request'])){
    $request = $_GET['request'];
}

// Fetch records
if($request == 1){

    // Select record
    $sql_collection = "SELECT * FROM collections";
    $collectionData = mysqli_query($con,$sql_collection);

    $response = array();
    while($row = mysqli_fetch_assoc($collectionData)){
        $response[] = array(
            "id" => $row['id'],
            "user_id" => $row['user_id'],
            "title" => $row['title'],
            "is_private" => $row['is_private'],
            "description" => $row['description'],
            "image" => $row['image'],
        );
    }

    echo json_encode($response);
    exit;
}

// Insert record
if($request == 2){

    // Read POST data
    $data = json_decode(file_get_contents("php://input"));

    $user_id = $data->user_id;
    $title = $data->title;
    $is_private = $data->is_private;
    $description = $data->description;
    $image = $data->image;


    // Insert record
    $sql_collection = "insert into collections(user_id,title,is_private,description,image) values(".$user_id.",'".$title."',".$is_private.",'".$description."','".$image."')";
    if(mysqli_query($con,$sql_collection)){
        echo 1;
    }else{
        echo 0;
    }

    exit;
}