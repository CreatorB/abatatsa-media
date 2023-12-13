document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  9185
 ],
 [
  "78. An-Naba'",
  9186
 ],
 [
  "79. An-Nazi'at",
  9187
 ],
 [
  "80. 'Abasa",
  9188
 ],
 [
  "81. At-Takwir",
  9189
 ],
 [
  "82. Al-Infithar",
  9190
 ],
 [
  "83. Al-Muthaffifin",
  9191
 ],
 [
  "84. Al-Insyiqaq",
  9192
 ],
 [
  "85. Al-Buruj",
  9193
 ],
 [
  "86. Ath-Thariq",
  9194
 ],
 [
  "87. Al-A'la",
  9195
 ],
 [
  "88. Al-Ghasyiyah",
  9196
 ],
 [
  "89. Al-Fajr",
  9197
 ],
 [
  "90. Al-Balad",
  9198
 ],
 [
  "91. Asy-Syams",
  9199
 ],
 [
  "92. Al-Lail",
  9200
 ],
 [
  "93.Adh-Dhuha",
  9201
 ],
 [
  "94. Al-Insyirah",
  9202
 ],
 [
  "95. At-Tin",
  9203
 ],
 [
  "96. Al-'Alaq",
  9204
 ],
 [
  "97. Al-Qadr",
  9205
 ],
 [
  "98. Al-Bayyinah",
  9206
 ],
 [
  "99. Az-Zalzalah",
  9207
 ],
 [
  "100. Al-'Aadiyat",
  9208
 ],
 [
  "101. Al-Qari'ah",
  9209
 ],
 [
  "102. At-Takatsur",
  9210
 ],
 [
  "103. Al-'Ashr",
  9211
 ],
 [
  "104. Al-Humazah",
  9212
 ],
 [
  "105. Al-Fil",
  9213
 ],
 [
  "106. Quraisy",
  9214
 ],
 [
  "107. Al-Ma'un",
  9215
 ],
 [
  "108. Al-Kautsar",
  9216
 ],
 [
  "109. Al-Kafirun",
  9217
 ],
 [
  "110. An-Nashr",
  9218
 ],
 [
  "111. Al-Lahab",
  9219
 ],
 [
  "112. Al-Ikhlash",
  9220
 ],
 [
  "113. Al-Falaq",
  9221
 ],
 [
  "114. An-Nas",
  9222
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
