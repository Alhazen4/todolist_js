<?php

    include('conn.php');
    
    $input = $_GET['input'];
    var_dump($input);

    if(isset($input))
    {
        
        $query = "INSERT INTO act_list VALUES('$input')";
        $result = mysqli_query($db, $query);
    }
?>