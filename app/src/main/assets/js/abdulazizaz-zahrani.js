document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  9680
 ],
 [
  "78. An-Naba'",
  9681
 ],
 [
  "79. An-Nazi'at",
  9682
 ],
 [
  "80. 'Abasa",
  9683
 ],
 [
  "81. At-Takwir",
  9684
 ],
 [
  "82. Al-Infithar",
  9685
 ],
 [
  "83. Al-Muthaffifin",
  9686
 ],
 [
  "84. Al-Insyiqaq",
  9687
 ],
 [
  "85. Al-Buruj",
  9688
 ],
 [
  "86. Ath-Thariq",
  9689
 ],
 [
  "87. Al-A'la",
  9690
 ],
 [
  "88. Al-Ghasyiyah",
  9691
 ],
 [
  "89. Al-Fajr",
  9692
 ],
 [
  "90. Al-Balad",
  9693
 ],
 [
  "91. Asy-Syams",
  9694
 ],
 [
  "92. Al-Lail",
  9695
 ],
 [
  "93.Adh-Dhuha",
  9696
 ],
 [
  "94. Al-Insyirah",
  9697
 ],
 [
  "95. At-Tin",
  9698
 ],
 [
  "96. Al-'Alaq",
  9699
 ],
 [
  "97. Al-Qadr",
  9700
 ],
 [
  "98. Al-Bayyinah",
  9701
 ],
 [
  "99. Az-Zalzalah",
  9702
 ],
 [
  "100. Al-'Aadiyat",
  9703
 ],
 [
  "101. Al-Qari'ah",
  9704
 ],
 [
  "102. At-Takatsur",
  9705
 ],
 [
  "103. Al-'Ashr",
  9706
 ],
 [
  "104. Al-Humazah",
  9707
 ],
 [
  "105. Al-Fil",
  9708
 ],
 [
  "106. Quraisy",
  9709
 ],
 [
  "107. Al-Ma'un",
  9710
 ],
 [
  "108. Al-Kautsar",
  9711
 ],
 [
  "109. Al-Kafirun",
  9712
 ],
 [
  "110. An-Nashr",
  9713
 ],
 [
  "111. Al-Lahab",
  9714
 ],
 [
  "112. Al-Ikhlash",
  9715
 ],
 [
  "113. Al-Falaq",
  9716
 ],
 [
  "114. An-Nas",
  9717
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
    "language": {
        "emptyTable": "Tidak ada data yang tersedia pada tabel ini",
        "info": "Menampilkan _START_ sampai _END_ dari _TOTAL_ entri",
        "infoEmpty": "Menampilkan 0 sampai 0 dari 0 entri",
        "infoFiltered": "(disaring dari _MAX_ entri keseluruhan)",
        "lengthMenu": "Tampilkan _MENU_ entri",
        "loadingRecords": "Sedang memuat...",
        "processing": "Sedang memproses...",
        "search": "Cari Surat:",
        "zeroRecords": "Tidak ditemukan data yang sesuai",
        "paginate": {
            "first": "Pertama",
            "last": "Terakhir",
            "next": ">>",
            "previous": "<<"
        }
      }
    });

} );