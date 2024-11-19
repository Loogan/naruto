const CHARS = [
  {
    name: 'Naruto',
    image: './assets/images/herois/naruto.png',
    description: '',
  },
  {
    name: 'Sasuke',
    image: './assets/images/herois/sasuke.png',
    description: '',
  },
  {
    name: 'Sakura',
    image: './assets/images/herois/sakura.png',
    description: '',
  },
  {
    name: 'Kakashi',
    image: './assets/images/herois/kakashi.png',
    description: '',
  },
  {
    name: 'Minati',
    image: './assets/images/herois/minato.png',
    description: '',
  },
  {
    name: 'Jiraya',
    image: './assets/images/herois/jiraya.png',
    description: '',
  },
  {
    name: 'Tsunade',
    image: './assets/images/herois/tsunade.png',
    description: '',
  },
  {
    name: 'Hashirama',
    image: './assets/images/herois/hashirama.png',
    description: '',
  },
  {
    name: 'Guy',
    image: './assets/images/herois/guy.png',
    description: '',
  },
  {
    name: 'Neji',
    image: './assets/images/herois/neji.png',
    description: '',
  },
  {
    name: 'Hinata',
    image: './assets/images/herois/hinata.png',
    description: '',
  },
  {
    name: 'Rock Lee',
    image: './assets/images/herois/rock-lee.png',
    description: '',
  },
  {
    name: 'Ino',
    image: './assets/images/herois/ino.png',
    description: '',
  },
  {
    name: 'Choji',
    image: './assets/images/herois/choji.png',
    description: '',
  },
  {
    name: 'Shikamaru',
    image: './assets/images/herois/shikamaru.png',
    description: '',
  },
  {
    name: 'Shino',
    image: './assets/images/herois/shino.png',
    description: '',
  },
  {
    name: 'Gaara',
    image: './assets/images/herois/gaara.png',
    description: '',
  },
  {
    name: 'Sai',
    image: './assets/images/herois/sai.png',
    description: '',
  },
  {
    name: 'Raikage',
    image: './assets/images/herois/raikage.png',
    description: '',
  },
  {
    name: 'Rin',
    image: './assets/images/herois/rin.png',
    description: '',
  },
  {
    name: 'Sarutobi',
    image: './assets/images/herois/sarutobi.png',
    description: '',
  },
  {
    name: 'Iruka',
    image: './assets/images/herois/iruka.png',
    description: '',
  },
  {
    name: 'Kurenai',
    image: './assets/images/herois/kurenai.png',
    description: '',
  },
];

const CHARS_AKATSUKI = [
  {
    name: 'Itachi',
    image: './assets/images/viloes/itachi.png',
    description: '',
  },
  {
    name: 'Kisame',
    image: './assets/images/viloes/kisame.png',
    description: '',
  },
  {
    name: 'Pain',
    image: './assets/images/viloes/pain.png',
    description: '',
  },
  {
    name: 'Hidan',
    image: './assets/images/viloes/hidan.png',
    description: '',
  },
  {
    name: 'Deidara',
    image: './assets/images/viloes/deidara.png',
    description: '',
  },
  {
    name: 'Kakusu',
    image: './assets/images/viloes/kakusu.png',
    description: '',
  },
  {
    name: 'Konan',
    image: './assets/images/viloes/konan.png',
    description: '',
  },
  {
    name: 'Orochimaru',
    image: './assets/images/viloes/orochimaru.png',
    description: '',
  },
  {
    name: 'Sasori',
    image: './assets/images/viloes/sasori.png',
    description: '',
  },
  {
    name: 'Zetsu',
    image: './assets/images/viloes/zetsu.png',
    description: '',
  },
  {
    name: 'Obito',
    image: './assets/images/viloes/obito.png',
    description: '',
  },
  {
    name: 'Madara',
    image: './assets/images/viloes/madara.png',
    description: '',
  },
  {
    name: 'Kabuto',
    image: './assets/images/viloes/kabuto.png',
    description: '',
  },
  {
    name: 'Zabuza',
    image: './assets/images/viloes/zabuza.png',
    description: '',
  },
];


const smallSwiperWrapper = document.querySelector('#carrouselSwiper .swiper-wrapper');
const largeSwiperWrapper = document.querySelector('#carrouselSwiperLarge .swiper-wrapper');

// Gera os slides dinamicamente
CHARS.forEach((char, index) => {
  const slideHTML = `
        <div class="swiper-slide">
            <a href="./details/?id=${index}">
                <div class="carrousel">
                    <article class="card">
                        <img src="${char.image}" alt="${char.name}'s picture">
                        <div class="card-footer">${char.name}</div>
                    </article>
                </div>
            </a>
        </div>
    `;
  
  smallSwiperWrapper.innerHTML += slideHTML;
  largeSwiperWrapper.innerHTML += slideHTML;
});

const akatsukiSmallSwiperWrapper = document.querySelector('#akatsukiSwiper .swiper-wrapper');
const akatsukiLargeSwiperWrapper = document.querySelector('#akatsukiSwiperLarge .swiper-wrapper');

// Gera os slides da Akatsuki dinamicamente
CHARS_AKATSUKI.forEach((char, index) => {
  const akatsukiSlideHTML = `
        <div class="swiper-slide">
            <a href="./details/?id=${index}">
                <div class="carrousel">
                    <article class="card">
                        <img src="${char.image}" alt="${char.name}'s picture">
                        <div class="card-footer">${char.name}</div>
                    </article>
                </div>
            </a>
        </div>
    `;
  
  akatsukiSmallSwiperWrapper.innerHTML += akatsukiSlideHTML;
  akatsukiLargeSwiperWrapper.innerHTML += akatsukiSlideHTML;
});

