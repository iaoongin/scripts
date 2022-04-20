// 实际处理代码
// $_SERVER
// $_REQUEST

// echo json_encode($_SERVER);

// echo "";
  
// echo json_encode($_REQUEST);
// $body = file_get_contents("php://input");
// echo json_encode($body);


$project_url = array(
	"minsheng-shop" => array("http://119.29.13.11:32200/"),
	"apiopen" => array("https://api.apiopen.top/"),
    "ml" => array("http://106.52.60.67:5002/")
);










// ============== project start
if (isset($_REQUEST['project']) == false){
	echo 'project is null';
	return;
}else{
	$project = $_REQUEST['project'];
	if (isset($project_url[$project]) == false){
		echo 'project is not support';
		return;
	}
}
// ============== project end













// =============== path start
if (isset($_REQUEST['path']) == false){
	$path = '/';
}else{
	$path = $_REQUEST['path'];
}
// =============== path end










// =============== METHOD start
if (isset($_REQUEST['method']) == false){
	$method = $_SERVER['REQUEST_METHOD'];
}else{
	$method = $_REQUEST['method'];
}

$method = strtoupper($method);
// =============== METHOD end


// =============== HEADER start
$header = array();
if (isset($_SERVER['HTTP_COOKIE'])){
	array_push($header, "Cookie: " . $_SERVER['HTTP_COOKIE']);
}
if (isset($_SERVER['HTTP_TOKEN'])){
	array_push($header, "token: " . $_SERVER['HTTP_TOKEN']);
}
if (isset($_SERVER['HTTP_AUTHORIZATION'])){
	array_push($header, "Authorization: " . $_SERVER['HTTP_AUTHORIZATION']);
}
if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])){
	array_push($header, "X_FORWARDED_FOR: " . $_SERVER['HTTP_X_FORWARDED_FOR']);
}


// echo json_encode($header);
// =============== HEADER end

$url = $project_url[$project][0] . $path;

// 响应 json
header('Content-Type: application/json;charset=UTF-8');
// SERVER_ADDR
header('Server-Addr: ' . $_SERVER['SERVER_ADDR']);

/**
 * PHP发送Json对象数据
 * @param $url 请求url
 * @param $jsonStr 发送的json字符串
 * @return array
 */
function curl_request($url, $method, $header, $jsonStr="")
{
    $ch = curl_init();
	$_header = array(
		'Content-Type: application/json; charset=utf-8',
		'Content-Length: ' . strlen($jsonStr)
	);
	$_header = array_merge($_header, $header);


	if ($method == "POST"){
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonStr);
		
	}
    
    curl_setopt($ch, CURLOPT_URL, $url);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

	// echo json_encode($_header);
	
    curl_setopt($ch, CURLOPT_HTTPHEADER, $_header);
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    return array($httpCode, $response);
}


$body = file_get_contents("php://input");
$result = curl_request($url, $method, $header, $body);

echo $result[1];