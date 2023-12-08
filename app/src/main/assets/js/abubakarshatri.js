document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  8525
 ],
 [
  "2.  Al-Baqarah",
  8526
 ],
 [
  "3.  Ali 'Imran",
  8527
 ],
 [
  "4.  An-Nisa'",
  8528
 ],
 [
  "5.  Al-Ma`idah",
  8529
 ],
 [
  "6.  Al-An'am",
  8530
 ],
 [
  "7.  Al-A'raf",
  8531
 ],
 [
  "8.  Al-Anfal",
  8532
 ],
 [
  "9.  At-Taubah",
  8533
 ],
 [
  "10.  Yunus",
  8534
 ],
 [
  "11.  Hud",
  8535
 ],
 [
  "12.  Yusuf",
  8536
 ],
 [
  "13.  Ar-Ra'd",
  8537
 ],
 [
  "14.  Ibrahim",
  8538
 ],
 [
  "15.  Al-Hijr",
  8539
 ],
 [
  "16.  An-Nahl",
  8540
 ],
 [
  "17.  Al-Isra'",
  8541
 ],
 [
  "18.  Al-Kahfi",
  8542
 ],
 [
  "19.  Maryam",
  8543
 ],
 [
  "20.  Thaha",
  8544
 ],
 [
  "21.  Al-Anbiya'",
  8545
 ],
 [
  "22.  Al-Hajj",
  8546
 ],
 [
  "23.  Al-Mu'minun",
  8547
 ],
 [
  "24.  An-Nur",
  8548
 ],
 [
  "25.  Al-Furqan",
  8549
 ],
 [
  "26.  Asy-Syu'ara'",
  8550
 ],
 [
  "27.  An-Naml",
  8551
 ],
 [
  "28.  Al-Qashash",
  8552
 ],
 [
  "29.  Al-'Ankabut",
  8553
 ],
 [
  "30.  Ar-Rum",
  8554
 ],
 [
  "31.  Luqman",
  8555
 ],
 [
  "32.  As-Sajdah",
  8556
 ],
 [
  "33.  Al-Ahzab",
  8557
 ],
 [
  "34.  Saba'",
  8558
 ],
 [
  "35.  Fathir",
  8559
 ],
 [
  "36.  Yasin",
  8560
 ],
 [
  "37.  Ash-Shaffat",
  8561
 ],
 [
  "38.  Shad",
  8562
 ],
 [
  "39.  Az-Zumar",
  8563
 ],
 [
  "40. Ghafir",
  8564
 ],
 [
  "41.  Fushshilat",
  8565
 ],
 [
  "42.  Asy-Syura",
  8566
 ],
 [
  "43.  Az-Zukhruf",
  8567
 ],
 [
  "44.  Ad-Dukhan",
  8568
 ],
 [
  "45.  Al-Jatsiyah",
  8569
 ],
 [
  "46.  Al-Ahqaf",
  8570
 ],
 [
  "47.  Muhammad",
  8571
 ],
 [
  "48.  Al-Fath",
  8572
 ],
 [
  "49.  Al-Hujurat",
  8573
 ],
 [
  "50.  Qaf",
  8574
 ],
 [
  "51.  Adz-Dzariyat",
  8575
 ],
 [
  "52.  Ath-Thur",
  8576
 ],
 [
  "53.  An-Najm",
  8577
 ],
 [
  "54.  Al-Qamar",
  8578
 ],
 [
  "55.  Ar-Rahman",
  8579
 ],
 [
  "56.  Al-Waqi'ah",
  8580
 ],
 [
  "57.  Al-Hadid",
  8581
 ],
 [
  "58.  Al-Mujadilah",
  8582
 ],
 [
  "59.  Al-Hasyr",
  8583
 ],
 [
  "60.  Al-Mumtahanah",
  8584
 ],
 [
  "61.  Ash-Shaff",
  8585
 ],
 [
  "62.  Al-Jumu'ah",
  8586
 ],
 [
  "63.  Al-Munafiqun",
  8587
 ],
 [
  "64.  At-Taghabun",
  8588
 ],
 [
  "65.  Ath-Thalaq",
  8589
 ],
 [
  "66.  At-Tahrim",
  8590
 ],
 [
  "67.  Al-Mulk",
  8591
 ],
 [
  "68.  Al-Qalam",
  8592
 ],
 [
  "69.  Al-Haqqah",
  8593
 ],
 [
  "70.  Al-Ma'arij",
  8594
 ],
 [
  "71.  Nuh",
  8595
 ],
 [
  "72.  Al-Jin",
  8596
 ],
 [
  "73.  Al-Muzzammil",
  8597
 ],
 [
  "74.  Al-Muddatstsir",
  8598
 ],
 [
  "75.  Al-Qiyamah",
  8599
 ],
 [
  "76.  Al-Insan",
  8600
 ],
 [
  "77.  Al-Mursalat",
  8601
 ],
 [
  "78. An-Naba'",
  8602
 ],
 [
  "79. An-Nazi'at",
  8603
 ],
 [
  "80. 'Abasa",
  8604
 ],
 [
  "81. At-Takwir",
  8605
 ],
 [
  "82. Al-Infithar",
  8606
 ],
 [
  "83. Al-Muthaffifin",
  8607
 ],
 [
  "84. Al-Insyiqaq",
  8608
 ],
 [
  "85. Al-Buruj",
  8609
 ],
 [
  "86. Ath-Thariq",
  8610
 ],
 [
  "87. Al-A'la",
  8611
 ],
 [
  "88. Al-Ghasyiyah",
  8612
 ],
 [
  "89. Al-Fajr",
  8613
 ],
 [
  "90. Al-Balad",
  8614
 ],
 [
  "91. Asy-Syams",
  8615
 ],
 [
  "92. Al-Lail",
  8616
 ],
 [
  "93.Adh-Dhuha",
  8617
 ],
 [
  "94. Al-Insyirah",
  8618
 ],
 [
  "95. At-Tin",
  8619
 ],
 [
  "96. Al-'Alaq",
  8620
 ],
 [
  "97. Al-Qadr",
  8621
 ],
 [
  "98. Al-Bayyinah",
  8622
 ],
 [
  "99. Az-Zalzalah",
  8623
 ],
 [
  "100. Al-'Aadiyat",
  8624
 ],
 [
  "101. Al-Qari'ah",
  8625
 ],
 [
  "102. At-Takatsur",
  8626
 ],
 [
  "103. Al-'Ashr",
  8627
 ],
 [
  "104. Al-Humazah",
  8628
 ],
 [
  "105. Al-Fil",
  8629
 ],
 [
  "106. Quraisy",
  8630
 ],
 [
  "107. Al-Ma'un",
  8631
 ],
 [
  "108. Al-Kautsar",
  8632
 ],
 [
  "109. Al-Kafirun",
  8633
 ],
 [
  "110. An-Nashr",
  8634
 ],
 [
  "111. Al-Lahab",
  8635
 ],
 [
  "112. Al-Ikhlash",
  8636
 ],
 [
  "113. Al-Falaq",
  8637
 ],
 [
  "114. An-Nas",
  8638
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
