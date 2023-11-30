document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$( document ).ready(function() {
    //console.log( "ready!" );
    var data = [
 {
  "no": 1,
  "surat": "Al-Fatihah",
  "awal": 1605,
  "akhir": 1611,
  "jml": 7
 },
 {
  "no": 2,
  "surat": "Al-Baqarah",
  "awal": 1612,
  "akhir": 1897,
  "jml": 286
 },
 {
  "no": 3,
  "surat": "Ali 'Imran",
  "awal": 1898,
  "akhir": 2097,
  "jml": 200
 },
 {
  "no": 4,
  "surat": "An-Nisaa'",
  "awal": 2098,
  "akhir": 2273,
  "jml": 176
 },
 {
  "no": 5,
  "surat": "Al-Ma`idah",
  "awal": 2274,
  "akhir": 2393,
  "jml": 120
 },
 {
  "no": 6,
  "surat": "Al-An'am",
  "awal": 2394,
  "akhir": 2558,
  "jml": 165
 },
 {
  "no": 7,
  "surat": "Al-A'raf",
  "awal": 2559,
  "akhir": 2764,
  "jml": 206
 },
 {
  "no": 8,
  "surat": "Al-Anfal",
  "awal": 2765,
  "akhir": 2839,
  "jml": 75
 },
 {
  "no": 9,
  "surat": "At-Taubah",
  "awal": 2840,
  "akhir": 2968,
  "jml": 129
 },
 {
  "no": 10,
  "surat": "Yunus",
  "awal": 2969,
  "akhir": 3077,
  "jml": 109
 },
 {
  "no": 11,
  "surat": "Hud",
  "awal": 3078,
  "akhir": 3200,
  "jml": 123
 },
 {
  "no": 12,
  "surat": "Yusuf",
  "awal": 3201,
  "akhir": 3311,
  "jml": 111
 },
 {
  "no": 13,
  "surat": "Ar-Ra'd",
  "awal": 3312,
  "akhir": 3354,
  "jml": 43
 },
 {
  "no": 14,
  "surat": "Ibrahim",
  "awal": 3355,
  "akhir": 3406,
  "jml": 52
 },
 {
  "no": 15,
  "surat": "Al-Hijr",
  "awal": 3407,
  "akhir": 3505,
  "jml": 99
 },
 {
  "no": 16,
  "surat": "An-Nahl",
  "awal": 3506,
  "akhir": 3633,
  "jml": 128
 },
 {
  "no": 17,
  "surat": "Al-Isra'",
  "awal": 3634,
  "akhir": 3744,
  "jml": 111
 },
 {
  "no": 18,
  "surat": "Al-Kahfi",
  "awal": 3745,
  "akhir": 3854,
  "jml": 110
 },
 {
  "no": 19,
  "surat": "Maryam",
  "awal": 3855,
  "akhir": 3952,
  "jml": 98
 },
 {
  "no": 20,
  "surat": "Thaha",
  "awal": 3953,
  "akhir": 4087,
  "jml": 135
 },
 {
  "no": 21,
  "surat": "Al-Anbiya'",
  "awal": 4088,
  "akhir": 4199,
  "jml": 112
 },
 {
  "no": 22,
  "surat": "Al-Hajj",
  "awal": 4200,
  "akhir": 4277,
  "jml": 78
 },
 {
  "no": 23,
  "surat": "Al-Mu'minun",
  "awal": 4278,
  "akhir": 4395,
  "jml": 118
 },
 {
  "no": 24,
  "surat": "An-Nur",
  "awal": 4396,
  "akhir": 4459,
  "jml": 64
 },
 {
  "no": 25,
  "surat": "Al-Furqan",
  "awal": 4460,
  "akhir": 4536,
  "jml": 77
 },
 {
  "no": 26,
  "surat": "Asy-Syu'ara'",
  "awal": 4537,
  "akhir": 4763,
  "jml": 227
 },
 {
  "no": 27,
  "surat": "An-Naml",
  "awal": 4764,
  "akhir": 4856,
  "jml": 93
 },
 {
  "no": 28,
  "surat": "Al-Qashash",
  "awal": 4857,
  "akhir": 4944,
  "jml": 88
 },
 {
  "no": 29,
  "surat": "Al-'Ankabut",
  "awal": 4945,
  "akhir": 5013,
  "jml": 69
 },
 {
  "no": 30,
  "surat": "Ar-Rum",
  "awal": 5014,
  "akhir": 5073,
  "jml": 60
 },
 {
  "no": 31,
  "surat": "Luqman",
  "awal": 5074,
  "akhir": 5107,
  "jml": 34
 },
 {
  "no": 32,
  "surat": "As-Sajdah",
  "awal": 5108,
  "akhir": 5137,
  "jml": 30
 },
 {
  "no": 33,
  "surat": "Al-Ahzab",
  "awal": 5138,
  "akhir": 5210,
  "jml": 73
 },
 {
  "no": 34,
  "surat": "Saba'",
  "awal": 5211,
  "akhir": 5264,
  "jml": 54
 },
 {
  "no": 35,
  "surat": "Fathir",
  "awal": 5265,
  "akhir": 5309,
  "jml": 45
 },
 {
  "no": 36,
  "surat": "Yasin",
  "awal": 5310,
  "akhir": 5392,
  "jml": 83
 },
 {
  "no": 37,
  "surat": "Ash-Shaffat",
  "awal": 5393,
  "akhir": 5574,
  "jml": 182
 },
 {
  "no": 38,
  "surat": "Shad",
  "awal": 5575,
  "akhir": 5662,
  "jml": 88
 },
 {
  "no": 39,
  "surat": "Az-Zumar",
  "awal": 5663,
  "akhir": 5737,
  "jml": 75
 },
 {
  "no": 40,
  "surat": "Ghafir",
  "awal": 5738,
  "akhir": 5822,
  "jml": 85
 },
 {
  "no": 41,
  "surat": "Fushshilat",
  "awal": 5823,
  "akhir": 5876,
  "jml": 54
 },
 {
  "no": 42,
  "surat": "Asy-Syura",
  "awal": 5877,
  "akhir": 5929,
  "jml": 53
 },
 {
  "no": 43,
  "surat": "Az-Zukhruf",
  "awal": 5930,
  "akhir": 6018,
  "jml": 89
 },
 {
  "no": 44,
  "surat": "Ad-Dukhan",
  "awal": 6019,
  "akhir": 6077,
  "jml": 59
 },
 {
  "no": 45,
  "surat": "Al-Jaatsiyah",
  "awal": 6078,
  "akhir": 6114,
  "jml": 37
 },
 {
  "no": 46,
  "surat": "Al-Ahqaf",
  "awal": 6115,
  "akhir": 6149,
  "jml": 35
 },
 {
  "no": 47,
  "surat": "Muhammad",
  "awal": 6150,
  "akhir": 6187,
  "jml": 38
 },
 {
  "no": 48,
  "surat": "Al-Fath",
  "awal": 6188,
  "akhir": 6216,
  "jml": 29
 },
 {
  "no": 49,
  "surat": "Al-Hujurat",
  "awal": 6217,
  "akhir": 6234,
  "jml": 18
 },
 {
  "no": 50,
  "surat": "Qaf",
  "awal": 6235,
  "akhir": 6279,
  "jml": 45
 },
 {
  "no": 51,
  "surat": "Adz-Dzariyat",
  "awal": 6280,
  "akhir": 6339,
  "jml": 60
 },
 {
  "no": 52,
  "surat": "Ath-Thur",
  "awal": 6340,
  "akhir": 6388,
  "jml": 49
 },
 {
  "no": 53,
  "surat": "An-Najm",
  "awal": 6389,
  "akhir": 6450,
  "jml": 62
 },
 {
  "no": 54,
  "surat": "Al-Qamar",
  "awal": 6451,
  "akhir": 6505,
  "jml": 55
 },
 {
  "no": 55,
  "surat": "Ar-Rahman",
  "awal": 6506,
  "akhir": 6583,
  "jml": 78
 },
 {
  "no": 56,
  "surat": "Al-Waqi'ah",
  "awal": 6584,
  "akhir": 6679,
  "jml": 96
 },
 {
  "no": 57,
  "surat": "Al-Hadid",
  "awal": 6680,
  "akhir": 6708,
  "jml": 29
 },
 {
  "no": 58,
  "surat": "Al-Mujadilah",
  "awal": 6709,
  "akhir": 6730,
  "jml": 22
 },
 {
  "no": 59,
  "surat": "Al-Hasyr",
  "awal": 6731,
  "akhir": 6754,
  "jml": 24
 },
 {
  "no": 60,
  "surat": "Al-Mumtahanah",
  "awal": 6755,
  "akhir": 6767,
  "jml": 13
 },
 {
  "no": 61,
  "surat": "Ash-Shaff",
  "awal": 6768,
  "akhir": 6781,
  "jml": 14
 },
 {
  "no": 62,
  "surat": "Al-Jumu'ah",
  "awal": 6782,
  "akhir": 6792,
  "jml": 11
 },
 {
  "no": 63,
  "surat": "Al-Munafiqun",
  "awal": 6793,
  "akhir": 6803,
  "jml": 11
 },
 {
  "no": 64,
  "surat": "At-Taghabun",
  "awal": 6804,
  "akhir": 6821,
  "jml": 18
 },
 {
  "no": 65,
  "surat": "Ath-Thalaq",
  "awal": 6822,
  "akhir": 6833,
  "jml": 12
 },
 {
  "no": 66,
  "surat": "At-Tahrim",
  "awal": 6834,
  "akhir": 6845,
  "jml": 12
 },
 {
  "no": 67,
  "surat": "Al-Mulk",
  "awal": 6846,
  "akhir": 6875,
  "jml": 30
 },
 {
  "no": 68,
  "surat": "Al-Qalam",
  "awal": 6876,
  "akhir": 6927,
  "jml": 52
 },
 {
  "no": 69,
  "surat": "Al-Haqqah",
  "awal": 6928,
  "akhir": 6979,
  "jml": 52
 },
 {
  "no": 70,
  "surat": "Al-Ma'arij",
  "awal": 6980,
  "akhir": 7023,
  "jml": 44
 },
 {
  "no": 71,
  "surat": "Nuh",
  "awal": 7024,
  "akhir": 7051,
  "jml": 28
 },
 {
  "no": 72,
  "surat": "Al-Jin",
  "awal": 7052,
  "akhir": 7079,
  "jml": 28
 },
 {
  "no": 73,
  "surat": "Al-Muzzammil",
  "awal": 7080,
  "akhir": 7099,
  "jml": 20
 },
 {
  "no": 74,
  "surat": "Al-Muddatstsir",
  "awal": 7100,
  "akhir": 7155,
  "jml": 56
 },
 {
  "no": 75,
  "surat": "Al-Qiyamah",
  "awal": 7156,
  "akhir": 7195,
  "jml": 40
 },
 {
  "no": 76,
  "surat": "Al-Insan",
  "awal": 7196,
  "akhir": 7226,
  "jml": 31
 },
 {
  "no": 77,
  "surat": "Al-Mursalat",
  "awal": 7227,
  "akhir": 7276,
  "jml": 50
 },
 {
  "no": 78,
  "surat": "An-Naba'",
  "awal": 7277,
  "akhir": 7316,
  "jml": 40
 },
 {
  "no": 79,
  "surat": "An-Nazi'at",
  "awal": 7317,
  "akhir": 7362,
  "jml": 46
 },
 {
  "no": 80,
  "surat": "Abasa",
  "awal": 7363,
  "akhir": 7404,
  "jml": 42
 },
 {
  "no": 81,
  "surat": "At-Takwir",
  "awal": 7405,
  "akhir": 7433,
  "jml": 29
 },
 {
  "no": 82,
  "surat": "Al-Infithar",
  "awal": 7434,
  "akhir": 7452,
  "jml": 19
 },
 {
  "no": 83,
  "surat": "Al-Muthaffifin",
  "awal": 7453,
  "akhir": 7488,
  "jml": 36
 },
 {
  "no": 84,
  "surat": "Al-Insyiqaq",
  "awal": 7489,
  "akhir": 7513,
  "jml": 25
 },
 {
  "no": 85,
  "surat": "Al-Buruj",
  "awal": 7514,
  "akhir": 7535,
  "jml": 22
 },
 {
  "no": 86,
  "surat": "Ath-Thariq",
  "awal": 7536,
  "akhir": 7552,
  "jml": 17
 },
 {
  "no": 87,
  "surat": "Al-A'la",
  "awal": 7553,
  "akhir": 7571,
  "jml": 19
 },
 {
  "no": 88,
  "surat": "Al-Ghasyiyah",
  "awal": 7572,
  "akhir": 7597,
  "jml": 26
 },
 {
  "no": 89,
  "surat": "Al-Fajr",
  "awal": 7598,
  "akhir": 7627,
  "jml": 30
 },
 {
  "no": 90,
  "surat": "Al-Balad",
  "awal": 7628,
  "akhir": 7647,
  "jml": 20
 },
 {
  "no": 91,
  "surat": "Asy-Syams",
  "awal": 7648,
  "akhir": 7662,
  "jml": 15
 },
 {
  "no": 92,
  "surat": "Al-Lail",
  "awal": 7663,
  "akhir": 7683,
  "jml": 21
 },
 {
  "no": 93,
  "surat": "Adh-Dhuha",
  "awal": 7684,
  "akhir": 7694,
  "jml": 11
 },
 {
  "no": 94,
  "surat": "Al-Insyirah",
  "awal": 7695,
  "akhir": 7702,
  "jml": 8
 },
 {
  "no": 95,
  "surat": "At-Tin",
  "awal": 7703,
  "akhir": 7710,
  "jml": 8
 },
 {
  "no": 96,
  "surat": "Al-'Alaq",
  "awal": 7711,
  "akhir": 7729,
  "jml": 19
 },
 {
  "no": 97,
  "surat": "Al-Qadr",
  "awal": 7730,
  "akhir": 7734,
  "jml": 5
 },
 {
  "no": 98,
  "surat": "Al-Bayyinah",
  "awal": 7735,
  "akhir": 7742,
  "jml": 8
 },
 {
  "no": 99,
  "surat": "Az-Zalzalah",
  "awal": 7743,
  "akhir": 7750,
  "jml": 8
 },
 {
  "no": 100,
  "surat": "Al-'Adiyat",
  "awal": 7751,
  "akhir": 7761,
  "jml": 11
 },
 {
  "no": 101,
  "surat": "Al-Qari'ah",
  "awal": 7762,
  "akhir": 7772,
  "jml": 11
 },
 {
  "no": 102,
  "surat": "At-Takatsur",
  "awal": 7773,
  "akhir": 7780,
  "jml": 8
 },
 {
  "no": 103,
  "surat": "Al-'Ashr",
  "awal": 7781,
  "akhir": 7783,
  "jml": 3
 },
 {
  "no": 104,
  "surat": "Al-Humazah",
  "awal": 7784,
  "akhir": 7792,
  "jml": 9
 },
 {
  "no": 105,
  "surat": "Al-Fil",
  "awal": 7793,
  "akhir": 7797,
  "jml": 5
 },
 {
  "no": 106,
  "surat": "Quraisy",
  "awal": 7798,
  "akhir": 7801,
  "jml": 4
 },
 {
  "no": 107,
  "surat": "Al-Ma'un",
  "awal": 7802,
  "akhir": 7808,
  "jml": 7
 },
 {
  "no": 108,
  "surat": "Al-Kautsar",
  "awal": 7809,
  "akhir": 7811,
  "jml": 3
 },
 {
  "no": 109,
  "surat": "Al-Kafirun",
  "awal": 7812,
  "akhir": 7817,
  "jml": 6
 },
 {
  "no": 110,
  "surat": "An-Nashr",
  "awal": 7818,
  "akhir": 7820,
  "jml": 3
 },
 {
  "no": 111,
  "surat": "Al-Lahab",
  "awal": 7821,
  "akhir": 7825,
  "jml": 5
 },
 {
  "no": 112,
  "surat": "Al-Ikhlash",
  "awal": 7826,
  "akhir": 7829,
  "jml": 4
 },
 {
  "no": 113,
  "surat": "Al-Falaq",
  "awal": 7830,
  "akhir": 7834,
  "jml": 5
 },
 {
  "no": 114,
  "surat": "An-Nas",
  "awal": 7835,
  "akhir": 7840,
  "jml": 6
 }
]


//console.log("tes");

let dropdown = $('#pilihsurat');
let option = "";

dropdown.empty();

dropdown.append('<option selected value="0">Pilih surat</option>');
dropdown.prop('selectedIndex', 0);


$.each(data, function (key, entry) {
  option += '<option data-no="'+ entry.no +'" data-surat="'+ entry.surat +'" data-awal="'+entry.awal+'" data-akhir="'+entry.akhir +'" data-jml="'+entry.jml+'">'+entry.surat+'</option>';
});
//console.log(option);
dropdown.append(option);

$('#pilihsurat').on('change', function(){
  
no = $('#pilihsurat option:selected').data('no');
surat = $('#pilihsurat option:selected').data('surat');
awal = $('#pilihsurat option:selected').data('awal');
akhir = $('#pilihsurat option:selected').data('akhir');
jml = $('#pilihsurat option:selected').data('jml');
  
let pesan = "Surat : <strong>" + surat + "</strong> (Surat ke-" + no +" dalam al-Qur'an berisi <strong>"+jml+" ayat</strong>).";

  // tampilkan data ke element
  $('#selectedSurat').html(pesan);
});

$('#cek').on('click', function(){

  const myModal = new bootstrap.Modal('#alert', {
  keyboard: false
});

  let psurat = $('#pilihsurat').val();
  let payat = $('#ayat').val();
  if (psurat == '0') { 
    $('#isi-error').text("Anda belum memilih surat...");
    myModal.show();
    return; 
  }
  else if (payat.length == 0) { 
    $('#isi-error').text("Anda belum mengisi no ayat...");
    myModal.show();
    return; 
  }
  else if (Number(payat) > Number(jml)) { 
    $('#isi-error').text("nomor ayat tidak boleh melebihi jumlah ayat ("+jml+") !");
    myModal.show();
    return; 
  }
  else if (Number(payat) == 0) { 
    $('#isi-error').text("Nomor ayat tidak boleh nol (0)...");
    myModal.show();
    return; 
  }
  else
  {
    //let kode = 0;
    //console.log(kode);
    kode = Number(awal) + Number(payat) - 1;
    //console.log(kode);

    $('#noAyat').text("Ayat ke : " +payat);
    $('#kode').text(kode);  
  }
  

  //console.log(tes);
  //console.log(tes2);
  //console.log(surat + no)
});

});


