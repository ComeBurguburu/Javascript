function http(method, url, data, onSuccess, onError) {
	method = method.toUpperCase()
	if (["POST", "GET", "PUT","DELETE","PATCH"].indexOf(method) == -1){ 
		throw "method unknow"
	}

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState == 4) {
			if (xhttp.status >= 200 && xhttp.status < 400) {
				try {
					var json = JSON.parse(xhttp.responseText);
					if(onSuccess)
						onSuccess(json);
				} catch (e) {
				  if(onSuccess)
					onSuccess(xhttp.responseText);
				}

			} else {
			  if(onError)
				onError(xhttp.status, xhttp.statusText);
			}
		}
	};
	xhttp.open(method, url, true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
	if(!data){
	  data = {}
	}
	var urldata = Object.keys(data).map(
		function (k) {
			return k + "=" + encodeURI(data[k])
		}).join("&")
	xhttp.send(urldata);
    return xhttp;
}
