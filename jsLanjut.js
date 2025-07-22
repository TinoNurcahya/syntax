//? `` (backtick) atau disebut sebagai sting literal


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


//* ==================== THIS PADA ARROW FUNCTION ====================
//? Arrow function tidak punya this sendiri. Artinya, this di dalam arrow function akan mengacu ke this dari lingkungan di mana dia didefinisikan (bukan di mana dia dipanggil).

//? fungsi biasa
const obj = {
  nama: "Tino",
  halo: function() {
    console.log(this.nama); // mengacu ke obj
  }
};

obj.halo(); // Output: "Tino"

//? arrow function
const objek = {
  nama: "Tino",
  halo: () => {
    console.log(this.nama); // `this` bukan mengacu ke obj!
  }
};

objek.halo(); // Output: undefined (atau error), karena `this` diambil dari luar obj

//! ========== kapan cocok digunakan? ==========
function Timer() {
  this.detik = 0;
  
  setInterval(() => {
    this.detik++;
    console.log(this.detik);
  }, 1000);
}

new Timer();

// Kalau pakai function biasa, this akan jadi window atau undefined (di strict mode), bukan Timer.



//* ==================== HIGHER ORDER FUNCTION ====================
//? ========== Higher Order Function (HOF) di JavaScript adalah fungsi yang bisa menerima fungsi lain sebagai argumen, atau mengembalikan fungsi lain sebagai hasilnya. ==========

//? ========== CIRI-CIRI ==========
/* Menerima fungsi sebagai parameter
Mengembalikan fungsi sebagai output */

//! ========== HOF yang menerima fungsi sebagai parameter ==========
function sayHello(name) {
  return `Hello, ${name}!`;
}

function greet(callback) {
  const result = callback("Tino");
  console.log(result);
}

greet(sayHello); // Output: Hello, Tino!

//? greet adalah Higher Order Function karena menerima fungsi sayHello sebagai parameter.

//! ========== HOF yang mengembalikan fungsi ==========
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10

//? multiplier adalah Higher Order Function karena dia mengembalikan fungsi baru.


//* ==================== HIGHER ORDER FUNCTION: FILTER, MAP, &   REDUCE ====================
//! ========== 1. FILTER ==========
//? Menyaring elemen array berdasarkan kondisi tertentu.
//? Mengembalikan array baru yang hanya berisi item yang lulus kondisi.
const angka = [1, 2, 3, 4, 5, 6];
const genap = angka.filter((nilai) => nilai % 2 === 0);
console.log(genap); // [2, 4, 6]

//! ========== 2. MAP ==========
//? Mengubah setiap elemen array dan mengembalikan array baru hasil transformasi.
//? Melakukan operasi terhadap setiap item dalam array.
const angkav2 = [1, 2, 3];
const kaliDua = angkav2.map((nilai) => nilai * 2);
console.log(kaliDua); // [2, 4, 6]

//! ========== 3. REDUCE ==========
//? Menggabungkan semua elemen array menjadi satu nilai akhir (akumulasi).
//? Melakukan penghitungan total, penggabungan, atau akumulasi nilai.
const angkav3 = [1, 2, 3, 4];
const total = angkav3.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(total); // 10

/* Keterangan
accumulator merupakan hasil sebelumnya (dimulai dari 0)
currentValue merupakan elemen saat ini dalam array */

//! ========== Method Chaining (berantai) ==========
const angkav4 = [1, 2, 3, 4, 5, 6];
const hasilnya = angkav4
  .filter(n => n % 2 === 0)     // ambil yang genap [2, 4, 6]
  .map(n => n * 2)              // kali 2 => [4, 8, 12]
  .reduce((a, b) => a + b, 0);  // jumlahkan => 24

console.log(hasil); // 24


//* ==================== TEMPLATE LITERALS/ TEMPLATE STRING ====================
//! string literal menggunakan backtick (``)   `${umur} Tahun`;

