function clik() {
  let opet = document.getElementById("opet");
  function name(nama) {
    return nama;
  }
  function alamat(rumah) {
    return rumah;
  }
  function hobi(hob) {
    return hob;
  }
  function jurusan(jurus) {
    return jurus;
  }
  function wa(no) {
    return no;
  }
  function sekolah(seko) {
    return seko;
  }
  function cita(cit) {
    return cit;
  }

  function umur(um) {
    return um;
  }
  opet.innerHTML = document.write(`perkenalkan nama saya ${name(
    "Ammar Bassam Setiawan"
  )} umur saya ${umur(15)} alamat saya di ${alamat(
    "Depok"
  )} hobi saya adalah ${hobi("Coding")}
  saya sedang sekolah di ${sekolah("SMK TI BAZMA")} mengambil jurusan ${jurusan(
    "SIJA"
  )} cita cita saya menjadi ${cita(
    "Menjadi Programmer"
  )} untuk informasi lebih lanjut bisa menghubungi saya di ${wa("083151250164")}
  terima kasih`);
  document.write(`</br> </br>perkenalkan nama saya ${name(
    "Ammar Bassam Setiawan  "
  )}</br> umur saya ${umur(15)} </br>alamat saya di ${alamat(
    "Depok"
  )}</br> hobi saya adalah ${hobi("Coding")}</br>
  saya sedang sekolah di ${sekolah(
    "SMK TI BAZMA"
  )}</br> mengambil jurusan ${jurusan(
    "SIJA"
  )}</br> cita cita saya menjadi ${cita(
    "Menjadi Programmer"
  )}</br> untuk informasi lebih lanjut bisa menghubungi saya di ${wa(
    "083151250164"
  )} Terimakasih`);
}
