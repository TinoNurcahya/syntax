//* ====================OPERATOR PADA JS====================
// ? BINARY
  aritmatika
   +, -, *, /, % (modulus). prioritas aritmatika (), * atau /, + atau -.

  penugasan
  x += y sama dengan x = x + y
  x -= y sama dengan x = x - y
  x *= y sama dengan x = x * y
  x /= y sama dengan x = x / y
  x %= y sama dengan x = x % y

  perbandingan
  == sama dengan
  != tidak sama dengan
  === strict sama dengan
  !== strict tidak sama dengan
  > lebih besar dari
  < lebih kecil dari
  >= lebih besar sama dengan
  <= lebih kecil sama dengan

  logika
  && AND
  || OR
  ! NOT

  string
  operatornya adalah +, 10 + "10" hasilnya "1010", 10 + 10 + "10" hasilnya "2010", "10" + 10 + 10 hasilnya "101010"

// TERNARY
  kondisional
  (kondisi) ? benar : salah
  (x & 2 == 0) ? "genap" : "ganjil"

// UNARY
  typeof()
  typeof(10) hasilnya "number"
  typeof("10") hasilnya "string"
  typeof(true) hasilnya "boolean"


//* ====================TIPE DATA====================
//? string
\0 hasil karakter null
\' hasil karakter '
\" hasil karakter "
\\ hasil karakter \
\n hasil karakter baris baru
\t hasil karakter tab
\b hasil karakter backspace
\uxxxx hasil karakter unicode

"nama kamu" .length hasilnya 9 (termasuk spasi)


//* ====================VARIABEL====================
Adalah sebuah simbol yang menyimpan nilai.
1. Deklarasi (mendaftarkan variabel ke dalam lingkup yang sesuai)
2. Inisialiasi (proses penyediaan memori untuk variabel)
3. Assignment (untuk menetapkan nilai yang spesifik untuk menyimpan nilai itu sendiri)


let x; //deklarasi & inisialiasi
x = 20; // assignment.

Keyword untuk mendeklarasikan variabel.
Var (jangan gunakan karena dapat membuat bug lawas)
Let (gunakan let saja jika nilai dapat berubah)
Const (nilai tetap dan tidak dapat berubah)

let <nama variabel>

> let namaVariabelPanjang;

let nama = "shandika",
    umur = 31,
    Lulus= true;


//*  ====================PERULANGAN WHILE==================== 
let nilaiAwal = 1;
while (nilaiAwal <=5) {
  console.log("hello world");
  nilaiAwal++;
}

//* ====================PERULANGAN FOR=======================
for(let nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++) {
  console.log("hello world");
}

//* ====================PERULANGAN FOR BERSARANG====================
let s = '';
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < i; j++) {
    s += '*';
  }
  s += '\n';
}
console.log(s);


//* ====================IF ELSE==========================
let angka = prompt("masukkan angka:");

if(angka % 2 == 0) {
  alert(angka + "adalah bilangan GENAP");
}else if (angak % 2 == 1) {
  alert(angka + "adalah bilangan GANJIL");
}else {
  alert("yang anda masukkan bukan angka");
}

//* ====================SWITCH========================== 
switch (ekspresi) {
  case "nilai 1":
    aksi 1;
    break;
  case "nilai n":
    aksi n;
    break;
  default:
    aksi default;
    break;
}

let item = promt("masukkan nama makanan / minuman : \n (nasi, daging, susu, hamburger, softfrink)");

switch (item) {
  case 'nasi':
  case 'susu':
  case 'daging':
    alert("makanan / minuman sehat");
    break;
  case 'hamburger':
  case 'softdrink':
    alert ("makanan / minuman tidak sehat");
    break;
  default:
    alert ("anda memasukkan nama makanan / minuman yang tidak ada dalam daftar")
    break;
}



//* ====================FUNCTION============================================================(periksa refactoring)
/*keyword namaFunction(parameter) {   parameter boleh tidak ada, tapi tetap tulis ()

  function body;

  return ---;   tidak harus ada return
} */

function jumlahDuaBilangan(a, b) { //parameter a,b
  let total;
  total = a + b;

  return total;
}
//menampilkan
jumlahDuaBilangan(1, 2); //argumen 1, 2


