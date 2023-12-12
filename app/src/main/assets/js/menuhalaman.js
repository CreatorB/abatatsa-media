document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$( document ).ready(function() {

const myModal = new bootstrap.Modal('#alert', {
  keyboard: false
});

$('#cek').on('click', function(){
  let halaman = $('#halaman').val();
  
  if (halaman.length == 0) { 
    $('#isi-error').text("Anda belum mengisi no halaman...");
    myModal.show();
    return; 
  }

  else if (Number(halaman) == 0) { 
    $('#isi-error').text("Nomor halaman tidak boleh nol (0)...");
    myModal.show();
    return; 
  }

  else if (Number(halaman) < 0) { 
    $('#isi-error').text("Nomor halaman tidak boleh negatif...");
    myModal.show();
    return; 
  }

  else if (Number(halaman) > 604) { 
    $('#isi-error').text("nomor halaman paling tinggi adalah 604 !");
    myModal.show();
    return; 
  }

  else {

    let kode = 0;
    let kode2 = 0;
    //console.log(kode);
    kode = Number(halaman);
    kode2 = Number(halaman) + 1000;
    //console.log(kode);

    $('#noHal').text("Halaman ke : " + kode);
    $('#kode').text(kode);
    $('#kode2').text(kode2);
  
  }
  
});

});