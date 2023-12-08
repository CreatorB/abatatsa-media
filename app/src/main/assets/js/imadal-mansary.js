document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  9386
 ],
 [
  "78. An-Naba'",
  9387
 ],
 [
  "79. An-Nazi'at",
  9388
 ],
 [
  "80. 'Abasa",
  9389
 ],
 [
  "81. At-Takwir",
  9390
 ],
 [
  "82. Al-Infithar",
  9391
 ],
 [
  "83. Al-Muthaffifin",
  9392
 ],
 [
  "84. Al-Insyiqaq",
  9393
 ],
 [
  "85. Al-Buruj",
  9394
 ],
 [
  "86. Ath-Thariq",
  9395
 ],
 [
  "87. Al-A'la",
  9396
 ],
 [
  "88. Al-Ghasyiyah",
  9397
 ],
 [
  "89. Al-Fajr",
  9398
 ],
 [
  "90. Al-Balad",
  9399
 ],
 [
  "91. Asy-Syams",
  9400
 ],
 [
  "92. Al-Lail",
  9401
 ],
 [
  "93.Adh-Dhuha",
  9402
 ],
 [
  "94. Al-Insyirah",
  9403
 ],
 [
  "95. At-Tin",
  9404
 ],
 [
  "96. Al-'Alaq",
  9405
 ],
 [
  "97. Al-Qadr",
  9406
 ],
 [
  "98. Al-Bayyinah",
  9407
 ],
 [
  "99. Az-Zalzalah",
  9408
 ],
 [
  "100. Al-'Aadiyat",
  9409
 ],
 [
  "101. Al-Qari'ah",
  9410
 ],
 [
  "102. At-Takatsur",
  9411
 ],
 [
  "103. Al-'Ashr",
  9412
 ],
 [
  "104. Al-Humazah",
  9413
 ],
 [
  "105. Al-Fil",
  9414
 ],
 [
  "106. Quraisy",
  9415
 ],
 [
  "107. Al-Ma'un",
  9416
 ],
 [
  "108. Al-Kautsar",
  9417
 ],
 [
  "109. Al-Kafirun",
  9418
 ],
 [
  "110. An-Nashr",
  9419
 ],
 [
  "111. Al-Lahab",
  9420
 ],
 [
  "112. Al-Ikhlash",
  9421
 ],
 [
  "113. Al-Falaq",
  9422
 ],
 [
  "114. An-Nas",
  9423
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
