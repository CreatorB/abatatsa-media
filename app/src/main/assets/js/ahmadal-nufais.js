document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  9223
 ],
 [
  "78. An-Naba'",
  9224
 ],
 [
  "79. An-Nazi'at",
  9225
 ],
 [
  "80. 'Abasa",
  9226
 ],
 [
  "81. At-Takwir",
  9227
 ],
 [
  "82. Al-Infithar",
  9228
 ],
 [
  "83. Al-Muthaffifin",
  9229
 ],
 [
  "84. Al-Insyiqaq",
  9230
 ],
 [
  "85. Al-Buruj",
  9231
 ],
 [
  "86. Ath-Thariq",
  9232
 ],
 [
  "87. Al-A'la",
  9233
 ],
 [
  "88. Al-Ghasyiyah",
  9234
 ],
 [
  "89. Al-Fajr",
  9235
 ],
 [
  "90. Al-Balad",
  9236
 ],
 [
  "91. Asy-Syams",
  9237
 ],
 [
  "92. Al-Lail",
  9238
 ],
 [
  "93.Adh-Dhuha",
  9239
 ],
 [
  "94. Al-Insyirah",
  9240
 ],
 [
  "95. At-Tin",
  9241
 ],
 [
  "96. Al-'Alaq",
  9242
 ],
 [
  "97. Al-Qadr",
  9243
 ],
 [
  "98. Al-Bayyinah",
  9244
 ],
 [
  "99. Az-Zalzalah",
  9245
 ],
 [
  "100. Al-'Aadiyat",
  9246
 ],
 [
  "101. Al-Qari'ah",
  9247
 ],
 [
  "102. At-Takatsur",
  9248
 ],
 [
  "103. Al-'Ashr",
  9249
 ],
 [
  "104. Al-Humazah",
  9250
 ],
 [
  "105. Al-Fil",
  9251
 ],
 [
  "106. Quraisy",
  9252
 ],
 [
  "107. Al-Ma'un",
  9253
 ],
 [
  "108. Al-Kautsar",
  9254
 ],
 [
  "109. Al-Kafirun",
  9255
 ],
 [
  "110. An-Nashr",
  9256
 ],
 [
  "111. Al-Lahab",
  9257
 ],
 [
  "112. Al-Ikhlash",
  9258
 ],
 [
  "113. Al-Falaq",
  9259
 ],
 [
  "114. An-Nas",
  9260
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
