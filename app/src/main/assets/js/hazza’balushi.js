document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  9348
 ],
 [
  "78. An-Naba'",
  9349
 ],
 [
  "79. An-Nazi'at",
  9350
 ],
 [
  "80. 'Abasa",
  9351
 ],
 [
  "81. At-Takwir",
  9352
 ],
 [
  "82. Al-Infithar",
  9353
 ],
 [
  "83. Al-Muthaffifin",
  9354
 ],
 [
  "84. Al-Insyiqaq",
  9355
 ],
 [
  "85. Al-Buruj",
  9356
 ],
 [
  "86. Ath-Thariq",
  9357
 ],
 [
  "87. Al-A'la",
  9358
 ],
 [
  "88. Al-Ghasyiyah",
  9359
 ],
 [
  "89. Al-Fajr",
  9360
 ],
 [
  "90. Al-Balad",
  9361
 ],
 [
  "91. Asy-Syams",
  9362
 ],
 [
  "92. Al-Lail",
  9363
 ],
 [
  "93.Adh-Dhuha",
  9364
 ],
 [
  "94. Al-Insyirah",
  9365
 ],
 [
  "95. At-Tin",
  9366
 ],
 [
  "96. Al-'Alaq",
  9367
 ],
 [
  "97. Al-Qadr",
  9368
 ],
 [
  "98. Al-Bayyinah",
  9369
 ],
 [
  "99. Az-Zalzalah",
  9370
 ],
 [
  "100. Al-'Aadiyat",
  9371
 ],
 [
  "101. Al-Qari'ah",
  9372
 ],
 [
  "102. At-Takatsur",
  9373
 ],
 [
  "103. Al-'Ashr",
  9374
 ],
 [
  "104. Al-Humazah",
  9375
 ],
 [
  "105. Al-Fil",
  9376
 ],
 [
  "106. Quraisy",
  9377
 ],
 [
  "107. Al-Ma'un",
  9378
 ],
 [
  "108. Al-Kautsar",
  9379
 ],
 [
  "109. Al-Kafirun",
  9380
 ],
 [
  "110. An-Nashr",
  9381
 ],
 [
  "111. Al-Lahab",
  9382
 ],
 [
  "112. Al-Ikhlash",
  9383
 ],
 [
  "113. Al-Falaq",
  9384
 ],
 [
  "114. An-Nas",
  9385
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
