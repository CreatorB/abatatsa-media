document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "78. An-Naba'",
  9034
 ],
 [
  "79. An-Nazi'at",
  9035
 ],
 [
  "80. 'Abasa",
  9036
 ],
 [
  "81. At-Takwir",
  9037
 ],
 [
  "82. Al-Infithar",
  9038
 ],
 [
  "83. Al-Muthaffifin",
  9039
 ],
 [
  "84. Al-Insyiqaq",
  9040
 ],
 [
  "85. Al-Buruj",
  9041
 ],
 [
  "86. Ath-Thariq",
  9042
 ],
 [
  "87. Al-A'la",
  9043
 ],
 [
  "88. Al-Ghasyiyah",
  9044
 ],
 [
  "89. Al-Fajr",
  9045
 ],
 [
  "90. Al-Balad",
  9046
 ],
 [
  "91. Asy-Syams",
  9047
 ],
 [
  "92. Al-Lail",
  9048
 ],
 [
  "93.Adh-Dhuha",
  9049
 ],
 [
  "94. Al-Insyirah",
  9050
 ],
 [
  "95. At-Tin",
  9051
 ],
 [
  "96. Al-'Alaq",
  9052
 ],
 [
  "97. Al-Qadr",
  9053
 ],
 [
  "98. Al-Bayyinah",
  9054
 ],
 [
  "99. Az-Zalzalah",
  9055
 ],
 [
  "100. Al-'Aadiyat",
  9056
 ],
 [
  "101. Al-Qari'ah",
  9057
 ],
 [
  "102. At-Takatsur",
  9058
 ],
 [
  "103. Al-'Ashr",
  9059
 ],
 [
  "104. Al-Humazah",
  9060
 ],
 [
  "105. Al-Fil",
  9061
 ],
 [
  "106. Quraisy",
  9062
 ],
 [
  "107. Al-Ma'un",
  9063
 ],
 [
  "108. Al-Kautsar",
  9064
 ],
 [
  "109. Al-Kafirun",
  9065
 ],
 [
  "110. An-Nashr",
  9066
 ],
 [
  "111. Al-Lahab",
  9067
 ],
 [
  "112. Al-Ikhlash",
  9068
 ],
 [
  "113. Al-Falaq",
  9069
 ],
 [
  "114. An-Nas",
  9070
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
