document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  8411
 ],
 [
  "2.  Al-Baqarah",
  8412
 ],
 [
  "3.  Ali 'Imran",
  8413
 ],
 [
  "4.  An-Nisa'",
  8414
 ],
 [
  "5.  Al-Ma`idah",
  8415
 ],
 [
  "6.  Al-An'am",
  8416
 ],
 [
  "7.  Al-A'raf",
  8417
 ],
 [
  "8.  Al-Anfal",
  8418
 ],
 [
  "9.  At-Taubah",
  8419
 ],
 [
  "10.  Yunus",
  8420
 ],
 [
  "11.  Hud",
  8421
 ],
 [
  "12.  Yusuf",
  8422
 ],
 [
  "13.  Ar-Ra'd",
  8423
 ],
 [
  "14.  Ibrahim",
  8424
 ],
 [
  "15.  Al-Hijr",
  8425
 ],
 [
  "16.  An-Nahl",
  8426
 ],
 [
  "17.  Al-Isra'",
  8427
 ],
 [
  "18.  Al-Kahfi",
  8428
 ],
 [
  "19.  Maryam",
  8429
 ],
 [
  "20.  Thaha",
  8430
 ],
 [
  "21.  Al-Anbiya'",
  8431
 ],
 [
  "22.  Al-Hajj",
  8432
 ],
 [
  "23.  Al-Mu'minun",
  8433
 ],
 [
  "24.  An-Nur",
  8434
 ],
 [
  "25.  Al-Furqan",
  8435
 ],
 [
  "26.  Asy-Syu'ara'",
  8436
 ],
 [
  "27.  An-Naml",
  8437
 ],
 [
  "28.  Al-Qashash",
  8438
 ],
 [
  "29.  Al-'Ankabut",
  8439
 ],
 [
  "30.  Ar-Rum",
  8440
 ],
 [
  "31.  Luqman",
  8441
 ],
 [
  "32.  As-Sajdah",
  8442
 ],
 [
  "33.  Al-Ahzab",
  8443
 ],
 [
  "34.  Saba'",
  8444
 ],
 [
  "35.  Fathir",
  8445
 ],
 [
  "36.  Yasin",
  8446
 ],
 [
  "37.  Ash-Shaffat",
  8447
 ],
 [
  "38.  Shad",
  8448
 ],
 [
  "39.  Az-Zumar",
  8449
 ],
 [
  "40. Ghafir",
  8450
 ],
 [
  "41.  Fushshilat",
  8451
 ],
 [
  "42.  Asy-Syura",
  8452
 ],
 [
  "43.  Az-Zukhruf",
  8453
 ],
 [
  "44.  Ad-Dukhan",
  8454
 ],
 [
  "45.  Al-Jatsiyah",
  8455
 ],
 [
  "46.  Al-Ahqaf",
  8456
 ],
 [
  "47.  Muhammad",
  8457
 ],
 [
  "48.  Al-Fath",
  8458
 ],
 [
  "49.  Al-Hujurat",
  8459
 ],
 [
  "50.  Qaf",
  8460
 ],
 [
  "51.  Adz-Dzariyat",
  8461
 ],
 [
  "52.  Ath-Thur",
  8462
 ],
 [
  "53.  An-Najm",
  8463
 ],
 [
  "54.  Al-Qamar",
  8464
 ],
 [
  "55.  Ar-Rahman",
  8465
 ],
 [
  "56.  Al-Waqi'ah",
  8466
 ],
 [
  "57.  Al-Hadid",
  8467
 ],
 [
  "58.  Al-Mujadilah",
  8468
 ],
 [
  "59.  Al-Hasyr",
  8469
 ],
 [
  "60.  Al-Mumtahanah",
  8470
 ],
 [
  "61.  Ash-Shaff",
  8471
 ],
 [
  "62.  Al-Jumu'ah",
  8472
 ],
 [
  "63.  Al-Munafiqun",
  8473
 ],
 [
  "64.  At-Taghabun",
  8474
 ],
 [
  "65.  Ath-Thalaq",
  8475
 ],
 [
  "66.  At-Tahrim",
  8476
 ],
 [
  "67.  Al-Mulk",
  8477
 ],
 [
  "68.  Al-Qalam",
  8478
 ],
 [
  "69.  Al-Haqqah",
  8479
 ],
 [
  "70.  Al-Ma'arij",
  8480
 ],
 [
  "71.  Nuh",
  8481
 ],
 [
  "72.  Al-Jin",
  8482
 ],
 [
  "73.  Al-Muzzammil",
  8483
 ],
 [
  "74.  Al-Muddatstsir",
  8484
 ],
 [
  "75.  Al-Qiyamah",
  8485
 ],
 [
  "76.  Al-Insan",
  8486
 ],
 [
  "77.  Al-Mursalat",
  8487
 ],
 [
  "78. An-Naba'",
  8488
 ],
 [
  "79. An-Nazi'at",
  8489
 ],
 [
  "80. 'Abasa",
  8490
 ],
 [
  "81. At-Takwir",
  8491
 ],
 [
  "82. Al-Infithar",
  8492
 ],
 [
  "83. Al-Muthaffifin",
  8493
 ],
 [
  "84. Al-Insyiqaq",
  8494
 ],
 [
  "85. Al-Buruj",
  8495
 ],
 [
  "86. Ath-Thariq",
  8496
 ],
 [
  "87. Al-A'la",
  8497
 ],
 [
  "88. Al-Ghasyiyah",
  8498
 ],
 [
  "89. Al-Fajr",
  8499
 ],
 [
  "90. Al-Balad",
  8500
 ],
 [
  "91. Asy-Syams",
  8501
 ],
 [
  "92. Al-Lail",
  8502
 ],
 [
  "93.Adh-Dhuha",
  8503
 ],
 [
  "94. Al-Insyirah",
  8504
 ],
 [
  "95. At-Tin",
  8505
 ],
 [
  "96. Al-'Alaq",
  8506
 ],
 [
  "97. Al-Qadr",
  8507
 ],
 [
  "98. Al-Bayyinah",
  8508
 ],
 [
  "99. Az-Zalzalah",
  8509
 ],
 [
  "100. Al-'Aadiyat",
  8510
 ],
 [
  "101. Al-Qari'ah",
  8511
 ],
 [
  "102. At-Takatsur",
  8512
 ],
 [
  "103. Al-'Ashr",
  8513
 ],
 [
  "104. Al-Humazah",
  8514
 ],
 [
  "105. Al-Fil",
  8515
 ],
 [
  "106. Quraisy",
  8516
 ],
 [
  "107. Al-Ma'un",
  8517
 ],
 [
  "108. Al-Kautsar",
  8518
 ],
 [
  "109. Al-Kafirun",
  8519
 ],
 [
  "110. An-Nashr",
  8520
 ],
 [
  "111. Al-Lahab",
  8521
 ],
 [
  "112. Al-Ikhlash",
  8522
 ],
 [
  "113. Al-Falaq",
  8523
 ],
 [
  "114. An-Nas",
  8524
 ]
];
  
  new DataTable("#datakode", {
    columns: [
        {title : 'Nama Surat'},
        {title : "Kode angka"}
      ],
    data : dataSet,
    ordering : false,
    lengthChange : false,
    info:false,
    fixedHeader: true,
    pageLength : 10,
    pagingType: 'numbers',
    "language": {
        "emptyTable": "Tidak ada data yang tersedia pada tabel ini",
        "info": "Menampilkan _START_ sampai _END_ dari _TOTAL_ entri",
        "infoEmpty": "Menampilkan 0 sampai 0 dari 0 entri",
        "infoFiltered": "(disaring dari _MAX_ entri keseluruhan)",
        "lengthMenu": "Tampilkan _MENU_ entri",
        "loadingRecords": "Sedang memuat...",
        "processing": "Sedang memproses...",
        "search": "Cari Surat:",
        "zeroRecords": "Tidak ditemukan data yang sesuai",
        "paginate": {
            "first": "Pertama",
            "last": "Terakhir",
            "next": ">>",
            "previous": "<<"
        }
      }
  });

} );
