document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "67.  Al-Mulk",
  8867
 ],
 [
  "68.  Al-Qalam",
  8868
 ],
 [
  "69.  Al-Haqqah",
  8869
 ],
 [
  "70.  Al-Ma'arij",
  8870
 ],
 [
  "71.  Nuh",
  8871
 ],
 [
  "72.  Al-Jin",
  8872
 ],
 [
  "73.  Al-Muzzammil",
  8873
 ],
 [
  "74.  Al-Muddatstsir",
  8874
 ],
 [
  "75.  Al-Qiyamah",
  8875
 ],
 [
  "76.  Al-Insan",
  8876
 ],
 [
  "77.  Al-Mursalat",
  8877
 ],
 [
  "78. An-Naba'",
  8878
 ],
 [
  "79. An-Nazi'at",
  8879
 ],
 [
  "80. 'Abasa",
  8880
 ],
 [
  "81. At-Takwir",
  8881
 ],
 [
  "82. Al-Infithar",
  8882
 ],
 [
  "83. Al-Muthaffifin",
  8883
 ],
 [
  "84. Al-Insyiqaq",
  8884
 ],
 [
  "85. Al-Buruj",
  8885
 ],
 [
  "86. Ath-Thariq",
  8886
 ],
 [
  "87. Al-A'la",
  8887
 ],
 [
  "88. Al-Ghasyiyah",
  8888
 ],
 [
  "89. Al-Fajr",
  8889
 ],
 [
  "90. Al-Balad",
  8890
 ],
 [
  "91. Asy-Syams",
  8891
 ],
 [
  "92. Al-Lail",
  8892
 ],
 [
  "93.Adh-Dhuha",
  8893
 ],
 [
  "94. Al-Insyirah",
  8894
 ],
 [
  "95. At-Tin",
  8895
 ],
 [
  "96. Al-'Alaq",
  8896
 ],
 [
  "97. Al-Qadr",
  8897
 ],
 [
  "98. Al-Bayyinah",
  8898
 ],
 [
  "99. Az-Zalzalah",
  8899
 ],
 [
  "100. Al-'Aadiyat",
  8900
 ],
 [
  "101. Al-Qari'ah",
  8901
 ],
 [
  "102. At-Takatsur",
  8902
 ],
 [
  "103. Al-'Ashr",
  8903
 ],
 [
  "104. Al-Humazah",
  8904
 ],
 [
  "105. Al-Fil",
  8905
 ],
 [
  "106. Quraisy",
  8906
 ],
 [
  "107. Al-Ma'un",
  8907
 ],
 [
  "108. Al-Kautsar",
  8908
 ],
 [
  "109. Al-Kafirun",
  8909
 ],
 [
  "110. An-Nashr",
  8910
 ],
 [
  "111. Al-Lahab",
  8911
 ],
 [
  "112. Al-Ikhlash",
  8912
 ],
 [
  "113. Al-Falaq",
  8913
 ],
 [
  "114. An-Nas",
  8914
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
