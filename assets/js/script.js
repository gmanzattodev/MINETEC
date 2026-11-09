document.addEventListener("DOMContentLoaded", function () {

  const links = document.querySelectorAll('.nav-links');
  const pages = document.querySelectorAll('.page');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      // Remove active dos links
      links.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      // Esconde todas as páginas
      pages.forEach(page => {
        page.classList.remove('active-page');
      });

      // Mostra a página correspondente
      const target = this.getAttribute('data-section');
      document.getElementById(target).classList.add('active-page');
    });
  });

});

const menuBar = document.querySelector('.menu-bar');
const menu = document.querySelector('.menu');


menuBar.addEventListener('mousemove', () => {
  menu.classList.toggle('active');
});

const perguntas = document.querySelectorAll(".faq-pergunta");

perguntas.forEach(pergunta => {
  pergunta.addEventListener("click", () => {

    const resposta = pergunta.nextElementSibling;

    if(resposta.style.maxHeight){
      resposta.style.maxHeight = null;
    } else {
      resposta.style.maxHeight = resposta.scrollHeight + "px";
    }

  });
});


