const standardViewNames = ['Front view', 'Angle view', 'Detail view'];

function catalogueViews(sport, visualIndex) {
  return standardViewNames.map((label, viewIndex) => ({ label, src: `assets/catalogue/${sport}-0${visualIndex * 3 + viewIndex}.webp` }));
}

function referenceViews(asset, labels = ['Product view', 'Brand detail', 'Close detail']) {
  return [
    { label: labels[0], src: `assets/eshop/${asset}.webp` },
    { label: labels[1], src: `assets/eshop/${asset}-detail.webp` },
    { label: labels[2], src: `assets/eshop/${asset}-close.webp` }
  ];
}

const products = [
  {
    id: 'tuko-rugby-performance-ball', brand: 'TUKO', brandKey: 'tuko', sport: 'rugby', sportLabel: 'Rugby',
    name: 'Performance rugby ball', category: 'Match & training balls', heroProduct: true,
    views: [
      { label: 'Hero view', src: 'assets/eshop/tuko-rugby-ball-hero.webp' },
      ...Array.from({ length: 6 }, (_, index) => ({ label: `Angle ${index + 1}`, src: `assets/eshop/tuko-rugby-ball-0${index + 1}.webp` }))
    ],
    sizes: ['3', '4', '5'], optionLabel: 'Ball size',
    features: ['Approved seven-view TUKO visual', 'Planned junior and senior sizes', 'Red, black and white identity with edge branding'], listingType: 'TUKO concept'
  },
  {
    id: 'tuko-rugby-shorts', brand: 'TUKO', brandKey: 'tuko', sport: 'rugby', sportLabel: 'Rugby',
    name: 'Black & red rugby shorts', category: 'Teamwear', views: [
      { label: 'Front view', src: 'assets/eshop/tuko-rugby-shorts-front.webp' },
      { label: 'Back view', src: 'assets/eshop/tuko-rugby-shorts-back.webp' },
      { label: 'Side view', src: 'assets/eshop/tuko-rugby-shorts-side.webp' }
    ], sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'], optionLabel: 'Apparel size',
    features: ['Black technical-fabric concept', 'Red side panels', 'TUKO athletic mark on the lower leg'], listingType: 'TUKO concept'
  },
  {
    id: 'tuko-rugby-tackle-shield', brand: 'TUKO', brandKey: 'tuko', sport: 'rugby', sportLabel: 'Rugby',
    name: 'Tackle shield', category: 'Contact training', views: catalogueViews('rugby', 1), sizes: ['Junior', 'Senior'], optionLabel: 'Format',
    features: ['Reinforced-handle concept', 'Black and red impact-pad direction', 'Club, school and academy planning'], listingType: 'TUKO concept'
  },
  {
    id: 'tuko-rugby-training-bib', brand: 'TUKO', brandKey: 'tuko', sport: 'rugby', sportLabel: 'Rugby',
    name: 'Training bib', category: 'Teamwear', views: catalogueViews('rugby', 2), sizes: ['Junior', 'Senior'], optionLabel: 'Fit',
    features: ['Breathable-mesh concept', 'Junior and senior fit planning', 'Black and red team colours'], listingType: 'TUKO concept'
  },
  {
    id: 'rhino-sponge-ball', brand: 'Rhino Rugby', brandKey: 'rhino', sport: 'rugby', sportLabel: 'Rugby',
    name: 'Sponge rugby ball', category: 'Introductory balls', views: referenceViews('rhino-sponge'), sizes: ['3'], optionLabel: 'Ball size',
    features: ['Cushioned sponge construction', 'Size 3 manufacturer specification', 'Designed for safer introductory training'], listingType: 'Brand reference', reference: true,
    source: 'https://rhino.direct/products/rhino-sponge-ball'
  },
  {
    id: 'rhino-thunder-ball', brand: 'Rhino Rugby', brandKey: 'rhino', sport: 'rugby', sportLabel: 'Rugby',
    name: 'Thunder rugby ball', category: 'Training balls', views: [
      { label: 'Product view', src: 'assets/eshop/rhino-thunder.webp' },
      { label: 'Brand detail', src: 'assets/eshop/rhino-thunder-brand.webp' },
      { label: 'Grip detail', src: 'assets/eshop/rhino-thunder-grip.webp' }
    ], sizes: ['3', '4', '5'], optionLabel: 'Ball size',
    features: ['Training-ball manufacturer reference', 'Sizes 3, 4 and 5', 'Kenya supply and pricing not confirmed'], listingType: 'Brand reference', reference: true,
    source: 'https://rhino.direct/collections/best-sellers/products/rhino-thunder-rugby-ball'
  },
  {
    id: 'rhino-cyclone-ball', brand: 'Rhino Rugby', brandKey: 'rhino', sport: 'rugby', sportLabel: 'Rugby',
    name: 'Cyclone XV training ball', category: 'Training balls', views: referenceViews('rhino-cyclone'), sizes: ['3', '4', '4.5', '5'], optionLabel: 'Ball size',
    features: ['Training-ball manufacturer reference', 'Sizes 3, 4, 4.5 and 5', 'Kenya supply and pricing not confirmed'], listingType: 'Brand reference', reference: true,
    source: 'https://rhino.direct/collections/best-sellers/products/cyclone-xv-rugby-training-ball'
  },
  {
    id: 'ram-academy-ball', brand: 'RAM Rugby', brandKey: 'ram', sport: 'rugby', sportLabel: 'Rugby',
    name: 'Academy trainer ball', category: 'Training balls', views: referenceViews('ram-academy'), sizes: ['3', '4'], optionLabel: 'Ball size',
    features: ['3-ply polycotton and rubber construction', '3D grip and latex bladder', 'Sizes 3 and 4 manufacturer specification'], listingType: 'Brand reference', reference: true,
    source: 'https://www.ramrugby.co.uk/products/academy-trainer-ball'
  },
  {
    id: 'ram-squad-ball', brand: 'RAM Rugby', brandKey: 'ram', sport: 'rugby', sportLabel: 'Rugby',
    name: 'Squad training ball', category: 'Training balls', views: referenceViews('ram-squad'), sizes: ['3', '4', '5'], optionLabel: 'Ball size',
    features: ['Club-training manufacturer reference', 'Sizes 3, 4 and 5', 'Kenya supply and pricing not confirmed'], listingType: 'Brand reference', reference: true,
    source: 'https://www.ramrugby.co.uk/products/ram-squad-training-ball-1'
  },
  {
    id: 'ram-micro-ball', brand: 'RAM Rugby', brandKey: 'ram', sport: 'rugby', sportLabel: 'Rugby',
    name: 'Micro training ball', category: 'Introductory balls', views: referenceViews('ram-micro'), sizes: ['2.5'], optionLabel: 'Ball size',
    features: ['Size 2.5 manufacturer specification', 'Designed for ages 4–6', 'Kenya supply and pricing not confirmed'], listingType: 'Brand reference', reference: true,
    source: 'https://www.ramrugby.co.uk/products/ram-micro-training-ball'
  },
  {
    id: 'tuko-football-performance-ball', brand: 'TUKO', brandKey: 'tuko', sport: 'football', sportLabel: 'Football',
    name: 'Performance football', category: 'Match & training balls', views: catalogueViews('football', 0), imprint: true, sizes: ['4', '5'], optionLabel: 'Ball size',
    features: ['Panel and surface concepts under review', 'Junior and senior size planning', 'Red, black and white identity'], listingType: 'TUKO concept'
  },
  {
    id: 'tuko-football-goalkeeper-gloves', brand: 'TUKO', brandKey: 'tuko', sport: 'football', sportLabel: 'Football',
    name: 'Goalkeeper gloves', category: 'Player equipment', views: catalogueViews('football', 1), sizes: ['6', '7', '8', '9', '10', '11'], optionLabel: 'Glove size',
    features: ['Grip and palm options under review', 'Training and match concepts', 'Junior and adult size planning'], listingType: 'TUKO concept'
  },
  {
    id: 'tuko-football-shin-guards', brand: 'TUKO', brandKey: 'tuko', sport: 'football', sportLabel: 'Football',
    name: 'Shin guards', category: 'Protection', views: catalogueViews('football', 2), sizes: ['S', 'M', 'L'], optionLabel: 'Guard size',
    features: ['Contoured-shell concept', 'Strap and sleeve options', 'Team and school quantity planning'], listingType: 'TUKO concept'
  },
  {
    id: 'tuko-basketball-performance-ball', brand: 'TUKO', brandKey: 'tuko', sport: 'basketball', sportLabel: 'Basketball',
    name: 'Indoor / outdoor basketball', category: 'Balls', views: catalogueViews('basketball', 0), imprint: true, sizes: ['5', '6', '7'], optionLabel: 'Ball size',
    features: ['Indoor/outdoor surface concept', 'Youth, women’s and men’s size planning', 'Black and red treatment'], listingType: 'TUKO concept'
  },
  {
    id: 'tuko-basketball-team-jersey', brand: 'TUKO', brandKey: 'tuko', sport: 'basketball', sportLabel: 'Basketball',
    name: 'Team jersey', category: 'Teamwear', views: catalogueViews('basketball', 1), sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'], optionLabel: 'Apparel size',
    features: ['Breathable-fabric concept', 'Team colour and size planning', 'Custom identity options under review'], listingType: 'TUKO concept'
  },
  {
    id: 'tuko-basketball-hoop', brand: 'TUKO', brandKey: 'tuko', sport: 'basketball', sportLabel: 'Basketball',
    name: 'Portable hoop system', category: 'Court equipment', views: catalogueViews('basketball', 2), sizes: ['Training', 'Club'], optionLabel: 'Configuration',
    features: ['Training and institutional concept', 'Portable-base configuration', 'Rim and net specifications under review'], listingType: 'TUKO concept'
  },
  {
    id: 'tuko-volleyball-performance-ball', brand: 'TUKO', brandKey: 'tuko', sport: 'volleyball', sportLabel: 'Volleyball',
    name: 'Indoor / outdoor volleyball', category: 'Balls', views: catalogueViews('volleyball', 0), imprint: true, sizes: ['5'], optionLabel: 'Ball size',
    features: ['Indoor/outdoor casing concepts', 'Standard size 5 planning', 'Red, black and white identity'], listingType: 'TUKO concept'
  },
  {
    id: 'tuko-volleyball-knee-pads', brand: 'TUKO', brandKey: 'tuko', sport: 'volleyball', sportLabel: 'Volleyball',
    name: 'Knee pads', category: 'Protection', views: catalogueViews('volleyball', 1), sizes: ['S', 'M', 'L', 'XL'], optionLabel: 'Pad size',
    features: ['Low-profile cushioning concept', 'Adult and junior size planning', 'Black and red team treatment'], listingType: 'TUKO concept'
  },
  {
    id: 'tuko-volleyball-net', brand: 'TUKO', brandKey: 'tuko', sport: 'volleyball', sportLabel: 'Volleyball',
    name: 'Portable net system', category: 'Court equipment', views: catalogueViews('volleyball', 2), sizes: ['Indoor', 'Outdoor'], optionLabel: 'Use',
    features: ['Indoor/outdoor concept', 'Portable-post configuration', 'Training and competition specifications'], listingType: 'TUKO concept'
  },
  {
    id: 'statsports-academy', brand: 'STATSports', brandKey: 'statsports', sport: 'performance', sportLabel: 'Performance Tech',
    name: 'APEX Athlete Series', category: 'GPS tracking', views: referenceViews('stats-academy'), sizes: ['S', 'M', 'L', 'XL', '2XL'], optionLabel: 'Vest size',
    features: ['GPS tracker and performance vest', 'App access with 24 tracked metrics', 'Pictured for equipment-range planning only'], listingType: 'Technology reference', reference: true,
    source: 'https://uk.shop.statsports.com/'
  },
  {
    id: 'statsports-academy-pro', brand: 'STATSports', brandKey: 'statsports', sport: 'performance', sportLabel: 'Performance Tech',
    name: 'APEX Athlete Series Pro', category: 'GPS performance pack', views: referenceViews('stats-pro'), sizes: ['S', 'M', 'L', 'XL', '2XL'], optionLabel: 'Vest size',
    features: ['GPS and performance-vest bundle', 'Heart-rate belt and grip-sock bundle', 'Pictured for equipment-range planning only'], listingType: 'Technology reference', reference: true,
    source: 'https://uk.shop.statsports.com/'
  },
  {
    id: 'statsports-academy-elite', brand: 'STATSports', brandKey: 'statsports', sport: 'performance', sportLabel: 'Performance Tech',
    name: 'APEX Athlete Series Elite', category: 'GPS performance pack', views: referenceViews('stats-elite'), sizes: ['S', 'M', 'L', 'XL', '2XL'], optionLabel: 'Baselayer size',
    features: ['Expanded GPS performance bundle', 'Premium baselayer, socks and boot bag', 'Pictured for equipment-range planning only'], listingType: 'Technology reference', reference: true,
    source: 'https://uk.shop.statsports.com/'
  }
];

