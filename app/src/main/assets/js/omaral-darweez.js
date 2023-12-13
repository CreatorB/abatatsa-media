document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  9718
 ],
 [
  "78. An-Naba'",
  9719
 ],
 [
  "79. An-Nazi'at",
  9720
 ],
 [
  "80. 'Abasa",
  9721
 ],
 [
  "82. Al-Infithar",
  9722
 ],
 [
  "85. Al-Buruj",
  9723
 ],
 [
  "92. Al-Lail",
  9724
 ],
 [
  "93.Adh-Dhuha",
  9725
 ],
 [
  "94. Al-Insyirah",
  9726
 ],
 [
  "95. At-Tin",
  9727
 ],
 [
  "96. Al-'Alaq",
  9728
 ],
 [
  "97. Al-Qadr",
  9729
 ],
 [
  "98. Al-Bayyinah",
  9730
 ],
 [
  "99. Az-Zalzalah",
  9731
 ],
 [
  "100. Al-'Aadiyat",
  9732
 ],
 [
  "101. Al-Qari'ah",
  9733
 ],
 [
  "102. At-Takatsur",
  9734
 ],
 [
  "103. Al-'Ashr",
  9735
 ],
 [
  "104. Al-Humazah",
  9736
 ],
 [
  "105. Al-Fil",
  9737
 ],
 [
  "106. Quraisy",
  9738
 ],
 [
  "107. Al-Ma'un",
  9739
 ],
 [
  "108. Al-Kautsar",
  9740
 ],
 [
  "109. Al-Kafirun",
  9741
 ],
 [
  "110. An-Nashr",
  9742
 ],
 [
  "111. Al-Lahab",
  9743
 ],
 [
  "112. Al-Ikhlash",
  9744
 ],
 [
  "113. Al-Falaq",
  9745
 ],
 [
  "114. An-Nas",
  9746
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
