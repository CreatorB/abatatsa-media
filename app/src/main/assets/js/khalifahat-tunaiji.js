document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  7955
 ],
 [
  "2.  Al-Baqarah",
  7956
 ],
 [
  "3.  Ali 'Imran",
  7957
 ],
 [
  "4.  An-Nisa'",
  7958
 ],
 [
  "5.  Al-Ma`idah",
  7959
 ],
 [
  "6.  Al-An'am",
  7960
 ],
 [
  "7.  Al-A'raf",
  7961
 ],
 [
  "8.  Al-Anfal",
  7962
 ],
 [
  "9.  At-Taubah",
  7963
 ],
 [
  "10.  Yunus",
  7964
 ],
 [
  "11.  Hud",
  7965
 ],
 [
  "12.  Yusuf",
  7966
 ],
 [
  "13.  Ar-Ra'd",
  7967
 ],
 [
  "14.  Ibrahim",
  7968
 ],
 [
  "15.  Al-Hijr",
  7969
 ],
 [
  "16.  An-Nahl",
  7970
 ],
 [
  "17.  Al-Isra'",
  7971
 ],
 [
  "18.  Al-Kahfi",
  7972
 ],
 [
  "19.  Maryam",
  7973
 ],
 [
  "20.  Thaha",
  7974
 ],
 [
  "21.  Al-Anbiya'",
  7975
 ],
 [
  "22.  Al-Hajj",
  7976
 ],
 [
  "23.  Al-Mu'minun",
  7977
 ],
 [
  "24.  An-Nur",
  7978
 ],
 [
  "25.  Al-Furqan",
  7979
 ],
 [
  "26.  Asy-Syu'ara'",
  7980
 ],
 [
  "27.  An-Naml",
  7981
 ],
 [
  "28.  Al-Qashash",
  7982
 ],
 [
  "29.  Al-'Ankabut",
  7983
 ],
 [
  "30.  Ar-Rum",
  7984
 ],
 [
  "31.  Luqman",
  7985
 ],
 [
  "32.  As-Sajdah",
  7986
 ],
 [
  "33.  Al-Ahzab",
  7987
 ],
 [
  "34.  Saba'",
  7988
 ],
 [
  "35.  Fathir",
  7989
 ],
 [
  "36.  Yasin",
  7990
 ],
 [
  "37.  Ash-Shaffat",
  7991
 ],
 [
  "38.  Shad",
  7992
 ],
 [
  "39.  Az-Zumar",
  7993
 ],
 [
  "40. Ghafir",
  7994
 ],
 [
  "41.  Fushshilat",
  7995
 ],
 [
  "42.  Asy-Syura",
  7996
 ],
 [
  "43.  Az-Zukhruf",
  7997
 ],
 [
  "44.  Ad-Dukhan",
  7998
 ],
 [
  "45.  Al-Jatsiyah",
  7999
 ],
 [
  "46.  Al-Ahqaf",
  8000
 ],
 [
  "47.  Muhammad",
  8001
 ],
 [
  "48.  Al-Fath",
  8002
 ],
 [
  "49.  Al-Hujurat",
  8003
 ],
 [
  "50.  Qaf",
  8004
 ],
 [
  "51.  Adz-Dzariyat",
  8005
 ],
 [
  "52.  Ath-Thur",
  8006
 ],
 [
  "53.  An-Najm",
  8007
 ],
 [
  "54.  Al-Qamar",
  8008
 ],
 [
  "55.  Ar-Rahman",
  8009
 ],
 [
  "56.  Al-Waqi'ah",
  8010
 ],
 [
  "57.  Al-Hadid",
  8011
 ],
 [
  "58.  Al-Mujadilah",
  8012
 ],
 [
  "59.  Al-Hasyr",
  8013
 ],
 [
  "60.  Al-Mumtahanah",
  8014
 ],
 [
  "61.  Ash-Shaff",
  8015
 ],
 [
  "62.  Al-Jumu'ah",
  8016
 ],
 [
  "63.  Al-Munafiqun",
  8017
 ],
 [
  "64.  At-Taghabun",
  8018
 ],
 [
  "65.  Ath-Thalaq",
  8019
 ],
 [
  "66.  At-Tahrim",
  8020
 ],
 [
  "67.  Al-Mulk",
  8021
 ],
 [
  "68.  Al-Qalam",
  8022
 ],
 [
  "69.  Al-Haqqah",
  8023
 ],
 [
  "70.  Al-Ma'arij",
  8024
 ],
 [
  "71.  Nuh",
  8025
 ],
 [
  "72.  Al-Jin",
  8026
 ],
 [
  "73.  Al-Muzzammil",
  8027
 ],
 [
  "74.  Al-Muddatstsir",
  8028
 ],
 [
  "75.  Al-Qiyamah",
  8029
 ],
 [
  "76.  Al-Insan",
  8030
 ],
 [
  "77.  Al-Mursalat",
  8031
 ],
 [
  "78. An-Naba'",
  8032
 ],
 [
  "79. An-Nazi'at",
  8033
 ],
 [
  "80. 'Abasa",
  8034
 ],
 [
  "81. At-Takwir",
  8035
 ],
 [
  "82. Al-Infithar",
  8036
 ],
 [
  "83. Al-Muthaffifin",
  8037
 ],
 [
  "84. Al-Insyiqaq",
  8038
 ],
 [
  "85. Al-Buruj",
  8039
 ],
 [
  "86. Ath-Thariq",
  8040
 ],
 [
  "87. Al-A'la",
  8041
 ],
 [
  "88. Al-Ghasyiyah",
  8042
 ],
 [
  "89. Al-Fajr",
  8043
 ],
 [
  "90. Al-Balad",
  8044
 ],
 [
  "91. Asy-Syams",
  8045
 ],
 [
  "92. Al-Lail",
  8046
 ],
 [
  "93.Adh-Dhuha",
  8047
 ],
 [
  "94. Al-Insyirah",
  8048
 ],
 [
  "95. At-Tin",
  8049
 ],
 [
  "96. Al-'Alaq",
  8050
 ],
 [
  "97. Al-Qadr",
  8051
 ],
 [
  "98. Al-Bayyinah",
  8052
 ],
 [
  "99. Az-Zalzalah",
  8053
 ],
 [
  "100. Al-'Aadiyat",
  8054
 ],
 [
  "101. Al-Qari'ah",
  8055
 ],
 [
  "102. At-Takatsur",
  8056
 ],
 [
  "103. Al-'Ashr",
  8057
 ],
 [
  "104. Al-Humazah",
  8058
 ],
 [
  "105. Al-Fil",
  8059
 ],
 [
  "106. Quraisy",
  8060
 ],
 [
  "107. Al-Ma'un",
  8061
 ],
 [
  "108. Al-Kautsar",
  8062
 ],
 [
  "109. Al-Kafirun",
  8063
 ],
 [
  "110. An-Nashr",
  8064
 ],
 [
  "111. Al-Lahab",
  8065
 ],
 [
  "112. Al-Ikhlash",
  8066
 ],
 [
  "113. Al-Falaq",
  8067
 ],
 [
  "114. An-Nas",
  8068
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
     
     pagingType: 'numbers'
  });

} );