//menghitung 2 volume kubus
function jumlahVolumeDuaKubus(a,b) {
  let volumeA, volumeB, total;
  
  volumeA = a*a*a;
  volumeB = b*b*b;
  total = volumeA + volumeB;
  return total;
}
alert(jumlahVolumeDuaKubus(8,3));
alert(jumlahVolumeDuaKubus(10,15));


// parameter dan argumen
function tambah(a, b) {
  return a + b;
}

cara untuk masukkan variable ada:
1) langsung dimasukkan:
    let hasil = tambah(2,3) 

2) taruh variable terpisah:
    let a = 2;
    let b = 3;

3) inputan user:
    let a = prompt('Masukkan nilai pertama: ');
    let b = prompt('Masukkan nilai kedua: ');

catatan: prompt menggunakan string Jadi tipe data harus dirubah jadi integer memakai parseInt()
sehingga:
    let a = parseInt(prompt('Masukkan nilai pertama: '));
    let b = parseInt(prompt('Masukkan nilai kedua: '));

4) operasi matematik:
    let a = parseInt(prompt('Masukkan nilai pertama: '));
    let b = parseInt(prompt('Masukkan nilai kedua: '));
    let hasil = tambah(a*2, b*2);

5) memasukkan argumen hasilnya sebagai function juga:
let hasil = kali(tambah(1,2), tambah(3,4)); // ini berarti 1) jalankan fungsi tambah, lalu 2) jalankan fungsi kali.
console.log(hasil); // maka hasilnya akan 21


parameter: nilai yg ada di function
argument: nilai yg ada di array
misal:
function tambah(a, b) { ===> nilai a dan b  adalah parameter
  return a + b;
}
let hasil = tambah(3, 4, 5); ===> nilai 3 4 5 adalah argument

===parameter < argument: ===
Jika parameter lebih dikit dari argument,
maka argument kelebihannya akan diabaikan.

===parameter > argument: === 
Jika parameter lebih banyak dari argument,
maka parameter kelebihannya akan diisi undefined.


//* ====================FUNCTION: Arguments====================
permasalahan: lalu gmn kalau argumen nya lebih banyak dari parameter, 
tapi masih pengen dihitung juga, alias kelebihannya diitung juga ya, function! jangan kau hiraukan dia.
ada caranya, yaitu pakai --Arguments--. 

Apa itu Arguments?
"array yg berisi nilai yg dikirimkan saat fungsi dipanggil"
Pseudovariable: variable yg kayaknya ga keliatan, tapi ada. 
Utopia - Antara ada dan tiada.
parameter yg kelebihan, akan ditampung di arguments. 

misal:
function tambah() {
    let hasil = 0;
    for (let i = 0; i < arguments.length; i++) {
        hasil = hasil + arguments[i];
    }
    return hasil;
}

let coba = tambah(1,2,3,4); // perhatikan, harusnya krn parameter cuma a dan b, maka yg 3 dan 4 (dst.) harusnya di abaikan.
Akan tetapi, krn loop dalam function nya memakai kata "arguments", maka yg terabaikan tadi juga ikut dihitung.
console.log(coba); // outputnya 6. Kalau tanpa arguments, outputnya 3 krn yg index array 3 dan 4 diabaikan.


//* ====================FUNCTION: REFACTORING====================
readability (PALING PENTING gampang dibaca)
DRY don't repeat yourself (efisiensi, jangan ribet)
testability (mudah saat dilakukan pengujian)
performance (kode yang bisa menngkatkan performa)

function jumlahVolumeDuaKubus(a,b) {
  return a*a*a + b*b*b;
}
alert(jumlahVolumeDuaKubus(8,3));


//* ====================FUNCTION: VARIABLE SCOPE====================

1. global scope
Variabel yang dideklarasikan di luar fungsi atau blok manapun akan memiliki global scope.
let nama = "Budi";
function sapa() {
  console.log("Halo " + nama); // bisa akses 'nama' karena global
}
sapa(); // Output: Halo Budi

2.Function Scope
Variabel yang dideklarasikan di dalam fungsi hanya bisa diakses di dalam fungsi itu saja.
function contoh() {
  let pesan = "Hai!";
  console.log(pesan); // Bisa
}
contoh();
console.log(pesan); // Error: pesan is not defined

