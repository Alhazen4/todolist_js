<?php

    include('conn.php');

    $input = $_GET['input'];

    $query = "INSERT INTO act_list VALUES('$input')";
    $result = mysqli_query($db, $query);
?>