//! template literal
/*  • menggunakan `` backtick 
  • milti-line string 
  • embedded expression
  • HTML Fragments
  • expression interpolation
  • tagged template */

  `string text`

  //! multi-line string / HTML FRAGMENT (menyisipkan tag html dl)
  `string text baris 1
   string text baris 2
   string text baris 3
  `
  let el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="bro">${mhs.nrp}</span>
  </div>`

  //! expression iterpolation
  let a = 10;
  let b = 15;
  console.log(`jika a = 10 dan b = 15, maka hasil penjumlahannya adalah : ${a + b}, bukan ${2 * a + b}`);

  //! embedded expression (function, alert, dll)
  `string text ${expression} string text`
  
  const x = 11;
  console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);
  
  const umur = 33;
  console.log(`saya ${umur} tahun.`);

  //! tagged template
  tagFunction`String literal ${expression1} lainnya ${expression2}`

    //? CONTOH TAG TEMPALTE
    function contoh(strings, ...values) {
      console.log(strings); // Array bagian string
      console.log(values);  // Array ekspresi
    }

    const nama = "Tino";
    const umurnya = 21;

    contoh`Halo, nama saya ${nama} dan saya berumur ${umurnya} tahun.`;

    //? HASIL
    ["Halo, nama saya ", " dan saya berumur ", " tahun."]
    ["Tino", 21]

    //? Contoh Penggunaan Nyata — Auto UPPERCASE
    function toUpper(strings, ...values) {
      return strings.reduce((result, str, i) => {
        const value = values[i] ? String(values[i]).toUpperCase() : "";
        return result + str + value;
      }, "");
    }

    const kota = "jakarta";
    const negara = "indonesia";

    const hasilny = toUpper`Saya tinggal di ${kota}, ${negara}`;
    console.log(hasilny);
    // Output: Saya tinggal di JAKARTA, INDONESIA

    //? Contoh Penggunaan Nyata — Format Mata Uang
    function rupiah(strings, ...values) {
      return strings.reduce((hasil, str, i) => {
        const val = typeof values[i] === 'number' 
          ? `Rp${values[i].toLocaleString('id-ID')}`
          : values[i];
        return hasil + str + (val || '');
      }, '');
    }

    const harga = 15000;
    console.log(rupiah`Harga barang ini adalah ${harga}`);
    // Output: Harga barang ini adalah Rp15.000

    //? Contoh Penggunaan Nyata — Highlight pencarian
    //? <input type="text" id="cari" placeholder="Ketik keyword..." oninput="highlightLangsung()" />

    <div id="output"></div>
    // Fungsi tagged template untuk highlight
    function highlight(strings, ...values) {
      return strings.reduce((result, str, i) => {
        let val = values[i];
        if (typeof val === 'string' && highlight.keyword) {
          const regex = new RegExp(`(${highlight.keyword})`, 'gi');
          val = val.replace(regex, '<mark>$1</mark>');
        }
        return result + str + (val || '');
      }, '');
    }

    // Fungsi dipanggil setiap kali user mengetik
    function highlightLangsung() {
      const inputKeyword = document.getElementById('cari').value;
      highlight.keyword = inputKeyword;

      const nama = "seorang programmer hebat.";
      const hasil = highlight`Hasil pencarian: ${nama}`;

      document.getElementById('output').innerHTML = hasil;
    }

    // Tampilkan default di awal
    highlightLangsung();



//* ==================== DESTRUCTURING  VARIABLE / ASSIGNMENT ====================
//! Array
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;

console.log(first, second, third); // red green blue

//! object
const person = {
  name: "Tino",
  age: 20
};
const { name, age } = person;

console.log(name, age); // Tino 20

//! Destructuring untuk Swap Value
let m = 5
let n = 10;
[m, n] = [n, m];

console.log(m); // 10
console.log(n); // 5

//! Destructuring di Function Return
function getUser() {
  return {
    username: "tinonur",
    email: "tino@mail.com",
    role: "admin"
  };
}

// Destructuring
const { username, email } = getUser();

console.log(username); // tinonur
console.log(email);    // tino@mail.com

//! Destructuring di Parameter Function
const printUser = ({ name, age }) => {
  console.log(`${name} is ${age} years old`);
};

const user = { name: "Tino", age: 20, gender: "male" };
printUser(user); // Tino is 20 years old

//! Destructuring Nested (bersarang)
const student = {
  name: "Tino",
  grades: {
    math: 90,
    english: 85
  }
};

const { grades: { math, english } } = student;
console.log(math, english); // 90 85



//* ==================== DESTRUCTURING  FUNCTION ====================
//! CONTOH PADA OBJEK
function tampilkanUser({ nama, umur }) {
  console.log(`Nama: ${nama}`);
  console.log(`Umur: ${umur}`);
}
const pengguna = { nama: "Tino", umur: 20 };
tampilkanUser(pengguna);

//! CONTOH PADA ARRAY
function prosesData([nama, umur]) {
  console.log(`Nama: ${nama}, Umur: ${umur}`);
}
prosesData(["Tino", 20]);

//! DENGAN DEFAULT VALUE
function buatAkun({ username, password, isAdmin = false }) {
  console.log(`Username: ${username}`);
  console.log(`Admin: ${isAdmin}`);
}
buatAkun({ username: "tino", password: "12345" });


function penjumlahanPerkalian(a,b) {
  return [a + b, a * b];
}
const ju



//* ==================== FOR..OF & FOR..IN====================
//! FOR..IN 
/* COCOK UNTUK:  Objek ({}) dan properti pada objek.
Juga bisa digunakan pada array, tapi tidak dianjurkan karena urutan indeks tidak terjamin. */
for (let key in object) {
  // Akses dengan object[key]
}

//? CONTOH
const user = { name: "Tino", age: 21 };

for (let key in user) {
  console.log(key, ":", user[key]);
}
// Output:
// name : Tino
// age : 21

//! FOR..OF (data yang bisa diiterasi seperti array, string, Map, Set)
/* COCOK UNTUK ARRAY, STRING, MAP, SET, NODELIST(DOM) */
for (let value of iterable) {
  // value langsung nilainya
}

//? CONTOH
const fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}
// Output:
// apple
// banana
// mango

//! Contoh Kesalahan Umum
const arr = ['a', 'b', 'c'];

// Salah pakai for...in untuk array
for (let index in arr) {
  console.log(index);      // 0, 1, 2  (index, bukan value)
  console.log(arr[index]); // a, b, c
}

// Benar pakai for...of
for (let value of arr) {
  console.log(value);      // a, b, c
}



//* ==================== SPREAD OPERATOR ====================
//? Spread Operator (...) digunakan untuk "menyebarkan" (spread) elemen dari array, objek, atau string ke tempat lain, biasanya saat membuat array/objek baru atau mengoper argumen ke fungsi.

//! Menggabungkan Array 2 atau lebih
const angka1 = [1, 2];
const angka2 = [3, 4];

const gabungan = [...angka1, ...angka2];
console.log(gabungan); // [1, 2, 3, 4]

//!  Menyalin Array
const buah1 = ['apel', 'pisang'];
const buah2 = [...buah1]; // salin isi buah1

buah2.push('jeruk');

console.log(buah1); // ['apel', 'pisang']
console.log(buah2); // ['apel', 'pisang', 'jeruk']

//!  Mengubah string jadi array karakter
const kata = "Halo";
const huruf = [...kata];

console.log(huruf); // ['H', 'a', 'l', 'o']


//* ==================== REST PARAMETER ====================
//? Rest Parameter adalah sintaks ... (tiga titik) yang digunakan dalam parameter fungsi untuk mengumpulkan sisa argumen yang dikirim ke fungsi menjadi satu array.
function namaFungsi(...parameter) {
  // parameter akan berisi array
}

//!  Contoh sederhana
function cetakNamaLengkap(...nama) {
  console.log(nama);
}

cetakNamaLengkap("Tino", "Nurcahya", "Orion");
// Output: ["Tino", "Nurcahya", "Orion"]

//!  CONTOH: Menjumlahkan Semua Angka
function jumlahkan(...angka) {
  let total = 0;
  for (let n of angka) {
    total += n;
  }
  return total;
}

console.log(jumlahkan(1, 2, 3, 4, 5)); // Output: 15

//!  REST HANYA BOLEH DI TERAKHIR
// ❌ Error!
function test(a, ...rest, b) {}

// ✅ Benar:
function test(a, b, ...rest) {
  console.log(a);    // argumen pertama
  console.log(b);    // argumen kedua
  console.log(rest); // sisanya dalam array
}
test(10, 20, 30, 40, 50);
// a: 10, b: 20, rest: [30, 40, 50]

//!  Contoh Perbedaan
// REST
function test(...nilai) {
  console.log(nilai); // ['a', 'b', 'c']
}
test('a', 'b', 'c');

// SPREAD
const huruf = ['a', 'b', 'c'];
console.log(...huruf); // 'a' 'b' 'c'



//* ==================== ASYNCHRONOUS PROGRAMMING DI JAVASCRIPT ====================
//? Dalam JavaScript, asynchronous memungkinkan kode berjalan di belakang layar, tidak menghalangi baris kode berikutnya dieksekusi.
//? Kamu masak mie instan. Sambil nunggu mie matang 3 menit, kamu bisa sambil nyuci piring. Itu asynchronous. Kalau kamu cuma nunggu mie sambil bengong, itu synchronous (blocking).

//? kenapa butuh Asynchronous
/*  • Mengambil data dari server/API (AJAX, fetch)
• Menunggu user klik/tindakan
• Membaca file besar
• Operasi jaringan atau database
*/

//!  Callback (MUDAH DIPAHAMI TAPI BISA CALLBACK HELL)
function ambilData(callback) {
  setTimeout(() => {
    callback("Data berhasil diambil");
  }, 1000);
}

ambilData((hasil) => {
  console.log(hasil); // Output: "Data berhasil diambil"
});


//!  Promise (LEBIH RAPI DARI CALLBACK TAPI LEBIH PANJANG)
const janji = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Berhasil!"), 1000);
});

janji.then((hasil) => console.log(hasil));
// Output setelah 1 detik: "Berhasil!"


//!  ajax (XMLHttpReques cara lama, fetch() cara modern)
//? Contoh Sederhana dengan XMLHttpRequest (cara lama)
const xhr = new XMLHttpRequest();
xhr.open("GET", "data.json", true);
xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  }
};
xhr.send();

//?  Contoh AJAX modern dengan fetch()
fetch("data.json")
  .then(response => response.json())
  .then(data => {
    console.log("Data dari server:", data);
  })
  .catch(error => {
    console.error("Terjadi error:", error);
  });

//? jika digabung menggunakan sync/await
async function ambilData() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    console.log("Data:", data);
  } catch (err) {
    console.error("Gagal:", err);
  }
}

ambilData();


//!  async & await (CARA MODERN & MUDAH) (MIRIP SYNC, BUTUH TRY/CATCH UNTUK ERROR)
function ambilData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data OK"), 1000);
  });
}

async function tampilkan() {
  console.log("Mulai");
  const data = await ambilData();
  console.log(data); // "Data OK"
  console.log("Selesai");
}

tampilkan();
// Output: Mulai → Data OK → Selesai


console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");
// Output: 1, 3, 2
// setTimeout adalah fungsi async. Kode lanjut tanpa nunggu.


//* ==================== ASYNCHRONUS: CALLBACK ====================
//? Callback adalah fungsi yang dikirim sebagai argumen ke fungsi lain, dan akan dipanggil (dieksekusi) nanti, biasanya setelah suatu proses selesai.
//? Fungsi yang dipanggil balik setelah sesuatu selesai.

function ambilData(callback) {
  setTimeout(() => {
    callback("Data berhasil diambil");
  }, 1000);
}

ambilData((hasil) => {
  console.log(hasil); // Output: "Data berhasil diambil"
});


function bacaFile(namaFile, callback) {
  console.log(`Membaca file ${namaFile}...`);
  setTimeout(() => {
    const isi = "Isi file: Halo dunia!";
    callback(isi);
  }, 1000);
}

bacaFile("data.txt", function(hasil) {
  console.log(hasil);
});
// OUTPUT
/* Membaca file data.txt...
(setelah 1 detik)
Isi file: Halo dunia! */



//* ==================== ASYNCHRONUS: PROMISE ====================
//? Promise adalah objek di JavaScript yang digunakan untuk menangani asynchronous operation (operasi yang berjalan di latar belakang, seperti ambil data dari server).
//? Promise memberikan cara yang lebih bersih dan mudah dibaca dibandingkan callback, terutama untuk menghindari callback hell.

//! konsep dasar promise
/* States
• Fulfielled: Berhasil diselesaikan
• Rejected: Gagal atau error
• pending: Sedang berlangsung

callback
• resolve: terpenuhi
• reject: tidak terpenuhi
• finally: waktu tunggu selesai baik terpenuhi atau tidak

aksi
• then: terpenuhi
• catch: tidak terpenuhi
*/


//! SINTAKS
const promise = new Promise((resolve, reject) => {
  // proses async di sini
  if (sukses) {
    resolve(nilai);   // janji terpenuhi
  } else {
    reject(error);    // janji gagal
  }
});

//? contoh Misalkan kita punya fungsi yang mengambil data user dari "server" (disimulasikan pakai setTimeout

function ambilDataUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sukses = true; // ganti false untuk simulasi error
      if (sukses) {
        resolve("Data user berhasil diambil!");
      } else {
        reject("Gagal mengambil data user!");
      }
    }, 2000);
  });
}

ambilDataUser()
.then((data) => {
  console.log("SUKSES:", data);
})
.catch((error) => {
  console.log("ERROR:", error);
});

//! Penjelasan
/* 
• Fungsi ambilDataUser mengembalikan Promise.
  • Setelah 2 detik, dia akan resolve atau reject.
  • .then() akan dijalankan jika sukses.
  • .catch() akan dijalankan jika gagal/error.
  */



 //* ==================== ASYNCHRONUS: FETCH ====================
 //? fetch adalah fungsi bawaan JavaScript untuk melakukan HTTP request (seperti GET, POST, dll).
 //? fetch menggunakan Promise di balik layar, jadi cocok digunakan dengan .then() atau async/await.

//! SINTAKS
fetch(url, options)
.then(response => response.json())
.then(data => {
  // gunakan datanya
})
.catch(error => {
  // tangani error
});
  
  
//! Contoh GET request (mengambil data)
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json()) // ubah dari JSON string ke JS object
.then(data => {
  console.log("Data yang diambil:", data);
})
.catch(error => {
  console.log("Terjadi error:", error);
});

  //? HASIL (contoh)
{
"userId": 1,
"id": 1,
"title": "sunt aut facere repellat provident occaecati",
"body": "quia et suscipit..."
}


//! Contoh POST request (mengirim data)
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Belajar Fetch',
    body: 'Ini body-nya',
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => {
    console.log("Data berhasil dikirim:", data);
  })
  .catch(error => {
    console.log("Terjadi error:", error);
  });









//* ==================== ASYNCHRONUS PROGRAMMING DI JAVASCRIPT ====================
setTimeout()
Menjalankan fungsi sekali setelah jeda waktu tertentu
console.log("Mulai");
setTimeout(() => {
  console.log("Ini muncul setelah 2 detik");
}, 2000);
console.log("Selesai");


setInterval()
Menjalankan fungsi berulang setiap interval waktu
setInterval(() => {
  console.log("Tiap 1 detik muncul ini");
}, 1000);


fetch()
Mengambil data dari server/API secara asynchronous (biasa pakai Promise)

XMLHttpRequest
Cara lama untuk request ke server (sebelum fetch)

Event Loop

Callback Function

clearTimeout() dan clearInterval()

Promise
Objek yang mewakili hasil yang belum tersedia tapi akan datang

Async / Await
Penulisan asynchronous yang lebih mudah dibaca (berdasarkan Promise)
async function ambilData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

ambilData();


addEventListener()
Menunggu Event dari user (klik, input, dll) tanpa menghambat kode lainnya
document.getElementById("tombol").addEventListener("click", function () {
  alert("Tombol ditekan!");
});
