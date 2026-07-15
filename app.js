const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.header-nav');
const cartCount = document.querySelector('.cart-count');
const cartButton = document.querySelector('.cart-button');
const toast = document.querySelector('.toast');
let count = 0;
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 1900);
}

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.add-product').forEach((button) => {
  button.addEventListener('click', () => {
    count += 1;
    cartCount.textContent = count;
    cartButton.setAttribute('aria-label', `Корзина: ${count} товаров`);
    showToast(`${button.dataset.product} добавлен в корзину`);
  });
});

cartButton?.addEventListener('click', () => {
  showToast(count ? `В корзине товаров: ${count}` : 'Корзина пока пуста');
});

document.querySelectorAll('.slider-dots button').forEach((dot) => {
  dot.addEventListener('click', () => {
    document.querySelector('.slider-dots .active')?.classList.remove('active');
    dot.classList.add('active');
  });
});
