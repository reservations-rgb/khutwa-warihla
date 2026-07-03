document.addEventListener('DOMContentLoaded', function(){
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  const form = document.getElementById('bookingForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || '';
      const phone = data.get('phone') || '';
      const email = data.get('email') || '';
      const service = data.get('service') || '';
      const destination = data.get('destination') || '';
      const date = data.get('date') || '';
      const travelers = data.get('travelers') || '';
      const notes = data.get('notes') || '';
      const message = `السلام عليكم، أود طلب حجز من موقع خطوة ورحلة:%0A%0Aالاسم: ${encodeURIComponent(name)}%0Aالجوال: ${encodeURIComponent(phone)}%0Aالبريد: ${encodeURIComponent(email)}%0Aالخدمة: ${encodeURIComponent(service)}%0Aالوجهة: ${encodeURIComponent(destination)}%0Aتاريخ السفر: ${encodeURIComponent(date)}%0Aعدد المسافرين: ${encodeURIComponent(travelers)}%0Aملاحظات: ${encodeURIComponent(notes)}`;
      window.open(`https://wa.me/966559524467?text=${message}`, '_blank');
      const subject = encodeURIComponent('طلب حجز جديد من موقع خطوة ورحلة');
      const body = encodeURIComponent(`الاسم: ${name}\nالجوال: ${phone}\nالبريد: ${email}\nالخدمة: ${service}\nالوجهة: ${destination}\nتاريخ السفر: ${date}\nعدد المسافرين: ${travelers}\nملاحظات: ${notes}`);
      window.location.href = `mailto:reservations@khutwa-warihla.com?subject=${subject}&body=${body}`;
    });
  }
});
function toggleMenu(){
  const menu=document.getElementById('mobileMenu');
  if(menu) menu.classList.toggle('open');
}
