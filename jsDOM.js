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


=========== parentNode.replaceChild(newChild, oldChild =========== 
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
