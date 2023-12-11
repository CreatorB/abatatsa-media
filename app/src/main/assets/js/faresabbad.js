document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "1. Al-Fatihah",
  605
 ],
 [
  "2.  Al-Baqarah",
  606
 ],
 [
  "3.  Ali 'Imran",
  607
 ],
 [
  "4.  An-Nisa'",
  608
 ],
 [
  "5.  Al-Ma`idah",
  609
 ],
 [
  "6.  Al-An'am",
  610
 ],
 [
  "7.  Al-A'raf",
  611
 ],
 [
  "8.  Al-Anfal",
  612
 ],
 [
  "9.  At-Taubah",
  613
 ],
 [
  "10.  Yunus",
  614
 ],
 [
  "11.  Hud",
  615
 ],
 [
  "12.  Yusuf",
  616
 ],
 [
  "13.  Ar-Ra'd",
  617
 ],
 [
  "14.  Ibrahim",
  618
 ],
 [
  "15.  Al-Hijr",
  619
 ],
 [
  "16.  An-Nahl",
  620
 ],
 [
  "17.  Al-Isra'",
  621
 ],
 [
  "18.  Al-Kahfi",
  622
 ],
 [
  "19.  Maryam",
  623
 ],
 [
  "20.  Thaha",
  624
 ],
 [
  "21.  Al-Anbiya'",
  625
 ],
 [
  "22.  Al-Hajj",
  626
 ],
 [
  "23.  Al-Mu'minun",
  627
 ],
 [
  "24.  An-Nur",
  628
 ],
 [
  "25.  Al-Furqan",
  629
 ],
 [
  "26.  Asy-Syu'ara'",
  630
 ],
 [
  "27.  An-Naml",
  631
 ],
 [
  "28.  Al-Qashash",
  632
 ],
 [
  "29.  Al-'Ankabut",
  633
 ],
 [
  "30.  Ar-Rum",
  634
 ],
 [
  "31.  Luqman",
  635
 ],
 [
  "32.  As-Sajdah",
  636
 ],
 [
  "33.  Al-Ahzab",
  637
 ],
 [
  "34.  Saba'",
  638
 ],
 [
  "35.  Fathir",
  639
 ],
 [
  "36.  Yasin",
  640
 ],
 [
  "37.  Ash-Shaffat",
  641
 ],
 [
  "38.  Shad",
  642
 ],
 [
  "39.  Az-Zumar",
  643
 ],
 [
  "40. Ghafir",
  644
 ],
 [
  "41.  Fushshilat",
  645
 ],
 [
  "42.  Asy-Syura",
  646
 ],
 [
  "43.  Az-Zukhruf",
  647
 ],
 [
  "44.  Ad-Dukhan",
  648
 ],
 [
  "45.  Al-Jatsiyah",
  649
 ],
 [
  "46.  Al-Ahqaf",
  650
 ],
 [
  "47.  Muhammad",
  651
 ],
 [
  "48.  Al-Fath",
  652
 ],
 [
  "49.  Al-Hujurat",
  653
 ],
 [
  "50.  Qaf",
  654
 ],
 [
  "51.  Adz-Dzariyat",
  655
 ],
 [
  "52.  Ath-Thur",
  656
 ],
 [
  "53.  An-Najm",
  657
 ],
 [
  "54.  Al-Qamar",
  658
 ],
 [
  "55.  Ar-Rahman",
  659
 ],
 [
  "56.  Al-Waqi'ah",
  660
 ],
 [
  "57.  Al-Hadid",
  661
 ],
 [
  "58.  Al-Mujadilah",
  662
 ],
 [
  "59.  Al-Hasyr",
  663
 ],
 [
  "60.  Al-Mumtahanah",
  664
 ],
 [
  "61.  Ash-Shaff",
  665
 ],
 [
  "62.  Al-Jumu'ah",
  666
 ],
 [
  "63.  Al-Munafiqun",
  667
 ],
 [
  "64.  At-Taghabun",
  668
 ],
 [
  "65.  Ath-Thalaq",
  669
 ],
 [
  "66.  At-Tahrim",
  670
 ],
 [
  "67.  Al-Mulk",
  671
 ],
 [
  "68.  Al-Qalam",
  672
 ],
 [
  "69.  Al-Haqqah",
  673
 ],
 [
  "70.  Al-Ma'arij",
  674
 ],
 [
  "71.  Nuh",
  675
 ],
 [
  "72.  Al-Jin",
  676
 ],
 [
  "73.  Al-Muzzammil",
  677
 ],
 [
  "74.  Al-Muddatstsir",
  678
 ],
 [
  "75.  Al-Qiyamah",
  679
 ],
 [
  "76.  Al-Insan",
  680
 ],
 [
  "77.  Al-Mursalat",
  681
 ],
 [
  "78. An-Naba'",
  682
 ],
 [
  "79. An-Nazi'at",
  683
 ],
 [
  "80. 'Abasa",
  684
 ],
 [
  "81. At-Takwir",
  685
 ],
 [
  "82. Al-Infithar",
  686
 ],
 [
  "83. Al-Muthaffifin",
  687
 ],
 [
  "84. Al-Insyiqaq",
  688
 ],
 [
  "85. Al-Buruj",
  689
 ],
 [
  "86. Ath-Thariq",
  690
 ],
 [
  "87. Al-A'la",
  691
 ],
 [
  "88. Al-Ghasyiyah",
  692
 ],
 [
  "89. Al-Fajr",
  693
 ],
 [
  "90. Al-Balad",
  694
 ],
 [
  "91. Asy-Syams",
  695
 ],
 [
  "92. Al-Lail",
  696
 ],
 [
  "93.Adh-Dhuha",
  697
 ],
 [
  "94. Al-Insyirah",
  698
 ],
 [
  "95. At-Tin",
  699
 ],
 [
  "96. Al-'Alaq",
  700
 ],
 [
  "97. Al-Qadr",
  701
 ],
 [
  "98. Al-Bayyinah",
  702
 ],
 [
  "99. Az-Zalzalah",
  703
 ],
 [
  "100. Al-'Aadiyat",
  704
 ],
 [
  "101. Al-Qari'ah",
  705
 ],
 [
  "102. At-Takatsur",
  706
 ],
 [
  "103. Al-'Ashr",
  707
 ],
 [
  "104. Al-Humazah",
  708
 ],
 [
  "105. Al-Fil",
  709
 ],
 [
  "106. Quraisy",
  710
 ],
 [
  "107. Al-Ma'un",
  711
 ],
 [
  "108. Al-Kautsar",
  712
 ],
 [
  "109. Al-Kafirun",
  713
 ],
 [
  "110. An-Nashr",
  714
 ],
 [
  "111. Al-Lahab",
  715
 ],
 [
  "112. Al-Ikhlash",
  716
 ],
 [
  "113. Al-Falaq",
  717
 ],
 [
  "114. An-Nas",
  718
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