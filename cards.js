const CHARS = [
    {
      name: 'Naruto',
      image: './assets/naruto.png',
      description: '',
    },
    {
      name: 'Sasuke',
      image: './assets/sasuke.png',
      description: '',
    },
    {
      name: 'Sakura',
      image: './assets/sakura.png',
      description: '',
    },
    {
      name: 'Kakashi',
      image: './assets/kakashi.png',
      description: '',
    },
    {
      name: 'Minati',
      image: './assets/minato.png',
      description: '',
    },
    {
      name: 'Jiraya',
      image: './assets/jiraya.png',
      description: '',
    },
    {
      name: 'Tsunade',
      image: './assets/tsunade.png',
      description: '',
    },
    {
      name: 'Hashirama',
      image: './assets/hashirama.png',
      description: '',
    },
    {
      name: 'Guy',
      image: './assets/guy.png',
      description: '',
    },
    {
      name: 'Neji',
      image: './assets/neji.png',
      description: '',
    },
    {
      name: 'Hinata',
      image: './assets/hinata.png',
      description: '',
    },
    {
      name: 'Rock Lee',
      image: './assets/rock lee.png',
      description: '',
    },
    {
      name: 'Ino',
      image: './assets/ino.png',
      description: '',
    },
    {
      name: 'Choji',
      image: './assets/choji.png',
      description: '',
    },
    {
      name: 'Shikamaru',
      image: './assets/shikamaru.png',
      description: '',
    },
    {
      name: 'Shino',
      image: './assets/shino.png',
      description: '',
    },
    {
      name: 'Gaara',
      image: './assets/gaara.png',
      description: '',
    },
    {
      name: 'Raikage',
      image: './assets/raikage.png',
      description: '',
    },
    {
      name: 'Rin',
      image: './assets/rin.png',
      description: '',
    },
    {
      name: 'Sarutobi',
      image: './assets/sarutobi.png',
      description: '',
    },
    {
      name: 'Iruka',
      image: './assets/iruka.png',
      description: '',
    },
    {
      name: 'Kurenai',
      image: './assets/kurenai.png',
      description: '',
    },
  ];

  const CHARS_AKATSUKI = [
    {
      name: 'Itachi',
      image: './assets/viloes/itachi.png',
      description: '',
    },
    {
      name: 'Kisame',
      image: './assets/viloes/kisame.png',
      description: '',
    },
    {
      name: 'Pain',
      image: './assets/viloes/pain.png',
      description: '',
    },
    {
      name: 'Hidan',
      image: './assets/viloes/hidan.png',
      description: '',
    },
    {
      name: 'Deidara',
      image: './assets/viloes/deidara.png',
      description: '',
    },
    {
      name: 'Kakusu',
      image: './assets/viloes/kakusu.png',
      description: '',
    },
    {
      name: 'Konan',
      image: './assets/viloes/konan.png',
      description: '',
    },
    {
      name: 'Orochimaru',
      image: './assets/viloes/orochimaru.png',
      description: '',
    },
    {
      name: 'Sasori',
      image: './assets/viloes/sasori.png',
      description: '',
    },
    {
      name: 'Zetsu',
      image: './assets/viloes/zetsu.png',
      description: '',
    },
    {
      name: 'Obito',
      image: './assets/viloes/obito.png',
      description: '',
    },
    {
      name: 'Madara',
      image: './assets/viloes/madara.png',
      description: '',
    },
    {
      name: 'Kabuto',
      image: './assets/viloes/kabuto.png',
      description: '',
    },
    {
      name: 'Zabuza',
      image: './assets/viloes/zabuza.png',
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

