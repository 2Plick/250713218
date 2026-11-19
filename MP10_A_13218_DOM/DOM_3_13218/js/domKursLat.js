var targetNode;
var riwayatNode;

function init() {
    targetNode = document.getElementById("hasil").firstChild;
    riwayatNode = document.getElementById("riwayat");
}

function hitungKurs(id) {
    var inputEl = document.getElementById(id);
    var hasilUsd = parseFloat(inputEl.value) / 18246;
    targetNode.data = hasilUsd.toFixed(2);

    var itemBaru = document.createElement("li");
    var teksRiwayat = document.createTextNode("Rp" + inputEl.value + " = US$" + hasilUsd.toFixed(2));
    itemBaru.appendChild(teksRiwayat);
    riwayatNode.appendChild(itemBaru);
}