3. Block Scope
Variabel yang dideklarasikan dengan let atau const di dalam blok ({}) hanya bisa diakses di dalam blok itu saja.
if (true) {
  let umur = 20;
  console.log(umur); // Bisa
}
console.log(umur); // Error: umur is not defined

//* ====================FUNCTION: REKURSIF====================
//semua looping bisa menjadi rekursif, tapi tidak semua rekursif bisa dijadikan looping
// BASE CASE (kondisi akhir rekursif yang menghasilkan nilai)

//contoh dengan for
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//contoh dengan rekursif
function tampilAngka(n) {
  /* if (n === 0) {
    return;
  } */

  if (n === 0) return;  //base case
  console.log(n);
  return tampilAngka(n-1)
}
tampilAngka(10);

//* ====================FUNCTION DECLARATION VS FUNCTION EXPRESSION  ============================================================
//* FUNCTION DECLARATION
function namaFungsi(parameter_OPSIONAL) {
  functionBody;
}

// Bisa langsung dipanggil di mana saja
jalankan();
function jalankan() {
  console.log("Program dijalankan.");
}

//* FUNCTION EXPRESSION
function namaFungsi_OPSIONAL(parameter_OPSIONAL) {
  functionBody;
}
// contohnya
const tombolKlik = function() {
  console.log("Tombol diklik!");
};

document.getElementById("btn").addEventListener("click", tombolKlik);



//* ==================== ARRAY ============================================================
/* 
  index array di javascript dimulai dari 0
  array di jacvascript bertipe object
  memiliki fungsi/menthod lenght untuk menghitung jumlah elemen di dalamnya
  elemen BOLEH MEMILIKI TIPE DATA YANG BERBEDA
*/

//* MEMBUAT ARRAY

let binatang = ['kucing', 'kelinci', 'monyet', 'panda', 'koala', 'sapi'];
// atau
let binatang = [];
binatang = ['kucing', 'kelinci', 'monyet', 'panda', 'koala', 'sapi'];

//* MENGAKSES ARRAY
console.log(binatang[4]); //koala
//* ARRAY TIPE OBJECT
console.log(typeof(binatang));
//* MEMILIKI MENTHOD LENGTH
console.log(binatang.length); //6
//* ARRAY BOLEH BEDA TIPE
let array = ['text', 2, false];
//* ARRAY FUNGSI EKSPRESSION
let myfunc = function() {
  alert ('hello world');
};
let arraySaya = ['text', 2, false, myfunc];

//* ARRAY MULTIDIMENSI
let array = ['text', 2, false, [4, 5, 6]];  //index [0, 1, 2,3[0,1,2]]

console.log(array[3][1])  //5

//* ====================ARRAY: MANIPULASI ARRAY====================

//menambah isi array
let arr = ["scorpio", "biduk", "crux", "orion"];
console.log(arr); //console.log(arr[1])

//menghapus isi array
let arr = ["scorpio", "biduk", "crux", "orion"];
arr[1] = undefined; //biduk menjadi undifined
console.log(arr);

//menampilkan isi array
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}



//* MENTHOD ARRAY (length, join, push dan pop, shift dan unshift, slice dan splice, foreach dan map, filter dana find)

