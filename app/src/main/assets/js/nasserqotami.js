document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  9462
 ],
 [
  "67.  Al-Mulk",
  9463
 ],
 [
  "68.  Al-Qalam",
  9464
 ],
 [
  "69.  Al-Haqqah",
  9465
 ],
 [
  "70.  Al-Ma'arij",
  9466
 ],
 [
  "71.  Nuh",
  9467
 ],
 [
  "72.  Al-Jin",
  9468
 ],
 [
  "73.  Al-Muzzammil",
  9469
 ],
 [
  "74.  Al-Muddatstsir",
  9470
 ],
 [
  "75.  Al-Qiyamah",
  9471
 ],
 [
  "76.  Al-Insan",
  9472
 ],
 [
  "77.  Al-Mursalat",
  9473
 ],
 [
  "78. An-Naba'",
  9474
 ],
 [
  "79. An-Nazi'at",
  9475
 ],
 [
  "80. 'Abasa",
  9476
 ],
 [
  "81. At-Takwir",
  9477
 ],
 [
  "82. Al-Infithar",
  9478
 ],
 [
  "83. Al-Muthaffifin",
  9479
 ],
 [
  "84. Al-Insyiqaq",
  9480
 ],
 [
  "85. Al-Buruj",
  9481
 ],
 [
  "86. Ath-Thariq",
  9482
 ],
 [
  "87. Al-A'la",
  9483
 ],
 [
  "88. Al-Ghasyiyah",
  9484
 ],
 [
  "89. Al-Fajr",
  9485
 ],
 [
  "90. Al-Balad",
  9486
 ],
 [
  "91. Asy-Syams",
  9487
 ],
 [
  "92. Al-Lail",
  9488
 ],
 [
  "93.Adh-Dhuha",
  9489
 ],
 [
  "94. Al-Insyirah",
  9490
 ],
 [
  "95. At-Tin",
  9491
 ],
 [
  "96. Al-'Alaq",
  9492
 ],
 [
  "97. Al-Qadr",
  9493
 ],
 [
  "98. Al-Bayyinah",
  9494
 ],
 [
  "99. Az-Zalzalah",
  9495
 ],
 [
  "100. Al-'Aadiyat",
  9496
 ],
 [
  "101. Al-Qari'ah",
  9497
 ],
 [
  "102. At-Takatsur",
  9498
 ],
 [
  "103. Al-'Ashr",
  9499
 ],
 [
  "104. Al-Humazah",
  9500
 ],
 [
  "105. Al-Fil",
  9501
 ],
 [
  "106. Quraisy",
  9502
 ],
 [
  "107. Al-Ma'un",
  9503
 ],
 [
  "108. Al-Kautsar",
  9504
 ],
 [
  "109. Al-Kafirun",
  9505
 ],
 [
  "110. An-Nashr",
  9506
 ],
 [
  "111. Al-Lahab",
  9507
 ],
 [
  "112. Al-Ikhlash",
  9508
 ],
 [
  "113. Al-Falaq",
  9509
 ],
 [
  "114. An-Nas",
  9510
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
