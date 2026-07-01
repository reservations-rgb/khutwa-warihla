document.getElementById("year").textContent = new Date().getFullYear();

function toggleMenu(){
  const menu = document.getElementById("mobileMenu");
  if(menu) menu.classList.toggle("open");
}

// حركة الـ Hero عند تحريك الماوس
const hero = document.querySelector('.hero');
const heroBg = document.querySelector('.hero-bg');

if(hero && heroBg){
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    heroBg.style.transform = `translate(${x * 22}px, ${y * 14}px)`;
  });

  hero.addEventListener('mouseleave', () => {
    heroBg.style.transform = 'translate(0px, 0px)';
  });
}