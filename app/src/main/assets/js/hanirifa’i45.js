document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  8183
 ],
 [
  "2.  Al-Baqarah",
  8184
 ],
 [
  "3.  Ali 'Imran",
  8185
 ],
 [
  "4.  An-Nisa'",
  8186
 ],
 [
  "5.  Al-Ma`idah",
  8187
 ],
 [
  "6.  Al-An'am",
  8188
 ],
 [
  "7.  Al-A'raf",
  8189
 ],
 [
  "8.  Al-Anfal",
  8190
 ],
 [
  "9.  At-Taubah",
  8191
 ],
 [
  "10.  Yunus",
  8192
 ],
 [
  "11.  Hud",
  8193
 ],
 [
  "12.  Yusuf",
  8194
 ],
 [
  "13.  Ar-Ra'd",
  8195
 ],
 [
  "14.  Ibrahim",
  8196
 ],
 [
  "15.  Al-Hijr",
  8197
 ],
 [
  "16.  An-Nahl",
  8198
 ],
 [
  "17.  Al-Isra'",
  8199
 ],
 [
  "18.  Al-Kahfi",
  8200
 ],
 [
  "19.  Maryam",
  8201
 ],
 [
  "20.  Thaha",
  8202
 ],
 [
  "21.  Al-Anbiya'",
  8203
 ],
 [
  "22.  Al-Hajj",
  8204
 ],
 [
  "23.  Al-Mu'minun",
  8205
 ],
 [
  "24.  An-Nur",
  8206
 ],
 [
  "25.  Al-Furqan",
  8207
 ],
 [
  "26.  Asy-Syu'ara'",
  8208
 ],
 [
  "27.  An-Naml",
  8209
 ],
 [
  "28.  Al-Qashash",
  8210
 ],
 [
  "29.  Al-'Ankabut",
  8211
 ],
 [
  "30.  Ar-Rum",
  8212
 ],
 [
  "31.  Luqman",
  8213
 ],
 [
  "32.  As-Sajdah",
  8214
 ],
 [
  "33.  Al-Ahzab",
  8215
 ],
 [
  "34.  Saba'",
  8216
 ],
 [
  "35.  Fathir",
  8217
 ],
 [
  "36.  Yasin",
  8218
 ],
 [
  "37.  Ash-Shaffat",
  8219
 ],
 [
  "38.  Shad",
  8220
 ],
 [
  "39.  Az-Zumar",
  8221
 ],
 [
  "40. Ghafir",
  8222
 ],
 [
  "41.  Fushshilat",
  8223
 ],
 [
  "42.  Asy-Syura",
  8224
 ],
 [
  "43.  Az-Zukhruf",
  8225
 ],
 [
  "44.  Ad-Dukhan",
  8226
 ],
 [
  "45.  Al-Jatsiyah",
  8227
 ],
 [
  "46.  Al-Ahqaf",
  8228
 ],
 [
  "47.  Muhammad",
  8229
 ],
 [
  "48.  Al-Fath",
  8230
 ],
 [
  "49.  Al-Hujurat",
  8231
 ],
 [
  "50.  Qaf",
  8232
 ],
 [
  "51.  Adz-Dzariyat",
  8233
 ],
 [
  "52.  Ath-Thur",
  8234
 ],
 [
  "53.  An-Najm",
  8235
 ],
 [
  "54.  Al-Qamar",
  8236
 ],
 [
  "55.  Ar-Rahman",
  8237
 ],
 [
  "56.  Al-Waqi'ah",
  8238
 ],
 [
  "57.  Al-Hadid",
  8239
 ],
 [
  "58.  Al-Mujadilah",
  8240
 ],
 [
  "59.  Al-Hasyr",
  8241
 ],
 [
  "60.  Al-Mumtahanah",
  8242
 ],
 [
  "61.  Ash-Shaff",
  8243
 ],
 [
  "62.  Al-Jumu'ah",
  8244
 ],
 [
  "63.  Al-Munafiqun",
  8245
 ],
 [
  "64.  At-Taghabun",
  8246
 ],
 [
  "65.  Ath-Thalaq",
  8247
 ],
 [
  "66.  At-Tahrim",
  8248
 ],
 [
  "67.  Al-Mulk",
  8249
 ],
 [
  "68.  Al-Qalam",
  8250
 ],
 [
  "69.  Al-Haqqah",
  8251
 ],
 [
  "70.  Al-Ma'arij",
  8252
 ],
 [
  "71.  Nuh",
  8253
 ],
 [
  "72.  Al-Jin",
  8254
 ],
 [
  "73.  Al-Muzzammil",
  8255
 ],
 [
  "74.  Al-Muddatstsir",
  8256
 ],
 [
  "75.  Al-Qiyamah",
  8257
 ],
 [
  "76.  Al-Insan",
  8258
 ],
 [
  "77.  Al-Mursalat",
  8259
 ],
 [
  "78. An-Naba'",
  8260
 ],
 [
  "79. An-Nazi'at",
  8261
 ],
 [
  "80. 'Abasa",
  8262
 ],
 [
  "81. At-Takwir",
  8263
 ],
 [
  "82. Al-Infithar",
  8264
 ],
 [
  "83. Al-Muthaffifin",
  8265
 ],
 [
  "84. Al-Insyiqaq",
  8266
 ],
 [
  "85. Al-Buruj",
  8267
 ],
 [
  "86. Ath-Thariq",
  8268
 ],
 [
  "87. Al-A'la",
  8269
 ],
 [
  "88. Al-Ghasyiyah",
  8270
 ],
 [
  "89. Al-Fajr",
  8271
 ],
 [
  "90. Al-Balad",
  8272
 ],
 [
  "91. Asy-Syams",
  8273
 ],
 [
  "92. Al-Lail",
  8274
 ],
 [
  "93.Adh-Dhuha",
  8275
 ],
 [
  "94. Al-Insyirah",
  8276
 ],
 [
  "95. At-Tin",
  8277
 ],
 [
  "96. Al-'Alaq",
  8278
 ],
 [
  "97. Al-Qadr",
  8279
 ],
 [
  "98. Al-Bayyinah",
  8280
 ],
 [
  "99. Az-Zalzalah",
  8281
 ],
 [
  "100. Al-'Aadiyat",
  8282
 ],
 [
  "101. Al-Qari'ah",
  8283
 ],
 [
  "102. At-Takatsur",
  8284
 ],
 [
  "103. Al-'Ashr",
  8285
 ],
 [
  "104. Al-Humazah",
  8286
 ],
 [
  "105. Al-Fil",
  8287
 ],
 [
  "106. Quraisy",
  8288
 ],
 [
  "107. Al-Ma'un",
  8289
 ],
 [
  "108. Al-Kautsar",
  8290
 ],
 [
  "109. Al-Kafirun",
  8291
 ],
 [
  "110. An-Nashr",
  8292
 ],
 [
  "111. Al-Lahab",
  8293
 ],
 [
  "112. Al-Ikhlash",
  8294
 ],
 [
  "113. Al-Falaq",
  8295
 ],
 [
  "114. An-Nas",
  8296
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