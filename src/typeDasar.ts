// Tipe Data String
let nama: string = "rangga";
nama = "string";

// Tipe Data Number
let umur: number = 25;
// umur = "dua lima" >> error karena bukan number
// umur = { asds: "sdsdsd" }; // >> error karena bukan number
// umur = [1, 2, 3, 4]; // >> error karena bukan number
umur = 30; // tidak error

// Tipe data Boolean
let isMarried: boolean;

isMarried = true;
isMarried = false;

// Tipe data Any

let heroes: any = "Antman";
// let heroes = "Antman";
heroes = 20; // pasti akan error jika :any tidak di define
heroes = [];
heroes = {};
heroes = true || false || "string";
