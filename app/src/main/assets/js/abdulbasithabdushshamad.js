document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  9071
 ],
 [
  "78. An-Naba'",
  9072
 ],
 [
  "79. An-Nazi'at",
  9073
 ],
 [
  "80. 'Abasa",
  9074
 ],
 [
  "81. At-Takwir",
  9075
 ],
 [
  "82. Al-Infithar",
  9076
 ],
 [
  "83. Al-Muthaffifin",
  9077
 ],
 [
  "84. Al-Insyiqaq",
  9078
 ],
 [
  "85. Al-Buruj",
  9079
 ],
 [
  "86. Ath-Thariq",
  9080
 ],
 [
  "87. Al-A'la",
  9081
 ],
 [
  "88. Al-Ghasyiyah",
  9082
 ],
 [
  "89. Al-Fajr",
  9083
 ],
 [
  "90. Al-Balad",
  9084
 ],
 [
  "91. Asy-Syams",
  9085
 ],
 [
  "92. Al-Lail",
  9086
 ],
 [
  "93.Adh-Dhuha",
  9087
 ],
 [
  "94. Al-Insyirah",
  9088
 ],
 [
  "95. At-Tin",
  9089
 ],
 [
  "96. Al-'Alaq",
  9090
 ],
 [
  "97. Al-Qadr",
  9091
 ],
 [
  "98. Al-Bayyinah",
  9092
 ],
 [
  "99. Az-Zalzalah",
  9093
 ],
 [
  "100. Al-'Aadiyat",
  9094
 ],
 [
  "101. Al-Qari'ah",
  9095
 ],
 [
  "102. At-Takatsur",
  9096
 ],
 [
  "103. Al-'Ashr",
  9097
 ],
 [
  "104. Al-Humazah",
  9098
 ],
 [
  "105. Al-Fil",
  9099
 ],
 [
  "106. Quraisy",
  9100
 ],
 [
  "107. Al-Ma'un",
  9101
 ],
 [
  "108. Al-Kautsar",
  9102
 ],
 [
  "109. Al-Kafirun",
  9103
 ],
 [
  "110. An-Nashr",
  9104
 ],
 [
  "111. Al-Lahab",
  9105
 ],
 [
  "112. Al-Ikhlash",
  9106
 ],
 [
  "113. Al-Falaq",
  9107
 ],
 [
  "114. An-Nas",
  9108
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
