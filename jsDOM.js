/*
DOM SELECTION 
DOM MANIPULATION 
DOM TRAVERSAL (MENELUSURI)
EVENT HANDLING
STUDI KASUS
*/

========================================== DOM Tree ==========================================
Node ──> Unit dasar elemen, teks
NodeList ──> Kumpulan node (hasil querySelectorAll)
HTMLCollection ──> Kumpulan node khusus elemen HTML (hasil getElementsBy...)

Root node merupakan sumber dari semua node lain di dalam DOM. Contohnya Document

Parent node merupakan node yang berada 1 tingkat diatas node lain. contohnya body adalah parent dari h1, p, div dan a

Child node merupakan node yang berada 1 tingkat dibawah node yang lain. contohnya h1 adalah child dari body

Document
 └── html
     ├── head
     │   └── title
     └── body
         └── h1


========================================== DOM Selection ==========================================
1. document.getElementById()            //menggunakan id (mengembalikan elemen)
    <p id="paragraf">Halo Dunia!</p>

    const p = document.getElementById("paragraf");
    p.innerHTML = "<b>Teks bold</b>"; // Apa pun yang bisa ditulis di HTML, bisa juga sisipkan melalui innerHTML
    p.style.color = "red";  //ubah warna teks menjadi merah
    p.style.backgroundColor = "yellow";     //camelCase jika property CSS lebih dari 1 kata

2. document.getElementsByTagName()      //menggunakan tag tertentu (mengembalikan HTMLCollections)
    <p>Paragraf 1</p>
    <p>Paragraf 2</p>

    const paragrafList = document.getElementsByTagName("p");
    console.log(paragrafList.length); // Output: 2
    
    // untuk mengubah tertentu
    const paragrafList = document.getElementsByTagName("p")[0];
    paragrafList.style.fontSize = "50px";

3. document.getElementsByClassName()          //menggunakan class tertentu      (HTMLCollection )
    <p class="teks">Teks 1</p>
    <p class="teks">Teks 2</p>

    const teksList = document.getElementsByClassName("teks");
    teksList[0].innerHTML = "Dari javascript";

4. querySelector()          //Ambil elemen pertama berdasarkan selector seperti CSS (class, id dsb)     (element)
    <div class="kotak merah"></div>

    const kotakMerah = document.querySelector(".kotak.merah");
    kotakMerah.style.color = "green";
    kotakMerah.style.fontSize = "30px";

5. querySelectorAll()         //Ambil semua elemen berdasarkan selector seperti CSS     (nodeList)
    <ul>
        <li class="item">Satu</li>
        <li class="item">Dua</li>
    </ul>

    const semuaItem = document.querySelectorAll(".item");
    semuaItem.forEach((item) => item.style.backgroundColor = "lightblue");

========================================== DOM Manipulation ==========================================

1. element.innerHTML

    <p id="paragraf">Halo Dunia!</p>

    const p = document.getElementById("paragraf");
    p.innerHTML = "<b>Teks bold</b>"; // Apa pun yang bisa ditulis di HTML, bisa juga sisipkan melalui innerHTML


2. element.style.namaPropertiCSS = "nilai";

    <p id="paragraf">Halo Dunia!</p>

    const p = document.getElementById("paragraf");
    p.style.backgroundColor = "yellow";     //camelCase jika property CSS lebih dari 1 kata


3. element.setAttribute("nama_atribut", "nilai_atribut");
setAttribute() digunakan untuk menambahkan atau mengubah atribut dari elemen HTML, seperti id, class, src, href, style, dll.

  element.setAttribute()
    <div id="box">Kotak</div>

    const kotak = document.getElementById("box"); //ambil div menggunakan id dengan nama box
    kotak.setAttribute("class", "kotak-biru");  //menambah class dengan value kotak-biru pada div
    

  element.getAttribute()
    <div id="box">Kotak</div>

    const kotak = document.getElementById("box");
    kotak.setAttribute("class", "merah"); //menambah class dengan value merah
    let kelas = element.getAttribute("class");
    console.log(kelas); // Output: "merah"


  element.removeAttribute()
    <div id="box" class="kotak besar">Isi Kotak</div>

    const box = document.getElementById("box");
    box.removeAttribute("class"); // menghapus class dari div


4. element.classList
    =========== element.classList.add()   Menambahkan class ===========
      <div id="box" class="kotak">Kotak</div>

      const box = document.getElementById("box");
      <div id="box" class="kotak">Kotak</div>
      box.classList.add("merah");   //* <div id="box" class="kotak merah">Kotak</div>


    =========== element.classList.remove()    menghapus class ===========
      <div id="box" class="kotak merah">Kotak</div>

      const box = document.getElementById("box");
      box.classList.remove("merah");  //* <div id="box" class="kotak">Kotak</div>r


    =========== element.classList.toggle()    Menambah jika belum ada, hapus jika sudah ada ===========
      <button onclick="ubah()">Toggle Class</button>
      <div id="box">Kotak</div>
        
      function ubah() {
        const box = document.getElementById("box");
        box.classList.toggle("aktif");
      }


    =========== element.classList.item() Mengambil class berdasarkan index ===========
      <div id="box" class="merah besar kotak"></div>

      const box = document.getElementById("box");
      console.log(box.classList.item(0)); // Output: merah
      console.log(box.classList.item(1)); // Output: besar


    =========== element.classList.contains()    mengecek apakah class tertentu ada ===========
      <div id="box" class="kotak besar"></div>
          
      const box = document.getElementById("box");
      if (box.classList.contains("besar")) {
        alert("Kotak ini besar!");
      }

    =========== element.classList.replace()    Ganti class lama dengan yang baru ===========
      <div id="box" class="merah"></div>

      const box = document.getElementById("box");
      box.classList.replace("merah", "biru"); //Class berubah dari merah menjadi biru


Mengubah isi elemen (innerHTML, textContent)
Mengubah atribut (setAttribute)
Mengatur gaya CSS (style)
Menambah atau menghapus elemen
Menangani event (klik, input, dll.)