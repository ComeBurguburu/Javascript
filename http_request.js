function get(url,data,onSuccess,onError){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4){
            if(xhttp.status == 200) {
                try{
                    var json=JSON.parse(xhttp.responseText);
                    onSuccess(json);
                }catch(e){
                    onSuccess(xhttp.responseText);
                }

            }else{
                onError(xhttp.status+" "+xhttp.statusText);
            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send(JSON.stringify(data));
}
