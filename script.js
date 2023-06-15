// Get the modal
let addModal = document.getElementById("myModal");
let editModal = document.getElementById("editModal");
let namaKost = document.getElementById("namaKost");
let lokasiKost = document.getElementById("lokasiKost");
let jumlahKost = document.getElementById("jumlahKost");
let hargaKost = document.getElementById("hargaKost");

// Get the button that opens the modal
let btnTambah = document.getElementById("btnTambah");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal
btnTambah.onclick = function() {
  addModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
  namaKost.value = "";
  lokasiKost.value = "";
  jumlahKost.value = "";
  hargaKost.value = "";
  addModal.style.display = "none";
};

span[1].onclick = function() {
  namaKost.value = "";
  lokasiKost.value = "";
  jumlahKost.value = "";
  hargaKost.value = "";
  addModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == addModal || event.target == editModal) {
    namaKost.value = "";
    lokasiKost.value = "";
    jumlahKost.value = "";
    hargaKost.value = "";
    addModal.style.display = "none";
    editModal.style.display = "none";
  }
};

let submit = document.getElementById("submit");
submit.onclick = function() {
  addModal.style.display = "none";
};