// 1. length
let arr = ["scorpio", "biduk", "crux", "orion"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

// 2. join
let arr = ["scorpio", "biduk", "crux", "orion"];
console.log(arr.join());   //scorpio, biduk, crux, orion

// 3. push (tambah terakhir, bisa 2) dan pop (hilangkan terakhir)
let arr = ["scorpio", "biduk", "crux", "orion"];
arr.push("carla");
console.log(arr.join());   //scorpio, biduk, crux, orion, carla (menambah)
arr.pop();    //scorpio, biduk, crux, orion (carla hilang)

// 4. unshift(menambah di awal) dan shift
let arr = ["scorpio", "biduk", "crux", "orion"];
arr.unshift("carla");
console.log(arr.join());  //carla(awal), scorpio, biduk, crux, orion
arr.shift(); //scorpio, biduk, crux, orion,

// 5. splice(menambah di tengah)
// splice(indexAwal, mauDihapusBerapa(OPSIONAL), elemenbaru, elemenbaru2, ...)
let arr = ["scorpio", "biduk", "crux", "orion"];
arr.splice(2, 0, "carla");
console.log(arr.join());  //scorpio, biduk, carla, crux, orion, 

// 6. slice(menambah di tengah)
// slice(Awal, akhir)
let arr = ["scorpio", "biduk", "crux", "orion"];
let arr2 = arr.slice(1,3);
console.log(arr2.join());   //biduk, crux,

// 7. forEach (perulangan)
let angka = [1, 2, 3, 4, 5, 6, 7, 8];
/*for (let i = 0; i < array.length; i++) {
  console.log(angka[i]);
} */

angka.forEach(function(e) {
  console.log(e);
});

// 7. map (mengubah setiap elemen array dan menghasilkan array baru berdasarkan perubahan itu.)
const angka = [1, 2, 3, 4];
const hasil = angka.map(function(item) {
  return item * 2;
});
console.log(hasil); // [2, 4, 6, 8]

// 8. sort 
const angka = [10, 2, 5, 1];
angka.sort(function(a, b) {
  return b - a;
});
console.log(angka);   //[10, 5, 2, 1]

// 9. filter (Mencari banyak data yang memenuhi kondisi.
//Menghasilkan array baru (isi data yang lolos syarat)).

const angka = [1, 2, 3, 4, 5, 6];
const genap = angka.filter(function(nilai) {
  return nilai % 2 === 0;
});
console.log(genap); //[2, 4, 6]

// 10. find (Mencari SATU data pertama yang memenuhi kondisi, Menghasilkan satu nilai saja (bukan array).)

const angka = [1, 2, 3, 4, 5, 6];
const pertamaGenap = angka.find(function(nilai) {
  return nilai % 2 === 0;
});
console.log(pertamaGenap);  //2


//* ====================OBJECT====================
var mahasiswa = {
  nama : "Tino nurcahya",
  lulus : true,
  IPSemester : [2.90, 3.20, 3.25, 2.88, 3.04],
  IPKumulatif : function () {
    var total = 0;
    var ips = this.IPSemester;
    for (var i = 0; i < ips.length; i++) {
      total += ips[i];
    }
    return total/ips.length;
  }
}
mahasiswa.IPKumulatif();

//* ======= ANATOMI OBJECT 
var orang = {
  //* properti

  nama : "tino nurcahya",
  umur : 18,
  pekerjaan : "mahasiswa",

  //* menthod 
  sapa : function () {
    return "hi, nama saya " + this.nama +
    " usia saya " + this.umur + " tahun, dan saya adalah seorang " + this.pekerjaan;
  }
}


//* ========= OBJECT NESTED/BERSARANG 
var mhs = {
  nama : "Tino Nurcahya",
  umur : 18,
  ips : [3.00, 2.50, 3.20],
  alamat : {
    jalam : "JL. bintang orion no 7",
    kota : "Bandung",
    provinsi : "Jawa Barat"
  }
}

//* cara panggil 
mhs.nama ATAU mhs["nama"] // Tino Nurcahya 
mhs.ips // menamoilkan semua isi ips
mhs.ips[2] //3.2
mhs.alamat.kota ATAU mhs["alamat"]["kota"]  //bandung

//* MEMBUAT OBJECT PADA JAVASCRIPT
//* object literal
var mhs1 = {
  nama : "tino",  //key dan value
  nrp : "1234567890",
  email : "tino@gmail.com",
  jurusan : "teknik informatika"
}
var mhs2 = {
  nama : "tinov2",  //key dan value
  nrp : "4567890",
  email : "tinov2@gmail.com",
  jurusan : "teknik industri"
}


//* function declaration
function buatObjectMahasiswa (nama, nrp, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

var mhs3 = buatObjectMahasiswa("tino", "12413", "tino@gamil.com", "teknik informatika");


//* constructor function (PENTING!! gunakan new) (sering digunakan) (gunakan awal huruf besar)
function Mahasiswa(nama, nrp, email, jurusan) {
  this.nama = nama;
  this.nrp = nrp; 
  this.email = email;
  this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa("erik", "23434", "erik@gamil.com", "teknik informatika")


//object.create