const filters = document.getElementById('sport-filters');
const brandFilters = document.getElementById('brand-filters');
const searchInput = document.getElementById('catalogue-search');
const grid = document.getElementById('sports-product-grid');
const count = document.getElementById('catalogue-count');
const dialog = document.getElementById('product-dialog');
const dialogContent = document.getElementById('dialog-content');
const cartDrawer = document.getElementById('cart-drawer');
const cartBackdrop = document.getElementById('cart-backdrop');
const cartItems = document.getElementById('cart-items');
const cartSummary = document.getElementById('cart-summary');
const cartEnquire = document.getElementById('cart-enquire');
let activeSport = 'all';
let activeBrand = 'all';

const sports = [
  ['rugby', 'Rugby', 'assets/eshop/tuko-rugby-ball-hero.webp'],
  ['football', 'Football', 'assets/catalogue/football-00.webp'],
  ['basketball', 'Basketball', 'assets/catalogue/basketball-00.webp'],
  ['volleyball', 'Volleyball', 'assets/catalogue/volleyball-00.webp'],
  ['performance', 'Performance Tech', 'assets/eshop/stats-academy.webp']
];
const brands = [['tuko', 'TUKO'], ['rhino', 'Rhino Rugby'], ['ram', 'RAM Rugby'], ['statsports', 'STATSports']];

