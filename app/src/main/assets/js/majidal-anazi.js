document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  9951
 ],
 [
  "67.  Al-Mulk",
  9952
 ],
 [
  "68.  Al-Qalam",
  9953
 ],
 [
  "69.  Al-Haqqah",
  9954
 ],
 [
  "70.  Al-Ma'arij",
  9955
 ],
 [
  "71.  Nuh",
  9956
 ],
 [
  "72.  Al-Jin",
  9957
 ],
 [
  "73.  Al-Muzzammil",
  9958
 ],
 [
  "74.  Al-Muddatstsir",
  9959
 ],
 [
  "75.  Al-Qiyamah",
  9960
 ],
 [
  "76.  Al-Insan",
  9961
 ],
 [
  "77.  Al-Mursalat",
  9962
 ],
 [
  "78. An-Naba'",
  9963
 ],
 [
  "79. An-Nazi'at",
  9964
 ],
 [
  "80. 'Abasa",
  9965
 ],
 [
  "81. At-Takwir",
  9966
 ],
 [
  "82. Al-Infithar",
  9967
 ],
 [
  "83. Al-Muthaffifin",
  9968
 ],
 [
  "84. Al-Insyiqaq",
  9969
 ],
 [
  "85. Al-Buruj",
  9970
 ],
 [
  "86. Ath-Thariq",
  9971
 ],
 [
  "87. Al-A'la",
  9972
 ],
 [
  "88. Al-Ghasyiyah",
  9973
 ],
 [
  "89. Al-Fajr",
  9974
 ],
 [
  "90. Al-Balad",
  9975
 ],
 [
  "91. Asy-Syams",
  9976
 ],
 [
  "92. Al-Lail",
  9977
 ],
 [
  "93.Adh-Dhuha",
  9978
 ],
 [
  "94. Al-Insyirah",
  9979
 ],
 [
  "95. At-Tin",
  9980
 ],
 [
  "96. Al-'Alaq",
  9981
 ],
 [
  "97. Al-Qadr",
  9982
 ],
 [
  "98. Al-Bayyinah",
  9983
 ],
 [
  "99. Az-Zalzalah",
  9984
 ],
 [
  "100. Al-'Aadiyat",
  9985
 ],
 [
  "101. Al-Qari'ah",
  9986
 ],
 [
  "102. At-Takatsur",
  9987
 ],
 [
  "103. Al-'Ashr",
  9988
 ],
 [
  "104. Al-Humazah",
  9989
 ],
 [
  "105. Al-Fil",
  9990
 ],
 [
  "106. Quraisy",
  9991
 ],
 [
  "107. Al-Ma'un",
  9992
 ],
 [
  "108. Al-Kautsar",
  9993
 ],
 [
  "109. Al-Kafirun",
  9994
 ],
 [
  "110. An-Nashr",
  9995
 ],
 [
  "111. Al-Lahab",
  9996
 ],
 [
  "112. Al-Ikhlash",
  9997
 ],
 [
  "113. Al-Falaq",
  9998
 ],
 [
  "114. An-Nas",
  9999
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
