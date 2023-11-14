var $ = {
    ajax: function (options) {
        var { type = "get", url, data = "", async = true, dataType = "text", success } = options;

        var xhr = new XMLHttpRequest();

        if (typeof data == "object") {
            var str = "";
            for (var key in data) {
                str += key + "=" + data[key] + "&";
            }
            data = str.substring(0, str.length - 1);
            console.log(data);
        }

        if (type == "get") {
            if (data) {
                xhr.open("get", url + "?" + data, async);
            } else {
                xhr.open("get", url, async);
            }
            xhr.send();
        } else if (type == "post") {
            xhr.open("post", url, async);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(data);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var result = xhr.responseText;
                if (dataType == "json") {
                    result = JSON.parse(result);
                }
                if (success) {
                    success(result);
                }
            }
        }
    }
}