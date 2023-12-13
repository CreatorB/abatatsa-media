document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "67.  Al-Mulk",
  9632
 ],
 [
  "68.  Al-Qalam",
  9633
 ],
 [
  "69.  Al-Haqqah",
  9634
 ],
 [
  "70.  Al-Ma'arij",
  9635
 ],
 [
  "71.  Nuh",
  9636
 ],
 [
  "72.  Al-Jin",
  9637
 ],
 [
  "73.  Al-Muzzammil",
  9638
 ],
 [
  "74.  Al-Muddatstsir",
  9639
 ],
 [
  "75.  Al-Qiyamah",
  9640
 ],
 [
  "76.  Al-Insan",
  9641
 ],
 [
  "77.  Al-Mursalat",
  9642
 ],
 [
  "78. An-Naba'",
  9643
 ],
 [
  "79. An-Nazi'at",
  9644
 ],
 [
  "80. 'Abasa",
  9645
 ],
 [
  "81. At-Takwir",
  9646
 ],
 [
  "82. Al-Infithar",
  9647
 ],
 [
  "83. Al-Muthaffifin",
  9648
 ],
 [
  "84. Al-Insyiqaq",
  9649
 ],
 [
  "85. Al-Buruj",
  9650
 ],
 [
  "86. Ath-Thariq",
  9651
 ],
 [
  "87. Al-A'la",
  9652
 ],
 [
  "88. Al-Ghasyiyah",
  9653
 ],
 [
  "89. Al-Fajr",
  9654
 ],
 [
  "90. Al-Balad",
  9655
 ],
 [
  "91. Asy-Syams",
  9656
 ],
 [
  "92. Al-Lail",
  9657
 ],
 [
  "93.Adh-Dhuha",
  9658
 ],
 [
  "94. Al-Insyirah",
  9659
 ],
 [
  "95. At-Tin",
  9660
 ],
 [
  "96. Al-'Alaq",
  9661
 ],
 [
  "97. Al-Qadr",
  9662
 ],
 [
  "98. Al-Bayyinah",
  9663
 ],
 [
  "99. Az-Zalzalah",
  9664
 ],
 [
  "100. Al-'Aadiyat",
  9665
 ],
 [
  "101. Al-Qari'ah",
  9666
 ],
 [
  "102. At-Takatsur",
  9667
 ],
 [
  "103. Al-'Ashr",
  9668
 ],
 [
  "104. Al-Humazah",
  9669
 ],
 [
  "105. Al-Fil",
  9670
 ],
 [
  "106. Quraisy",
  9671
 ],
 [
  "107. Al-Ma'un",
  9672
 ],
 [
  "108. Al-Kautsar",
  9673
 ],
 [
  "109. Al-Kafirun",
  9674
 ],
 [
  "110. An-Nashr",
  9675
 ],
 [
  "111. Al-Lahab",
  9676
 ],
 [
  "112. Al-Ikhlash",
  9677
 ],
 [
  "113. Al-Falaq",
  9678
 ],
 [
  "114. An-Nas",
  9679
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
