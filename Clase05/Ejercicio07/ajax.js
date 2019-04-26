var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200)
            alert(xmlhttp.responseText);
        else
            alert("Error");
    }
};
xmlhttp.open("GET", "traerAuto.php", true);
xmlhttp.send();
