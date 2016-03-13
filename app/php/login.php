<?php
/**
 * Created by PhpStorm.
 * User: Sergey
 * Date: 06.03.2016
 * Time: 16:43
 */

$answer = json_decode(file_get_contents('php://input'), true);
$name = $answer['name'];
$pass = $answer['password'];

if (($handle = fopen("db/users.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        if($data[0] == $name && $data[1] == $pass) {
            echo true;
        } else {
            echo false;
        }

    }
    fclose($handle);
}
