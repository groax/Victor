var code = document.getElementById('code');
var out = document.getElementById('out');
var tableJSON = document.querySelector('table');
var i;

function getResponse() {
    i = document.getElementById('id');
    if(i.value.length > 0) {
        var xml = new XMLHttpRequest();
        xml.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                showResponseXML(this);
            }
        };
        xml.open("GET", 'webservices/api-employees.php?output=xml&amount='+i.value, true);
        xml.send();

        var json = new XMLHttpRequest();
        json.open("GET", 'webservices/api-employees.php?output=json&amount='+i.value, true);
        json.send();
        showResponseJSON(json.responseText);
    } else {
        out.innerHTML = "Voer een nummer in.";
    }
}

function showResponseJSON(response) {
    var object = JSON.parse(response);
    out.innerHTML = "<b>Fist Company name is: </b>"+object.employees[0].company+"<br><br>";
    tableJSON.style.display = 'block';

    for(i=0;i<object.employees.length;i++) {
        tableJSON.innerHTML = tableJSON.innerHTML + "<tr><td>"+object.employees[i]["name"]+"</td><td>"+object.employees[i]["company"]+"</td></tr>"
    }
}

function showResponseXML(response) {
    var x, i, xmlDoc, txt;
    xmlDoc = response.responseXML;
    x = xmlDoc.getElementsByTagName("name");
    y = xmlDoc.getElementsByTagName("company");
    txt = "<b>Fist Company name is: </b>"+y[0].childNodes[0].nodeValue+"<br><br>";

    txt += '<table class="table table-hover"><tr><th>Naam</th><th>Bedrijf</th></tr>';
    for (i = 0; i< x.length; i++) {
        txt += "<tr><td>"+x[i].childNodes[0].nodeValue+"</td><td>"+y[i].childNodes[0].nodeValue+"</td></tr>";
    }
    txt += '</table">';
    code.innerHTML = txt;
}