filters.innerHTML = [['all', 'All equipment', 'assets/eshop/tuko-rugby-ball-hero.webp'], ...sports].map(([value, label, image]) => `
  <button type="button" class="sport-filter${value === 'all' ? ' active' : ''}" data-sport="${value}" aria-pressed="${value === 'all'}">
    <img src="${image}" alt="" loading="lazy"><span>${label}</span><small>${value === 'all' ? `${products.length} products` : `${products.filter(product => product.sport === value).length} products`}</small>
  </button>`).join('');

brandFilters.innerHTML = [['all', 'All brands'], ...brands].map(([value, label]) => `<button type="button" class="brand-filter${value === 'all' ? ' active' : ''}" data-brand="${value}" aria-pressed="${value === 'all'}">${label}</button>`).join('');

function interestUrl(product) {
  const params = new URLSearchParams({ product: `${product.brand} — ${product.sportLabel} — ${product.name}` });
  return `contact.html?${params.toString()}#buyer-enquiry`;
}

function brandLockup(product, dialogView = false) {
  if (product.brandKey === 'tuko') return `<span class="${dialogView ? 'dialog-brand-lockup' : 'product-brand-lockup'}"><img src="assets/tuko-athletic-logo.png" alt="TUKO — Together Further"></span>`;
  return `<span class="${dialogView ? 'dialog-brand-lockup' : 'product-brand-lockup'} reference-lockup"><strong>${product.brand}</strong><small>REFERENCE</small></span>`;
}

