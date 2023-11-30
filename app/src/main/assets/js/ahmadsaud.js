document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "46.  Al-Ahqaf",
  9789
 ],
 [
  "47.  Muhammad",
  9790
 ],
 [
  "48.  Al-Fath",
  9791
 ],
 [
  "49.  Al-Hujurat",
  9792
 ],
 [
  "50.  Qaf",
  9793
 ],
 [
  "51.  Adz-Dzariyat",
  9794
 ],
 [
  "52.  Ath-Thur",
  9795
 ],
 [
  "53.  An-Najm",
  9796
 ],
 [
  "54.  Al-Qamar",
  9797
 ],
 [
  "55.  Ar-Rahman",
  9798
 ],
 [
  "56.  Al-Waqi'ah",
  9799
 ],
 [
  "57.  Al-Hadid",
  9800
 ],
 [
  "67.  Al-Mulk",
  9747
 ],
 [
  "68.  Al-Qalam",
  9748
 ],
 [
  "69.  Al-Haqqah",
  9749
 ],
 [
  "70.  Al-Ma'arij",
  9750
 ],
 [
  "71.  Nuh",
  9751
 ],
 [
  "72.  Al-Jin",
  9752
 ],
 [
  "73.  Al-Muzzammil",
  9753
 ],
 [
  "74.  Al-Muddatstsir",
  9754
 ],
 [
  "75.  Al-Qiyamah",
  9755
 ],
 [
  "76.  Al-Insan",
  9756
 ],
 [
  "77.  Al-Mursalat",
  9757
 ],
 [
  "78. An-Naba' & 79. An-Nazi'at",
  9758
 ],
 [
  "85. Al-Buruj",
  9759
 ],
 [
  "86. Ath-Thariq",
  9760
 ],
 [
  "87. Al-A'la",
  9761
 ],
 [
  "88. Al-Ghasyiyah",
  9762
 ],
 [
  "89. Al-Fajr",
  9763
 ],
 [
  "90. Al-Balad",
  9764
 ],
 [
  "91. Asy-Syams",
  9765
 ],
 [
  "92. Al-Lail",
  9766
 ],
 [
  "93.Adh-Dhuha",
  9767
 ],
 [
  "94. Al-Insyirah",
  9768
 ],
 [
  "95. At-Tin",
  9769
 ],
 [
  "96. Al-'Alaq",
  9770
 ],
 [
  "97. Al-Qadr",
  9771
 ],
 [
  "98. Al-Bayyinah",
  9772
 ],
 [
  "99. Az-Zalzalah",
  9773
 ],
 [
  "100. Al-'Aadiyat",
  9774
 ],
 [
  "101. Al-Qari'ah",
  9775
 ],
 [
  "102. At-Takatsur",
  9776
 ],
 [
  "103. Al-'Ashr",
  9777
 ],
 [
  "104. Al-Humazah",
  9778
 ],
 [
  "105. Al-Fil",
  9779
 ],
 [
  "106. Quraisy",
  9780
 ],
 [
  "107. Al-Ma'un",
  9781
 ],
 [
  "108. Al-Kautsar",
  9782
 ],
 [
  "109. Al-Kafirun",
  9783
 ],
 [
  "110. An-Nashr",
  9784
 ],
 [
  "111. Al-Lahab",
  9785
 ],
 [
  "112. Al-Ikhlash",
  9786
 ],
 [
  "113. Al-Falaq",
  9787
 ],
 [
  "114. An-Nas",
  9788
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
