(() => {
  const data = window.EDUSDK_BLOQUE || {};
  const main = document.getElementById('main');
  const tabs = document.querySelectorAll('[data-view]');

  function esc(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[char]));
  }

  function setActive(view) {
    tabs.forEach(tab => {
      tab.setAttribute('aria-selected', String(tab.dataset.view === view));
    });
  }

  function ficha() {
    setActive('ficha');
    const objetivos = Array.isArray(data.objetivos) && data.objetivos.length
      ? data.objetivos
      : ['Datos de objetivos no cargados.'];
    main.innerHTML = `
      <section class="panel cf-panel">
        <span class="cf-chip cf-chip--accent">Ficha</span>
        <h1>${esc(data.bloque || 'Programacion orientada a objetos')}</h1>
        <p>${esc(data.descripcion || 'Datos de descripcion no cargados.')}</p>
      </section>
      <section class="panel cf-panel columns">
        <div><h2>Objetivos</h2><ul>${objetivos.map(item => `<li>${esc(item)}</li>`).join('')}</ul></div>
        <div><h2>Ideas clave</h2><p>Escribe, ejecuta, modifica, predice, depura y valida cada fragmento de codigo.</p></div>
      </section>
    `;
  }

  function flash() {
    setActive('flash');
    const cards = Array.isArray(data.flashcards) && data.flashcards.length
      ? data.flashcards
      : [['Datos no cargados', 'Revisa la carga de data/bloque4.js.']];
    main.innerHTML = `
      <section class="panel cf-panel"><h1>Flashcards</h1><p>Pulsa una tarjeta para ver la respuesta.</p></section>
      <section class="flashgrid">${cards.map((card, i) => `
        <button class="flash" type="button">
          <span class="inner">
            <span class="face front">${i + 1}. ${esc(card[0] || card.pregunta || card.front)}</span>
            <span class="face back">${esc(card[1] || card.respuesta || card.back)}</span>
          </span>
        </button>
      `).join('')}</section>
    `;
    document.querySelectorAll('.flash').forEach(card => {
      card.addEventListener('click', () => card.classList.toggle('flipped'));
    });
  }

  function casos() {
    setActive('casos');
    const cases = Array.isArray(data.casos) && data.casos.length
      ? data.casos
      : [{ titulo: 'Datos no cargados', situacion: 'No se han cargado casos para esta vista.', preguntas: ['Revisa la carga de data/bloque4.js.'] }];
    main.innerHTML = cases.map((item, i) => `
      <section class="panel cf-panel case">
        <span class="cf-chip cf-chip--neutral">Caso ${i + 1}</span>
        <h2>${esc(item.titulo)}</h2>
        <p>${esc(item.situacion)}</p>
        <ul>${(item.preguntas || []).map(question => `<li>${esc(question)}</li>`).join('')}</ul>
      </section>
    `).join('');
  }

  function test() {
    setActive('test');
    const questions = Array.isArray(data.test) && data.test.length
      ? data.test
      : [{ pregunta: 'No se han cargado microevaluaciones.', opciones: ['Revisar datos', 'Continuar'], correcta: 0, explicacion: 'Revisa la carga de data/bloque4.js.' }];
    const selected = {};
    main.innerHTML = `
      <section class="panel cf-panel"><h1>Mini test</h1><p>Selecciona una respuesta por pregunta.</p></section>
      ${questions.map((question, i) => `
        <section class="panel cf-panel test-card">
          <h3>${i + 1}. ${esc(question.pregunta)}</h3>
          <div class="opts">${(question.opciones || []).map((option, j) => `<button class="opt" type="button" data-i="${i}" data-j="${j}">${esc(option)}</button>`).join('')}</div>
        </section>
      `).join('')}
      <section class="panel cf-panel"><button id="corregir" class="cf-button cf-button--primary" type="button">Corregir</button><p id="res" class="result"></p></section>
    `;
    document.querySelectorAll('.opt').forEach(option => {
      option.addEventListener('click', () => {
        document.querySelectorAll(`.opt[data-i="${option.dataset.i}"]`).forEach(item => item.classList.remove('selected'));
        option.classList.add('selected');
        selected[option.dataset.i] = Number(option.dataset.j);
        const question = questions[Number(option.dataset.i)];
        const card = option.closest('.test-card');
        const isCorrect = Number(option.dataset.j) === question.correcta;
        card.querySelectorAll('.opt').forEach((item, j) => {
          item.classList.toggle('correct', j === question.correcta);
          item.classList.toggle('wrong', !isCorrect && item === option);
        });
        let feedback = card.querySelector('.feedback');
        if (!feedback) {
          feedback = document.createElement('p');
          feedback.className = 'feedback result';
          card.appendChild(feedback);
        }
        feedback.textContent = `${isCorrect ? 'Correcto' : 'Incorrecto'}: ${question.explicacion || 'Revisa el codigo paso a paso.'}`;
      });
    });
    document.getElementById('corregir').addEventListener('click', () => {
      let score = 0;
      questions.forEach((question, i) => {
        document.querySelectorAll(`.opt[data-i="${i}"]`).forEach((option, j) => {
          option.classList.remove('correct', 'wrong');
          if (j === question.correcta) option.classList.add('correct');
          else if (selected[i] === j) option.classList.add('wrong');
        });
        if (selected[i] === question.correcta) score++;
      });
      document.getElementById('res').textContent = `Resultado: ${score} / ${questions.length}`;
    });
  }

  function mapa() {
    window.location.href = '../recursos/mapas/index.html';
  }

  const views = { ficha, flash, casos, test, mapa };
  tabs.forEach(tab => {
    tab.addEventListener('click', () => views[tab.dataset.view]?.());
  });

  ficha();
})();






