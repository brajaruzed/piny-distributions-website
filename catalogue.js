const baseRows = [
  ['rugby', 'Rugby', 'Match & training ball', 'Balls', ['Senior and junior size enquiries', 'Match or training specifications', 'Custom colour and branding options']],
  ['rugby', 'Rugby', 'Tackle shield', 'Contact training', ['Multiple profiles and weights', 'Reinforced carry handles', 'Club and school requirements']],
  ['rugby', 'Rugby', 'Training bib', 'Teamwear', ['Breathable mesh concepts', 'Team colour options', 'Adult and junior sizing']],
  ['football', 'Football', 'Match & training ball', 'Balls', ['Match and training specifications', 'Standard size enquiries', 'Ball bags and pumps on request']],
  ['football', 'Football', 'Goalkeeper gloves', 'Player equipment', ['Grip and palm options', 'Adult and junior sizing', 'Training and match requirements']],
  ['football', 'Football', 'Shin guards', 'Protection', ['Shell and padding options', 'Strap and sleeve concepts', 'Team and school quantities']],
  ['basketball', 'Basketball', 'Indoor/outdoor ball', 'Balls', ['Indoor and outdoor requirements', 'Multiple size enquiries', 'Team sets and accessories']],
  ['basketball', 'Basketball', 'Team jersey', 'Teamwear', ['Breathable performance fabric', 'Colour and size requirements', 'Custom identity enquiries']],
  ['basketball', 'Basketball', 'Portable hoop system', 'Court equipment', ['Training and institutional concepts', 'Portable base options', 'Rim and net requirements']],
  ['volleyball', 'Volleyball', 'Indoor/outdoor ball', 'Balls', ['Indoor and outdoor specifications', 'Team quantity enquiries', 'Ball bags and pumps on request']],
  ['volleyball', 'Volleyball', 'Knee pads', 'Protection', ['Padding profile options', 'Adult and junior sizing', 'Team colour requirements']],
  ['volleyball', 'Volleyball', 'Portable net system', 'Court equipment', ['Training and competition concepts', 'Indoor and outdoor requirements', 'Post and net accessories']],
  ['athletics', 'Athletics', 'Track running spikes', 'Footwear', ['Sprint and track-event concepts', 'Size-range enquiries', 'Spike plate requirements']],
  ['athletics', 'Athletics', 'Starting blocks', 'Track equipment', ['Adjustable footplate concepts', 'Training and competition needs', 'Club and school quantities']],
  ['athletics', 'Athletics', 'Relay batons', 'Track accessories', ['Training and competition sets', 'Colour-set options', 'Club and school requirements']],
  ['boxing', 'Boxing', 'Training gloves', 'Protective equipment', ['Training and sparring concepts', 'Multiple weight enquiries', 'Closure and padding requirements']],
  ['boxing', 'Boxing', 'Headguard', 'Protective equipment', ['Open-face training concepts', 'Fit and closure requirements', 'Club quantity enquiries']],
  ['boxing', 'Boxing', 'Focus mitts', 'Coaching equipment', ['Curved and flat concepts', 'Grip and wrist support needs', 'Coach and club sets']],
  ['netball', 'Netball', 'Match & training ball', 'Balls', ['Match and training specifications', 'Standard size enquiries', 'Team sets and accessories']],
  ['netball', 'Netball', 'Position bib set', 'Teamwear', ['Position-set requirements', 'Breathable fabric concepts', 'Adult and junior sizing']],
  ['netball', 'Netball', 'Goal post & ring', 'Court equipment', ['Freestanding system concepts', 'Training and institutional needs', 'Ring and net accessories']]
];

const productSlugs = ['ball','tackle-shield','training-bib','ball','goalkeeper-gloves','shin-guards','ball','team-jersey','hoop-system','ball','knee-pads','net-system','running-spikes','starting-blocks','relay-batons','training-gloves','headguard','focus-mitts','ball','position-bibs','goal-post'];
const viewNames = ['Front view', 'Angle view', 'Detail view'];

function makeViews(sport, visualIndex) {
  return viewNames.map((label, viewIndex) => ({ label, src: `assets/catalogue/${sport}-0${visualIndex * 3 + viewIndex}.webp` }));
}

const baseProducts = baseRows.map((row, index) => {
  const [sport, sportLabel, name, category, features] = row;
  return { id: `tuko-${sport}-${productSlugs[index]}`, brand: 'TUKO', brandKey: 'tuko', sport, sportLabel, name, category, features, views: makeViews(sport, index % 3), listingType: 'Own-brand concept' };
});

