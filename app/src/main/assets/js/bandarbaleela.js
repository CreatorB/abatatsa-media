document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  9261
 ],
 [
  "78. An-Naba'",
  9262
 ],
 [
  "79. An-Nazi'at",
  9263
 ],
 [
  "80. 'Abasa",
  9264
 ],
 [
  "81. At-Takwir",
  9265
 ],
 [
  "82. Al-Infithar",
  9266
 ],
 [
  "83. Al-Muthaffifin",
  9267
 ],
 [
  "84. Al-Insyiqaq",
  9268
 ],
 [
  "85. Al-Buruj",
  9269
 ],
 [
  "86. Ath-Thariq",
  9270
 ],
 [
  "87. Al-A'la",
  9271
 ],
 [
  "88. Al-Ghasyiyah",
  9272
 ],
 [
  "89. Al-Fajr",
  9273
 ],
 [
  "90. Al-Balad",
  9274
 ],
 [
  "91. Asy-Syams",
  9275
 ],
 [
  "92. Al-Lail",
  9276
 ],
 [
  "93.Adh-Dhuha",
  9277
 ],
 [
  "94. Al-Insyirah",
  9278
 ],
 [
  "95. At-Tin",
  9279
 ],
 [
  "96. Al-'Alaq",
  9280
 ],
 [
  "97. Al-Qadr",
  9281
 ],
 [
  "98. Al-Bayyinah",
  9282
 ],
 [
  "99. Az-Zalzalah",
  9283
 ],
 [
  "100. Al-'Aadiyat",
  9284
 ],
 [
  "101. Al-Qari'ah",
  9285
 ],
 [
  "102. At-Takatsur",
  9286
 ],
 [
  "103. Al-'Ashr",
  9287
 ],
 [
  "104. Al-Humazah",
  9288
 ],
 [
  "105. Al-Fil",
  9289
 ],
 [
  "106. Quraisy",
  9290
 ],
 [
  "107. Al-Ma'un",
  9291
 ],
 [
  "108. Al-Kautsar",
  9292
 ],
 [
  "109. Al-Kafirun",
  9293
 ],
 [
  "110. An-Nashr",
  9294
 ],
 [
  "111. Al-Lahab",
  9295
 ],
 [
  "112. Al-Ikhlash",
  9296
 ],
 [
  "113. Al-Falaq",
  9297
 ],
 [
  "114. An-Nas",
  9298
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
