// تابع باز و بسته کردن منوی موبایل (منوی همبرگری)
function toggleMenu() {
  const menu = document.getElementById('nav-links');
  menu.classList.toggle('show'); // اضافه یا حذف کلاس show برای نمایش یا مخفی شدن منو
}

// وقتی صفحه بارگذاری شد، انیمیشن AOS را راه‌اندازی کن
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 1000,  // مدت زمان انیمیشن به میلی‌ثانیه
    easing: 'ease-in-out', // حالت سرعت انیمیشن
    once: true, // فقط یک بار انیمیشن اجرا شود وقتی که اسکرول می‌کنیم
  });
});
