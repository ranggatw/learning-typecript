// Function

// Tipe data pada function

function getName(): string {
  // >> jika function sudah di declare seperti disamping maka, function wajib mereturn nilai
  return "Hello my name is Rangga";
}

console.log(getName());

function getAge(): number {
  // return "string1"; // akan error kaerena tipe data sudah di declare menggunakan string dan kita mereturn tipe data number
  return 1212;
}

function printName(): void { // >> dengan mendeclare menjadi void maka function tidak boleh mengembalikan nilai pada return
  console.log("console dari print name");
  // return "Print" // akan error 
}

printName();
