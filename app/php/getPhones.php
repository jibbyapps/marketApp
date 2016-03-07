<?php
/**
 * Created by PhpStorm.
 * User: Sergey
 * Date: 07.03.2016
 * Time: 13:56
 */

$a = array();
if (isset($_POST)){
    foreach ($_POST as $key=>$value){
        $a[$key]=$value;
    }
}
print_r($a);

