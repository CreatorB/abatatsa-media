document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  9147
 ],
 [
  "78. An-Naba'",
  9148
 ],
 [
  "79. An-Nazi'at",
  9149
 ],
 [
  "80. 'Abasa",
  9150
 ],
 [
  "81. At-Takwir",
  9151
 ],
 [
  "82. Al-Infithar",
  9152
 ],
 [
  "83. Al-Muthaffifin",
  9153
 ],
 [
  "84. Al-Insyiqaq",
  9154
 ],
 [
  "85. Al-Buruj",
  9155
 ],
 [
  "86. Ath-Thariq",
  9156
 ],
 [
  "87. Al-A'la",
  9157
 ],
 [
  "88. Al-Ghasyiyah",
  9158
 ],
 [
  "89. Al-Fajr",
  9159
 ],
 [
  "90. Al-Balad",
  9160
 ],
 [
  "91. Asy-Syams",
  9161
 ],
 [
  "92. Al-Lail",
  9162
 ],
 [
  "93.Adh-Dhuha",
  9163
 ],
 [
  "94. Al-Insyirah",
  9164
 ],
 [
  "95. At-Tin",
  9165
 ],
 [
  "96. Al-'Alaq",
  9166
 ],
 [
  "97. Al-Qadr",
  9167
 ],
 [
  "98. Al-Bayyinah",
  9168
 ],
 [
  "99. Az-Zalzalah",
  9169
 ],
 [
  "100. Al-'Aadiyat",
  9170
 ],
 [
  "101. Al-Qari'ah",
  9171
 ],
 [
  "102. At-Takatsur",
  9172
 ],
 [
  "103. Al-'Ashr",
  9173
 ],
 [
  "104. Al-Humazah",
  9174
 ],
 [
  "105. Al-Fil",
  9175
 ],
 [
  "106. Quraisy",
  9176
 ],
 [
  "107. Al-Ma'un",
  9177
 ],
 [
  "108. Al-Kautsar",
  9178
 ],
 [
  "109. Al-Kafirun",
  9179
 ],
 [
  "110. An-Nashr",
  9180
 ],
 [
  "111. Al-Lahab",
  9181
 ],
 [
  "112. Al-Ikhlash",
  9182
 ],
 [
  "113. Al-Falaq",
  9183
 ],
 [
  "114. An-Nas",
  9184
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
