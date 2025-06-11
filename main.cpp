// compile di terminal perintah ./main.exe
//* pelajari lagi pointer

#include <iostream>

// agar tidak perlu menggunakan std::
using namespace std;

int main() {
  //ini adalah isi dari kode program
  return 0;
}

  //* menampilkan(console.out) text, angka dan operasi matematika  +, -, *, /, %
  // cout << "hello world!";
  // cout << 3;
  // cout << 3 % 3;

  //* baris baru menggunakan \n atau endl
  // cout << "Hello World!" << "\n";
  // cout << "Hello World!" << "\n\n";

  //* variabel
  //* deklarasi (int a), inisialisasi (int a = 10)
  // int umur = 35, tinggi = 165;
  // cout << "I am " << umur << " years old.";
  // cout << "I am " << umur << " cm";

  //* user input
  // int x; 
  // cout << "Masukkan angka: "; 
  // cin >> x;
  // cout << "Angka yang dimasukkan adalah: " << x; 

  //* tipe data
  // int angka = 5;                 Integer (bilangan bulat)
  // float myFloatNum = 1.0;        Floating point number
  // double myDoubleNum = 3.14;     Floating point number (lebih presisi/banyak/aman digunakan)
  // char huruf = 'D';              Character
  // bool Boolean = true;           Boolean
  // string kalimat = "Hai";        String 

  //* aritmatika
  // + penjumlahan x + y	
  // -	pegurangan x - y	
  // *	perkalian x * y	
  // /	pembagian x / y	
  // %	modulus x % y	

  //* operator assignment
  // =	sama dengan x = 5	
  // x += y sama dengan x = x + y
  // x -= y sama dengan x = x - y
  // x *= y sama dengan x = x * y
  // x /= y sama dengan x = x / y
  // x %= y sama dengan x = x % y
  // x &= y sama dengan x = x & y	
  // x |= y sama dengan x = x | y	
  // x ^= y sama dengan x = x ^ y	
  // x >>= y sama dengan x = x >> y	
  // x <<= y sama dengan x = x << y

  // == sama dengan
  // != tidak sama dengan
  // > lebih besar dari
  // < lebih kecil dari
  // >= lebih besar sama dengan
  // <= lebih kecil sama dengan

  //* logika
  // && AND
  // || OR
  // ! NOT

  //* string
  // #include <string>
  // \' hasil karakter '
  // \" hasil karakter "
  // \\ hasil karakter \
  // \n hasil karakter baris baru
  // \t hasil karakter tab
  // \b hasil karakter backspace

  //* matematika sqrt (square root), round (rounds a number) and log (natural logarithm),
  // #include <cmath>
  // cout << sqrt(64);
  // cout << round(2.6);
  // cout << log(2);

  //* IF ELSES STATEMENT
  //*shortcut syntax
  // variable = (kondisi (!=, ==, <, <=, >, >=)) ? jawabanBenar : jawabanSalah;     

  // int waktu = 20;
  // string hasil = (waktu < 18) ? "Good day." : "Good evening.";        
  // cout << hasil;

  //*contoh if, else if, else
  // int waktu = 22;
  // if (waktu < 10) {
  //   cout << "Good morning.";
  // } else if (waktu < 20) {
  //   cout << "Good day.";
  // } else {
  //   cout << "Good evening.";
  // }

  //* switch case
  // switch(expression) {
  //   case x:
  //       code block
  //     break;
  //   case y:
  //       code block
  //     break;
  //   default:
  //       code block
  // }

  // int angka = 2;
  // switch (angka) {
  //   case 1:
  //     cout << "angka 1";
  //     break;
  //   case 2:
  //     cout << "angka 2";
  //     break;
  //   default:
  //     cout << "angka tidak ditemukan";
  // }

  //* while loop
  // syarat dahulu lalu eksekusi
  // while (kondisi) {
  //   aksi
  // }

  // int i = 0;
  // while (i < 5) {
  //   cout << "halo" << "\n";
  //   i++;
  // }

  //* do-while loop
  // eksekusi dahulu lalu syarat
  // do {
  //   aksi
  // }
  // while (kondisi);

  // int i = 0;
  // do {
  //   cout << "halo" << "\n";
  //   i++;
  // }
  // while (i <= 5);

  //* for loop
  // for (inisialisasi; loop kondisi; increment) {
  //   aksi
  // }

  // for (int i = 0; i < 5; i++) {
  //   cout << "hallo" << "\n";
  // }

  //* nested loop/ loop bersarang
  // for (int i = 1; i <= 3; i++) {   
  //   for (int j = 1; j <= i; j++) {
  //     cout << "*";
  //   }
  //   cout << "\n";
  // }

  //* break for
  // for (int i = 0; i < 10; i++) {
  //   if (i == 4) {
  //     break;
  //   }
  //   cout << i << "\n";
  // }

  //* continue for
  // for (int i = 0; i < 10; i++) {
  //   if (i == 4) {
  //     continue;
  //   }
  //   cout << i << "\n";
  // }

  //* break while
  // int i = 0;
  // while (i < 10) {
  //   cout << i << "\n";
  //   i++;
  //   if (i == 4) {
  //     break;
  //   }
  // }

  //* continue while
  // int i = 0;
  // while (i < 10) {
  //   if (i == 4) {
  //     i++;
  //     continue;
  //   }
  //   cout << i << "\n";
  //   i++;
  // }

  //* fungsi kembalian
  // tipe_data nama_fungsi(daerah_input/argumen/default=...) {
  //   aksi
  // }

  // int tambah(int a, int b){
  //   int c;
  //   c = a + b;
  //   return c;
  // }
    //*****cara panggilnya di fungsi main*/
    // int hasil, a, b;
    // cout << "masukkan a";
    // cin >> a;
    // cout << "masukkan b";
    // cin >> b;

    // hasil = tambah(a, b);
    // cout << hasil

  //* void tanpa kembalian

  // void myFunction(string nama, int umur) {
  //   cout << nama << " Refsnes. " << umur << " years old. \n";
  // }
  
  // int main() {
  //   myFunction("Liam", 3);      Liam Refsnes. 3 years old.    
  //   myFunction("Jenny", 14);    Jenny Refsnes. 14 years old.
  //   myFunction("Anja", 30);     Anja Refsnes. 30 years old.
  //   return 0;
  // }

  // * Fungsi Rekursif (me-return nilai itu sendiri/ fungsi itu sendiri)

  // int fibonacci (int n) {
  //   if ((n == 0) || (n == 1)) {
  //     return n;
  //   } else {
  //     return fibonacci (n - 1) + fibonacci (n - 2);
  //   }
  // }

  //* POINTER
  // int a = 5;
  // int *aPtr = nullptr;   alamat pointer kosong

  // cout << " nilai dari a = " << a << endl;  hasil 5
  // cout << " alamat dari a = " << aPtr << endl;  hasil 0xadkfjk

  //* REFERENCE (pointer dengan alamat yang sama)

  // int a = 5;
  // cout << "address dari a " << &a << end;
  // cout << "nilai dari a " << a << end;

      //     //* reference
      // int &b = a;
      // cout << "nilai dari b " << b << end;
      // cout << "address dari b " << &b << end;

      // b = 10;
      // cout << "nilai dari a " << a << endl;
      // cout << "nilai dari b " << b << endl;

      // b = 20;
      // cout << "nilai dari a " << a << endl;
      // cout << "nilai dari b " << b << endl;

  //* ARRAY (index mulai dari 0 yaitu contohnya angka 10)
  // #include <array>
  // int angka[5] = {10, 20, 30, 40, 50};
  // cout << angka[2];  Output: 30
      //***looping array */
      // int angka[5] = {1, 2, 3, 4, 5};

      // for (int x : angka) {
      //     cout << x << endl;
      // }

  //* array 2D
  // tipe_data nama_array[jumlah_baris][jumlah_kolom];
  // int nilai[2][3] = {   array 2 baris, 3 kolom
  //   {1, 2, 3},
  //   {4, 5, 6}
  // };
      
    //**** Menampilkan isi array 2D */ 
      // for(int i = 0; i < 2; i++) {
      //   for(int j = 0; j < 3; j++) {
      //       cout << nilai[i][j] << " ";
      //   }
      //   cout << endl;
      // }

  //* cari array
    // int main() {
    //   int data[] = {10, 20, 30, 40, 50};
    //   int cari = 30;
    //   bool ketemu = false;

    //   for (int i = 0; i < 5; i++) {
    //       if (data[i] == cari) {
    //           cout << "Data ditemukan di indeks ke-" << i << endl;
    //           ketemu = true;
    //           break;
    //       }
    //   }

    //   if (!ketemu) {
    //       cout << "Data tidak ditemukan" << endl;
    //   }

    //   return 0;
    // }

  //* STRING
  // #include <string>
  // string nama;
  // cout << "Masukkan nama kamu: ";
  // getline(cin, nama);  // agar bisa input dengan spasi

  // cout << "Halo, " << nama << "!" << endl;
  // cout << "Panjang nama kamu: " << nama.length() << " karakter" << endl;

  //*SUBSTRING
  // Substring adalah bagian dari string utama.
  // string.substr(posisi_awal, jumlah_karakter);

  // string kalimat = "Belajar C++";
  // string sub = kalimat.substr(0, 7);    ambil "Belajar"
  // cout << "Substring: " << sub << endl;

  //* SUBTITUSI STRING
  // #include <iostream>
  // #include <string>
  // using namespace std;

  // int main() {
  //        1. Substitusi Kata Secara Manual (Ganti "kopi" jadi "teh")
  //     string kalimat = "Aku suka kopi";
  //     kalimat.replace(9, 4, "teh");
  //     cout << "1. Substitusi Manual: " << kalimat << endl;   Output: Aku suka teh

  //        2. Substitusi Berdasarkan Kata (Ganti "jeruk" jadi "mangga")
  //     string teks = "Saya minum jus jeruk";
  //     string target = "jeruk";
  //     string pengganti = "mangga";
  //     size_t pos = teks.find(target);
  //     if (pos != string::npos) {
  //         teks.replace(pos, target.length(), pengganti);
  //     }
  //     cout << "2. Ganti Berdasarkan Kata: " << teks << endl;   Output: Saya minum jus mangga

  //        3. Ganti Semua Kemunculan Kata "apel" jadi "jeruk"
  //     string fruits = "apel enak, apel manis, apel segar";
  //     string cari = "apel";
  //     string ganti = "jeruk";
  //     pos = 0;
  //     while ((pos = fruits.find(cari, pos)) != string::npos) {
  //         fruits.replace(pos, cari.length(), ganti);
  //         pos += ganti.length();   lanjutkan dari posisi setelah kata yang diganti
  //     }
  //     cout << "3. Ganti Semua Kata: " << fruits << endl;   Output: jeruk enak, jeruk manis, jeruk segar

  //        4. Sensor Kata Kasar (Ganti "bodoh" jadi "****")
  //     string chat = "Kamu bodoh dan tidak sopan!";
  //     string sensor = "bodoh";
  //     pos = chat.find(sensor);
  //     if (pos != string::npos) {
  //         chat.replace(pos, sensor.length(), "****");
  //     }
  //     cout << "4. Sensor Kata Kasar: " << chat << endl;    Output: Kamu **** dan tidak sopan!

  //        5. Ganti Template Variabel (Ganti [nama] dengan "Raka")
  //     string templateTeks = "Halo [nama], selamat datang!";
  //     string nama = "Raka";
  //     pos = templateTeks.find("[nama]");
  //     if (pos != string::npos) {
  //         templateTeks.replace(pos, 6, nama);
  //     }
  //     cout << "5. Ganti Template: " << templateTeks << endl;   Output: Halo Raka, selamat datang!

  //        6. Ganti Domain Email (Ganti gmail.com jadi student.ac.id)
  //     string email = "andi@gmail.com";
  //     string lama = "gmail.com";
  //     string baru = "student.ac.id";
  //     pos = email.find(lama);
  //     if (pos != string::npos) {
  //         email.replace(pos, lama.length(), baru);
  //     }
  //     cout << "6. Ganti Domain Email: " << email << endl;    Output: andi@student.ac.id

  //        7. Hapus Karakter Khusus (@, !, #)
  //     string data = "H@l@o!#";
  //     while ((pos = data.find("@")) != string::npos) {
  //         data.replace(pos, 1, "");
  //     }
  //     while ((pos = data.find("!")) != string::npos) {
  //         data.replace(pos, 1, "");
  //     }
  //     while ((pos = data.find("#")) != string::npos) {
  //         data.replace(pos, 1, "");
  //     }
  //     cout << "7. Hapus Karakter Khusus: " << data << endl;    Output: Halo

  //     return 0;
  // }

  //* GETLINE (untuk input string 1 baris)
  // #include <string>
  // Int str;
  // getline(cin, str);

  //*STRUCK (menyimpan berbagai jenis tope data)
  // struct Produk {
  //   string nama;
  //   int harga;
  // };

  // int main() {
  //     Produk barang;

  //     barang.nama = "Produk A";
  //     barang.harga = 10000;

  //     cout << "Nama Produk: " << barang.nama << endl;
  //     cout << "Harga: Rp " << barang.harga << endl;
