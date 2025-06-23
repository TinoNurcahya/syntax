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

========================================== DOM element Manipulation ==========================================

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
      box.classList.replace("merah", "biru");  //Class berubah dari merah menjadi biru


========================================== DOM node Manipulation ==========================================

=========== document.createElement("nama_tag");   "div", "p", "li", "button", "img", dll. ===========
=========== parent.appendChild(child);  parent: tempat node akan ditambahkan child: Node (bisa elemen, teks, dll) yang ingin ditambahkan =========== 

//buat elemen baru
  const pbaru = document.createElement("p"); // <p></p>
  const teksPBaru = document.createTextNode("Halo Dunia!"); // Halo Dunia!

//simpan tulisan ke dalam paragraf
  pbaru.appendChild(teksPBaru); // <p>Halo Dunia!</p>

//simpan pBaru diakhir section A
  const sectionA = document.getElementById("A");
  sectionA.appendChild(pbaru);  //akan tampil di akhir section


=========== parentNode.insertBefore(newNode, referenceNode); =========== 
  parentNode: Elemen induk tempat kamu ingin menyisipkan
  newNode: Node yang ingin kamu tambahkan
  referenceNode: diletakkan sebelum ini

    <ul id="daftar">
      <li>Item 1</li>
      <li id="referensi">Item 2</li>
      <li>Item 3</li>
    </ul>

    <script>
      const daftar = document.getElementById("daftar");
      const itemBaru = document.createElement("li");
      itemBaru.textContent = "Item Baru";

      const referensi = document.getElementById("referensi");
      daftar.insertBefore(itemBaru, referensi);
    </script>


=========== parentNode.removeChild(childNode); =========== 
parentNode → Elemen induknya
childNode → Elemen anak yang akan dihapus

    <ul id="daftar">
      <li id="hapus-ini">Item 1</li>
      <li>Item 2</li>
    </ul>

    <script>
      const daftar = document.getElementById("daftar");
      const item = document.getElementById("hapus-ini");

      daftar.removeChild(item);
    </script>


=========== parentNode.replaceChild(newChild, oldChild) =========== 
  parentNode → Elemen induknya
  newChild → Elemen baru yang akan menggantikan
  oldChild → Elemen lama yang akan diganti

  <div id="kotak">
    <p id="lama">Teks lama</p>
  </div>

  <script>
    const kotak = document.getElementById("kotak");
    const lama = document.getElementById("lama");

    const baru = document.createElement("h2");
    baru.textContent = "Teks Baru";

    kotak.replaceChild(baru, lama);
  </script>

=============== METHOD TERBARU ===============
element.append(node1, node2, ..., teks);
Menambahkan satu atau lebih node (elemen atau teks) ke AKHIR dari elemen tertentu.

element.prepend(node1, node2, ..., teks);
Menambahkan node atau teks ke AWAL isi elemen.

element.remove()
Menghapus elemen langsung dari DOM tanpa harus tahu siapa parentNode-nya.

element.replaceWith(node1, node2, ..., teks);
Mengganti elemen langsung dengan elemen lain atau teks, tanpa perlu akses ke parentNode.

element.before(node1, node2, ..., teks);
Menyisipkan elemen atau teks sebelum elemen tertentu, langsung tanpa perlu akses ke parent.

element.after(node1, node2, ..., teks);
Menyisipkan node atau teks setelah elemen tertentu, tanpa akses ke parent.


========================================== DOM Event ==========================================
  merepresentasikan sebuah kejadian yang terjadi di dalam DOM. oleh user: (MouseEvent, KeyboardEvent, dll)/ oleh sistem (animasi selesai, halaman di load, dll)
  
  =========== element.addEventListener("namaEvent", fungsiYangDijalankan); ===========
  <button id="tombolku">Klik Saya</button>
  const tombol = document.getElementById("tombolku");
  
  tombol.addEventListener("click", function() {
    alert("Kamu baru saja mengklik tombol!");
  });

  
=========== Event handler (cara lama jarang dipakai)===========
  <button id="tombolku">Klik Saya</button>
  const tombol = document.getElementById("tombolku");

  tombol.onclick = function() {
    alert("Klik pakai onclick");
  };

========================================== DOM Event (nama event) ==========================================
============== Mouse events
  click => Saat elemen diklik
  dblclick => Saat elemen diklik dua kali
  mousedown => Saat tombol mouse ditekan
  mouseup => Saat tombol mouse dilepas
  mousemove => Saat mouse digerakkan di atas elemen
  mouseenter => Saat mouse masuk ke area elemen (tidak bubbling)
  mouseleave => Saat mouse keluar dari area elemen
  mouseover => Saat mouse masuk (bubbling, termasuk anak elemen)
  mouseout => Saat mouse keluar (bubbling)
  contextmenu => Saat klik kanan mouse

============== keyboard events
  keydown => Saat tombol keyboard ditekan
  keypress => (deprecated) Gunakan keydown atau keyup
  keyup => Saat tombol keyboard dilepas

============== Form Events
  submit => Saat form dikirim <form>
  change => Saat nilai elemen berubah <input>, <select>
  input => Saat user mengetik input (real-time)
  focus => Saat elemen mendapat fokus
  blur => Saat elemen kehilangan fokus
  reset => Saat form di-reset

==============  Window & Document Events
  load => Saat semua konten selesai dimuat
  DOMContentLoaded => Saat HTML selesai dimuat (sebelum gambar/CSS)
  resize => Saat ukuran jendela diubah
  scroll => Saat halaman di-scroll
  unload => Saat user meninggalkan halaman (deprecated)
  beforeunload => Saat sebelum user meninggalkan halaman

==============  Touch Events (untuk mobile)
  touchstart => Saat sentuhan dimulai
  touchend => Saat sentuhan selesai
  touchmove => Saat jari digerakkan di layar
  touchcancel => Saat sistem membatalkan sentuhan

==============  Drag & Drop Events
  dragstart => Saat elemen mulai diseret
  drag => Saat elemen sedang diseret
  dragend => Saat elemen selesai diseret
  dragenter => Saat elemen diseret masuk ke target
  dragleave => Saat elemen keluar dari target
  dragover => Saat elemen diseret di atas target
  drop => Saat elemen dijatuhkan ke target

==============  Lain-lain
  animationstart, animationend, animationiteration	Untuk animasi CSS
  transitionend	Saat transisi CSS selesai
  error	Saat error terjadi (gambar, skrip, dll.)
  wheel	Saat mouse wheel digulir
  copy, cut, paste	Saat user menyalin, memotong, atau menempel