// Saat göstermek için fonksiyon
function showTime() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
  }
  setInterval(showTime, 1000);
  showTime();
  
  // 🔧 Dark mode için fonksiyonu tanımlıyoruz
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  