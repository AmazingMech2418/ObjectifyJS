var apiLib = {
    get: function (site,callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                callback(this.responseText);
            }
        };
        xhttp.open('GET', site, true);
        xhttp.send();
    }
};
apiLib.get("https://amazinigmech2418.github.io/ObjectifyJS/objects.js",function(data){eval(data);});
apiLib.get("https://amazinigmech2418.github.io/ObjectifyJS/numbers.js",function(data){eval(data);});
apiLib.get("https://amazinigmech2418.github.io/ObjectifyJS/string.js",function(data){eval(data);});
