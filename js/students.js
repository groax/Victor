function getResponse() {
    var i = document.getElementById('id');
    var out = document.getElementById('out');
    if (i.value.length > 0) {
        out.innerHTML = jsonObject.student[i.value]['name'];
    } else {
        out.innerHTML = "Voer een nummer in.";
    }
}

var jsonObject = {
    student: [
        {
            "id": 1,
            "name": "Branden",
            "country": "Azerbaijan"
        },
        {
            "id": 2,
            "name": "Carl",
            "country": "Iran"
        },
        {
            "id": 3,
            "name": "Frances",
            "country": "Macao"
        }
    ]
};