document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  9109
 ],
 [
  "78. An-Naba'",
  9110
 ],
 [
  "79. An-Nazi'at",
  9111
 ],
 [
  "80. 'Abasa",
  9112
 ],
 [
  "81. At-Takwir",
  9113
 ],
 [
  "82. Al-Infithar",
  9114
 ],
 [
  "83. Al-Muthaffifin",
  9115
 ],
 [
  "84. Al-Insyiqaq",
  9116
 ],
 [
  "85. Al-Buruj",
  9117
 ],
 [
  "86. Ath-Thariq",
  9118
 ],
 [
  "87. Al-A'la",
  9119
 ],
 [
  "88. Al-Ghasyiyah",
  9120
 ],
 [
  "89. Al-Fajr",
  9121
 ],
 [
  "90. Al-Balad",
  9122
 ],
 [
  "91. Asy-Syams",
  9123
 ],
 [
  "92. Al-Lail",
  9124
 ],
 [
  "93.Adh-Dhuha",
  9125
 ],
 [
  "94. Al-Insyirah",
  9126
 ],
 [
  "95. At-Tin",
  9127
 ],
 [
  "96. Al-'Alaq",
  9128
 ],
 [
  "97. Al-Qadr",
  9129
 ],
 [
  "98. Al-Bayyinah",
  9130
 ],
 [
  "99. Az-Zalzalah",
  9131
 ],
 [
  "100. Al-'Aadiyat",
  9132
 ],
 [
  "101. Al-Qari'ah",
  9133
 ],
 [
  "102. At-Takatsur",
  9134
 ],
 [
  "103. Al-'Ashr",
  9135
 ],
 [
  "104. Al-Humazah",
  9136
 ],
 [
  "105. Al-Fil",
  9137
 ],
 [
  "106. Quraisy",
  9138
 ],
 [
  "107. Al-Ma'un",
  9139
 ],
 [
  "108. Al-Kautsar",
  9140
 ],
 [
  "109. Al-Kafirun",
  9141
 ],
 [
  "110. An-Nashr",
  9142
 ],
 [
  "111. Al-Lahab",
  9143
 ],
 [
  "112. Al-Ikhlash",
  9144
 ],
 [
  "113. Al-Falaq",
  9145
 ],
 [
  "114. An-Nas",
  9146
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
