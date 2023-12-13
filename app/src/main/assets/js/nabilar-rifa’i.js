document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  7841
 ],
 [
  "2.  Al-Baqarah",
  7842
 ],
 [
  "3.  Ali 'Imran",
  7843
 ],
 [
  "4.  An-Nisa'",
  7844
 ],
 [
  "5.  Al-Ma`idah",
  7845
 ],
 [
  "6.  Al-An'am",
  7846
 ],
 [
  "7.  Al-A'raf",
  7847
 ],
 [
  "8.  Al-Anfal",
  7848
 ],
 [
  "9.  At-Taubah",
  7849
 ],
 [
  "10.  Yunus",
  7850
 ],
 [
  "11.  Hud",
  7851
 ],
 [
  "12.  Yusuf",
  7852
 ],
 [
  "13.  Ar-Ra'd",
  7853
 ],
 [
  "14.  Ibrahim",
  7854
 ],
 [
  "15.  Al-Hijr",
  7855
 ],
 [
  "16.  An-Nahl",
  7856
 ],
 [
  "17.  Al-Isra'",
  7857
 ],
 [
  "18.  Al-Kahfi",
  7858
 ],
 [
  "19.  Maryam",
  7859
 ],
 [
  "20.  Thaha",
  7860
 ],
 [
  "21.  Al-Anbiya'",
  7861
 ],
 [
  "22.  Al-Hajj",
  7862
 ],
 [
  "23.  Al-Mu'minun",
  7863
 ],
 [
  "24.  An-Nur",
  7864
 ],
 [
  "25.  Al-Furqan",
  7865
 ],
 [
  "26.  Asy-Syu'ara'",
  7866
 ],
 [
  "27.  An-Naml",
  7867
 ],
 [
  "28.  Al-Qashash",
  7868
 ],
 [
  "29.  Al-'Ankabut",
  7869
 ],
 [
  "30.  Ar-Rum",
  7870
 ],
 [
  "31.  Luqman",
  7871
 ],
 [
  "32.  As-Sajdah",
  7872
 ],
 [
  "33.  Al-Ahzab",
  7873
 ],
 [
  "34.  Saba'",
  7874
 ],
 [
  "35.  Fathir",
  7875
 ],
 [
  "36.  Yasin",
  7876
 ],
 [
  "37.  Ash-Shaffat",
  7877
 ],
 [
  "38.  Shad",
  7878
 ],
 [
  "39.  Az-Zumar",
  7879
 ],
 [
  "40. Ghafir",
  7880
 ],
 [
  "41.  Fushshilat",
  7881
 ],
 [
  "42.  Asy-Syura",
  7882
 ],
 [
  "43.  Az-Zukhruf",
  7883
 ],
 [
  "44.  Ad-Dukhan",
  7884
 ],
 [
  "45.  Al-Jatsiyah",
  7885
 ],
 [
  "46.  Al-Ahqaf",
  7886
 ],
 [
  "47.  Muhammad",
  7887
 ],
 [
  "48.  Al-Fath",
  7888
 ],
 [
  "49.  Al-Hujurat",
  7889
 ],
 [
  "50.  Qaf",
  7890
 ],
 [
  "51.  Adz-Dzariyat",
  7891
 ],
 [
  "52.  Ath-Thur",
  7892
 ],
 [
  "53.  An-Najm",
  7893
 ],
 [
  "54.  Al-Qamar",
  7894
 ],
 [
  "55.  Ar-Rahman",
  7895
 ],
 [
  "56.  Al-Waqi'ah",
  7896
 ],
 [
  "57.  Al-Hadid",
  7897
 ],
 [
  "58.  Al-Mujadilah",
  7898
 ],
 [
  "59.  Al-Hasyr",
  7899
 ],
 [
  "60.  Al-Mumtahanah",
  7900
 ],
 [
  "61.  Ash-Shaff",
  7901
 ],
 [
  "62.  Al-Jumu'ah",
  7902
 ],
 [
  "63.  Al-Munafiqun",
  7903
 ],
 [
  "64.  At-Taghabun",
  7904
 ],
 [
  "65.  Ath-Thalaq",
  7905
 ],
 [
  "66.  At-Tahrim",
  7906
 ],
 [
  "67.  Al-Mulk",
  7907
 ],
 [
  "68.  Al-Qalam",
  7908
 ],
 [
  "69.  Al-Haqqah",
  7909
 ],
 [
  "70.  Al-Ma'arij",
  7910
 ],
 [
  "71.  Nuh",
  7911
 ],
 [
  "72.  Al-Jin",
  7912
 ],
 [
  "73.  Al-Muzzammil",
  7913
 ],
 [
  "74.  Al-Muddatstsir",
  7914
 ],
 [
  "75.  Al-Qiyamah",
  7915
 ],
 [
  "76.  Al-Insan",
  7916
 ],
 [
  "77.  Al-Mursalat",
  7917
 ],
 [
  "78. An-Naba'",
  7918
 ],
 [
  "79. An-Nazi'at",
  7919
 ],
 [
  "80. 'Abasa",
  7920
 ],
 [
  "81. At-Takwir",
  7921
 ],
 [
  "82. Al-Infithar",
  7922
 ],
 [
  "83. Al-Muthaffifin",
  7923
 ],
 [
  "84. Al-Insyiqaq",
  7924
 ],
 [
  "85. Al-Buruj",
  7925
 ],
 [
  "86. Ath-Thariq",
  7926
 ],
 [
  "87. Al-A'la",
  7927
 ],
 [
  "88. Al-Ghasyiyah",
  7928
 ],
 [
  "89. Al-Fajr",
  7929
 ],
 [
  "90. Al-Balad",
  7930
 ],
 [
  "91. Asy-Syams",
  7931
 ],
 [
  "92. Al-Lail",
  7932
 ],
 [
  "93.Adh-Dhuha",
  7933
 ],
 [
  "94. Al-Insyirah",
  7934
 ],
 [
  "95. At-Tin",
  7935
 ],
 [
  "96. Al-'Alaq",
  7936
 ],
 [
  "97. Al-Qadr",
  7937
 ],
 [
  "98. Al-Bayyinah",
  7938
 ],
 [
  "99. Az-Zalzalah",
  7939
 ],
 [
  "100. Al-'Aadiyat",
  7940
 ],
 [
  "101. Al-Qari'ah",
  7941
 ],
 [
  "102. At-Takatsur",
  7942
 ],
 [
  "103. Al-'Ashr",
  7943
 ],
 [
  "104. Al-Humazah",
  7944
 ],
 [
  "105. Al-Fil",
  7945
 ],
 [
  "106. Quraisy",
  7946
 ],
 [
  "107. Al-Ma'un",
  7947
 ],
 [
  "108. Al-Kautsar",
  7948
 ],
 [
  "109. Al-Kafirun",
  7949
 ],
 [
  "110. An-Nashr",
  7950
 ],
 [
  "111. Al-Lahab",
  7951
 ],
 [
  "112. Al-Ikhlash",
  7952
 ],
 [
  "113. Al-Falaq",
  7953
 ],
 [
  "114. An-Nas",
  7954
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
