//  1. NAVBAR no telefone
const botaoMenu = document.getElementById('botaoMenu');
const menu = document.getElementById('menuPrincipal');

botaoMenu.addEventListener('click', function () {
  menu.classList.toggle('hidden'); // mostra ou esconde
  const aberto = !menu.classList.contains('hidden');
  botaoMenu.setAttribute('aria-expanded', aberto);
});

// fecha o menu quando clica em um link no celular
menu.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    menu.classList.add('hidden');
    botaoMenu.setAttribute('aria-expanded', false);
  });
});