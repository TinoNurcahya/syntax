// `` (backtick) atau disebut sebagai sting literal


//* ==================== OBJECT ====================
//! ========== 1. Object Literal ==========
let mahasiswa = {
  nama: 'Tino',
  energi: 10,
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, Selamat Makan`)
  }
}

//! ========== 2. Function Declaration ==========
function Mahasiswa(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  
  mahasiswa.makan = function(porsi) {
    this.energi += porsi;
    console.log(`halo ${this.nama}, selamat makan!`);
  }

  mahasiswa.main = function (jam) {
    this.energi -= jam;
    console.log(`halo ${this.nama}, selamat bermain!`);
  }
  return mahasiswa;
}

let tino = Mahasiswa('tino', 10);
let tinov2 = Mahasiswa('tinov2', 10);

//! ========== 3. Constructor Function (SERING DIGUNAKAN)==========
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
  
  this.makan = function(porsi) {
    this.energi += porsi;
    console.log(`halo ${this.nama}, selamat makan!`);
  }
  
  this.main = function (jam) {
    this.energi -= jam;
    console.log(`halo ${this.nama}, selamat bermain!`);
  }
}

let orion = new Mahasiswa('orion', 10);
let john = new Mahasiswa('john', 10);

//! ========== 4. Object.create() (EFISIEN MANAJEMEN MEMORI)==========
const methodMahasiswa = {
  makan: function(porsi) {
    this.energi += porsi;
    console.log(`halo ${this.nama}, selamat makan!`);
  },
  main: function (jam) {
    this.energi -= jam;
    console.log(`halo ${this.nama}, selamat bermain!`);
  },
  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`halo ${this.nama}, selamat tidur!`);
  }
}

function Mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  
  return mahasiswa;
}

let alpha = new Mahasiswa('alpha', 10);
let beta = new Mahasiswa('beta', 10);


//! ========== PROTOTYPE (OBJEK DENGAN MENGGUNAKAN PROTOTYPE INHERITANCE) ==========
//? PROTOTYPE ADALAH VERSI BELAKANG LAYAR class

function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi; 
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Halo ${this.nama}, selamat makan!`;
}
Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  return `Halo ${this.nama}, selamat bermain!`;
}
Mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  return `Halo ${this.nama}, selamar tidur!`;
}

let alphav2 = new Mahasiswa('alphav2', 10);

//! ========== VERSI CLASS (lebih masuk akal dibanding prototype) ==========
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi
  }

  makan (porsi) {
  this.energi += porsi;
  return `Halo ${this.nama}, selamat makan!`;
  }
  main (jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat bermain!`;
  }
  tidur (jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, selamar tidur!`;
  }
}

let betav2 = new Mahasiswa('betav2', 10);



//* ==================== EXECUTION CONTEXT, HOISTING & SCOPE ====================

//! ========== 1. Execution Context (Konteks Eksekusi) ==========
/* Execution Context adalah lingkungan di mana kode JavaScript dieksekusi. */

//! ========== a. Global Execution Context ==========
/*  • Dibuat saat pertama kali file JS dijalankan.
  • Hanya ada satu global context.
  • Variabel dan fungsi yang dideklarasikan di luar fungsi apapun masuk ke sini. */

//! ========== b. Function Execution Context ==========
/*  • Dibuat setiap kali fungsi dipanggil.
  • Setiap fungsi memiliki execution context-nya sendiri. */

//! ========== c. Eval Execution Context ==========
  // • Jarang digunakan. Dibuat saat eval() dipanggil (eksekusi kode string).

//? ========== Proses dalam Execution Context ==========
/* Creation Phase (Fase Pembuatan)
  • Mendefinisikan variabel dan fungsi.
  • Terjadi hoisting (dibahas di bawah).
Execution Phase (Fase Eksekusi)
  • Menjalankan kode baris per baris. */

//! ========== 2. Hoisting ==========
/* Hoisting berarti "pengangkatan". Dalam JavaScript, deklarasi variabel dan fungsi akan diangkat ke atas scope-nya sebelum kode dijalankan. */

console.log(nama); // undefined (bukan error!)
var nama = "Tino";

/* Penjelasan:
JavaScript "mengangkat" deklarasi var nama ke atas.
Jadi sebenarnya terjadi seperti ini: */

var nama;       // deklarasi diangkat
console.log(nama); // undefined
nama = "Tino";  // inisialisasi di baris ini 

