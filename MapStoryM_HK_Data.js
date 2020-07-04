var status = 'HTTP/1.1 200 OK';

var headers = $response.headers;
headers["errorCode"] = "0";

var body = $response.body;
var obj = JSON.parse(body);
obj["errorCode"] = 0;
obj["errorText"] = "1";
obj["result"]["country"] = "HK";
body = JSON.stringify(obj);

$done({status: status, headers: headers, body: body});
