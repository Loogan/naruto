// Função para determinar o caminho correto da imagem
function getImagePath(imageName, category) {
  // Verifica se estamos na página de detalhes, comparando o pathname
  const isDetailsPage = window.location.pathname.includes('details');
  
  // Retorna o caminho correto dependendo da página e categoria (herois ou vilões)
  if (isDetailsPage) {
    return `../assets/images/${category}/${imageName}`; // Caminho para a página de detalhes
  } else {
    return `./assets/images/${category}/${imageName}`; // Caminho para a página principal
  }
}

const CHARS_SHINOBI = [
  { name: 'Naruto', image: 'naruto.png', description: '' },
  { name: 'Sasuke', image: 'sasuke.png', description: '' },
  { name: 'Sakura', image: 'sakura.png', description: '' },
  { name: 'Kakashi', image: 'kakashi.png', description: '' },
  { name: 'Minato', image: 'minato.png', description: '' },
  { name: 'Jiraya', image: 'jiraya.png', description: '' },
  { name: 'Tsunade', image: 'tsunade.png', description: '' },
  { name: 'Hashirama', image: 'hashirama.png', description: '' },
  { name: 'Guy', image: 'guy.png', description: '' },
  { name: 'Neji', image: 'neji.png', description: '' },
  { name: 'Hinata', image: 'hinata.png', description: '' },
  { name: 'Rock Lee', image: 'rock-lee.png', description: '' },
  { name: 'Ino', image: 'ino.png', description: '' },
  { name: 'Choji', image: 'choji.png', description: '' },
  { name: 'Shikamaru', image: 'shikamaru.png', description: '' },
  { name: 'Shino', image: 'shino.png', description: '' },
  { name: 'Gaara', image: 'gaara.png', description: '' },
  { name: 'Sai', image: 'sai.png', description: '' },
  { name: 'Raikage', image: 'raikage.png', description: '' },
  { name: 'Rin', image: 'rin.png', description: '' },
  { name: 'Sarutobi', image: 'sarutobi.png', description: '' },
  { name: 'Iruka', image: 'iruka.png', description: '' },
  { name: 'Kurenai', image: 'kurenai.png', description: '' },
];

const CHARS_AKATSUKI = [
  { name: 'Itachi', image: 'itachi.png', description: 'lorem ipsum dolor sit amet consectetur adipiscing elit' },
  { name: 'Kisame', image: 'kisame.png', description: '' },
  { name: 'Pain', image: 'pain.png', description: '' },
  { name: 'Hidan', image: 'hidan.png', description: '' },
  { name: 'Deidara', image: 'deidara.png', description: '' },
  { name: 'Kakusu', image: 'kakusu.png', description: '' },
  { name: 'Konan', image: 'konan.png', description: '' },
  { name: 'Orochimaru', image: 'orochimaru.png', description: '' },
  { name: 'Sasori', image: 'sasori.png', description: '' },
  { name: 'Zetsu', image: 'zetsu.png', description: '' },
  { name: 'Obito', image: 'obito.png', description: '' },
  { name: 'Madara', image: 'madara.png', description: '' },
  { name: 'Kabuto', image: 'kabuto.png', description: '' },
  { name: 'Zabuza', image: 'zabuza.png', description: '' },
];

const shinobiSmallSwiperWrapper = document.querySelector('#carrouselSwiper .swiper-wrapper');
const shinobiLargeSwiperWrapper = document.querySelector('#carrouselSwiperLarge .swiper-wrapper');

// Gera os slides dos Shinobis dinamicamente
CHARS_SHINOBI.forEach((char, index) => {
  const slideHTML = `
    <div class="swiper-slide">
      <a href="./details/?id=${index}&char=1">
        <div class="carrousel">
          <article class="card">
              <img src="${getImagePath(char.image, 'herois')}" alt="${char.name}'s picture">
              <div class="card-footer">${char.name}</div>
          </article>
        </div>
      </a>
    </div>
    `;
  
  shinobiSmallSwiperWrapper.innerHTML += slideHTML;
  shinobiLargeSwiperWrapper.innerHTML += slideHTML;
});

const akatsukiSmallSwiperWrapper = document.querySelector('#akatsukiSwiper .swiper-wrapper');
const akatsukiLargeSwiperWrapper = document.querySelector('#akatsukiSwiperLarge .swiper-wrapper');

// Gera os slides da Akatsuki dinamicamente
CHARS_AKATSUKI.forEach((char, index) => {
  const akatsukiSlideHTML = `
    <div class="swiper-slide">
      <a href="./details/?id=${index}&char=2">
        <div class="carrousel">
          <article class="card">
            <img src="${getImagePath(char.image, 'viloes')}" alt="${char.name}'s picture">
            <div class="card-footer">${char.name}</div>
          </article>
        </div>
      </a>
    </div>
    `;
  
  akatsukiSmallSwiperWrapper.innerHTML += akatsukiSlideHTML;
  akatsukiLargeSwiperWrapper.innerHTML += akatsukiSlideHTML;
});
