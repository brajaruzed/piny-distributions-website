const viewNames = ['Front view', 'Angle view', 'Detail view'];

function catalogueViews(sport, visualIndex) {
  return viewNames.map((label, viewIndex) => ({
    label,
    src: `assets/catalogue/${sport}-0${visualIndex * 3 + viewIndex}.webp`
  }));
}

const products = [
  {
    id: 'tuko-rugby-performance-ball', brand: 'TUKO', brandKey: 'tuko', sport: 'rugby', sportLabel: 'Rugby',
    name: 'Performance rugby ball', category: 'Match & training balls', views: catalogueViews('rugby', 0), imprint: true,
    features: ['Correct rugby profile with grip-textured casing', 'Senior and junior size concepts', 'Red, black and white TUKO identity'], listingType: 'TUKO concept'
  },
  {
    id: 'tuko-rugby-shorts', brand: 'TUKO', brandKey: 'tuko', sport: 'rugby', sportLabel: 'Rugby',
    name: 'Black & red rugby shorts', category: 'Teamwear', views: [
      { label: 'Front view', src: 'assets/eshop/tuko-rugby-shorts-front.webp' },
      { label: 'Back view', src: 'assets/eshop/tuko-rugby-shorts-back.webp' },
      { label: 'Side view', src: 'assets/eshop/tuko-rugby-shorts-side.webp' }
    ],
    features: ['Three-view product board', 'Black technical fabric with red side panels', 'TUKO athletic mark on the lower leg'], listingType: 'TUKO concept', heroProduct: true
  },
  {
    id: 'tuko-rugby-tackle-shield', brand: 'TUKO', brandKey: 'tuko', sport: 'rugby', sportLabel: 'Rugby',
    name: 'Tackle shield', category: 'Contact training', views: catalogueViews('rugby', 1),
    features: ['Reinforced carry handles', 'Black and red impact-pad concept', 'Club, school and academy specifications'], listingType: 'TUKO concept'
  },
  {
    id: 'tuko-rugby-training-bib', brand: 'TUKO', brandKey: 'tuko', sport: 'rugby', sportLabel: 'Rugby',
    name: 'Training bib', category: 'Teamwear', views: catalogueViews('rugby', 2),
    features: ['Breathable mesh construction concept', 'Adult and junior sizing', 'Black/red team colour options'], listingType: 'TUKO concept'
  },
  {
    id: 'rhino-thunder-ball', brand: 'Rhino Rugby', brandKey: 'rhino', sport: 'rugby', sportLabel: 'Rugby',
    name: 'Thunder rugby ball', category: 'Training balls', views: [
      { label: 'Product view', src: 'assets/eshop/rhino-thunder.webp' },
      { label: 'Brand detail', src: 'assets/eshop/rhino-thunder-brand.webp' },
      { label: 'Grip detail', src: 'assets/eshop/rhino-thunder-grip.webp' }
    ],
    features: ['Manufacturer product reference', 'Sizes and Kenya supply not confirmed', 'Shown to test a future multi-brand range'], listingType: 'Brand reference', reference: true,
    source: 'https://usa.rhinorugby.com/products/rhino-thunder-rugby-ball'
  },
  {
    id: 'ram-academy-ball', brand: 'RAM Rugby', brandKey: 'ram', sport: 'rugby', sportLabel: 'Rugby',
    name: 'Academy trainer ball', category: 'Training balls', views: [
      { label: 'Product view', src: 'assets/eshop/ram-academy.webp' },
      { label: 'Brand detail', src: 'assets/eshop/ram-academy-brand.webp' },
      { label: 'Grip detail', src: 'assets/eshop/ram-academy-grip.webp' }
    ],
    features: ['Manufacturer product reference', 'Sizes and Kenya supply not confirmed', 'Shown to test a future multi-brand range'], listingType: 'Brand reference', reference: true,
    source: 'https://www.ramrugby.co.uk/products/academy-trainer-ball-bundle-30-x-balls-and-2-bags'
  },
  {
    id: 'tuko-football-performance-ball', brand: 'TUKO', brandKey: 'tuko', sport: 'football', sportLabel: 'Football',
    name: 'Performance football', category: 'Match & training balls', views: catalogueViews('football', 0), imprint: true,
    features: ['Panel and surface concepts under review', 'Standard size enquiries', 'Red, black and white TUKO identity'], listingType: 'TUKO concept'
  },
  {
    id: 'tuko-football-goalkeeper-gloves', brand: 'TUKO', brandKey: 'tuko', sport: 'football', sportLabel: 'Football',
    name: 'Goalkeeper gloves', category: 'Player equipment', views: catalogueViews('football', 1),
    features: ['Grip and palm options', 'Training and match concepts', 'Adult and junior sizing'], listingType: 'TUKO concept'
  },
  {
    id: 'tuko-football-shin-guards', brand: 'TUKO', brandKey: 'tuko', sport: 'football', sportLabel: 'Football',
    name: 'Shin guards', category: 'Protection', views: catalogueViews('football', 2),
    features: ['Contoured shell concept', 'Strap and sleeve options', 'Team and school quantity planning'], listingType: 'TUKO concept'
  },
  {
    id: 'tuko-basketball-performance-ball', brand: 'TUKO', brandKey: 'tuko', sport: 'basketball', sportLabel: 'Basketball',
    name: 'Indoor / outdoor basketball', category: 'Balls', views: catalogueViews('basketball', 0), imprint: true,
    features: ['Indoor/outdoor surface concept', 'Multiple size planning', 'Black and red TUKO treatment'], listingType: 'TUKO concept'
  },
  {
    id: 'tuko-basketball-team-jersey', brand: 'TUKO', brandKey: 'tuko', sport: 'basketball', sportLabel: 'Basketball',
    name: 'Team jersey', category: 'Teamwear', views: catalogueViews('basketball', 1),
    features: ['Breathable performance fabric', 'Team colour and size planning', 'Custom identity options under review'], listingType: 'TUKO concept'
  },
  {
    id: 'tuko-basketball-hoop', brand: 'TUKO', brandKey: 'tuko', sport: 'basketball', sportLabel: 'Basketball',
    name: 'Portable hoop system', category: 'Court equipment', views: catalogueViews('basketball', 2),
    features: ['Training and institutional concept', 'Portable base configuration', 'Rim and net specifications under review'], listingType: 'TUKO concept'
  },
  {
    id: 'tuko-volleyball-performance-ball', brand: 'TUKO', brandKey: 'tuko', sport: 'volleyball', sportLabel: 'Volleyball',
    name: 'Indoor / outdoor volleyball', category: 'Balls', views: catalogueViews('volleyball', 0), imprint: true,
    features: ['Indoor/outdoor casing concepts', 'Team quantity planning', 'Red, black and white TUKO identity'], listingType: 'TUKO concept'
  },
  {
    id: 'tuko-volleyball-knee-pads', brand: 'TUKO', brandKey: 'tuko', sport: 'volleyball', sportLabel: 'Volleyball',
    name: 'Knee pads', category: 'Protection', views: catalogueViews('volleyball', 1),
    features: ['Low-profile cushioning concept', 'Adult and junior sizing', 'Black/red team treatment'], listingType: 'TUKO concept'
  },
  {
    id: 'tuko-volleyball-net', brand: 'TUKO', brandKey: 'tuko', sport: 'volleyball', sportLabel: 'Volleyball',
    name: 'Portable net system', category: 'Court equipment', views: catalogueViews('volleyball', 2),
    features: ['Indoor/outdoor concept', 'Portable post configuration', 'Training and competition specifications'], listingType: 'TUKO concept'
  }
];