const tukoVariants = [
  ['rugby','Rugby','Junior training ball','Balls',0], ['rugby','Rugby','Club contact-training set','Training bundle',1],
  ['football','Football','Academy training ball','Balls',0], ['football','Football','Junior protection set','Protection',2],
  ['basketball','Basketball','Youth indoor/outdoor ball','Balls',0], ['basketball','Basketball','Custom team kit','Teamwear',1],
  ['volleyball','Volleyball','Junior training ball','Balls',0], ['volleyball','Volleyball','Team protection set','Protection',1],
  ['athletics','Athletics','Sprint spike range','Footwear',0], ['athletics','Athletics','School relay set','Track accessories',2],
  ['boxing','Boxing','Club sparring gloves','Protective equipment',0], ['boxing','Boxing','Coach mitt set','Coaching equipment',2],
  ['netball','Netball','Junior training ball','Balls',0], ['netball','Netball','Club bib collection','Teamwear',1]
].map(([sport,sportLabel,name,category,visualIndex], index) => ({
  id: `tuko-variant-${sport}-${index}`,
  brand: 'TUKO', brandKey: 'tuko', sport, sportLabel, name, category,
  features: ['Development specification under review', 'Team and school feedback invited', 'Final sizing and materials not yet confirmed'],
  views: makeViews(sport, visualIndex), listingType: 'Own-brand concept'
}));

const referenceProducts = [
  ['rhino','Rhino Rugby','Rhino Thunder training ball','Training balls'],
  ['rhino','Rhino Rugby','Rhino Cyclone XV training ball','Training balls'],
  ['rhino','Rhino Rugby','Rhino Hurricane practice ball','Practice balls'],
  ['rhino','Rhino Rugby','Rhino Vortex Pro match ball','Match balls'],
  ['ram','RAM Rugby','RAM Academy trainer ball','Training balls'],
  ['ram','RAM Rugby','RAM Gripper 2.0 trainer ball','Training balls'],
  ['ram','RAM Rugby','RAM Raider match ball','Match balls'],
  ['ram','RAM Rugby','RAM Victor Elite match ball','Match balls']
].map(([brandKey, brand, name, category], index) => ({
  id: `${brandKey}-rugby-${index}`,
  brand, brandKey, sport: 'rugby', sportLabel: 'Rugby', name, category,
  features: ['Shown to test the multi-brand shop layout', 'No PINY affiliation or supply agreement is implied', 'Availability and Kenya specifications are unconfirmed'],
  views: makeViews('rugby', index % 3), listingType: 'Third-party reference', reference: true
}));

const products = [...baseProducts, ...tukoVariants, ...referenceProducts];
const filters = document.getElementById('sport-filters');
const brandFilters = document.getElementById('brand-filters');
const searchInput = document.getElementById('catalogue-search');
const grid = document.getElementById('sports-product-grid');
const count = document.getElementById('catalogue-count');
const dialog = document.getElementById('product-dialog');
const dialogContent = document.getElementById('dialog-content');
let activeSport = 'all';
let activeBrand = 'all';

const sports = [...new Map(products.map(product => [product.sport, product.sportLabel])).entries()];
const brands = [...new Map(products.map(product => [product.brandKey, product.brand])).entries()];

filters.innerHTML = [['all', 'All sports'], ...sports].map(([value, label]) => `<button type="button" class="sport-filter${value === 'all' ? ' active' : ''}" data-sport="${value}" aria-pressed="${value === 'all'}">${label}</button>`).join('');
brandFilters.innerHTML = [['all', 'All brands'], ...brands].map(([value, label]) => `<button type="button" class="brand-filter${value === 'all' ? ' active' : ''}" data-brand="${value}" aria-pressed="${value === 'all'}">${label}</button>`).join('');

function interestUrl(product) {
  const params = new URLSearchParams({ product: `${product.brand} — ${product.sportLabel} — ${product.name}` });
  return `contact.html?${params.toString()}#buyer-enquiry`;
}

function brandLockup(product, dialogView = false) {
  if (product.brandKey === 'tuko') return `<span class="${dialogView ? 'dialog-brand-lockup' : 'product-brand-lockup'}" aria-hidden="true"><img src="assets/tuko-athletic-logo.png" alt=""></span>`;
  return `<span class="${dialogView ? 'dialog-brand-lockup' : 'product-brand-lockup'} reference-lockup" aria-hidden="true"><strong>${product.brand}</strong><small>REFERENCE</small></span>`;
}

