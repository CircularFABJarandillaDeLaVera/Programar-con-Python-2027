(() => {
  const DEFAULTS = {
    width: 1560,
    height: 980,
    nodeWidth: 210,
    centerWidth: 310,
    zoomMin: 0.55,
    zoomMax: 1.6,
    zoomStep: 0.1,
    labels: {
      selected: 'Nodo seleccionado',
      definition: 'Definicion',
      key: 'Idea clave',
      error: 'Error habitual',
      center: 'central',
      branch: 'rama',
      subbranch: 'subrama'
    },
    legend: [
      { label: 'Concepto', tone: 'blue' },
      { label: 'Operacion', tone: 'green' },
      { label: 'Dato', tone: 'amber' },
      { label: 'Riesgo', tone: 'red' }
    ]
  };

  const $ = (selector, root = document) => root.querySelector(selector);

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[char]));
  }

  function mergeConfig(data) {
    const map = data || {};
    return {
      ...DEFAULTS,
      ...map,
      labels: { ...DEFAULTS.labels, ...(map.labels || {}) },
      legend: map.legend || DEFAULTS.legend
    };
  }

  function createViewer(data) {
    const config = mergeConfig(data);
    const nodes = Array.isArray(config.nodes) ? config.nodes : [];
    let active = config.activeNode || nodes[0]?.id || '';
    let zoom = 1;
    const expanded = new Set(
      nodes
        .filter(node => !node.parent || node.type === 'rama' || node.expanded)
        .map(node => node.id)
    );

    const map = $('#map');
    const scaleEl = $('#mapScale');
    const wrap = $('#mapWrap');
    const links = $('#links');
    const detail = $('#detail');

    if (!map || !scaleEl || !wrap || !links || !detail) return;

    document.title = config.documentTitle || config.title || document.title;
    const heading = $('#mapTitle');
    if (heading) heading.textContent = config.title || heading.textContent;
    const brand = $('#mapBrand');
    if (brand && config.brand) brand.textContent = config.brand;
    const back = $('#backLink');
    if (back && config.backHref) back.setAttribute('href', config.backHref);
    const printNote = $('#printNote');
    if (printNote) printNote.textContent = config.printNote || config.title || '';

    map.style.setProperty('--edusdk-map-width', `${config.width}px`);
    map.style.setProperty('--edusdk-map-height', `${config.height}px`);
    map.style.setProperty('--edusdk-node-width', `${config.nodeWidth}px`);
    map.style.setProperty('--edusdk-center-width', `${config.centerWidth}px`);

    function children(id) {
      return nodes.filter(node => node.parent === id);
    }

    function findNode(id) {
      return nodes.find(node => node.id === id);
    }

    function visible(node) {
      if (!node.parent) return true;
      let parent = findNode(node.parent);
      while (parent) {
        if (!expanded.has(parent.id)) return false;
        parent = findNode(parent.parent);
      }
      return true;
    }

    function nodeTypeLabel(node, hasKids) {
      if (node.type === 'central') return config.labels.center;
      return hasKids ? config.labels.branch : config.labels.subbranch;
    }

    function renderLegend() {
      return `<div class="edusdk-map-legend">${config.legend.map(item =>
        `<span class="edusdk-map-pill ${escapeHtml(item.tone || 'blue')}">${escapeHtml(item.label)}</span>`
      ).join('')}</div>`;
    }

    function updateDetail(node) {
      detail.innerHTML = `
        <div class="kicker">${escapeHtml(config.labels.selected)}</div>
        <h2>${escapeHtml(node.title)}</h2>
        <section><h3>${escapeHtml(config.labels.definition)}</h3><p>${escapeHtml(node.def)}</p></section>
        <section><h3>${escapeHtml(config.labels.key)}</h3><p>${escapeHtml(node.key)}</p></section>
        <section><h3>${escapeHtml(config.labels.error)}</h3><p>${escapeHtml(node.err)}</p></section>
        ${renderLegend()}
      `;
    }

    function nodeCenter(node) {
      const isCenter = node.type === 'central';
      return {
        x: node.x + (isCenter ? config.centerWidth / 2 : config.nodeWidth / 2),
        y: node.y + (isCenter ? 66 : 37)
      };
    }

    function drawLinks() {
      links.setAttribute('width', map.scrollWidth);
      links.setAttribute('height', map.scrollHeight);
      links.innerHTML = '';
      nodes.filter(node => node.parent && visible(node)).forEach(node => {
        const parent = findNode(node.parent);
        if (!parent || !visible(parent)) return;
        const start = nodeCenter(parent);
        const end = nodeCenter(node);
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const dx = (end.x - start.x) * 0.45;
        path.setAttribute('d', `M ${start.x} ${start.y} C ${start.x + dx} ${start.y}, ${end.x - dx} ${end.y}, ${end.x} ${end.y}`);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', node.type === 'rama' ? '#0d4564' : '#16a47d');
        path.setAttribute('stroke-width', node.type === 'rama' ? '4' : '2.5');
        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('opacity', '.75');
        links.appendChild(path);
      });
    }

    function applyZoom() {
      scaleEl.style.transform = `scale(${zoom})`;
      scaleEl.style.width = `${config.width * zoom}px`;
      scaleEl.style.height = `${config.height * zoom}px`;
      const reset = $('#zoomReset');
      if (reset) reset.textContent = `${Math.round(zoom * 100)}%`;
    }

    function render() {
      map.querySelectorAll('.edusdk-map-node').forEach(node => node.remove());
      nodes.forEach(node => {
        const hasKids = children(node.id).length > 0;
        const element = document.createElement('button');
        element.type = 'button';
        element.className = `edusdk-map-node ${node.type === 'central' ? 'center' : ''} ${node.id === active ? 'active' : ''} ${visible(node) ? '' : 'hidden'}`;
        element.style.left = `${node.x}px`;
        element.style.top = `${node.y}px`;
        element.dataset.id = node.id;
        element.setAttribute('aria-expanded', hasKids ? String(expanded.has(node.id)) : 'false');
        element.innerHTML = `
          ${hasKids ? `<span class="edusdk-map-toggle" aria-hidden="true">${expanded.has(node.id) ? '-' : '+'}</span>` : ''}
          <div class="type">${escapeHtml(nodeTypeLabel(node, hasKids))}</div>
          <h2>${escapeHtml(node.title)}</h2>
          <p>${escapeHtml(node.subtitle)}</p>
        `;
        element.addEventListener('click', () => {
          active = node.id;
          if (hasKids) {
            if (expanded.has(node.id)) expanded.delete(node.id);
            else expanded.add(node.id);
          }
          updateDetail(node);
          render();
        });
        element.addEventListener('keydown', event => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            element.click();
          }
        });
        map.appendChild(element);
      });
      drawLinks();
      applyZoom();
    }

    function setZoom(value) {
      zoom = Math.min(config.zoomMax, Math.max(config.zoomMin, Number(value.toFixed(2))));
      applyZoom();
    }

    $('#expandAll')?.addEventListener('click', () => {
      nodes.forEach(node => {
        if (children(node.id).length) expanded.add(node.id);
      });
      render();
    });

    $('#collapseAll')?.addEventListener('click', () => {
      expanded.clear();
      const root = nodes.find(node => !node.parent);
      if (root) expanded.add(root.id);
      render();
    });

    $('#zoomIn')?.addEventListener('click', () => setZoom(zoom + config.zoomStep));
    $('#zoomOut')?.addEventListener('click', () => setZoom(zoom - config.zoomStep));
    $('#zoomReset')?.addEventListener('click', () => setZoom(1));

    $('#fullscreen')?.addEventListener('click', () => {
      if (!document.fullscreenElement) wrap.requestFullscreen?.();
      else document.exitFullscreen?.();
    });

    $('#printMode')?.addEventListener('click', () => {
      nodes.forEach(node => {
        if (children(node.id).length) expanded.add(node.id);
      });
      zoom = 1;
      render();
      setTimeout(() => print(), 120);
    });

    wrap.addEventListener('keydown', event => {
      if (event.key === '+') setZoom(zoom + config.zoomStep);
      if (event.key === '-') setZoom(zoom - config.zoomStep);
      if (event.key === '0') setZoom(1);
    });

    const initial = findNode(active) || nodes[0];
    if (initial) updateDetail(initial);
    render();
  }

  window.EduSDKMapViewer = { createViewer };

  function boot() {
    createViewer(window.EDUSDK_MAP_DATA);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();


