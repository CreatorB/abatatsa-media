document.querySelector('#back').addEventListener('click', (e) => {
  // Do whatever you want
  //e.target.textContent = 'Clicked!';
	history.back();
});

$(document).ready( function () {

  const dataSet = [
 [
  "Abdurrahman Mas’ud - al-Muzzammil",
  9916
 ],
 [
  "Ahmad al-Nufais - al-Hasyr (18-24)",
  9918
 ],
 [
  "Ahmad al-Nufais - al-Waqi'ah",
  9938
 ],
 [
  "Ahmad al-Nufais - an-Najm",
  9917
 ],
 [
  "Ahmad Khedr - at-Takwir",
  9919
 ],
 [
  "Ahmad Khedr - Thaha",
  9945
 ],
 [
  "Ahmad Khedr ad-Dukhan",
  9941
 ],
 [
  "Ahmad Shalabi - al-Furqan",
  9921
 ],
 [
  "Fatih Seferagic - Maryam (1-15)",
  9927
 ],
 [
  "Idris Hasyimi - Fushshilat (30-36)",
  9915
 ],
 [
  "Islam Subhi - al-Qalam",
  9937
 ],
 [
  "Islam Subhi - Qaf",
  9944
 ],
 [
  "Ra'ad al-Kurdi - al-Furqan (61-77)",
  9922
 ],
 [
  "Ra'ad al-Kurdi - an-Nahl (79-89)",
  9923
 ],
 [
  "Ra'ad al-Kurdi - an-Nazi'at",
  9932
 ],
 [
  "Ra'ad al-Kurdi - an-Nisa' (43-52)",
  9933
 ],
 [
  "Ra'ad al-Kurdi - Fushshilat (30-36) & adh-Dhuha",
  9929
 ],
 [
  "Ra'ad al-Kurdi - Muhammad (25-38)",
  9920
 ],
 [
  "Ra'ad al-Kurdi – as-Sajdah (10-21)",
  9924
 ],
 [
  "Ra'ad al-Kurdi – ath-Thur",
  9925
 ],
 [
  "Saifurrahman – al-Fatihah, al-Buruj & an-Naba’ (31-40)",
  9935
 ],
 [
  "Salah Musally - al-Hadid (16-21)",
  995
 ],
 [
  "Salah Musally - al-Hadid (20-21)",
  996
 ],
 [
  "Salah Musally - al-Hujurat",
  997
 ],
 [
  "Salah Musally - al-Qiyamah (20-40)",
  998
 ],
 [
  "Salah Musally - al-Waqi’ah (75-96)",
  9947
 ],
 [
  "Salah Musally - an-Najm (1-32)",
  999
 ],
 [
  "Salah Musally - Ash-Shaffat (75-113)",
  9936
 ],
 [
  "Salah Musally - az-Zumar (52-67)",
  9950
 ],
 [
  "Salah Musally - Hud (102-108)",
  1000
 ],
 [
  "Salah Musally - Hud (36-44)",
  9930
 ],
 [
  "Salah Musally - Maryam (56-64)",
  9931
 ],
 [
  "Salah Musally - Yasin (55-70) dan al-Haqqah (18-37)",
  9948
 ],
 [
  "Syarif Mustafa - al-Furqan (21-34)",
  9928
 ],
 [
  "Syarif Mustafa - ar-Rahman",
  9934
 ],
 [
  "Yasser Dossary - Thaha (105-132)",
  9949
 ],
 [
  "Yusuf Utsman - ar-Rahman",
  9940
 ],
 [
  "Ziyad Patel - al-Baqarah (1-20)",
  9942
 ],
 [
  "Ziyad Patel - al-Furqan (72-77)",
  9943
 ],
 [
  "Ziyad Patel - ar-Rahman",
  9939
 ],
 [
  "Ziyad Patel - ayat kursi",
  9926
 ],
 [
  "Ziyad Patel - Yasin",
  9946
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