const filters = document.getElementById('sport-filters');
const brandFilters = document.getElementById('brand-filters');
const searchInput = document.getElementById('catalogue-search');
const grid = document.getElementById('sports-product-grid');
const count = document.getElementById('catalogue-count');
const dialog = document.getElementById('product-dialog');
const dialogContent = document.getElementById('dialog-content');
let activeSport = 'all';
let activeBrand = 'all';

const sports = [['rugby', 'Rugby', 'assets/catalogue/rugby-00.webp'], ['football', 'Football', 'assets/catalogue/football-00.webp'], ['basketball', 'Basketball', 'assets/catalogue/basketball-00.webp'], ['volleyball', 'Volleyball', 'assets/catalogue/volleyball-00.webp']];
const brands = [['tuko', 'TUKO'], ['rhino', 'Rhino Rugby'], ['ram', 'RAM Rugby']];

filters.innerHTML = [['all', 'All products', 'assets/eshop/tuko-rugby-shorts.webp'], ...sports].map(([value, label, image]) => `
  <button type="button" class="sport-filter${value === 'all' ? ' active' : ''}" data-sport="${value}" aria-pressed="${value === 'all'}">
    <img src="${image}" alt="" loading="lazy"><span>${label}</span><small>${value === 'all' ? '15 previews' : `${products.filter(product => product.sport === value).length} items`}</small>
  </button>`).join('');

