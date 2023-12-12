document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "67.  Al-Mulk",
  8915
 ],
 [
  "68.  Al-Qalam",
  8916
 ],
 [
  "69.  Al-Haqqah",
  8917
 ],
 [
  "70.  Al-Ma'arij",
  8918
 ],
 [
  "71.  Nuh",
  8919
 ],
 [
  "72.  Al-Jin",
  8920
 ],
 [
  "73.  Al-Muzzammil",
  8921
 ],
 [
  "74.  Al-Muddatstsir",
  8922
 ],
 [
  "75.  Al-Qiyamah",
  8923
 ],
 [
  "76.  Al-Insan",
  8924
 ],
 [
  "77.  Al-Mursalat",
  8925
 ],
 [
  "78. An-Naba'",
  8926
 ],
 [
  "79. An-Nazi'at",
  8927
 ],
 [
  "80. 'Abasa",
  8928
 ],
 [
  "81. At-Takwir",
  8929
 ],
 [
  "82. Al-Infithar",
  8930
 ],
 [
  "83. Al-Muthaffifin",
  8931
 ],
 [
  "84. Al-Insyiqaq",
  8932
 ],
 [
  "85. Al-Buruj",
  8933
 ],
 [
  "86. Ath-Thariq",
  8934
 ],
 [
  "87. Al-A'la",
  8935
 ],
 [
  "88. Al-Ghasyiyah",
  8936
 ],
 [
  "89. Al-Fajr",
  8937
 ],
 [
  "90. Al-Balad",
  8938
 ],
 [
  "91. Asy-Syams",
  8939
 ],
 [
  "92. Al-Lail",
  8940
 ],
 [
  "93.Adh-Dhuha",
  8941
 ],
 [
  "94. Al-Insyirah",
  8942
 ],
 [
  "95. At-Tin",
  8943
 ],
 [
  "96. Al-'Alaq",
  8944
 ],
 [
  "97. Al-Qadr",
  8945
 ],
 [
  "98. Al-Bayyinah",
  8946
 ],
 [
  "99. Az-Zalzalah",
  8947
 ],
 [
  "100. Al-'Aadiyat",
  8948
 ],
 [
  "101. Al-Qari'ah",
  8949
 ],
 [
  "102. At-Takatsur",
  8950
 ],
 [
  "103. Al-'Ashr",
  8951
 ],
 [
  "104. Al-Humazah",
  8952
 ],
 [
  "105. Al-Fil",
  8953
 ],
 [
  "106. Quraisy",
  8954
 ],
 [
  "107. Al-Ma'un",
  8955
 ],
 [
  "108. Al-Kautsar",
  8956
 ],
 [
  "109. Al-Kafirun",
  8957
 ],
 [
  "110. An-Nashr",
  8958
 ],
 [
  "111. Al-Lahab",
  8959
 ],
 [
  "112. Al-Ikhlash",
  8960
 ],
 [
  "113. Al-Falaq",
  8961
 ],
 [
  "114. An-Nas",
  8962
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