//? ========== CATATAN ==========
/*  • var akan dihoisting (dinaikkan) tapi nilainya akan jadi undefined.
  • let dan const juga dihoisting, tapi tidak bisa diakses sebelum deklarasi karena masuk ke "temporal dead zone".
  • Fungsi deklaratif (function nama() {}) juga dihoisting penuh, jadi bisa dipanggil sebelum dideklarasikan.*/

//! ========== 3. Scope (Cakupan) ==========
// ==========  Scope adalah tempat di mana suatu variabel bisa diakses. ========== 

//! ========== a. Global Scope ==========
/* Variabel yang dideklarasikan di luar fungsi manapun.
Bisa diakses dari mana saja.*/

let globalVar = "Hello";

function test() {
  console.log(globalVar); // bisa diakses
} 

//! ========== b. Function Scope ==========
/* Variabel yang dideklarasikan dengan var di dalam fungsi hanya bisa diakses di dalam fungsi itu.*/
function sayHi() {
  var name = "Tino";
  console.log(name);
}
console.log(name); // Error! name is not defined 

//! ========== c. Block Scope (baru sejak ES6) ==========
/* let dan const punya block scope.
Hanya bisa diakses di dalam {} tempat dia dideklarasikan.
*/
{
  let x = 10;
  console.log(x); // OK
}
console.log(x); // Error! 

//? ========== RINGKASAN ==========
/* Execution Context
	Lingkungan tempat kode dijalankan. Ada Global dan Function Context.

Hoisting
	JavaScript mengangkat deklarasi var dan function ke atas sebelum dijalankan.

Scope
	Cakupan di mana variabel bisa diakses. Ada Global, Function, dan Block Scope. */



//* ==================== CLOSURE ====================
//? ========== Closure adalah kombinasi dari fungsi dan lingkungan leksikal (lexical environment) di mana fungsi itu didefinisikan. Artinya, fungsi "mengingat" variabel dari scope tempat ia dibuat, bahkan setelah scope tersebut selesai dieksekusi. ==========

function luar() {
  let pesan = "Halo dari dalam closure!";

  function dalam() {
    console.log(pesan); // fungsi ini "ingat" variabel pesan dari luar()
  }

  return dalam;
}

const hasil = luar();  // memanggil fungsi luar, yang mengembalikan fungsi dalam
hasil();               // output: "Halo dari dalam closure!"

//? ========== fungsi dalam masih bisa mengakses variabel pesan meskipun fungsi luar sudah selesai dieksekusi. Ini karena fungsi dalam membentuk closure yang menyimpan referensi ke lingkungan di mana dia dibuat.==========

//! ========== PENGGUNAAN CLOSURE ==========
//! ========== 1. Membuat private variable ==========
function counter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const hitung = counter();

console.log(hitung()); // 1
console.log(hitung()); // 2
console.log(hitung()); // 3

//! ========== 2. Event handlers atau callback yang tetap akses ke variabel tertentu: ==========
function buatListener(nama) {
  return function() {
    console.log(`Halo, ${nama}`);
  };
}

const listener = buatListener("Tino");
listener(); // Halo, Tino

//? ========== RINGKASAN ==========
/* Ada fungsi dalam fungsi (nested).
Fungsi dalam mengakses variabel dari fungsi luarnya.
Fungsi dalam itu masih bisa dipanggil meskipun fungsi luarnya sudah selesai*/

//* ==================== ARROW FUNCTION ====================
//? ========== cara lain untuk menulis function agar lebih ringkas ==========
/* const namaFungsi = () => {}	
  • Format umum arrow function
Tidak pakai function
  • Arrow function tidak menggunakan kata kunci function
Return otomatis jika satu baris
  • Jika hanya satu pernyataan, tidak perlu {} dan return
Jika pakai {}	Harus pakai return kalau mau mengembalikan nilai */

/* const tampilNama = function (nama) {
  return `Halo, ${nama}`;
}
console.log(tampilNama('tino'));
const tampilNama = (nama) => { return `Halo, ${nama}`;} */

//? ========== contohnya ==========
/* const halo = () => console.log("Halo Dunia!");

const kali = (x, y) => x * y;

const tampilNama = nama => `Halo, ${nama}`; // Tanpa kurung jika hanya 1 parameter

const panjangNama = nama => {
  const panjang = nama.length;
  return panjang;
}; */
