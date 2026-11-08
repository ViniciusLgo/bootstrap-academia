//  1. navbar no telefone
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


// carrossel
const slides = document.querySelectorAll('.slide');
const bolinhas = document.querySelectorAll('.bolinha');
let slideAtual = 0;

function mostrarSlide(numero) {
  // se passar do ultimo, volta pro primeiro
  if (numero >= slides.length) numero = 0;
  if (numero < 0) numero = slides.length - 1;

  slides.forEach(function (slide, i) {
    const ativo = (i === numero);
    slide.classList.toggle('opacity-0', !ativo);
    slide.classList.toggle('invisible', !ativo);
  });

  bolinhas.forEach(function (bolinha, i) {
    const ativo = (i === numero);
    bolinha.classList.toggle('bg-white', ativo);
    bolinha.classList.toggle('bg-white/40', !ativo);
    bolinha.setAttribute('aria-current', ativo);
  });

  slideAtual = numero;
}

document.getElementById('slideAnterior').addEventListener('click', function () {
  mostrarSlide(slideAtual - 1);
});

document.getElementById('slideProximo').addEventListener('click', function () {
  mostrarSlide(slideAtual + 1);
});

bolinhas.forEach(function (bolinha, i) {
  bolinha.addEventListener('click', function () {
    mostrarSlide(i);
  });
});

// auto troca de slide a cada 5 segundos
setInterval(function () {
  mostrarSlide(slideAtual + 1);
}, 5000);

// MODAL
const modal = document.getElementById('modalPlano');

// Quero esse plano "abrem o modal"
document.querySelectorAll('.abrir-modal').forEach(function (botao) {
  botao.addEventListener('click', function () {
    modal.showModal();
  });
});

// botões X, Fechar e Entendi fecham o modal
document.querySelectorAll('.fechar-modal').forEach(function (botao) {
  botao.addEventListener('click', function () {
    modal.close();
  });
});

// clicar no fundo escuro também fecha
modal.addEventListener('click', function (evento) {
  if (evento.target === modal) {
    modal.close();
  }
});