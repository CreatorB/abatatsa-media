document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "78. An-Naba'",
  9000
 ],
 [
  "79. An-Nazi'at 1-25",
  9001
 ],
 [
  "80. 'Abasa",
  9002
 ],
 [
  "81. At-Takwir",
  9003
 ],
 [
  "82. Al-Infithar",
  9004
 ],
 [
  "83. Al-Muthaffifin",
  9005
 ],
 [
  "84. Al-Insyiqaq",
  9006
 ],
 [
  "85. Al-Buruj",
  9007
 ],
 [
  "86. Ath-Thariq",
  9008
 ],
 [
  "87. Al-A'la",
  9009
 ],
 [
  "88. Al-Ghasyiyah",
  9010
 ],
 [
  "89. Al-Fajr",
  9011
 ],
 [
  "90. Al-Balad",
  9012
 ],
 [
  "91. Asy-Syams",
  9013
 ],
 [
  "92. Al-Lail",
  9014
 ],
 [
  "93.Adh-Dhuha",
  9015
 ],
 [
  "94. Al-Insyirah",
  9016
 ],
 [
  "95. At-Tin",
  9017
 ],
 [
  "96. Al-'Alaq",
  9018
 ],
 [
  "97. Al-Qadr",
  9019
 ],
 [
  "98. Al-Bayyinah",
  9020
 ],
 [
  "98. Al-Bayyinah versi 2",
  9021
 ],
 [
  "99. Az-Zalzalah",
  9022
 ],
 [
  "100. Al-'Aadiyat",
  9023
 ],
 [
  "101. Al-Qari'ah",
  9024
 ],
 [
  "102. At-Takatsur",
  9025
 ],
 [
  "103. Al-'Ashr",
  9026
 ],
 [
  "104. Al-Humazah",
  9027
 ],
 [
  "105. Al-Fil",
  9028
 ],
 [
  "106. Quraisy",
  9029
 ],
 [
  "107. Al-Ma'un",
  9030
 ],
 [
  "108. Al-Kautsar",
  9031
 ],
 [
  "109. Al-Kafirun",
  9032
 ],
 [
  "110. An-Nashr",
  9033
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
    pagingType: 'numbers',
     pagingType: 'numbers'
  });

} );
