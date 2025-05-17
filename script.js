// Scroll suave para seções ancoradas
const links = document.querySelectorAll('a[href^="#"]');

for (const link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Botão "Voltar ao topo"
const toTopBtn = document.createElement('button');
toTopBtn.innerText = "↑ Top";
toTopBtn.style.position = 'fixed';
toTopBtn.style.bottom = '20px';
toTopBtn.style.right = '20px';
toTopBtn.style.padding = '10px';
toTopBtn.style.border = 'none';
toTopBtn.style.borderRadius = '5px';
toTopBtn.style.background = '#2e7d32';
toTopBtn.style.color = 'white';
toTopBtn.style.cursor = 'pointer';
toTopBtn.style.display = 'none';
toTopBtn.style.zIndex = '1000';
document.body.appendChild(toTopBtn);

toTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    toTopBtn.style.display = 'block';
  } else {
    toTopBtn.style.display = 'none';
  }
});