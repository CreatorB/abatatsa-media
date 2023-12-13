document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  9877
 ],
 [
  "78. An-Naba'",
  9878
 ],
 [
  "79. An-Nazi'at",
  9879
 ],
 [
  "80. 'Abasa",
  9880
 ],
 [
  "81. At-Takwir",
  9881
 ],
 [
  "82. Al-Infithar",
  9882
 ],
 [
  "83. Al-Muthaffifin",
  9883
 ],
 [
  "84. Al-Insyiqaq",
  9884
 ],
 [
  "85. Al-Buruj",
  9885
 ],
 [
  "86. Ath-Thariq",
  9886
 ],
 [
  "87. Al-A'la",
  9887
 ],
 [
  "88. Al-Ghasyiyah",
  9888
 ],
 [
  "89. Al-Fajr",
  9889
 ],
 [
  "90. Al-Balad",
  9890
 ],
 [
  "91. Asy-Syams",
  9891
 ],
 [
  "92. Al-Lail",
  9892
 ],
 [
  "93.Adh-Dhuha",
  9893
 ],
 [
  "94. Al-Insyirah",
  9894
 ],
 [
  "95. At-Tin",
  9895
 ],
 [
  "96. Al-'Alaq",
  9896
 ],
 [
  "97. Al-Qadr",
  9897
 ],
 [
  "98. Al-Bayyinah",
  9898
 ],
 [
  "99. Az-Zalzalah",
  9899
 ],
 [
  "100. Al-'Aadiyat",
  9900
 ],
 [
  "101. Al-Qari'ah",
  9901
 ],
 [
  "102. At-Takatsur",
  9902
 ],
 [
  "103. Al-'Ashr",
  9903
 ],
 [
  "104. Al-Humazah",
  9904
 ],
 [
  "105. Al-Fil",
  9905
 ],
 [
  "106. Quraisy",
  9906
 ],
 [
  "107. Al-Ma'un",
  9907
 ],
 [
  "108. Al-Kautsar",
  9908
 ],
 [
  "109. Al-Kafirun",
  9909
 ],
 [
  "110. An-Nashr",
  9910
 ],
 [
  "111. Al-Lahab",
  9911
 ],
 [
  "112. Al-Ikhlash",
  9912
 ],
 [
  "113. Al-Falaq",
  9913
 ],
 [
  "114. An-Nas",
  9914
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
