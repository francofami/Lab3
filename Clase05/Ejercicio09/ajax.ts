let xmlhttp : XMLHttpRequest = new XMLHttpRequest();
    
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
        if(xmlhttp.status == 200)
        {
            let autosString= xmlhttp.responseText;
            let autosJson[] = JSON.parse(autosString);

            
            alert(autosJson[1]);
        }
        
        else
        alert("Error");
    }
    
}

xmlhttp.open("GET", "traerAutos.php", true);
xmlhttp.send();