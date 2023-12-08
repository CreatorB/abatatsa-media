document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  9560
 ],
 [
  "78. An-Naba'",
  9561
 ],
 [
  "79. An-Nazi'at",
  9562
 ],
 [
  "80. 'Abasa",
  9563
 ],
 [
  "81. At-Takwir",
  9564
 ],
 [
  "82. Al-Infithar",
  9565
 ],
 [
  "83. Al-Muthaffifin",
  9566
 ],
 [
  "84. Al-Insyiqaq",
  9567
 ],
 [
  "85. Al-Buruj",
  9568
 ],
 [
  "86. Ath-Thariq",
  9569
 ],
 [
  "87. Al-A'la",
  9570
 ],
 [
  "88. Al-Ghasyiyah",
  9571
 ],
 [
  "89. Al-Fajr",
  9572
 ],
 [
  "90. Al-Balad",
  9573
 ],
 [
  "91. Asy-Syams",
  9574
 ],
 [
  "92. Al-Lail",
  9575
 ],
 [
  "93.Adh-Dhuha",
  9576
 ],
 [
  "94. Al-Insyirah",
  9577
 ],
 [
  "95. At-Tin",
  9578
 ],
 [
  "96. Al-'Alaq",
  9579
 ],
 [
  "97. Al-Qadr",
  9580
 ],
 [
  "98. Al-Bayyinah",
  9581
 ],
 [
  "99. Az-Zalzalah",
  9582
 ],
 [
  "100. Al-'Aadiyat",
  9583
 ],
 [
  "101. Al-Qari'ah",
  9584
 ],
 [
  "102. At-Takatsur",
  9585
 ],
 [
  "103. Al-'Ashr",
  9586
 ],
 [
  "104. Al-Humazah",
  9587
 ],
 [
  "105. Al-Fil",
  9588
 ],
 [
  "106. Quraisy",
  9589
 ],
 [
  "107. Al-Ma'un",
  9590
 ],
 [
  "108. Al-Kautsar",
  9591
 ],
 [
  "109. Al-Kafirun",
  9592
 ],
 [
  "110. An-Nashr",
  9593
 ],
 [
  "111. Al-Lahab",
  9594
 ],
 [
  "112. Al-Ikhlash",
  9595
 ],
 [
  "113. Al-Falaq",
  9596
 ],
 [
  "114. An-Nas",
  9597
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
