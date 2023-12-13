document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  9511
 ],
 [
  "67.  Al-Mulk",
  9512
 ],
 [
  "68.  Al-Qalam",
  9513
 ],
 [
  "69.  Al-Haqqah",
  9514
 ],
 [
  "70.  Al-Ma'arij",
  9515
 ],
 [
  "71.  Nuh",
  9516
 ],
 [
  "72.  Al-Jin",
  9517
 ],
 [
  "73.  Al-Muzzammil",
  9518
 ],
 [
  "74.  Al-Muddatstsir",
  9519
 ],
 [
  "75.  Al-Qiyamah",
  9520
 ],
 [
  "76.  Al-Insan",
  9521
 ],
 [
  "77.  Al-Mursalat",
  9522
 ],
 [
  "78. An-Naba'",
  9523
 ],
 [
  "79. An-Nazi'at",
  9524
 ],
 [
  "80. 'Abasa",
  9525
 ],
 [
  "81. At-Takwir",
  9526
 ],
 [
  "82. Al-Infithar",
  9527
 ],
 [
  "83. Al-Muthaffifin",
  9528
 ],
 [
  "84. Al-Insyiqaq",
  9529
 ],
 [
  "85. Al-Buruj",
  9530
 ],
 [
  "86. Ath-Thariq",
  9531
 ],
 [
  "87. Al-A'la",
  9532
 ],
 [
  "88. Al-Ghasyiyah",
  9533
 ],
 [
  "89. Al-Fajr",
  9534
 ],
 [
  "90. Al-Balad",
  9535
 ],
 [
  "91. Asy-Syams",
  9536
 ],
 [
  "92. Al-Lail",
  9537
 ],
 [
  "93.Adh-Dhuha",
  9538
 ],
 [
  "94. Al-Insyirah",
  9539
 ],
 [
  "95. At-Tin",
  9540
 ],
 [
  "96. Al-'Alaq",
  9541
 ],
 [
  "97. Al-Qadr",
  9542
 ],
 [
  "98. Al-Bayyinah",
  9543
 ],
 [
  "99. Az-Zalzalah",
  9544
 ],
 [
  "100. Al-'Aadiyat",
  9545
 ],
 [
  "101. Al-Qari'ah",
  9546
 ],
 [
  "102. At-Takatsur",
  9547
 ],
 [
  "103. Al-'Ashr",
  9548
 ],
 [
  "104. Al-Humazah",
  9549
 ],
 [
  "105. Al-Fil",
  9550
 ],
 [
  "106. Quraisy",
  9551
 ],
 [
  "107. Al-Ma'un",
  9552
 ],
 [
  "108. Al-Kautsar",
  9553
 ],
 [
  "109. Al-Kafirun",
  9554
 ],
 [
  "110. An-Nashr",
  9555
 ],
 [
  "111. Al-Lahab",
  9556
 ],
 [
  "112. Al-Ikhlash",
  9557
 ],
 [
  "113. Al-Falaq",
  9558
 ],
 [
  "114. An-Nas",
  9559
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
