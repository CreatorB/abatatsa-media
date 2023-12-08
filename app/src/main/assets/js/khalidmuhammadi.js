document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  9801
 ],
 [
  "78. An-Naba'",
  9802
 ],
 [
  "79. An-Nazi'at",
  9803
 ],
 [
  "80. 'Abasa",
  9804
 ],
 [
  "81. At-Takwir",
  9805
 ],
 [
  "82. Al-Infithar",
  9806
 ],
 [
  "83. Al-Muthaffifin",
  9807
 ],
 [
  "84. Al-Insyiqaq",
  9808
 ],
 [
  "85. Al-Buruj",
  9809
 ],
 [
  "86. Ath-Thariq",
  9810
 ],
 [
  "87. Al-A'la",
  9811
 ],
 [
  "88. Al-Ghasyiyah",
  9812
 ],
 [
  "89. Al-Fajr",
  9813
 ],
 [
  "90. Al-Balad",
  9814
 ],
 [
  "91. Asy-Syams",
  9815
 ],
 [
  "92. Al-Lail",
  9816
 ],
 [
  "93.Adh-Dhuha",
  9817
 ],
 [
  "94. Al-Insyirah",
  9818
 ],
 [
  "95. At-Tin",
  9819
 ],
 [
  "96. Al-'Alaq",
  9820
 ],
 [
  "97. Al-Qadr",
  9821
 ],
 [
  "98. Al-Bayyinah",
  9822
 ],
 [
  "99. Az-Zalzalah",
  9823
 ],
 [
  "100. Al-'Aadiyat",
  9824
 ],
 [
  "101. Al-Qari'ah",
  9825
 ],
 [
  "102. At-Takatsur",
  9826
 ],
 [
  "103. Al-'Ashr",
  9827
 ],
 [
  "104. Al-Humazah",
  9828
 ],
 [
  "105. Al-Fil",
  9829
 ],
 [
  "106. Quraisy",
  9830
 ],
 [
  "107. Al-Ma'un",
  9831
 ],
 [
  "108. Al-Kautsar",
  9832
 ],
 [
  "109. Al-Kafirun",
  9833
 ],
 [
  "110. An-Nashr",
  9834
 ],
 [
  "111. Al-Lahab",
  9835
 ],
 [
  "112. Al-Ikhlash",
  9836
 ],
 [
  "113. Al-Falaq",
  9837
 ],
 [
  "114. An-Nas",
  9838
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
