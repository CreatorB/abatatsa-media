document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  9839
 ],
 [
  "78. An-Naba'",
  9840
 ],
 [
  "79. An-Nazi'at",
  9841
 ],
 [
  "80. 'Abasa",
  9842
 ],
 [
  "81. At-Takwir",
  9843
 ],
 [
  "82. Al-Infithar",
  9844
 ],
 [
  "83. Al-Muthaffifin",
  9845
 ],
 [
  "84. Al-Insyiqaq",
  9846
 ],
 [
  "85. Al-Buruj",
  9847
 ],
 [
  "86. Ath-Thariq",
  9848
 ],
 [
  "87. Al-A'la",
  9849
 ],
 [
  "88. Al-Ghasyiyah",
  9850
 ],
 [
  "89. Al-Fajr",
  9851
 ],
 [
  "90. Al-Balad",
  9852
 ],
 [
  "91. Asy-Syams",
  9853
 ],
 [
  "92. Al-Lail",
  9854
 ],
 [
  "93.Adh-Dhuha",
  9855
 ],
 [
  "94. Al-Insyirah",
  9856
 ],
 [
  "95. At-Tin",
  9857
 ],
 [
  "96. Al-'Alaq",
  9858
 ],
 [
  "97. Al-Qadr",
  9859
 ],
 [
  "98. Al-Bayyinah",
  9860
 ],
 [
  "99. Az-Zalzalah",
  9861
 ],
 [
  "100. Al-'Aadiyat",
  9862
 ],
 [
  "101. Al-Qari'ah",
  9863
 ],
 [
  "102. At-Takatsur",
  9864
 ],
 [
  "103. Al-'Ashr",
  9865
 ],
 [
  "104. Al-Humazah",
  9866
 ],
 [
  "105. Al-Fil",
  9867
 ],
 [
  "106. Quraisy",
  9868
 ],
 [
  "107. Al-Ma'un",
  9869
 ],
 [
  "108. Al-Kautsar",
  9870
 ],
 [
  "109. Al-Kafirun",
  9871
 ],
 [
  "110. An-Nashr",
  9872
 ],
 [
  "111. Al-Lahab",
  9873
 ],
 [
  "112. Al-Ikhlash",
  9874
 ],
 [
  "113. Al-Falaq",
  9875
 ],
 [
  "114. An-Nas",
  9876
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
