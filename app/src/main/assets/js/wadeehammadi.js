document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  833
 ],
 [
  "2.  Al-Baqarah",
  834
 ],
 [
  "3.  Ali 'Imran",
  835
 ],
 [
  "4.  An-Nisa'",
  836
 ],
 [
  "5.  Al-Ma`idah",
  837
 ],
 [
  "6.  Al-An'am",
  838
 ],
 [
  "7.  Al-A'raf",
  839
 ],
 [
  "8.  Al-Anfal",
  840
 ],
 [
  "9.  At-Taubah",
  841
 ],
 [
  "10.  Yunus",
  842
 ],
 [
  "11.  Hud",
  843
 ],
 [
  "12.  Yusuf",
  844
 ],
 [
  "13.  Ar-Ra'd",
  845
 ],
 [
  "14.  Ibrahim",
  846
 ],
 [
  "15.  Al-Hijr",
  847
 ],
 [
  "16.  An-Nahl",
  848
 ],
 [
  "17.  Al-Isra'",
  849
 ],
 [
  "18.  Al-Kahfi",
  850
 ],
 [
  "19.  Maryam",
  851
 ],
 [
  "20.  Thaha",
  852
 ],
 [
  "21.  Al-Anbiya'",
  853
 ],
 [
  "22.  Al-Hajj",
  854
 ],
 [
  "23.  Al-Mu'minun",
  855
 ],
 [
  "24.  An-Nur",
  856
 ],
 [
  "25.  Al-Furqan",
  857
 ],
 [
  "26.  Asy-Syu'ara'",
  858
 ],
 [
  "27.  An-Naml",
  859
 ],
 [
  "28.  Al-Qashash",
  860
 ],
 [
  "29.  Al-'Ankabut",
  861
 ],
 [
  "30.  Ar-Rum",
  862
 ],
 [
  "31.  Luqman",
  863
 ],
 [
  "32.  As-Sajdah",
  864
 ],
 [
  "33.  Al-Ahzab",
  865
 ],
 [
  "34.  Saba'",
  866
 ],
 [
  "35.  Fathir",
  867
 ],
 [
  "36.  Yasin",
  868
 ],
 [
  "37.  Ash-Shaffat",
  869
 ],
 [
  "38.  Shad",
  870
 ],
 [
  "39.  Az-Zumar",
  871
 ],
 [
  "40. Ghafir",
  872
 ],
 [
  "41.  Fushshilat",
  873
 ],
 [
  "42.  Asy-Syura",
  874
 ],
 [
  "43.  Az-Zukhruf",
  875
 ],
 [
  "44.  Ad-Dukhan",
  876
 ],
 [
  "45.  Al-Jatsiyah",
  877
 ],
 [
  "46.  Al-Ahqaf",
  878
 ],
 [
  "47.  Muhammad",
  879
 ],
 [
  "48.  Al-Fath",
  880
 ],
 [
  "49.  Al-Hujurat",
  881
 ],
 [
  "50.  Qaf",
  882
 ],
 [
  "51.  Adz-Dzariyat",
  883
 ],
 [
  "52.  Ath-Thur",
  884
 ],
 [
  "53.  An-Najm",
  885
 ],
 [
  "54.  Al-Qamar",
  886
 ],
 [
  "55.  Ar-Rahman",
  887
 ],
 [
  "56.  Al-Waqi'ah",
  888
 ],
 [
  "57.  Al-Hadid",
  889
 ],
 [
  "58.  Al-Mujadilah",
  890
 ],
 [
  "59.  Al-Hasyr",
  891
 ],
 [
  "60.  Al-Mumtahanah",
  892
 ],
 [
  "61.  Ash-Shaff",
  893
 ],
 [
  "62.  Al-Jumu'ah",
  894
 ],
 [
  "63.  Al-Munafiqun",
  895
 ],
 [
  "64.  At-Taghabun",
  896
 ],
 [
  "65.  Ath-Thalaq",
  897
 ],
 [
  "66.  At-Tahrim",
  898
 ],
 [
  "67.  Al-Mulk",
  899
 ],
 [
  "68.  Al-Qalam",
  900
 ],
 [
  "69.  Al-Haqqah",
  901
 ],
 [
  "70.  Al-Ma'arij",
  902
 ],
 [
  "71.  Nuh",
  903
 ],
 [
  "72.  Al-Jin",
  904
 ],
 [
  "73.  Al-Muzzammil",
  905
 ],
 [
  "74.  Al-Muddatstsir",
  906
 ],
 [
  "75.  Al-Qiyamah",
  907
 ],
 [
  "76.  Al-Insan",
  908
 ],
 [
  "77.  Al-Mursalat",
  909
 ],
 [
  "78. An-Naba'",
  910
 ],
 [
  "79. An-Nazi'at",
  911
 ],
 [
  "80. 'Abasa",
  912
 ],
 [
  "81. At-Takwir",
  913
 ],
 [
  "82. Al-Infithar",
  914
 ],
 [
  "83. Al-Muthaffifin",
  915
 ],
 [
  "84. Al-Insyiqaq",
  916
 ],
 [
  "85. Al-Buruj",
  917
 ],
 [
  "86. Ath-Thariq",
  918
 ],
 [
  "87. Al-A'la",
  919
 ],
 [
  "88. Al-Ghasyiyah",
  920
 ],
 [
  "89. Al-Fajr",
  921
 ],
 [
  "90. Al-Balad",
  922
 ],
 [
  "91. Asy-Syams",
  923
 ],
 [
  "92. Al-Lail",
  924
 ],
 [
  "93.Adh-Dhuha",
  925
 ],
 [
  "94. Al-Insyirah",
  926
 ],
 [
  "95. At-Tin",
  927
 ],
 [
  "96. Al-'Alaq",
  928
 ],
 [
  "97. Al-Qadr",
  929
 ],
 [
  "98. Al-Bayyinah",
  930
 ],
 [
  "99. Az-Zalzalah",
  931
 ],
 [
  "100. Al-'Aadiyat",
  932
 ],
 [
  "101. Al-Qari'ah",
  933
 ],
 [
  "102. At-Takatsur",
  934
 ],
 [
  "103. Al-'Ashr",
  935
 ],
 [
  "104. Al-Humazah",
  936
 ],
 [
  "105. Al-Fil",
  937
 ],
 [
  "106. Quraisy",
  938
 ],
 [
  "107. Al-Ma'un",
  939
 ],
 [
  "108. Al-Kautsar",
  940
 ],
 [
  "109. Al-Kafirun",
  941
 ],
 [
  "110. An-Nashr",
  942
 ],
 [
  "111. Al-Lahab",
  943
 ],
 [
  "112. Al-Ikhlash",
  944
 ],
 [
  "113. Al-Falaq",
  945
 ],
 [
  "114. An-Nas",
  946
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
     pagingType: 'numbers'
  });

} );
