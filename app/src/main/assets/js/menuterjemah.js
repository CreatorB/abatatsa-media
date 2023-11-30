document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

document.addEventListener('DOMContentLoaded', function () {
  
var data = {"qori" : [
 {
  "no": 1,
  "nama": "Hani Rifa’i",
  "kategori": "Murottal Terjemah",
  "tipe": 5,
  "juml": 114,
  "keterangan": "Qori’ dewasa (30 Juz)"
 },
 {
  "no": 2,
  "nama": "Minsyawi",
  "kategori": "Murottal Talaqqi",
  "tipe": 4,
  "juml": 114,
  "keterangan": "Qori’ dewasa, 30 Juz,  ditirukan anak-anak"
 },
 {
  "no": 3,
  "nama": "Muhammad Thaha",
  "kategori": "Murottal Terjemah",
  "tipe": 5,
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
          tujuan=resObj.nama.replace(/\s+/g,'').toLowerCase()+'45.html';
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


