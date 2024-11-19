var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    
  });

var swiperLarge = new Swiper(".mySwiperLarge", {
    slidesPerView: 6,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      loop: true,
    },
  });

  document.getElementById('menu').addEventListener('click', function() {
    var menuContent = document.getElementById('menuContent');
    var menuButton = document.getElementById('menu');
    
    // Alterna a exibição do conteúdo do menu
    menuContent.classList.toggle('show');
    
    // Esconde o botão ao abrir o menu
    if (menuContent.classList.contains('show')) {
        menuButton.style.display = 'none';
    }
});

// Fechar o box clicando fora dele (telas menores)
window.addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    var menuContent = document.getElementById('menuContent');
    
    // Fecha o menu ao clicar fora dele e mostra o botão de menu novamente
    if (!menu.contains(event.target) && !menuContent.contains(event.target)) {
        menuContent.classList.remove('show');
        menu.style.display = 'block'; // Reexibe o botão quando o menu fecha
    }
});