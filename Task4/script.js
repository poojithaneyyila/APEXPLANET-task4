// Auto-scroll carousel
const carousel = document.querySelector(".carousel");
let scrollAmount = 0;
if (carousel) {
  setInterval(() => {
    scrollAmount += 220;
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
      scrollAmount = 0;
    }
    carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
  }, 3000);
}

// Dark/Light mode toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;
});