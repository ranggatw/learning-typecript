// Array
let array: number[]; // array yang di dalamnya harus berupa number

array = [1, 2, 3];

let array2: string[]; // array yang di dalamnya harus berupa string

array2 = ["string 1", "string 2"];

let array3: any[]; // array dengan banyak tipe data

array3 = [1, "string", true, {}];

// Tupples >> sebuah array yang isinya bisa berbagai tipe data tetapi nilai / itemsnya terbatas
let biodata: [string, number];
// biodata = ["Yogyakarta", true]; // akan error karena array ke dua harus beruapa number bukan boolean
// biodata = ["Yogyakarta", 123, false]; // akan error karena array hanya boleh meneriam 2 items saja
biodata = ["Yogyakarta", 123];
