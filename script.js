const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

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

document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.inquiry-form').forEach(form => {
  form.addEventListener('submit', () => {
    const button = form.querySelector('.form-submit');
    if (button) {
      button.disabled = true;
      button.textContent = 'Sending…';
    }
  });
});
