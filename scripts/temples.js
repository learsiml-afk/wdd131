const yearSpan = document.getElementById('currentYear');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
 
const modifiedSpan = document.getElementById('lastModified');
if (modifiedSpan) {
  modifiedSpan.textContent = document.lastModified;
}
 
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mainNav      = document.getElementById('mainNav');
 
if (hamburgerBtn && mainNav) {
  hamburgerBtn.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
 
    hamburgerBtn.innerHTML = isOpen ? '&#10005;' : '&#9776;';
 
    hamburgerBtn.setAttribute('aria-expanded', isOpen.toString());
  });
 
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      hamburgerBtn.innerHTML = '&#9776;';
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });
}