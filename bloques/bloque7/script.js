(() => {
  const data = window.EDUSDK_BLOQUE || {};
  const slides = Array.isArray(data.slides) && data.slides.length
    ? data.slides
    : [{ titulo: data.bloque || 'Python + IA', objetivo: 'Datos del bloque no cargados.' }];

  const root = document.getElementById('slides');
  const counter = document.getElementById('slideCounter');
  const progress = document.getElementById('slideProgress');
  const prev = document.getElementById('prevSlide');
  const next = document.getElementById('nextSlide');
  const fullscreen = document.getElementById('fullscreenBtn');
  let index = 0;

  function esc(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[char]));
  }

  function renderSlides() {
    root.innerHTML = slides.map((slide, i) => `
      <section class="slide ${i === index ? 'active' : ''}" aria-hidden="${i === index ? 'false' : 'true'}">
        <span class="cf-chip cf-chip--accent">Pantalla ${i + 1}</span>
        <h1>${esc(slide.titulo || slide.title || `Pantalla ${i + 1}`)}</h1>
        <p>${esc(slide.objetivo || slide.descripcion || slide.summary || '')}</p>
      </section>
    `).join('');
    counter.textContent = `${index + 1} / ${slides.length}`;
    progress.style.width = `${Math.round(((index + 1) / slides.length) * 100)}%`;
    prev.disabled = index === 0;
    next.textContent = index === slides.length - 1 ? 'Finalizar' : 'Siguiente';
  }

  function move(delta) {
    index = Math.min(slides.length - 1, Math.max(0, index + delta));
    renderSlides();
  }

  prev.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => {
    if (index < slides.length - 1) move(1);
  });
  fullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  });

  renderSlides();
})();




