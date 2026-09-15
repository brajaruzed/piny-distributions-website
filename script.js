const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

const siteConfig = window.SITE_CONFIG;
if (siteConfig) {
  const replacements = [
    ['PINY Distributions', siteConfig.brandName],
    ['PINY', siteConfig.shortName]
  ];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach(node => {
    replacements.forEach(([from, to]) => { node.nodeValue = node.nodeValue.replaceAll(from, to); });
  });
  document.querySelectorAll('[aria-label], [title], input[value]').forEach(element => {
    ['aria-label', 'title', 'value'].forEach(attribute => {
      if (!element.hasAttribute(attribute)) return;
      let value = element.getAttribute(attribute);
      replacements.forEach(([from, to]) => { value = value.replaceAll(from, to); });
      element.setAttribute(attribute, value);
    });
  });
  replacements.forEach(([from, to]) => { document.title = document.title.replaceAll(from, to); });
  document.querySelectorAll('a[href="catalogue.html"]').forEach(link => {
    if (['Catalogue', 'Shop preview'].includes(link.textContent.trim())) link.textContent = 'E-Shop';
  });
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

document.querySelectorAll('.inquiry-form').forEach(form => {
  form.addEventListener('submit', () => {
    const button = form.querySelector('.form-submit');
    if (button) {
      button.disabled = true;
      button.textContent = 'Sending…';
    }
  });
});

const productParameter = new URLSearchParams(window.location.search).get('product');
if (productParameter) {
  const productField = document.querySelector('input[name="Product required"]');
  if (productField && !productField.value) productField.value = productParameter;
}

const siteSearchItems = [
  { title: 'Home', meta: 'PINY Distributions', keywords: 'home overview kenya distribution', href: 'index.html' },
  { title: 'About PINY', meta: 'Company', keywords: 'about story company ecosystem', href: 'about.html' },
  { title: 'Distribution services', meta: 'Services', keywords: 'distribution market entry logistics retail', href: 'services.html' },
  { title: 'Industries', meta: 'Markets', keywords: 'sports health consumer sectors', href: 'industries.html' },
  { title: 'E-Shop', meta: 'All sports equipment', keywords: 'shop equipment catalogue cart', href: 'catalogue.html' },
  { title: 'For brands', meta: 'Partnerships', keywords: 'brands manufacturer distributor partnership', href: 'brands.html' },
  { title: 'For buyers', meta: 'Schools, clubs and teams', keywords: 'buyers clubs schools teams', href: 'buyers.html' },
  { title: 'Contact PINY', meta: 'Enquiries', keywords: 'contact enquiry email', href: 'contact.html' },
  ...[
    ['TUKO Performance rugby ball', 'TUKO · Rugby', 'rugby ball sizes 3 4 5'],
    ['TUKO rugby shorts', 'TUKO · Rugby', 'shorts teamwear xs s m l xl'],
    ['TUKO tackle shield', 'TUKO · Rugby', 'contact training junior senior'],
    ['Rhino Sponge rugby ball', 'Rhino Rugby · Rugby', 'sponge foam ball size 3'],
    ['Rhino Thunder rugby ball', 'Rhino Rugby · Rugby', 'thunder ball sizes 3 4 5'],
    ['Rhino Cyclone XV training ball', 'Rhino Rugby · Rugby', 'cyclone ball sizes 3 4 4.5 5'],
    ['RAM Academy trainer ball', 'RAM Rugby · Rugby', 'academy ball sizes 3 4'],
    ['RAM Squad training ball', 'RAM Rugby · Rugby', 'squad ball sizes 3 4 5'],
    ['RAM Micro training ball', 'RAM Rugby · Rugby', 'micro size 2.5 children'],
    ['TUKO Performance football', 'TUKO · Football', 'football ball sizes 4 5'],
    ['TUKO goalkeeper gloves', 'TUKO · Football', 'gloves sizes 6 7 8 9 10 11'],
    ['TUKO shin guards', 'TUKO · Football', 'shin guards protection'],
    ['TUKO indoor / outdoor basketball', 'TUKO · Basketball', 'basketball sizes 5 6 7'],
    ['TUKO team jersey', 'TUKO · Basketball', 'basketball jersey teamwear'],
    ['TUKO portable hoop system', 'TUKO · Basketball', 'basketball court hoop'],
    ['TUKO indoor / outdoor volleyball', 'TUKO · Volleyball', 'volleyball size 5'],
    ['TUKO knee pads', 'TUKO · Volleyball', 'knee pads protection'],
    ['TUKO portable net system', 'TUKO · Volleyball', 'volleyball net court'],
    ['STATSports APEX Athlete Series', 'STATSports · Performance Tech', 'gps tracker vest metrics'],
    ['STATSports APEX Athlete Series Pro', 'STATSports · Performance Tech', 'gps heart rate grip socks'],
    ['STATSports APEX Athlete Series Elite', 'STATSports · Performance Tech', 'gps baselayer boot bag']
  ].map(([title, meta, keywords]) => {
    const productQuery = title.replace(/^(TUKO|Rhino|RAM|STATSports)\s+/, '');
    return { title, meta, keywords, href: `catalogue.html?search=${encodeURIComponent(productQuery)}#shop-results` };
  })
];

const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
  const headerTools = document.createElement('div');
  headerTools.className = 'header-tools';
  headerTools.innerHTML = `<button class="header-tool search-launcher" type="button" aria-label="Search PINY"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="m16 16 4 4"></path></svg><b>Search</b></button><button class="header-tool cart-launcher" type="button" data-open-site-cart aria-label="Open preview cart"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h16l-1.3 12H5.3L4 8Z"></path><path d="M8 9V6a4 4 0 0 1 8 0v3"></path></svg><b>Cart</b><i data-cart-count hidden>0</i></button>`;
  siteHeader.appendChild(headerTools);

  const searchDialog = document.createElement('dialog');
  searchDialog.className = 'site-search-dialog';
  searchDialog.setAttribute('aria-labelledby', 'site-search-title');
  searchDialog.innerHTML = `<div class="site-search-box"><div class="site-search-top"><div><p>Search PINY</p><h2 id="site-search-title">What are you looking for?</h2></div><button class="site-search-close" type="button" aria-label="Close search">×</button></div><label class="site-search-field"><span aria-hidden="true">⌕</span><input type="search" placeholder="Search equipment, sizes, brands or pages…" autocomplete="off"></label><div class="site-search-results" aria-live="polite"></div><small>Search is available from every page.</small></div>`;
  document.body.appendChild(searchDialog);

  const siteSearchInput = searchDialog.querySelector('input');
  const siteSearchResults = searchDialog.querySelector('.site-search-results');
  function renderSiteSearch() {
    const query = siteSearchInput.value.trim().toLowerCase();
    const matches = siteSearchItems.filter(item => !query || `${item.title} ${item.meta} ${item.keywords}`.toLowerCase().includes(query)).slice(0, 8);
    siteSearchResults.innerHTML = matches.length
      ? matches.map(item => `<a href="${item.href}"><span><strong>${item.title}</strong><small>${item.meta}</small></span><b aria-hidden="true">→</b></a>`).join('')
      : '<p class="site-search-empty">No matches. Try a sport, brand, size or equipment name.</p>';
  }
  headerTools.querySelector('.search-launcher').addEventListener('click', () => { renderSiteSearch(); searchDialog.showModal(); siteSearchInput.focus(); });
  searchDialog.querySelector('.site-search-close').addEventListener('click', () => searchDialog.close());
  searchDialog.addEventListener('click', event => { if (event.target === searchDialog) searchDialog.close(); });
  siteSearchInput.addEventListener('input', renderSiteSearch);
}

function storedCartCount() {
  try { return JSON.parse(localStorage.getItem('piny-preview-cart') || '[]').reduce((sum, item) => sum + Number(item.qty || 0), 0); } catch (error) { return 0; }
}
function updateSiteCartCount(count = storedCartCount()) {
  document.querySelectorAll('[data-cart-count]').forEach(badge => { badge.textContent = count; badge.hidden = count === 0; });
}
document.addEventListener('click', event => {
  const cartButton = event.target.closest('[data-open-site-cart]');
  if (!cartButton) return;
  if (document.getElementById('cart-drawer')) window.dispatchEvent(new CustomEvent('open-piny-cart'));
  else window.location.href = 'catalogue.html#cart';
});
window.addEventListener('piny-cart-updated', event => updateSiteCartCount(event.detail.count));
updateSiteCartCount();
