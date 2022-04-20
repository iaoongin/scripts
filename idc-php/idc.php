<?php
// 此文件放到idc主机上
$url = 'https://raw.githubusercontent.com/iaoongin/scripts/main/idc-php/index.php';

$result = file_get_contents($url);

//echo $result;

 eval($result);
?>