document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  8297
 ],
 [
  "2.  Al-Baqarah",
  8298
 ],
 [
  "3.  Ali 'Imran",
  8299
 ],
 [
  "4.  An-Nisa'",
  8300
 ],
 [
  "5.  Al-Ma`idah",
  8301
 ],
 [
  "6.  Al-An'am",
  8302
 ],
 [
  "7.  Al-A'raf",
  8303
 ],
 [
  "8.  Al-Anfal",
  8304
 ],
 [
  "9.  At-Taubah",
  8305
 ],
 [
  "10.  Yunus",
  8306
 ],
 [
  "11.  Hud",
  8307
 ],
 [
  "12.  Yusuf",
  8308
 ],
 [
  "13.  Ar-Ra'd",
  8309
 ],
 [
  "14.  Ibrahim",
  8310
 ],
 [
  "15.  Al-Hijr",
  8311
 ],
 [
  "16.  An-Nahl",
  8312
 ],
 [
  "17.  Al-Isra'",
  8313
 ],
 [
  "18.  Al-Kahfi",
  8314
 ],
 [
  "19.  Maryam",
  8315
 ],
 [
  "20.  Thaha",
  8316
 ],
 [
  "21.  Al-Anbiya'",
  8317
 ],
 [
  "22.  Al-Hajj",
  8318
 ],
 [
  "23.  Al-Mu'minun",
  8319
 ],
 [
  "24.  An-Nur",
  8320
 ],
 [
  "25.  Al-Furqan",
  8321
 ],
 [
  "26.  Asy-Syu'ara'",
  8322
 ],
 [
  "27.  An-Naml",
  8323
 ],
 [
  "28.  Al-Qashash",
  8324
 ],
 [
  "29.  Al-'Ankabut",
  8325
 ],
 [
  "30.  Ar-Rum",
  8326
 ],
 [
  "31.  Luqman",
  8327
 ],
 [
  "32.  As-Sajdah",
  8328
 ],
 [
  "33.  Al-Ahzab",
  8329
 ],
 [
  "34.  Saba'",
  8330
 ],
 [
  "35.  Fathir",
  8331
 ],
 [
  "36.  Yasin",
  8332
 ],
 [
  "37.  Ash-Shaffat",
  8333
 ],
 [
  "38.  Shad",
  8334
 ],
 [
  "39.  Az-Zumar",
  8335
 ],
 [
  "40. Ghafir",
  8336
 ],
 [
  "41.  Fushshilat",
  8337
 ],
 [
  "42.  Asy-Syura",
  8338
 ],
 [
  "43.  Az-Zukhruf",
  8339
 ],
 [
  "44.  Ad-Dukhan",
  8340
 ],
 [
  "45.  Al-Jatsiyah",
  8341
 ],
 [
  "46.  Al-Ahqaf",
  8342
 ],
 [
  "47.  Muhammad",
  8343
 ],
 [
  "48.  Al-Fath",
  8344
 ],
 [
  "49.  Al-Hujurat",
  8345
 ],
 [
  "50.  Qaf",
  8346
 ],
 [
  "51.  Adz-Dzariyat",
  8347
 ],
 [
  "52.  Ath-Thur",
  8348
 ],
 [
  "53.  An-Najm",
  8349
 ],
 [
  "54.  Al-Qamar",
  8350
 ],
 [
  "55.  Ar-Rahman",
  8351
 ],
 [
  "56.  Al-Waqi'ah",
  8352
 ],
 [
  "57.  Al-Hadid",
  8353
 ],
 [
  "58.  Al-Mujadilah",
  8354
 ],
 [
  "59.  Al-Hasyr",
  8355
 ],
 [
  "60.  Al-Mumtahanah",
  8356
 ],
 [
  "61.  Ash-Shaff",
  8357
 ],
 [
  "62.  Al-Jumu'ah",
  8358
 ],
 [
  "63.  Al-Munafiqun",
  8359
 ],
 [
  "64.  At-Taghabun",
  8360
 ],
 [
  "65.  Ath-Thalaq",
  8361
 ],
 [
  "66.  At-Tahrim",
  8362
 ],
 [
  "67.  Al-Mulk",
  8363
 ],
 [
  "68.  Al-Qalam",
  8364
 ],
 [
  "69.  Al-Haqqah",
  8365
 ],
 [
  "70.  Al-Ma'arij",
  8366
 ],
 [
  "71.  Nuh",
  8367
 ],
 [
  "72.  Al-Jin",
  8368
 ],
 [
  "73.  Al-Muzzammil",
  8369
 ],
 [
  "74.  Al-Muddatstsir",
  8370
 ],
 [
  "75.  Al-Qiyamah",
  8371
 ],
 [
  "76.  Al-Insan",
  8372
 ],
 [
  "77.  Al-Mursalat",
  8373
 ],
 [
  "78. An-Naba'",
  8374
 ],
 [
  "79. An-Nazi'at",
  8375
 ],
 [
  "80. 'Abasa",
  8376
 ],
 [
  "81. At-Takwir",
  8377
 ],
 [
  "82. Al-Infithar",
  8378
 ],
 [
  "83. Al-Muthaffifin",
  8379
 ],
 [
  "84. Al-Insyiqaq",
  8380
 ],
 [
  "85. Al-Buruj",
  8381
 ],
 [
  "86. Ath-Thariq",
  8382
 ],
 [
  "87. Al-A'la",
  8383
 ],
 [
  "88. Al-Ghasyiyah",
  8384
 ],
 [
  "89. Al-Fajr",
  8385
 ],
 [
  "90. Al-Balad",
  8386
 ],
 [
  "91. Asy-Syams",
  8387
 ],
 [
  "92. Al-Lail",
  8388
 ],
 [
  "93.Adh-Dhuha",
  8389
 ],
 [
  "94. Al-Insyirah",
  8390
 ],
 [
  "95. At-Tin",
  8391
 ],
 [
  "96. Al-'Alaq",
  8392
 ],
 [
  "97. Al-Qadr",
  8393
 ],
 [
  "98. Al-Bayyinah",
  8394
 ],
 [
  "99. Az-Zalzalah",
  8395
 ],
 [
  "100. Al-'Aadiyat",
  8396
 ],
 [
  "101. Al-Qari'ah",
  8397
 ],
 [
  "102. At-Takatsur",
  8398
 ],
 [
  "103. Al-'Ashr",
  8399
 ],
 [
  "104. Al-Humazah",
  8400
 ],
 [
  "105. Al-Fil",
  8401
 ],
 [
  "106. Quraisy",
  8402
 ],
 [
  "107. Al-Ma'un",
  8403
 ],
 [
  "108. Al-Kautsar",
  8404
 ],
 [
  "109. Al-Kafirun",
  8405
 ],
 [
  "110. An-Nashr",
  8406
 ],
 [
  "111. Al-Lahab",
  8407
 ],
 [
  "112. Al-Ikhlash",
  8408
 ],
 [
  "113. Al-Falaq",
  8409
 ],
 [
  "114. An-Nas",
  8410
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
