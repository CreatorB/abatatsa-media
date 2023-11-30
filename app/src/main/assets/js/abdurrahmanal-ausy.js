document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  8639
 ],
 [
  "2.  Al-Baqarah",
  8640
 ],
 [
  "3.  Ali 'Imran",
  8641
 ],
 [
  "4.  An-Nisa'",
  8642
 ],
 [
  "5.  Al-Ma`idah",
  8643
 ],
 [
  "6.  Al-An'am",
  8644
 ],
 [
  "7.  Al-A'raf",
  8645
 ],
 [
  "8.  Al-Anfal",
  8646
 ],
 [
  "9.  At-Taubah",
  8647
 ],
 [
  "10.  Yunus",
  8648
 ],
 [
  "11.  Hud",
  8649
 ],
 [
  "12.  Yusuf",
  8650
 ],
 [
  "13.  Ar-Ra'd",
  8651
 ],
 [
  "14.  Ibrahim",
  8652
 ],
 [
  "15.  Al-Hijr",
  8653
 ],
 [
  "16.  An-Nahl",
  8654
 ],
 [
  "17.  Al-Isra'",
  8655
 ],
 [
  "18.  Al-Kahfi",
  8656
 ],
 [
  "19.  Maryam",
  8657
 ],
 [
  "20.  Thaha",
  8658
 ],
 [
  "21.  Al-Anbiya'",
  8659
 ],
 [
  "22.  Al-Hajj",
  8660
 ],
 [
  "23.  Al-Mu'minun",
  8661
 ],
 [
  "24.  An-Nur",
  8662
 ],
 [
  "25.  Al-Furqan",
  8663
 ],
 [
  "26.  Asy-Syu'ara'",
  8664
 ],
 [
  "27.  An-Naml",
  8665
 ],
 [
  "28.  Al-Qashash",
  8666
 ],
 [
  "29.  Al-'Ankabut",
  8667
 ],
 [
  "30.  Ar-Rum",
  8668
 ],
 [
  "31.  Luqman",
  8669
 ],
 [
  "32.  As-Sajdah",
  8670
 ],
 [
  "33.  Al-Ahzab",
  8671
 ],
 [
  "34.  Saba'",
  8672
 ],
 [
  "35.  Fathir",
  8673
 ],
 [
  "36.  Yasin",
  8674
 ],
 [
  "37.  Ash-Shaffat",
  8675
 ],
 [
  "38.  Shad",
  8676
 ],
 [
  "39.  Az-Zumar",
  8677
 ],
 [
  "40. Ghafir",
  8678
 ],
 [
  "41.  Fushshilat",
  8679
 ],
 [
  "42.  Asy-Syura",
  8680
 ],
 [
  "43.  Az-Zukhruf",
  8681
 ],
 [
  "44.  Ad-Dukhan",
  8682
 ],
 [
  "45.  Al-Jatsiyah",
  8683
 ],
 [
  "46.  Al-Ahqaf",
  8684
 ],
 [
  "47.  Muhammad",
  8685
 ],
 [
  "48.  Al-Fath",
  8686
 ],
 [
  "49.  Al-Hujurat",
  8687
 ],
 [
  "50.  Qaf",
  8688
 ],
 [
  "51.  Adz-Dzariyat",
  8689
 ],
 [
  "52.  Ath-Thur",
  8690
 ],
 [
  "53.  An-Najm",
  8691
 ],
 [
  "54.  Al-Qamar",
  8692
 ],
 [
  "55.  Ar-Rahman",
  8693
 ],
 [
  "56.  Al-Waqi'ah",
  8694
 ],
 [
  "57.  Al-Hadid",
  8695
 ],
 [
  "58.  Al-Mujadilah",
  8696
 ],
 [
  "59.  Al-Hasyr",
  8697
 ],
 [
  "60.  Al-Mumtahanah",
  8698
 ],
 [
  "61.  Ash-Shaff",
  8699
 ],
 [
  "62.  Al-Jumu'ah",
  8700
 ],
 [
  "63.  Al-Munafiqun",
  8701
 ],
 [
  "64.  At-Taghabun",
  8702
 ],
 [
  "65.  Ath-Thalaq",
  8703
 ],
 [
  "66.  At-Tahrim",
  8704
 ],
 [
  "67.  Al-Mulk",
  8705
 ],
 [
  "68.  Al-Qalam",
  8706
 ],
 [
  "69.  Al-Haqqah",
  8707
 ],
 [
  "70.  Al-Ma'arij",
  8708
 ],
 [
  "71.  Nuh",
  8709
 ],
 [
  "72.  Al-Jin",
  8710
 ],
 [
  "73.  Al-Muzzammil",
  8711
 ],
 [
  "74.  Al-Muddatstsir",
  8712
 ],
 [
  "75.  Al-Qiyamah",
  8713
 ],
 [
  "76.  Al-Insan",
  8714
 ],
 [
  "77.  Al-Mursalat",
  8715
 ],
 [
  "78. An-Naba'",
  8716
 ],
 [
  "79. An-Nazi'at",
  8717
 ],
 [
  "80. 'Abasa",
  8718
 ],
 [
  "81. At-Takwir",
  8719
 ],
 [
  "82. Al-Infithar",
  8720
 ],
 [
  "83. Al-Muthaffifin",
  8721
 ],
 [
  "84. Al-Insyiqaq",
  8722
 ],
 [
  "85. Al-Buruj",
  8723
 ],
 [
  "86. Ath-Thariq",
  8724
 ],
 [
  "87. Al-A'la",
  8725
 ],
 [
  "88. Al-Ghasyiyah",
  8726
 ],
 [
  "89. Al-Fajr",
  8727
 ],
 [
  "90. Al-Balad",
  8728
 ],
 [
  "91. Asy-Syams",
  8729
 ],
 [
  "92. Al-Lail",
  8730
 ],
 [
  "93.Adh-Dhuha",
  8731
 ],
 [
  "94. Al-Insyirah",
  8732
 ],
 [
  "95. At-Tin",
  8733
 ],
 [
  "96. Al-'Alaq",
  8734
 ],
 [
  "97. Al-Qadr",
  8735
 ],
 [
  "98. Al-Bayyinah",
  8736
 ],
 [
  "99. Az-Zalzalah",
  8737
 ],
 [
  "100. Al-'Aadiyat",
  8738
 ],
 [
  "101. Al-Qari'ah",
  8739
 ],
 [
  "102. At-Takatsur",
  8740
 ],
 [
  "103. Al-'Ashr",
  8741
 ],
 [
  "104. Al-Humazah",
  8742
 ],
 [
  "105. Al-Fil",
  8743
 ],
 [
  "106. Quraisy",
  8744
 ],
 [
  "107. Al-Ma'un",
  8745
 ],
 [
  "108. Al-Kautsar",
  8746
 ],
 [
  "109. Al-Kafirun",
  8747
 ],
 [
  "110. An-Nashr",
  8748
 ],
 [
  "111. Al-Lahab",
  8749
 ],
 [
  "112. Al-Ikhlash",
  8750
 ],
 [
  "113. Al-Falaq",
  8751
 ],
 [
  "114. An-Nas",
  8752
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
    pageLength : 10
  });

} );