function imprint(product, dialogView = false) {
  if (!product.imprint) return '';
  return `<span class="product-imprint${dialogView ? ' dialog-imprint' : ''}" aria-hidden="true"><img src="assets/tuko-athletic-logo.png" alt=""></span>`;
}

function variantSelect(product, context = 'card') {
  const id = `${context}-variant-${product.id}`;
  const prefix = product.optionLabel.toLowerCase().includes('size') || product.optionLabel === 'Fit' ? 'Size ' : '';
  return `<label class="variant-field" for="${id}"><span>${product.optionLabel}</span><select id="${id}" data-variant-for="${product.id}">${product.sizes.map(size => `<option value="${size}">${prefix}${size}</option>`).join('')}</select></label>`;
}

function productCard(product) {
  const status = product.reference ? 'Supply unconfirmed' : 'Concept · not launched';
  return `<article class="sports-product-card${product.heroProduct ? ' featured-shop-card' : ''}" data-sport="${product.sport}" data-brand="${product.brandKey}">
    <div class="product-gallery" data-gallery>
      ${brandLockup(product)}
      <button class="product-main-view" type="button" data-open-product="${product.id}" aria-label="Open details for ${product.name}"><img src="${product.views[0].src}" alt="${product.name} product preview" loading="lazy">${imprint(product)}</button>
      <div class="product-thumbnails" aria-label="Views of ${product.name}">${product.views.slice(0, 3).map((view, index) => `<button type="button" class="product-thumb${index === 0 ? ' active' : ''}" data-src="${view.src}" data-alt="${view.label} of ${product.name}" aria-label="Show ${view.label.toLowerCase()}" aria-pressed="${index === 0}"><img src="${view.src}" alt="" loading="lazy"><span>${view.label.replace(' view','')}</span></button>`).join('')}</div>
    </div>
    <div class="sports-product-copy"><div class="product-meta"><span>${product.brand}</span><span>${status}</span></div><p class="product-category">${product.sportLabel} · ${product.category}</p><h3>${product.name}</h3><p class="product-spec">${product.features[0]}</p><div class="product-buy-panel">${variantSelect(product)}<div class="price-status"><strong>Price on confirmation</strong><small>No payment taken</small></div><button class="add-cart-button" type="button" data-add-cart="${product.id}">Add to preview cart</button></div><div class="product-actions"><button type="button" class="text-action" data-open-product="${product.id}">${product.views.length > 3 ? `View all ${product.views.length} angles` : 'View product details'}</button><a href="${interestUrl(product)}">Enquire →</a></div></div>
  </article>`;
}

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const visible = products.filter(product => {
    const matchesSport = activeSport === 'all' || product.sport === activeSport;
    const matchesBrand = activeBrand === 'all' || product.brandKey === activeBrand;
    const haystack = `${product.brand} ${product.sportLabel} ${product.name} ${product.category} ${product.features.join(' ')}`.toLowerCase();
    return matchesSport && matchesBrand && (!query || haystack.includes(query));
  });
  grid.innerHTML = visible.map(productCard).join('');
  count.textContent = `${visible.length} product${visible.length === 1 ? '' : 's'}`;
  if (!visible.length) grid.innerHTML = '<div class="catalogue-empty"><h3>No matching equipment</h3><p>Try another category, brand or search term.</p></div>';
}

