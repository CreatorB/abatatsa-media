document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "78. An-Naba'",
  8963
 ],
 [
  "79. An-Nazi'at",
  8964
 ],
 [
  "80. 'Abasa",
  8965
 ],
 [
  "81. At-Takwir",
  8966
 ],
 [
  "82. Al-Infithar",
  8967
 ],
 [
  "83. Al-Muthaffifin",
  8968
 ],
 [
  "84. Al-Insyiqaq",
  8969
 ],
 [
  "85. Al-Buruj",
  8970
 ],
 [
  "86. Ath-Thariq",
  8971
 ],
 [
  "87. Al-A'la",
  8972
 ],
 [
  "88. Al-Ghasyiyah",
  8973
 ],
 [
  "89. Al-Fajr",
  8974
 ],
 [
  "90. Al-Balad",
  8975
 ],
 [
  "91. Asy-Syams",
  8976
 ],
 [
  "92. Al-Lail",
  8977
 ],
 [
  "93.Adh-Dhuha",
  8978
 ],
 [
  "94. Al-Insyirah",
  8979
 ],
 [
  "95. At-Tin",
  8980
 ],
 [
  "96. Al-'Alaq",
  8981
 ],
 [
  "97. Al-Qadr",
  8982
 ],
 [
  "98. Al-Bayyinah",
  8983
 ],
 [
  "99. Az-Zalzalah",
  8984
 ],
 [
  "100. Al-'Aadiyat",
  8985
 ],
 [
  "101. Al-Qari'ah",
  8986
 ],
 [
  "102. At-Takatsur",
  8987
 ],
 [
  "103. Al-'Ashr",
  8988
 ],
 [
  "104. Al-Humazah",
  8989
 ],
 [
  "105. Al-Fil",
  8990
 ],
 [
  "106. Quraisy",
  8991
 ],
 [
  "107. Al-Ma'un",
  8992
 ],
 [
  "108. Al-Kautsar",
  8993
 ],
 [
  "109. Al-Kafirun",
  8994
 ],
 [
  "110. An-Nashr",
  8995
 ],
 [
  "111. Al-Lahab",
  8996
 ],
 [
  "112. Al-Ikhlash",
  8997
 ],
 [
  "113. Al-Falaq",
  8998
 ],
 [
  "114. An-Nas",
  8999
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
