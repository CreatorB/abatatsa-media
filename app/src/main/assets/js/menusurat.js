document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

document.addEventListener('DOMContentLoaded', function () {
  
var data = {"qori" : [
 {
  "no": 1,
  "nama": "Abdul Aziz az-Zahrani",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 38,
  "keterangan": "Qori’ dewasa, Juz 30, surat al-Fatihah"
 },
 {
  "no": 2,
  "nama": "Abdul Basith Abdush Shamad",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 38,
  "keterangan": "Qori’ dewasa, Juz 30, surat al-Fatihah"
 },
 {
  "no": 3,
  "nama": "Abdullah al-Mathrud",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 38,
  "keterangan": "Qori’ dewasa, Juz 30, surat al-Fatihah"
 },
 {
  "no": 4,
  "nama": "Abdullah Ali Basfar",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 38,
  "keterangan": "Qori’ dewasa, Juz 30, surat al-Fatihah"
 },
 {
  "no": 5,
  "nama": "Abdurrahman Al-Ausy",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 114,
  "keterangan": "Qori’ dewasa (30 Juz)"
 },
 {
  "no": 6,
  "nama": "Abdurrahman as-Sudais",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 114,
  "keterangan": "Qori’ dewasa (30 Juz)"
 },
 {
  "no": 7,
  "nama": "Abu Bakar Shatri",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 114,
  "keterangan": "Qori’ dewasa (30 Juz)"
 },
 {
  "no": 8,
  "nama": "Ahmad al-Nufais",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 38,
  "keterangan": "Qori’ dewasa, Juz 30, surat al-Fatihah"
 },
 {
  "no": 9,
  "nama": "Ahmad Ali Ajmi",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 114,
  "keterangan": "Qori’ dewasa (30 Juz)"
 },
 {
  "no": 10,
  "nama": "Ahmad Misbahi",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 48,
  "keterangan": "Qori’ anak, (Juz 29 dan 30)"
 },
 {
  "no": 11,
  "nama": "Ahmad Saud",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 54,
  "keterangan": "Qori’ anak, (Juz 26, 27, 29 dan 30)"
 },
 {
  "no": 12,
  "nama": "Bandar Baleela",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 38,
  "keterangan": "Qori’ dewasa, Juz 30, surat al-Fatihah"
 },
 {
  "no": 13,
  "nama": "Fahad Wasel",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 38,
  "keterangan": "Qori’ dewasa, Juz 30, surat al-Fatihah"
 },
 {
  "no": 14,
  "nama": "Fahd al-Kandary",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 48,
  "keterangan": "Qori’ dewasa, (Juz 29 dan 30)"
 },
 {
  "no": 15,
  "nama": "Fares Abbad",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 114,
  "keterangan": "Qori’ dewasa (30 Juz)"
 },
 {
  "no": 16,
  "nama": "Fatih Seferagic",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 49,
  "keterangan": "Qori’ dewasa (Juz 29 dan 30), surat al-Fatihah"
 },
 {
  "no": 17,
  "nama": "Hazza’ Balushi",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 38,
  "keterangan": "Qori’ dewasa, Juz 30, surat al-Fatihah"
 },
 {
  "no": 18,
  "nama": "Idris Hasyimi",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 34,
  "keterangan": "Qori’ anak, (Juz 30)"
 },
 {
  "no": 19,
  "nama": "Imad al-Mansary",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 38,
  "keterangan": "Qori’ dewasa, Juz 30, surat al-Fatihah"
 },
 {
  "no": 20,
  "nama": "Khalid Muhammadi",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 38,
  "keterangan": "Qori’ dewasa, Juz 30, surat al-Fatihah"
 },
 {
  "no": 21,
  "nama": "Khalifah at-Tunaiji",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 114,
  "keterangan": "Qori’ dewasa (30 Juz)"
 },
 {
  "no": 22,
  "nama": "Maher Muaiqly",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 114,
  "keterangan": "Qori’ dewasa (30 Juz)"
 },
 {
  "no": 23,
  "nama": "Mahmud Hussary",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 38,
  "keterangan": "Qori’ dewasa, Juz 30, surat al-Fatihah"
 },
 {
  "no": 24,
  "nama": "Majid al-Anazi",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 49,
  "keterangan": "Qori’ dewasa (Juz 29 dan 30), surat al-Fatihah"
 },
 {
  "no": 25,
  "nama": "Muhammad al-Baraak",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 48,
  "keterangan": "Qori’ anak, (Juz 29 dan 30)"
 },
 {
  "no": 26,
  "nama": "Muhammad Thaha",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 34,
  "keterangan": "Qori’ dewasa, Juz 30, surat al-Fatihah"
 },
 {
  "no": 27,
  "nama": "Nabil ar-Rifa’i",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 114,
  "keterangan": "Qori’ dewasa (30 Juz)"
 },
 {
  "no": 28,
  "nama": "Nasser Qotami",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 49,
  "keterangan": "Qori’ dewasa (Juz 29 dan 30), surat al-Fatihah"
 },
 {
  "no": 29,
  "nama": "Omar al-Darweez",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 29,
  "keterangan": "Qori’ dewasa, Juz 30, surat al-Fatihah"
 },
 {
  "no": 30,
  "nama": "Peshawa Kurdi",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 38,
  "keterangan": "Qori’ dewasa, Juz 30, surat al-Fatihah"
 },
 {
  "no": 31,
  "nama": "Ra’d Muhammad al-Kurdi",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 49,
  "keterangan": "Qori’ dewasa (Juz 29 dan 30), surat al-Fatihah"
 },
 {
  "no": 32,
  "nama": "Sa’ad al-Ghamdi",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 38,
  "keterangan": "Qori’ dewasa, Juz 30, surat al-Fatihah"
 },
 {
  "no": 33,
  "nama": "Salah Musally",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 48,
  "keterangan": "Qori’ dewasa, (Juz 29 dan 30)"
 },
 {
  "no": 34,
  "nama": "Wadee Hammadi",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 114,
  "keterangan": "Qori’ dewasa (30 Juz)"
 },
 {
  "no": 35,
  "nama": "Yasser Dossary",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 114,
  "keterangan": "Qori’ dewasa (30 Juz)"
 },
 {
  "no": 36,
  "nama": "Yusuf Kalo",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 38,
  "keterangan": "Qori’ anak, Juz 30, surat al-Fatihah"
 },
 {
  "no": 37,
  "nama": "Ziyad Patel",
  "kategori": "Murottal Per Surat",
  "tipe": 3,
  "juml": 37,
  "keterangan": "Qori’ anak, (Juz 30)"
 }
]}
//alert(data);

    let container = document.querySelector('.list');
    let strArticles = "";

    //let myObj = JSON.parse(data);
    for(let i = 0; i < data.qori.length; i++) {
        let resObj = data.qori[i];
       // if (resObj.Column4 == 3) {
          let tujuan = "";
          tujuan=resObj.nama.replace(/\s+/g,'').toLowerCase()+'.html';
          //console.log(tujuan);
          //let nama = resObj.nama.toString();
          //let alt = "";
          //if(i%2==0) alt=" list-group-item-light ";

          strArticles += '<li class="list-group-item d-flex justify-content-between align-items-start">' +
          				'<div class="ms-2 me-auto">' +
        					'<div class="fw-bold">' + resObj.nama +'</div>' + resObj.keterangan + 
      					'</div><a style="visibility:none" href="' + tujuan + '"></a>' +
      					'<span class="badge bg-primary rounded-pill">'+ resObj.juml +'</span>' +
    						'</li>';    
      //  }                     
    }

    // Inject the string html into the container parent element.
    container.innerHTML = strArticles;
    //alert(strArticles);

    $(function() {
    $('li').css('cursor', 'pointer')

    .click(function() {
        window.location = $('a', this).attr('href');
        return false;
    });
});

     $( "li" ).hover(
  function() {
    $( this ).addClass( "bg-info" );
    $( this ).addClass( "text-light" );
  }, function() {
    $( this ).removeClass( "bg-info" );
    $( this ).removeClass( "text-light" );
  }
); 

}, false);


