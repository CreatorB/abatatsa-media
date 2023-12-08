document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  8753
 ],
 [
  "2.  Al-Baqarah",
  8754
 ],
 [
  "3.  Ali 'Imran",
  8755
 ],
 [
  "4.  An-Nisa'",
  8756
 ],
 [
  "5.  Al-Ma`idah",
  8757
 ],
 [
  "6.  Al-An'am",
  8758
 ],
 [
  "7.  Al-A'raf",
  8759
 ],
 [
  "8.  Al-Anfal",
  8760
 ],
 [
  "9.  At-Taubah",
  8761
 ],
 [
  "10.  Yunus",
  8762
 ],
 [
  "11.  Hud",
  8763
 ],
 [
  "12.  Yusuf",
  8764
 ],
 [
  "13.  Ar-Ra'd",
  8765
 ],
 [
  "14.  Ibrahim",
  8766
 ],
 [
  "15.  Al-Hijr",
  8767
 ],
 [
  "16.  An-Nahl",
  8768
 ],
 [
  "17.  Al-Isra'",
  8769
 ],
 [
  "18.  Al-Kahfi",
  8770
 ],
 [
  "19.  Maryam",
  8771
 ],
 [
  "20.  Thaha",
  8772
 ],
 [
  "21.  Al-Anbiya'",
  8773
 ],
 [
  "22.  Al-Hajj",
  8774
 ],
 [
  "23.  Al-Mu'minun",
  8775
 ],
 [
  "24.  An-Nur",
  8776
 ],
 [
  "25.  Al-Furqan",
  8777
 ],
 [
  "26.  Asy-Syu'ara'",
  8778
 ],
 [
  "27.  An-Naml",
  8779
 ],
 [
  "28.  Al-Qashash",
  8780
 ],
 [
  "29.  Al-'Ankabut",
  8781
 ],
 [
  "30.  Ar-Rum",
  8782
 ],
 [
  "31.  Luqman",
  8783
 ],
 [
  "32.  As-Sajdah",
  8784
 ],
 [
  "33.  Al-Ahzab",
  8785
 ],
 [
  "34.  Saba'",
  8786
 ],
 [
  "35.  Fathir",
  8787
 ],
 [
  "36.  Yasin",
  8788
 ],
 [
  "37.  Ash-Shaffat",
  8789
 ],
 [
  "38.  Shad",
  8790
 ],
 [
  "39.  Az-Zumar",
  8791
 ],
 [
  "40. Ghafir",
  8792
 ],
 [
  "41.  Fushshilat",
  8793
 ],
 [
  "42.  Asy-Syura",
  8794
 ],
 [
  "43.  Az-Zukhruf",
  8795
 ],
 [
  "44.  Ad-Dukhan",
  8796
 ],
 [
  "45.  Al-Jatsiyah",
  8797
 ],
 [
  "46.  Al-Ahqaf",
  8798
 ],
 [
  "47.  Muhammad",
  8799
 ],
 [
  "48.  Al-Fath",
  8800
 ],
 [
  "49.  Al-Hujurat",
  8801
 ],
 [
  "50.  Qaf",
  8802
 ],
 [
  "51.  Adz-Dzariyat",
  8803
 ],
 [
  "52.  Ath-Thur",
  8804
 ],
 [
  "53.  An-Najm",
  8805
 ],
 [
  "54.  Al-Qamar",
  8806
 ],
 [
  "55.  Ar-Rahman",
  8807
 ],
 [
  "56.  Al-Waqi'ah",
  8808
 ],
 [
  "57.  Al-Hadid",
  8809
 ],
 [
  "58.  Al-Mujadilah",
  8810
 ],
 [
  "59.  Al-Hasyr",
  8811
 ],
 [
  "60.  Al-Mumtahanah",
  8812
 ],
 [
  "61.  Ash-Shaff",
  8813
 ],
 [
  "62.  Al-Jumu'ah",
  8814
 ],
 [
  "63.  Al-Munafiqun",
  8815
 ],
 [
  "64.  At-Taghabun",
  8816
 ],
 [
  "65.  Ath-Thalaq",
  8817
 ],
 [
  "66.  At-Tahrim",
  8818
 ],
 [
  "67.  Al-Mulk",
  8819
 ],
 [
  "68.  Al-Qalam",
  8820
 ],
 [
  "69.  Al-Haqqah",
  8821
 ],
 [
  "70.  Al-Ma'arij",
  8822
 ],
 [
  "71.  Nuh",
  8823
 ],
 [
  "72.  Al-Jin",
  8824
 ],
 [
  "73.  Al-Muzzammil",
  8825
 ],
 [
  "74.  Al-Muddatstsir",
  8826
 ],
 [
  "75.  Al-Qiyamah",
  8827
 ],
 [
  "76.  Al-Insan",
  8828
 ],
 [
  "77.  Al-Mursalat",
  8829
 ],
 [
  "78. An-Naba'",
  8830
 ],
 [
  "79. An-Nazi'at",
  8831
 ],
 [
  "80. 'Abasa",
  8832
 ],
 [
  "81. At-Takwir",
  8833
 ],
 [
  "82. Al-Infithar",
  8834
 ],
 [
  "83. Al-Muthaffifin",
  8835
 ],
 [
  "84. Al-Insyiqaq",
  8836
 ],
 [
  "85. Al-Buruj",
  8837
 ],
 [
  "86. Ath-Thariq",
  8838
 ],
 [
  "87. Al-A'la",
  8839
 ],
 [
  "88. Al-Ghasyiyah",
  8840
 ],
 [
  "89. Al-Fajr",
  8841
 ],
 [
  "90. Al-Balad",
  8842
 ],
 [
  "91. Asy-Syams",
  8843
 ],
 [
  "92. Al-Lail",
  8844
 ],
 [
  "93.Adh-Dhuha",
  8845
 ],
 [
  "94. Al-Insyirah",
  8846
 ],
 [
  "95. At-Tin",
  8847
 ],
 [
  "96. Al-'Alaq",
  8848
 ],
 [
  "97. Al-Qadr",
  8849
 ],
 [
  "98. Al-Bayyinah",
  8850
 ],
 [
  "99. Az-Zalzalah",
  8851
 ],
 [
  "100. Al-'Aadiyat",
  8852
 ],
 [
  "101. Al-Qari'ah",
  8853
 ],
 [
  "102. At-Takatsur",
  8854
 ],
 [
  "103. Al-'Ashr",
  8855
 ],
 [
  "104. Al-Humazah",
  8856
 ],
 [
  "105. Al-Fil",
  8857
 ],
 [
  "106. Quraisy",
  8858
 ],
 [
  "107. Al-Ma'un",
  8859
 ],
 [
  "108. Al-Kautsar",
  8860
 ],
 [
  "109. Al-Kafirun",
  8861
 ],
 [
  "110. An-Nashr",
  8862
 ],
 [
  "111. Al-Lahab",
  8863
 ],
 [
  "112. Al-Ikhlash",
  8864
 ],
 [
  "113. Al-Falaq",
  8865
 ],
 [
  "114. An-Nas",
  8866
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
