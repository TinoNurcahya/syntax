// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing masing video
  .map(item => item.dataset.duration)

// ubah furasi menjadi float, ubah menit menjadi detik
  .map(waktu => {
    //10:30 -> [10, 30] split
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
  })

// jumlahkan semua detik
  .reduce((total, detik) => total + detik);

// ubah formatnya jadi jam menit detik
  const jam = Math.floor(jsLanjut / 3600);
  const menit = Math.floor((jsLanjut % 3600) / 60);
  const detik = jsLanjut % 60;

// simpan di dalam DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video.`;