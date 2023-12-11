document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  8069
 ],
 [
  "2.  Al-Baqarah",
  8070
 ],
 [
  "3.  Ali 'Imran",
  8071
 ],
 [
  "4.  An-Nisa'",
  8072
 ],
 [
  "5.  Al-Ma`idah",
  8073
 ],
 [
  "6.  Al-An'am",
  8074
 ],
 [
  "7.  Al-A'raf",
  8075
 ],
 [
  "8.  Al-Anfal",
  8076
 ],
 [
  "9.  At-Taubah",
  8077
 ],
 [
  "10.  Yunus",
  8078
 ],
 [
  "11.  Hud",
  8079
 ],
 [
  "12.  Yusuf",
  8080
 ],
 [
  "13.  Ar-Ra'd",
  8081
 ],
 [
  "14.  Ibrahim",
  8082
 ],
 [
  "15.  Al-Hijr",
  8083
 ],
 [
  "16.  An-Nahl",
  8084
 ],
 [
  "17.  Al-Isra'",
  8085
 ],
 [
  "18.  Al-Kahfi",
  8086
 ],
 [
  "19.  Maryam",
  8087
 ],
 [
  "20.  Thaha",
  8088
 ],
 [
  "21.  Al-Anbiya'",
  8089
 ],
 [
  "22.  Al-Hajj",
  8090
 ],
 [
  "23.  Al-Mu'minun",
  8091
 ],
 [
  "24.  An-Nur",
  8092
 ],
 [
  "25.  Al-Furqan",
  8093
 ],
 [
  "26.  Asy-Syu'ara'",
  8094
 ],
 [
  "27.  An-Naml",
  8095
 ],
 [
  "28.  Al-Qashash",
  8096
 ],
 [
  "29.  Al-'Ankabut",
  8097
 ],
 [
  "30.  Ar-Rum",
  8098
 ],
 [
  "31.  Luqman",
  8099
 ],
 [
  "32.  As-Sajdah",
  8100
 ],
 [
  "33.  Al-Ahzab",
  8101
 ],
 [
  "34.  Saba'",
  8102
 ],
 [
  "35.  Fathir",
  8103
 ],
 [
  "36.  Yasin",
  8104
 ],
 [
  "37.  Ash-Shaffat",
  8105
 ],
 [
  "38.  Shad",
  8106
 ],
 [
  "39.  Az-Zumar",
  8107
 ],
 [
  "40. Ghafir",
  8108
 ],
 [
  "41.  Fushshilat",
  8109
 ],
 [
  "42.  Asy-Syura",
  8110
 ],
 [
  "43.  Az-Zukhruf",
  8111
 ],
 [
  "44.  Ad-Dukhan",
  8112
 ],
 [
  "45.  Al-Jatsiyah",
  8113
 ],
 [
  "46.  Al-Ahqaf",
  8114
 ],
 [
  "47.  Muhammad",
  8115
 ],
 [
  "48.  Al-Fath",
  8116
 ],
 [
  "49.  Al-Hujurat",
  8117
 ],
 [
  "50.  Qaf",
  8118
 ],
 [
  "51.  Adz-Dzariyat",
  8119
 ],
 [
  "52.  Ath-Thur",
  8120
 ],
 [
  "53.  An-Najm",
  8121
 ],
 [
  "54.  Al-Qamar",
  8122
 ],
 [
  "55.  Ar-Rahman",
  8123
 ],
 [
  "56.  Al-Waqi'ah",
  8124
 ],
 [
  "57.  Al-Hadid",
  8125
 ],
 [
  "58.  Al-Mujadilah",
  8126
 ],
 [
  "59.  Al-Hasyr",
  8127
 ],
 [
  "60.  Al-Mumtahanah",
  8128
 ],
 [
  "61.  Ash-Shaff",
  8129
 ],
 [
  "62.  Al-Jumu'ah",
  8130
 ],
 [
  "63.  Al-Munafiqun",
  8131
 ],
 [
  "64.  At-Taghabun",
  8132
 ],
 [
  "65.  Ath-Thalaq",
  8133
 ],
 [
  "66.  At-Tahrim",
  8134
 ],
 [
  "67.  Al-Mulk",
  8135
 ],
 [
  "68.  Al-Qalam",
  8136
 ],
 [
  "69.  Al-Haqqah",
  8137
 ],
 [
  "70.  Al-Ma'arij",
  8138
 ],
 [
  "71.  Nuh",
  8139
 ],
 [
  "72.  Al-Jin",
  8140
 ],
 [
  "73.  Al-Muzzammil",
  8141
 ],
 [
  "74.  Al-Muddatstsir",
  8142
 ],
 [
  "75.  Al-Qiyamah",
  8143
 ],
 [
  "76.  Al-Insan",
  8144
 ],
 [
  "77.  Al-Mursalat",
  8145
 ],
 [
  "78. An-Naba'",
  8146
 ],
 [
  "79. An-Nazi'at",
  8147
 ],
 [
  "80. 'Abasa",
  8148
 ],
 [
  "81. At-Takwir",
  8149
 ],
 [
  "82. Al-Infithar",
  8150
 ],
 [
  "83. Al-Muthaffifin",
  8151
 ],
 [
  "84. Al-Insyiqaq",
  8152
 ],
 [
  "85. Al-Buruj",
  8153
 ],
 [
  "86. Ath-Thariq",
  8154
 ],
 [
  "87. Al-A'la",
  8155
 ],
 [
  "88. Al-Ghasyiyah",
  8156
 ],
 [
  "89. Al-Fajr",
  8157
 ],
 [
  "90. Al-Balad",
  8158
 ],
 [
  "91. Asy-Syams",
  8159
 ],
 [
  "92. Al-Lail",
  8160
 ],
 [
  "93.Adh-Dhuha",
  8161
 ],
 [
  "94. Al-Insyirah",
  8162
 ],
 [
  "95. At-Tin",
  8163
 ],
 [
  "96. Al-'Alaq",
  8164
 ],
 [
  "97. Al-Qadr",
  8165
 ],
 [
  "98. Al-Bayyinah",
  8166
 ],
 [
  "99. Az-Zalzalah",
  8167
 ],
 [
  "100. Al-'Aadiyat",
  8168
 ],
 [
  "101. Al-Qari'ah",
  8169
 ],
 [
  "102. At-Takatsur",
  8170
 ],
 [
  "103. Al-'Ashr",
  8171
 ],
 [
  "104. Al-Humazah",
  8172
 ],
 [
  "105. Al-Fil",
  8173
 ],
 [
  "106. Quraisy",
  8174
 ],
 [
  "107. Al-Ma'un",
  8175
 ],
 [
  "108. Al-Kautsar",
  8176
 ],
 [
  "109. Al-Kafirun",
  8177
 ],
 [
  "110. An-Nashr",
  8178
 ],
 [
  "111. Al-Lahab",
  8179
 ],
 [
  "112. Al-Ikhlash",
  8180
 ],
 [
  "113. Al-Falaq",
  8181
 ],
 [
  "114. An-Nas",
  8182
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