function openProduct(product) {
  const note = product.reference
    ? `${product.brand} is shown as a manufacturer reference for range planning. PINY is not representing this product as stocked, locally priced or available for sale.`
    : 'This TUKO concept shows a possible PINY-developed product. Materials, certification, final specifications and launch timing still require validation.';
  const sourceLink = product.source ? `<a class="manufacturer-link" href="${product.source}" target="_blank" rel="noopener">View manufacturer reference ↗</a>` : '';
  dialogContent.innerHTML = `<div class="dialog-layout"><div class="dialog-gallery">${brandLockup(product, true)}<div class="dialog-image-wrap"><img class="dialog-main-image" src="${product.views[0].src}" alt="${product.name} product preview">${imprint(product, true)}</div><div class="dialog-thumbs">${product.views.map((view, index) => `<button type="button" class="dialog-thumb${index === 0 ? ' active' : ''}" data-src="${view.src}" data-alt="${view.label} of ${product.name}" aria-pressed="${index === 0}"><img src="${view.src}" alt=""><span>${view.label}</span></button>`).join('')}</div></div><div class="dialog-copy"><p class="eyebrow">${product.brand} · ${product.sportLabel}</p><h2 id="dialog-title">${product.name}</h2><span class="development-badge">${product.reference ? 'Brand reference · supply unconfirmed' : 'TUKO concept · not launched'}</span><p>${note}</p><h3>Product details</h3><ul>${product.features.map(feature => `<li>${feature}</li>`).join('')}</ul>${variantSelect(product, 'dialog')}<div class="price-status dialog-price"><strong>Price on confirmation</strong><small>Stock and Kenya pricing are not yet confirmed.</small></div>${sourceLink}<button class="btn btn-primary dialog-add" type="button" data-add-cart="${product.id}">Add to preview cart</button><small>Adding an item does not place an order or reserve stock.</small></div></div>`;
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

const cartKey = 'piny-preview-cart';
function readCart() {
  try { return JSON.parse(localStorage.getItem(cartKey) || '[]'); } catch (error) { return []; }
}
function writeCart(cart) {
  try { localStorage.setItem(cartKey, JSON.stringify(cart)); } catch (error) { /* Storage can be unavailable in privacy mode. */ }
  window.dispatchEvent(new CustomEvent('piny-cart-updated', { detail: { count: cart.reduce((sum, item) => sum + item.qty, 0) } }));
}
function selectedVariant(productId, trigger) {
  const scope = trigger.closest('.sports-product-card, .dialog-copy');
  return scope?.querySelector(`[data-variant-for="${productId}"]`)?.value || products.find(product => product.id === productId).sizes[0];
}
function addToCart(productId, variant) {
  const cart = readCart();
  const existing = cart.find(item => item.id === productId && item.variant === variant);
  if (existing) existing.qty += 1;
  else cart.push({ id: productId, variant, qty: 1 });
  writeCart(cart);
  renderCart();
  openCart();
}
function cartProduct(item) { return products.find(product => product.id === item.id); }
function renderCart() {
  const cart = readCart().filter(item => cartProduct(item));
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  if (!cart.length) {
    cartItems.innerHTML = '<div class="cart-empty"><strong>Your preview cart is empty</strong><p>Add equipment and selected sizes to build an enquiry list.</p></div>';
  } else {
    cartItems.innerHTML = cart.map((item, index) => {
      const product = cartProduct(item);
      return `<article class="cart-item"><img src="${product.views[0].src}" alt=""><div><p>${product.brand} · ${product.sportLabel}</p><h3>${product.name}</h3><span>${product.optionLabel}: ${item.variant}</span><div class="cart-quantity" aria-label="Quantity for ${product.name}"><button type="button" data-cart-action="decrease" data-cart-index="${index}" aria-label="Reduce quantity">−</button><strong>${item.qty}</strong><button type="button" data-cart-action="increase" data-cart-index="${index}" aria-label="Increase quantity">+</button><button class="cart-remove" type="button" data-cart-action="remove" data-cart-index="${index}">Remove</button></div></div></article>`;
    }).join('');
  }
  cartSummary.textContent = `${total} item${total === 1 ? '' : 's'} · Quote required`;
  const enquiryList = cart.map(item => {
    const product = cartProduct(item);
    return `${item.qty} × ${product.brand} ${product.name} (${product.optionLabel}: ${item.variant})`;
  }).join('; ');
  cartEnquire.href = enquiryList ? `contact.html?${new URLSearchParams({ product: `Preview cart — ${enquiryList}` }).toString()}#buyer-enquiry` : 'contact.html#buyer-enquiry';
  document.querySelectorAll('[data-cart-count]').forEach(badge => { badge.textContent = total; badge.hidden = total === 0; });
}
function openCart() {
  cartDrawer.classList.add('open');
  cartBackdrop.hidden = false;
  cartDrawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('cart-open');
  cartDrawer.querySelector('.cart-close').focus();
}
function closeCart() {
  cartDrawer.classList.remove('open');
  cartBackdrop.hidden = true;
  cartDrawer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('cart-open');
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
  const addButton = event.target.closest('[data-add-cart]');
  if (addButton) { addToCart(addButton.dataset.addCart, selectedVariant(addButton.dataset.addCart, addButton)); return; }
  const opener = event.target.closest('[data-open-product]');
  if (opener) openProduct(products.find(product => product.id === opener.dataset.openProduct));
});

