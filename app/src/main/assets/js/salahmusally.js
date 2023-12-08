document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "67.  Al-Mulk",
  947
 ],
 [
  "68.  Al-Qalam",
  948
 ],
 [
  "69.  Al-Haqqah",
  949
 ],
 [
  "70.  Al-Ma'arij",
  950
 ],
 [
  "71.  Nuh",
  951
 ],
 [
  "72.  Al-Jin",
  952
 ],
 [
  "73.  Al-Muzzammil",
  953
 ],
 [
  "74.  Al-Muddatstsir",
  954
 ],
 [
  "75.  Al-Qiyamah",
  955
 ],
 [
  "76.  Al-Insan",
  956
 ],
 [
  "77.  Al-Mursalat",
  957
 ],
 [
  "78. An-Naba'",
  958
 ],
 [
  "79. An-Nazi'at",
  959
 ],
 [
  "80. 'Abasa",
  960
 ],
 [
  "81. At-Takwir",
  961
 ],
 [
  "82. Al-Infithar",
  962
 ],
 [
  "83. Al-Muthaffifin",
  963
 ],
 [
  "84. Al-Insyiqaq",
  964
 ],
 [
  "85. Al-Buruj",
  965
 ],
 [
  "86. Ath-Thariq",
  966
 ],
 [
  "87. Al-A'la",
  967
 ],
 [
  "88. Al-Ghasyiyah",
  968
 ],
 [
  "89. Al-Fajr",
  969
 ],
 [
  "90. Al-Balad",
  970
 ],
 [
  "91. Asy-Syams",
  971
 ],
 [
  "92. Al-Lail",
  972
 ],
 [
  "93.Adh-Dhuha",
  973
 ],
 [
  "94. Al-Insyirah",
  974
 ],
 [
  "95. At-Tin",
  975
 ],
 [
  "96. Al-'Alaq",
  976
 ],
 [
  "97. Al-Qadr",
  977
 ],
 [
  "98. Al-Bayyinah",
  978
 ],
 [
  "99. Az-Zalzalah",
  979
 ],
 [
  "100. Al-'Aadiyat",
  980
 ],
 [
  "101. Al-Qari'ah",
  981
 ],
 [
  "102. At-Takatsur",
  982
 ],
 [
  "103. Al-'Ashr",
  983
 ],
 [
  "104. Al-Humazah",
  984
 ],
 [
  "105. Al-Fil",
  985
 ],
 [
  "106. Quraisy",
  986
 ],
 [
  "107. Al-Ma'un",
  987
 ],
 [
  "108. Al-Kautsar",
  988
 ],
 [
  "109. Al-Kafirun",
  989
 ],
 [
  "110. An-Nashr",
  990
 ],
 [
  "111. Al-Lahab",
  991
 ],
 [
  "112. Al-Ikhlash",
  992
 ],
 [
  "113. Al-Falaq",
  993
 ],
 [
  "114. An-Nas",
  994
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
