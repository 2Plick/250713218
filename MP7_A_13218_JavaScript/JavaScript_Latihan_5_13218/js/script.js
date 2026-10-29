function fn_Valform() {
                var sMsg = "";

                if (document.getElementById("nama").value == ""){
                    sMsg += "\n* Anda belum mengisikan Nama";
                }
                if (document.getElementById("email").value == ""){
                    sMsg += "\n* Anda belum mengisikan Email";
                }
                if (document.getElementById("umur").value == ""){
                    sMsg += "\n* Anda belum mengisikan Umur";
                }
                if (document.getElementById("kategori").value == ""){
                    sMsg += "\n* Anda belum mengisikan Pilihan Lomba";
                }

                if(sMsg != ""){
                    alert("Peringatan:\n" + sMsg);
                    return false;
                } else {
                    return true;
                }
}

var iUmur;

if(iUmur <= 14) {
    if (iUmur == "Y") {
        alert("Kategori Junior");
    }else {
        alert("Kategori Senior");
    }
}

var sInput;
    switch(sInput) {
        case "C":
            alert("Anda memilih Nasi Goreng");
            break;
        case "P":
            alert("Anda memilih Puisi");
            break;
        case "D":
            alert("Anda memilih Poster");
            break;
        default:
            alert("Pilihan tidak valid");
}
