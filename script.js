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
    if (link.textContent.trim() === 'Catalogue') link.textContent = 'Shop preview';
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
