document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  9299
 ],
 [
  "67.  Al-Mulk",
  9300
 ],
 [
  "68.  Al-Qalam",
  9301
 ],
 [
  "69.  Al-Haqqah",
  9302
 ],
 [
  "70.  Al-Ma'arij",
  9303
 ],
 [
  "71.  Nuh",
  9304
 ],
 [
  "72.  Al-Jin",
  9305
 ],
 [
  "73.  Al-Muzzammil",
  9306
 ],
 [
  "74.  Al-Muddatstsir",
  9307
 ],
 [
  "75.  Al-Qiyamah",
  9308
 ],
 [
  "76.  Al-Insan",
  9309
 ],
 [
  "77.  Al-Mursalat",
  9310
 ],
 [
  "78. An-Naba'",
  9311
 ],
 [
  "79. An-Nazi'at",
  9312
 ],
 [
  "80. 'Abasa",
  9313
 ],
 [
  "81. At-Takwir",
  9314
 ],
 [
  "82. Al-Infithar",
  9315
 ],
 [
  "83. Al-Muthaffifin",
  9316
 ],
 [
  "84. Al-Insyiqaq",
  9317
 ],
 [
  "85. Al-Buruj",
  9318
 ],
 [
  "86. Ath-Thariq",
  9319
 ],
 [
  "87. Al-A'la",
  9320
 ],
 [
  "88. Al-Ghasyiyah",
  9321
 ],
 [
  "89. Al-Fajr",
  9322
 ],
 [
  "90. Al-Balad",
  9323
 ],
 [
  "91. Asy-Syams",
  9324
 ],
 [
  "92. Al-Lail",
  9325
 ],
 [
  "93.Adh-Dhuha",
  9326
 ],
 [
  "94. Al-Insyirah",
  9327
 ],
 [
  "95. At-Tin",
  9328
 ],
 [
  "96. Al-'Alaq",
  9329
 ],
 [
  "97. Al-Qadr",
  9330
 ],
 [
  "98. Al-Bayyinah",
  9331
 ],
 [
  "99. Az-Zalzalah",
  9332
 ],
 [
  "100. Al-'Aadiyat",
  9333
 ],
 [
  "101. Al-Qari'ah",
  9334
 ],
 [
  "102. At-Takatsur",
  9335
 ],
 [
  "103. Al-'Ashr",
  9336
 ],
 [
  "104. Al-Humazah",
  9337
 ],
 [
  "105. Al-Fil",
  9338
 ],
 [
  "106. Quraisy",
  9339
 ],
 [
  "107. Al-Ma'un",
  9340
 ],
 [
  "108. Al-Kautsar",
  9341
 ],
 [
  "109. Al-Kafirun",
  9342
 ],
 [
  "110. An-Nashr",
  9343
 ],
 [
  "111. Al-Lahab",
  9344
 ],
 [
  "112. Al-Ikhlash",
  9345
 ],
 [
  "113. Al-Falaq",
  9346
 ],
 [
  "114. An-Nas",
  9347
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
