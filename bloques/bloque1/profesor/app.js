(() => {
  const data = window.EDUSDK_BLOQUE || {};
  const nav = document.getElementById('nav');
  const content = document.getElementById('content');
  const note = document.getElementById('note');
  const slides = Array.isArray(data.slides) && data.slides.length
    ? data.slides
    : [{ titulo: data.bloque || 'Fundamentos y logica', objetivo: 'Datos del bloque no cargados.' }];

  function esc(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[char]));
  }

  function render(index) {
    const slide = slides[index];
    nav.querySelectorAll('button').forEach((button, i) => {
      button.classList.toggle('active', i === index);
      button.setAttribute('aria-current', i === index ? 'page' : 'false');
    });
    content.innerHTML = `
      <span class="cf-chip cf-chip--accent">Pantalla ${index + 1}</span>
      <h2>${esc(slide.titulo || slide.title || `Pantalla ${index + 1}`)}</h2>
      <p>${esc(slide.objetivo || slide.descripcion || slide.summary || '')}</p>
      <div class="teacher-card"><h3>Guion</h3><p>${esc(slide.guion || 'Datos de guion no cargados.')}</p></div>
      <div class="teacher-card"><h3>Pregunta de activacion</h3><p>${esc(slide.pregunta || 'Datos de pregunta no cargados.')}</p></div>
    `;
    note.innerHTML = `<strong>Nota docente:</strong> ${esc(slide.nota || 'Anadir indicaciones, tiempos o materiales cuando el contenido este validado.')}`;
  }

  nav.innerHTML = slides.map((slide, i) => `
    <button class="cf-button cf-button--secondary" type="button" data-slide="${i}">
      ${i + 1}. ${esc(slide.titulo || slide.title || `Pantalla ${i + 1}`)}
    </button>
  `).join('');
  nav.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => render(Number(button.dataset.slide)));
  });

  render(0);
})();