dialog.addEventListener('click', event => {
  if (event.target === dialog || event.target.closest('.dialog-close')) dialog.close();
  const addButton = event.target.closest('[data-add-cart]');
  if (addButton) {
    const variant = selectedVariant(addButton.dataset.addCart, addButton);
    dialog.close();
    addToCart(addButton.dataset.addCart, variant);
    return;
  }
  const thumb = event.target.closest('.dialog-thumb');
  if (thumb) {
    const image = dialog.querySelector('.dialog-main-image');
    image.src = thumb.dataset.src;
    image.alt = thumb.dataset.alt;
    dialog.querySelectorAll('.dialog-thumb').forEach(item => { const active = item === thumb; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  }
});

cartDrawer.addEventListener('click', event => {
  if (event.target.closest('.cart-close')) { closeCart(); return; }
  const actionButton = event.target.closest('[data-cart-action]');
  if (!actionButton) return;
  const cart = readCart();
  const index = Number(actionButton.dataset.cartIndex);
  if (actionButton.dataset.cartAction === 'increase') cart[index].qty += 1;
  if (actionButton.dataset.cartAction === 'decrease') cart[index].qty = Math.max(1, cart[index].qty - 1);
  if (actionButton.dataset.cartAction === 'remove') cart.splice(index, 1);
  writeCart(cart);
  renderCart();
});
cartBackdrop.addEventListener('click', closeCart);
window.addEventListener('open-piny-cart', openCart);
window.addEventListener('keydown', event => { if (event.key === 'Escape' && cartDrawer.classList.contains('open')) closeCart(); });

const urlSearch = new URLSearchParams(window.location.search).get('search');
if (urlSearch) searchInput.value = urlSearch;
renderProducts();
renderCart();
if (window.location.hash === '#cart') openCart();
