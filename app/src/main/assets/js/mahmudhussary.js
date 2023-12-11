document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  9424
 ],
 [
  "78. An-Naba'",
  9425
 ],
 [
  "79. An-Nazi'at",
  9426
 ],
 [
  "80. 'Abasa",
  9427
 ],
 [
  "81. At-Takwir",
  9428
 ],
 [
  "82. Al-Infithar",
  9429
 ],
 [
  "83. Al-Muthaffifin",
  9430
 ],
 [
  "84. Al-Insyiqaq",
  9431
 ],
 [
  "85. Al-Buruj",
  9432
 ],
 [
  "86. Ath-Thariq",
  9433
 ],
 [
  "87. Al-A'la",
  9434
 ],
 [
  "88. Al-Ghasyiyah",
  9435
 ],
 [
  "89. Al-Fajr",
  9436
 ],
 [
  "90. Al-Balad",
  9437
 ],
 [
  "91. Asy-Syams",
  9438
 ],
 [
  "92. Al-Lail",
  9439
 ],
 [
  "93.Adh-Dhuha",
  9440
 ],
 [
  "94. Al-Insyirah",
  9441
 ],
 [
  "95. At-Tin",
  9442
 ],
 [
  "96. Al-'Alaq",
  9443
 ],
 [
  "97. Al-Qadr",
  9444
 ],
 [
  "98. Al-Bayyinah",
  9445
 ],
 [
  "99. Az-Zalzalah",
  9446
 ],
 [
  "100. Al-'Aadiyat",
  9447
 ],
 [
  "101. Al-Qari'ah",
  9448
 ],
 [
  "102. At-Takatsur",
  9449
 ],
 [
  "103. Al-'Ashr",
  9450
 ],
 [
  "104. Al-Humazah",
  9451
 ],
 [
  "105. Al-Fil",
  9452
 ],
 [
  "106. Quraisy",
  9453
 ],
 [
  "107. Al-Ma'un",
  9454
 ],
 [
  "108. Al-Kautsar",
  9455
 ],
 [
  "109. Al-Kafirun",
  9456
 ],
 [
  "110. An-Nashr",
  9457
 ],
 [
  "111. Al-Lahab",
  9458
 ],
 [
  "112. Al-Ikhlash",
  9459
 ],
 [
  "113. Al-Falaq",
  9460
 ],
 [
  "114. An-Nas",
  9461
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
