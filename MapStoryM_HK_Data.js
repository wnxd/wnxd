var body = $response.body;
var obj = JSON.parse(body);

obj["errorCode"] = 0;
obj["errorText"] = "1";
obj["result"]["country"] = "HK";

body = JSON.stringify(obj);
$done(body);
