<?php
/**
 * Created by PhpStorm.
 * User: Sergey
 * Date: 13.03.2016
 * Time: 13:23
 */

$data = json_decode(file_get_contents('php://input'), true);
if(isset($data)) {
    file_put_contents('../json/phones.json',json_encode($data));
    echo json_encode($data);
} else {
    echo false;
}