brandFilters.innerHTML = [['all', 'All brands'], ...brands].map(([value, label]) => `<button type="button" class="brand-filter${value === 'all' ? ' active' : ''}" data-brand="${value}" aria-pressed="${value === 'all'}">${label}</button>`).join('');

function interestUrl(product) {
  const params = new URLSearchParams({ product: `${product.brand} — ${product.sportLabel} — ${product.name}` });
  return `contact.html?${params.toString()}#buyer-enquiry`;
}

function brandLockup(product, dialogView = false) {
  if (product.brandKey === 'tuko') return `<span class="${dialogView ? 'dialog-brand-lockup' : 'product-brand-lockup'}"><img src="assets/tuko-athletic-logo.png" alt="TUKO — Together Further"></span>`;
  return `<span class="${dialogView ? 'dialog-brand-lockup' : 'product-brand-lockup'} reference-lockup"><strong>${product.brand}</strong><small>BRAND REFERENCE</small></span>`;
}

function imprint(product, dialogView = false) {
  if (!product.imprint) return '';
  return `<span class="product-imprint${dialogView ? ' dialog-imprint' : ''}" aria-hidden="true"><img src="assets/tuko-athletic-logo.png" alt=""></span>`;
}

function productCard(product) {
  return `<article class="sports-product-card${product.heroProduct ? ' featured-shop-card' : ''}" data-sport="${product.sport}" data-brand="${product.brandKey}">
    <div class="product-gallery" data-gallery>
      ${brandLockup(product)}
      <button class="product-main-view" type="button" data-open-product="${product.id}" aria-label="Open details for ${product.name}"><img src="${product.views[0].src}" alt="${product.name} product preview" loading="lazy">${imprint(product)}</button>
      <div class="product-thumbnails" aria-label="Views of ${product.name}">${product.views.map((view, index) => `<button type="button" class="product-thumb${index === 0 ? ' active' : ''}" data-src="${view.src}" data-alt="${view.label} of ${product.name}" aria-label="Show ${view.label.toLowerCase()}" aria-pressed="${index === 0}"><img src="${view.src}" alt="" loading="lazy"><span>${view.label.replace(' view','')}</span></button>`).join('')}</div>
    </div>
    <div class="sports-product-copy"><div class="product-meta"><span>${product.brand}</span><span>${product.reference ? 'Brand reference' : 'Concept preview'}</span></div><p class="product-category">${product.sportLabel} · ${product.category}</p><h3>${product.name}</h3><ul>${product.features.map(feature => `<li>${feature}</li>`).join('')}</ul><div class="product-actions"><button type="button" class="text-action" data-open-product="${product.id}">View all angles</button><a href="${interestUrl(product)}">Register interest →</a></div></div>
  </article>`;
}

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const visible = products.filter(product => {
    const matchesSport = activeSport === 'all' || product.sport === activeSport;
    const matchesBrand = activeBrand === 'all' || product.brandKey === activeBrand;
    const haystack = `${product.brand} ${product.sportLabel} ${product.name} ${product.category}`.toLowerCase();
    return matchesSport && matchesBrand && (!query || haystack.includes(query));
  });
  grid.innerHTML = visible.map(productCard).join('');
  count.textContent = `${visible.length} preview item${visible.length === 1 ? '' : 's'}`;
  if (!visible.length) grid.innerHTML = '<div class="catalogue-empty"><h3>No matching items</h3><p>Try another category, brand or search term.</p></div>';
}

