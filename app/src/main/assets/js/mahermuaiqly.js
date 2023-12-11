document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  719
 ],
 [
  "2.  Al-Baqarah",
  720
 ],
 [
  "3.  Ali 'Imran",
  721
 ],
 [
  "4.  An-Nisa'",
  722
 ],
 [
  "5.  Al-Ma`idah",
  723
 ],
 [
  "6.  Al-An'am",
  724
 ],
 [
  "7.  Al-A'raf",
  725
 ],
 [
  "8.  Al-Anfal",
  726
 ],
 [
  "9.  At-Taubah",
  727
 ],
 [
  "10.  Yunus",
  728
 ],
 [
  "11.  Hud",
  729
 ],
 [
  "12.  Yusuf",
  730
 ],
 [
  "13.  Ar-Ra'd",
  731
 ],
 [
  "14.  Ibrahim",
  732
 ],
 [
  "15.  Al-Hijr",
  733
 ],
 [
  "16.  An-Nahl",
  734
 ],
 [
  "17.  Al-Isra'",
  735
 ],
 [
  "18.  Al-Kahfi",
  736
 ],
 [
  "19.  Maryam",
  737
 ],
 [
  "20.  Thaha",
  738
 ],
 [
  "21.  Al-Anbiya'",
  739
 ],
 [
  "22.  Al-Hajj",
  740
 ],
 [
  "23.  Al-Mu'minun",
  741
 ],
 [
  "24.  An-Nur",
  742
 ],
 [
  "25.  Al-Furqan",
  743
 ],
 [
  "26.  Asy-Syu'ara'",
  744
 ],
 [
  "27.  An-Naml",
  745
 ],
 [
  "28.  Al-Qashash",
  746
 ],
 [
  "29.  Al-'Ankabut",
  747
 ],
 [
  "30.  Ar-Rum",
  748
 ],
 [
  "31.  Luqman",
  749
 ],
 [
  "32.  As-Sajdah",
  750
 ],
 [
  "33.  Al-Ahzab",
  751
 ],
 [
  "34.  Saba'",
  752
 ],
 [
  "35.  Fathir",
  753
 ],
 [
  "36.  Yasin",
  754
 ],
 [
  "37.  Ash-Shaffat",
  755
 ],
 [
  "38.  Shad",
  756
 ],
 [
  "39.  Az-Zumar",
  757
 ],
 [
  "40. Ghafir",
  758
 ],
 [
  "41.  Fushshilat",
  759
 ],
 [
  "42.  Asy-Syura",
  760
 ],
 [
  "43.  Az-Zukhruf",
  761
 ],
 [
  "44.  Ad-Dukhan",
  762
 ],
 [
  "45.  Al-Jatsiyah",
  763
 ],
 [
  "46.  Al-Ahqaf",
  764
 ],
 [
  "47.  Muhammad",
  765
 ],
 [
  "48.  Al-Fath",
  766
 ],
 [
  "49.  Al-Hujurat",
  767
 ],
 [
  "50.  Qaf",
  768
 ],
 [
  "51.  Adz-Dzariyat",
  769
 ],
 [
  "52.  Ath-Thur",
  770
 ],
 [
  "53.  An-Najm",
  771
 ],
 [
  "54.  Al-Qamar",
  772
 ],
 [
  "55.  Ar-Rahman",
  773
 ],
 [
  "56.  Al-Waqi'ah",
  774
 ],
 [
  "57.  Al-Hadid",
  775
 ],
 [
  "58.  Al-Mujadilah",
  776
 ],
 [
  "59.  Al-Hasyr",
  777
 ],
 [
  "60.  Al-Mumtahanah",
  778
 ],
 [
  "61.  Ash-Shaff",
  779
 ],
 [
  "62.  Al-Jumu'ah",
  780
 ],
 [
  "63.  Al-Munafiqun",
  781
 ],
 [
  "64.  At-Taghabun",
  782
 ],
 [
  "65.  Ath-Thalaq",
  783
 ],
 [
  "66.  At-Tahrim",
  784
 ],
 [
  "67.  Al-Mulk",
  785
 ],
 [
  "68.  Al-Qalam",
  786
 ],
 [
  "69.  Al-Haqqah",
  787
 ],
 [
  "70.  Al-Ma'arij",
  788
 ],
 [
  "71.  Nuh",
  789
 ],
 [
  "72.  Al-Jin",
  790
 ],
 [
  "73.  Al-Muzzammil",
  791
 ],
 [
  "74.  Al-Muddatstsir",
  792
 ],
 [
  "75.  Al-Qiyamah",
  793
 ],
 [
  "76.  Al-Insan",
  794
 ],
 [
  "77.  Al-Mursalat",
  795
 ],
 [
  "78. An-Naba'",
  796
 ],
 [
  "79. An-Nazi'at",
  797
 ],
 [
  "80. 'Abasa",
  798
 ],
 [
  "81. At-Takwir",
  799
 ],
 [
  "82. Al-Infithar",
  800
 ],
 [
  "83. Al-Muthaffifin",
  801
 ],
 [
  "84. Al-Insyiqaq",
  802
 ],
 [
  "85. Al-Buruj",
  803
 ],
 [
  "86. Ath-Thariq",
  804
 ],
 [
  "87. Al-A'la",
  805
 ],
 [
  "88. Al-Ghasyiyah",
  806
 ],
 [
  "89. Al-Fajr",
  807
 ],
 [
  "90. Al-Balad",
  808
 ],
 [
  "91. Asy-Syams",
  809
 ],
 [
  "92. Al-Lail",
  810
 ],
 [
  "93.Adh-Dhuha",
  811
 ],
 [
  "94. Al-Insyirah",
  812
 ],
 [
  "95. At-Tin",
  813
 ],
 [
  "96. Al-'Alaq",
  814
 ],
 [
  "97. Al-Qadr",
  815
 ],
 [
  "98. Al-Bayyinah",
  816
 ],
 [
  "99. Az-Zalzalah",
  817
 ],
 [
  "100. Al-'Aadiyat",
  818
 ],
 [
  "101. Al-Qari'ah",
  819
 ],
 [
  "102. At-Takatsur",
  820
 ],
 [
  "103. Al-'Ashr",
  821
 ],
 [
  "104. Al-Humazah",
  822
 ],
 [
  "105. Al-Fil",
  823
 ],
 [
  "106. Quraisy",
  824
 ],
 [
  "107. Al-Ma'un",
  825
 ],
 [
  "108. Al-Kautsar",
  826
 ],
 [
  "109. Al-Kafirun",
  827
 ],
 [
  "110. An-Nashr",
  828
 ],
 [
  "111. Al-Lahab",
  829
 ],
 [
  "112. Al-Ikhlash",
  830
 ],
 [
  "113. Al-Falaq",
  831
 ],
 [
  "114. An-Nas",
  832
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
     pagingType: 'numbers'
  });

} );
