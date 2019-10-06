


function change_frame_src(url) {
    document.getElementById("jack_frame").src = url;

    check_cors(url);
}
    


function check_cors(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('frame_front').style.display = 'initial';
        } else {
            document.getElementById('frame_front').style.display = 'none';
            console.log("Cors disabled, site is safe in this browser")
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}