function productCard(product) {
  return `<article class="sports-product-card" data-sport="${product.sport}" data-brand="${product.brandKey}">
    <div class="product-gallery" data-gallery>
      ${brandLockup(product)}
      <button class="product-main-view" type="button" data-open-product="${product.id}" aria-label="Open details for ${product.name}"><img src="${product.views[0].src}" alt="Illustrative view for ${product.name}" loading="lazy"></button>
      <div class="product-thumbnails" aria-label="Views of ${product.name}">${product.views.map((view, index) => `<button type="button" class="product-thumb${index === 0 ? ' active' : ''}" data-src="${view.src}" data-alt="Illustrative ${view.label.toLowerCase()} for ${product.name}" aria-label="Show ${view.label.toLowerCase()}" aria-pressed="${index === 0}"><img src="${view.src}" alt="" loading="lazy"><span>${view.label.replace(' view','')}</span></button>`).join('')}</div>
    </div>
    <div class="sports-product-copy"><div class="product-meta"><span>${product.brand}</span><span>${product.reference ? 'Reference only' : 'Preview only'}</span></div><p class="product-category">${product.sportLabel} · ${product.category}</p><h3>${product.name}</h3><ul>${product.features.map(feature => `<li>${feature}</li>`).join('')}</ul><div class="product-actions"><button type="button" class="text-action" data-open-product="${product.id}">View details</button><a href="${interestUrl(product)}">Share requirements →</a></div></div>
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
  count.textContent = `${visible.length} preview listing${visible.length === 1 ? '' : 's'}`;
  if (!visible.length) grid.innerHTML = '<div class="catalogue-empty"><h3>No matching concepts</h3><p>Try another sport, brand or search term.</p></div>';
}

function openProduct(product) {
  const note = product.reference
    ? 'This third-party product name is shown only to demonstrate a possible multi-brand PINY marketplace. The imagery is illustrative and not official product photography. PINY does not claim affiliation, authorization, stock or availability.'
    : 'This TUKO concept helps PINY understand buyer requirements while the product range and final brand name are being developed.';
  dialogContent.innerHTML = `<div class="dialog-layout"><div class="dialog-gallery">${brandLockup(product, true)}<img class="dialog-main-image" src="${product.views[0].src}" alt="Illustrative view for ${product.name}"><div class="dialog-thumbs">${product.views.map((view, index) => `<button type="button" class="dialog-thumb${index === 0 ? ' active' : ''}" data-src="${view.src}" data-alt="Illustrative ${view.label.toLowerCase()} for ${product.name}" aria-pressed="${index === 0}"><img src="${view.src}" alt=""><span>${view.label}</span></button>`).join('')}</div></div><div class="dialog-copy"><p class="eyebrow">${product.brand} · ${product.sportLabel}</p><h2 id="dialog-title">${product.name}</h2><span class="development-badge">${product.reference ? 'Reference only — relationship unconfirmed' : 'Preview only — not for sale'}</span><p>${note}</p><h3>${product.reference ? 'Marketplace test notes' : 'What PINY is exploring'}</h3><ul>${product.features.map(feature => `<li>${feature}</li>`).join('')}</ul><a class="btn btn-primary" href="${interestUrl(product)}">Share requirements →</a><small>This is not an order, and no purchase is completed on this website.</small></div></div>`;
  dialog.showModal();
}

function activateFilter(container, button, attribute) {
  container.querySelectorAll('button').forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  if (attribute === 'sport') activeSport = button.dataset.sport;
  if (attribute === 'brand') activeBrand = button.dataset.brand;
  renderProducts();
}

filters.addEventListener('click', event => { const button = event.target.closest('[data-sport]'); if (button) activateFilter(filters, button, 'sport'); });
brandFilters.addEventListener('click', event => { const button = event.target.closest('[data-brand]'); if (button) activateFilter(brandFilters, button, 'brand'); });
searchInput.addEventListener('input', renderProducts);

grid.addEventListener('click', event => {
  const thumb = event.target.closest('.product-thumb');
  if (thumb) {
    const gallery = thumb.closest('[data-gallery]'); const image = gallery.querySelector('.product-main-view img'); image.src = thumb.dataset.src; image.alt = thumb.dataset.alt;
    gallery.querySelectorAll('.product-thumb').forEach(item => { const active = item === thumb; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); }); return;
  }
  const opener = event.target.closest('[data-open-product]'); if (opener) openProduct(products.find(product => product.id === opener.dataset.openProduct));
});

dialog.addEventListener('click', event => {
  if (event.target === dialog || event.target.closest('.dialog-close')) dialog.close();
  const thumb = event.target.closest('.dialog-thumb');
  if (thumb) { const image = dialog.querySelector('.dialog-main-image'); image.src = thumb.dataset.src; image.alt = thumb.dataset.alt; dialog.querySelectorAll('.dialog-thumb').forEach(item => { const active = item === thumb; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); }); }
});

renderProducts();
