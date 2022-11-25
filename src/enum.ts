// Enum >> tipe data yang  yang menyimpan sekumpulan data constans

// Numeric Enums
// enum Month {
//   // JAN, >> akan di berikan index secara otomatis seperti array dimulai dari 0
//   JAN = 1, // >> jika di define seperti di samping maka index akan di mulai dari angka satu
//   FEB,
//   MAR,
//   APR,
//   MAY,
// }

// console.log(Month.JAN); // >> hasil : 0
// console.log(Month.MAR); // >> hasil : 3 karena JAN sudah berubah indexnya menjadi 1, dan Month.MAR sekarang indexnya menjadi 3

// String Enums
enum Month {
  JAN = "Januari",
  FEB = "Febuari",
  MAR = "Maret",
  APR = "April",
  MAY = "Mei",
}

console.log(Month.FEB); // >> maka akan menampilkan hasil config dari Month.FEB adalah Febuari.