function openProduct(product) {
  const note = product.reference
    ? `${product.brand} is included as a manufacturer reference so PINY can test a genuinely multi-brand E-Shop. A supply relationship, Kenya availability and local pricing have not been confirmed.`
    : 'This TUKO concept shows a possible PINY-developed product. Materials, sizing, certification, final branding and launch timing still need validation.';
  const sourceLink = product.source ? `<a class="manufacturer-link" href="${product.source}" target="_blank" rel="noopener">View manufacturer reference ↗</a>` : '';
  dialogContent.innerHTML = `<div class="dialog-layout"><div class="dialog-gallery">${brandLockup(product, true)}<div class="dialog-image-wrap"><img class="dialog-main-image" src="${product.views[0].src}" alt="${product.name} product preview">${imprint(product, true)}</div><div class="dialog-thumbs">${product.views.map((view, index) => `<button type="button" class="dialog-thumb${index === 0 ? ' active' : ''}" data-src="${view.src}" data-alt="${view.label} of ${product.name}" aria-pressed="${index === 0}"><img src="${view.src}" alt=""><span>${view.label}</span></button>`).join('')}</div></div><div class="dialog-copy"><p class="eyebrow">${product.brand} · ${product.sportLabel}</p><h2 id="dialog-title">${product.name}</h2><span class="development-badge">${product.reference ? 'Brand reference · supply unconfirmed' : 'Concept preview · not for sale'}</span><p>${note}</p><h3>${product.reference ? 'Reference notes' : 'Concept details'}</h3><ul>${product.features.map(feature => `<li>${feature}</li>`).join('')}</ul>${sourceLink}<a class="btn btn-primary" href="${interestUrl(product)}">Register interest →</a><small>This is not an order. No product is represented as in stock or available for purchase.</small></div></div>`;
  dialog.showModal();
}

function activateFilter(container, button, attribute) {
  container.querySelectorAll('button').forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  if (attribute === 'sport') activeSport = button.dataset.sport;
  if (attribute === 'brand') activeBrand = button.dataset.brand;
  renderProducts();
  if (attribute === 'sport') document.getElementById('shop-results').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

filters.addEventListener('click', event => { const button = event.target.closest('[data-sport]'); if (button) activateFilter(filters, button, 'sport'); });
brandFilters.addEventListener('click', event => { const button = event.target.closest('[data-brand]'); if (button) activateFilter(brandFilters, button, 'brand'); });
searchInput.addEventListener('input', renderProducts);

grid.addEventListener('click', event => {
  const thumb = event.target.closest('.product-thumb');
  if (thumb) {
    const gallery = thumb.closest('[data-gallery]');
    const image = gallery.querySelector('.product-main-view > img');
    image.src = thumb.dataset.src;
    image.alt = thumb.dataset.alt;
    gallery.querySelectorAll('.product-thumb').forEach(item => { const active = item === thumb; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
    return;
  }
  const opener = event.target.closest('[data-open-product]');
  if (opener) openProduct(products.find(product => product.id === opener.dataset.openProduct));
});

dialog.addEventListener('click', event => {
  if (event.target === dialog || event.target.closest('.dialog-close')) dialog.close();
  const thumb = event.target.closest('.dialog-thumb');
  if (thumb) {
    const image = dialog.querySelector('.dialog-main-image');
    image.src = thumb.dataset.src;
    image.alt = thumb.dataset.alt;
    dialog.querySelectorAll('.dialog-thumb').forEach(item => { const active = item === thumb; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  }
});

renderProducts();
