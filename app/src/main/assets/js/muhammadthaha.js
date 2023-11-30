document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  9598
 ],
 [
  "78. An-Naba'",
  9599
 ],
 [
  "79. An-Nazi'at",
  9600
 ],
 [
  "80. 'Abasa",
  9601
 ],
 [
  "81. At-Takwir",
  9602
 ],
 [
  "82. Al-Infithar",
  9603
 ],
 [
  "83. Al-Muthaffifin",
  9604
 ],
 [
  "84. Al-Insyiqaq",
  9605
 ],
 [
  "86. Ath-Thariq",
  9606
 ],
 [
  "87. Al-A'la",
  9607
 ],
 [
  "88. Al-Ghasyiyah",
  9608
 ],
 [
  "89. Al-Fajr",
  9609
 ],
 [
  "90. Al-Balad",
  9610
 ],
 [
  "91. Asy-Syams",
  9611
 ],
 [
  "92. Al-Lail",
  9612
 ],
 [
  "93.Adh-Dhuha",
  9613
 ],
 [
  "95. At-Tin",
  9614
 ],
 [
  "96. Al-'Alaq",
  9615
 ],
 [
  "98. Al-Bayyinah",
  9616
 ],
 [
  "99. Az-Zalzalah",
  9617
 ],
 [
  "100. Al-'Aadiyat",
  9618
 ],
 [
  "101. Al-Qari'ah",
  9619
 ],
 [
  "103. Al-'Ashr",
  9620
 ],
 [
  "104. Al-Humazah",
  9621
 ],
 [
  "105. Al-Fil",
  9622
 ],
 [
  "106. Quraisy",
  9623
 ],
 [
  "107. Al-Ma'un",
  9624
 ],
 [
  "108. Al-Kautsar",
  9625
 ],
 [
  "109. Al-Kafirun",
  9626
 ],
 [
  "110. An-Nashr",
  9627
 ],
 [
  "111. Al-Lahab",
  9628
 ],
 [
  "112. Al-Ikhlash",
  9629
 ],
 [
  "113. Al-Falaq",
  9630
 ],
 [
  "114. An-Nas",
  9631
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
