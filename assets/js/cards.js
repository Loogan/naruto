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
  { name: 'Naruto', 
    image: 'naruto.png', 
    description: 'Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) é um shinobi de Konohagakure do clã Uzumaki e protagonista homônimo da franquia Naruto. Desde seu nascimento, ele se tornou jinchuuriki das Nove-Caudas, um destino que o levou a ser condenado e negligenciado por toda a aldeia durante sua infância. Depois de entrar para o Time 7, ao lado de Sakura Haruno, Sasuke Uchiha e sob comando de Kakashi Hatake, Naruto trabalhou duro para ganhar o respeito e o reconhecimento da aldeia, com o sonho de se tornar Hokage. Nos anos seguintes, Naruto passa a ser um ninja reconhecido pela aldeia, que é eventualmente considerado como um herói pelas pessoas, e mais tarde, pelo mundo shinobi em geral, renomado como o Herói da Vila Oculta da Folha (木ノ葉隠れの英雄, Konohagakure no Eiyū). Posteriormente, Naruto descobre ser a reencarnação do espírito de Ashura e anos depois da Quarta Guerra Mundial Shinobi, Naruto realiza seu sonho e se torna o Sétimo Hokage (七代目火影, Nanadaime Hokage; literalmente significa: "Sétima Sombra do Fogo"). Naruto se casa com Hinata Hyuuga e tem dois filhos com ela, Boruto Uzumaki e Himawari Uzumaki, e mais tarde adota Kawaki Uzumaki.' 
  },
  { name: 'Sasuke', 
    image: 'sasuke.png', 
    description: 'Sasuke Uchiha (うちはサスケ, Uchiha Sasuke) é um dos últimos membros sobreviventes do clã Uchiha de Konohagakure, além de ser a reencarnação atual de Indra. Ele se tornou um shinobi para que pudesse algum dia ficar forte o suficiente para se vingar contra o seu irmão mais velho, Itachi, que tinha massacrado todo o seu clã. Inicialmente, um membro do Time Kakashi de Konoha, Sasuke desertou da aldeia para obter poder com Orochimaru, e mais tarde também se juntou a Akatsuki, tornando-se um criminoso internacional no processo. Mais tarde, ele se torna uma peça fundamental para acabar com a Quarta Guerra Mundial Ninja, até ser finalmente redimido por seu rival, e também melhor amigo, Naruto Uzumaki. Sasuke decide voltar para Konoha, dedicando a sua vida para ajudar a proteger a vila e seus habitantes.' 
  },
  { name: 'Sakura', 
    image: 'sakura.png', 
    description: 'Sakura Uchiha (うちはサクラ, Uchiha Sakura) (batizada Haruno (春野) inicialmente) é uma kunoichi de nível jounin do clã Uchiha, por se casar com Sasuke Uchiha, de Konohagakure. Ela é designada como um membro do Time Kakashi, mas rapidamente encontra-se mal preparada para os deveres de um ninja e as complicações das vidas de seus companheiros de equipe. Treinando sob a tutela de sua mestra, Tsunade, ela se torna uma kunoichi mais forte e uma excelente ninja médica, sendo capaz de enfrentar os desafios de uma vida como um ninja, bem como ajudar e proteger seus amigos e entes queridos quando eles precisarem dela. Anos após a Quarta Guerra Shinobi, ela forma sua própria família com Sasuke Uchiha.' 
  },
  { name: 'Kakashi', 
    image: 'kakashi.png', 
    description: 'Kakashi Hatake (はたけカカシ, Hatake Kakashi) é um shinobi de Konohagakure. Ele recebeu um Sharingan de seu ex-companheiro de equipe, Obito Uchiha, quando era mais jovem, fazendo-o ser conhecido como Kakashi o Ninja Copiador (コピー忍者のカカシ, Kopī Ninja no Kakashi) e Kakashi do Sharingan (写輪眼のカカシ, Sharingan no Kakashi). Seu prodigioso talento, habilidades e destreza com o Sharingan fizeram dele um dos mais capazes ninjas da aldeia, sendo reconhecido em todo o mundo ninja. Ele acaba sendo nomeado como líder do Time Kakashi, onde ele usa seus anos de experiência para treinar seus alunos para se tornarem ninjas habilidosos de suas próprias maneiras. Logo um tempo após a Quarta Guerra Mundial Shinobi, Kakashi ocupa o cargo público como o Sexto Hokage (六代目火影, Rokudaime Hokage; literalmente significa: "Sexta Sombra do Fogo") antes de eventualmente se aposentar e passá-lo ao seu pupilo Naruto Uzumaki.' 
  },
  { name: 'Minato', 
    image: 'minato.png', 
    description: 'Minato Namikaze (波風ミナト, Namikaze Minato), conhecido como Relâmpago Amarelo de Konoha (木ノ葉の黄色い閃光, Konoha no Kiiroi Senkō; literalmente significa: "Flash Amarelo de Konoha"), foi um shinobi lendário que se tornou o Quarto Hokage (四代目火影, Yondaime Hokage; literalmente significa: "Quarta Sombra do Fogo") de Konohagakure. Morreu sacrificando sua vida durante o Ataque do Nove-Caudas em Konoha para selar metade do demônio em seu filho, morrendo heroicamente no processo.' 
  },
  { name: 'Jiraya', 
    image: 'jiraya.png', 
    description: 'Jiraiya (自来也) foi um dos Sannin Lendários, junto com Tsunade e Orochimaru, treinados por Hiruzen Sarutobi. Ele era um auto-proclamado super-pervertido, e o escritor da popular série de livros de ficção para adultos, chamado Icha Icha. Ele também era conhecido como o Eremita dos Sapos (虾蟇仙人, Gama Sennin), por causa da sua assinatura de invocação de sapos, e por seu status como Eremita.' 
  },
  { name: 'Tsunade', 
    image: 'tsunade.png', 
    description: 'Tsunade (綱手) é uma dos Sannin Lendários de Konohagakure. Embora seja considerada a kunoichi mais forte do mundo[9] e a maior ninja médica,[10] Tsunade abandonou a vida de shinobi por muitos anos em busca de outros objetivos. Ela acaba sendo convencida a voltar para Konoha e se torna a Quinta Hokage (五代目火影, Godaime Hokage; literalmente significa: "Quinta Sombra do Fogo"), onde ela usa sua força para reprimir os inimigos da vila e seu conhecimento médico para manter os moradores a salvo. Eventualmente, ela renuncia de seu cargo e passa sua posição para Kakashi Hatake.' 
  },
  { name: 'Hashirama', 
    image: 'hashirama.png', 
    description: 'Hashirama Senju (千手柱間, Senju Hashirama) foi o Primeiro Hokage (初代火影, Shodai Hokage; literalmente significa: "Primeira Sombra do Fogo") de Konohagakure. Ele era famoso durante sua vida como o Deus Shinobi (忍の神, Shinobi no Kami) por seu incomparável talento ninja. Apesar disso, Hashirama só queria a paz, e para esse fim ele fundou Konoha com seu amigo de infância e rival Madara Uchiha. Embora ele não tenha sido capaz de alcançar a paz durante a sua vida, seu legado continuou a viver, moldando a aldeia há décadas após sua morte.' 
  },
  { name: 'Guy', 
    image: 'guy.png', 
    description: 'Might Guy (マイト・ガイ, Maito Gai; Panini: "Maito Gai" ou "Might Guy") é um jounin de Konohagakure. Um mestre no taijutsu, ele leva e passa sua sabedoria para os membros do Time Guy.' 
  },
  { name: 'Neji', 
    image: 'neji.png', 
    description: 'Neji Hyuuga (日向ネジ, Hyuuga Neji) foi um membro do clã Hyuuga e um shinobi de Konohagakure. Embora tenha sido um prodígio mesmo pelos padrões dos Hyuuga, Neji era um membro da casa secundária; por isso, não importa quão habilidoso tornou-se, ele estaria sempre a serviço da casa principal Hyuuga, um fato que convenceu-o de que o destino era predeterminado. Depois de ver a recusa de Naruto Uzumaki de ser limitado por uma ideologia como esta, Neji percebeu que seu destino foi o que ele escolheu para si mesmo, e como um membro do Time Guy, ele buscou a força necessária para fazer o futuro que ele queria para sua família e amigos.' 
  },
  { name: 'Hinata',
    image: 'hinata.png',
    description: 'Hinata Hyuuga (日向ヒナタ, Hyuuga Hinata) foi um membro do clã Hyuuga e uma kunoichi de Konohagakure. Embora tímida e insegura quando mais jovem, Hinata sempre teve um forte desejo de se tornar mais forte e de provar seu valor, especialmente aos olhos de Naruto Uzumaki, por quem sempre teve uma admiração profunda. Seu caminho de crescimento pessoal e determinação a levou a superar suas fraquezas e se tornar uma ninja formidável, eventualmente desempenhando um papel vital em proteger aqueles que ama e em ajudar Naruto a alcançar seus sonhos.'
  },
  { name: 'Rock Lee',
    image: 'rock-lee.png',
    description: 'Rock Lee (ロック・リー, Rokku Rī) foi um shinobi de Konohagakure e membro do Time Guy. Embora fosse incapaz de usar ninjutsu ou genjutsu, Rock Lee compensou essas deficiências com uma determinação inabalável e uma ética de trabalho incansável, concentrando-se exclusivamente em taijutsu. Seu espírito indomável o levou a desafiar o impossível e provar que o trabalho duro pode superar o talento natural, sempre inspirado por seu mestre Guy e motivado a proteger seus amigos.'
  },
  { name: 'Ino',
    image: 'ino.png',
    description: 'Ino Yamanaka (山中いの, Yamanaka Ino) é uma kunoichi de Konohagakure e membro do clã Yamanaka. Desde jovem, Ino foi conhecida por sua confiança e determinação, além de seu talento natural em jutsus de manipulação mental, uma habilidade única do clã Yamanaka. Embora tenha começado com uma rivalidade acirrada com Sakura, a amizade entre elas cresceu ao longo do tempo. Ino lutou para manter o equilíbrio entre sua vida pessoal e suas responsabilidades como ninja, dedicando-se a proteger seus amigos e seu clã.'
  },
  { name: 'Choji',
    image: 'choji.png',
    description: 'Choji Akimichi (秋道チョウジ, Akimichi Chōji) é um membro do clã Akimichi e um shinobi de Konohagakure. Com uma natureza gentil e coração bondoso, Choji muitas vezes era subestimado por causa de sua aparência, mas ele provou ser um guerreiro incrivelmente poderoso, utilizando a técnica secreta de aumento de tamanho de seu clã. Sua lealdade aos amigos, especialmente ao seu melhor amigo Shikamaru, é inabalável, e ele está sempre disposto a se sacrificar por aqueles que ama.'
  },
  { name: 'Shikamaru',
    image: 'shikamaru.png',
    description: 'Shikamaru Nara (奈良シカマル, Nara Shikamaru) é um membro do clã Nara e um shinobi de Konohagakure. Com uma mente incrivelmente estratégica e analítica, Shikamaru era conhecido por sua inteligência excepcional desde jovem. Embora preguiçoso por natureza e relutante em se envolver em batalhas desnecessárias, ele sempre se destacou como um líder natural e um dos principais estrategistas da aldeia. Sua habilidade de prever movimentos e traçar planos complexos o tornou um ninja vital em muitas missões de alto risco.'
  },
  { name: 'Shino',
    image: 'shino.png',
    description: 'Shino Aburame (油女シノ, Aburame Shino) é um membro do clã Aburame e um shinobi de Konohagakure. Shino é calmo, reservado e muito inteligente, com uma profunda afinidade pelos insetos utilizados em suas técnicas. Embora frequentemente subestimado por sua personalidade tranquila, ele é um combatente formidável e um estrategista capaz, sempre pensando de forma lógica e objetiva para superar os desafios em combate e proteger seus companheiros de equipe.'
  },
  { name: 'Gaara',
    image: 'gaara.png',
    description: 'Gaara (我愛羅) é o Kazekage da Vila Oculta da Areia (Sunagakure) e um antigo jinchuuriki do Shukaku. Quando criança, Gaara era temido e rejeitado por causa da besta selada dentro dele, o que o levou a desenvolver uma visão distorcida sobre a vida e o poder. Após sua derrota por Naruto Uzumaki, Gaara mudou sua perspectiva e trabalhou para se redimir, tornando-se um líder justo e dedicado à sua vila, respeitado por aliados e temido por inimigos.'
  },
  { name: 'Sai',
    image: 'sai.png',
    description: 'Sai (サイ) é um shinobi de Konohagakure e ex-membro da Raiz, uma divisão especial da ANBU. Sai foi treinado para reprimir suas emoções e operar como um soldado impecável, mas ao se juntar ao Time Kakashi após a saída de Sasuke, ele começou a aprender sobre laços humanos e sentimentos, especialmente através de suas interações com Naruto e Sakura. Além de suas habilidades de luta, Sai é também um excelente artista, usando sua pintura e jutsus de tinta para criar invocações poderosas durante o combate.'
  },
  { name: 'Raikage',
    image: 'raikage.png',
    description: 'A (エー, Ē) é o Quarto Raikage de Kumogakure. Conhecido por sua imensa força e velocidade, ele é um dos ninjas mais poderosos do mundo shinobi, muitas vezes comparado à velocidade e força de um relâmpago. Impulsivo e destemido, A governa sua vila com uma mão firme, sempre buscando proteger sua nação e garantir sua supremacia no cenário ninja.'
  },
  { name: 'Rin',
    image: 'rin.png',
    description: 'Rin Nohara (のはらリン, Nohara Rin) foi uma kunoichi de Konohagakure e companheira de equipe de Kakashi Hatake durante sua juventude. Ela era uma ninja médica e teve um papel fundamental em apoiar seus companheiros em batalhas. Sua morte teve um impacto profundo em Kakashi e Obito Uchiha, moldando muitos dos eventos trágicos que ocorreram posteriormente.'
  },
  { name: 'Sarutobi',
    image: 'sarutobi.png',
    description: 'Hiruzen Sarutobi (猿飛ヒルゼン, Sarutobi Hiruzen) foi o Terceiro Hokage (三代目火影, Sandaime Hokage) de Konohagakure. Conhecido como o "Professor" (教授, Kyōju) devido ao seu vasto conhecimento de técnicas e habilidades, ele era altamente respeitado por sua sabedoria e força. Como líder de Konoha, Sarutobi dedicou sua vida à proteção da aldeia e ao ensino das futuras gerações de ninjas. Seu sacrifício durante a invasão da Vila foi um dos momentos mais heroicos e memoráveis da Quarta Guerra Shinobi.'
  },
  { name: 'Iruka',
    image: 'iruka.png',
    description: 'Iruka Umino (うみのイルカ, Umino Iruka) é um chunin de Konohagakure e instrutor da Academia Ninja. Embora tenha perdido seus pais durante o ataque da Raposa de Nove Caudas, Iruka nunca deixou sua dor transformar-se em amargura. Ele se tornou uma figura paterna para Naruto Uzumaki, apoiando-o e incentivando-o em momentos de dificuldade. Sua bondade, paciência e dedicação como professor ajudaram a moldar as futuras gerações de ninjas em Konoha.'
  },
  { name: 'Kurenai',
    image: 'kurenai.png',
    description: 'Kurenai Yuhi (夕日紅, Yūhi Kurenai) é uma jounin de Konohagakure e a líder do Time 8, composto por Hinata Hyuuga, Kiba Inuzuka e Shino Aburame. Kurenai é especialista em genjutsu e é uma ninja formidável, conhecida por suas habilidades mentais e estratégias de combate. Ela também é a mãe da filha de Asuma Sarutobi, Mirai Sarutobi, e sua força emocional foi testada após a morte de Asuma, mas ela permanece uma líder inspiradora para seus alunos.'
  },
];

const CHARS_AKATSUKI = [
  { name: 'Itachi', 
    image: 'itachi.png', 
    description: 'Itachi Uchiha (うちはイタチ, Uchiha Itachi) foi um shinobi de Konohagakure do clã Uchiha que massacrou seu próprio clã para prevenir uma guerra civil. Apesar de ser considerado um traidor e um membro da Akatsuki, Itachi revelou-se um herói que sacrificou tudo para proteger seu irmão, Sasuke, e a aldeia. Suas habilidades no genjutsu e seu Sharingan o tornaram um dos ninjas mais temidos e respeitados de sua era.' 
  },
  { name: 'Kisame', 
    image: 'kisame.png', 
    description: 'Kisame Hoshigaki (干柿鬼鮫, Hoshigaki Kisame) foi um shinobi renegado da Vila Oculta da Névoa e membro da Akatsuki, onde trabalhou em parceria com Itachi Uchiha. Conhecido como o Monstro da Névoa Oculta, Kisame era um espadachim mortal, portador da Samehada, uma espada que absorve chakra. Seu poder e brutalidade no campo de batalha o tornaram um dos ninjas mais perigosos de sua época.' 
  },
  { name: 'Pain', 
    image: 'pain.png', 
    description: 'Nagato (長門), mais conhecido como Pain (ペイン, Pein), foi o líder da Akatsuki e o responsável pelo uso dos Seis Caminhos da Dor. Ele acreditava que a dor era a única forma de alcançar a paz no mundo ninja. Sob a identidade de Pain, Nagato destruiu Konohagakure para tentar forçar sua visão de paz, mas foi redimido pelas palavras de Naruto Uzumaki.' 
  },
  { name: 'Hidan', 
    image: 'hidan.png', 
    description: 'Hidan (飛段) foi um membro da Akatsuki conhecido por sua imortalidade e sua devoção à religião de Jashin, que exige sacrifícios sangrentos. Ele utilizava sua imortalidade para torturar seus oponentes, fazendo rituais macabros durante as batalhas. Apesar de sua personalidade sádica, Hidan era um dos membros mais temidos da organização.' 
  },
  { name: 'Deidara', 
    image: 'deidara.png', 
    description: 'Deidara (デイダラ) foi um ninja renegado da Vila Oculta da Pedra e um dos membros mais explosivos da Akatsuki. Ele utilizava argila explosiva para criar bombas em formas de criaturas, combinando sua arte com destruição. Deidara acreditava que explosões eram a verdadeira forma de arte e dedicava-se a mostrar isso em suas batalhas.' 
  },
  { name: 'Kakuzu', 
    image: 'kakusu.png', 
    description: 'Kakuzu (角都) foi um membro da Akatsuki, conhecido por sua habilidade de costurar partes de corpos e prolongar sua vida. Ele era extremamente ganancioso, priorizando o lucro acima de tudo. Suas habilidades únicas o tornaram um oponente formidável, capaz de utilizar vários corações para prolongar sua vida e usar uma variedade de elementos ninjutsu.' 
  },
  { name: 'Konan', 
    image: 'konan.png', 
    description: 'Konan (小南) foi uma das fundadoras da Akatsuki original, ao lado de Nagato e Yahiko. Ela era conhecida por suas habilidades com o ninjutsu de papel, utilizando folhas de papel para criar armas e até explosivos. Apesar de sua lealdade a Nagato, ela também tinha uma visão de paz e acreditava no sonho de Yahiko de um mundo sem guerras.' 
  },
  { name: 'Orochimaru', 
    image: 'orochimaru.png', 
    description: 'Orochimaru (大蛇丸) foi um dos Sannin Lendários de Konohagakure e um dos mais infames vilões da série. Ele buscava a imortalidade e o domínio sobre todas as técnicas ninjas. Conhecido por suas experiências sinistras e ambição sem limites, Orochimaru tornou-se uma figura temida no mundo shinobi, sempre tramando novos planos para adquirir poder.' 
  },
  { name: 'Sasori', 
    image: 'sasori.png', 
    description: 'Sasori (サソリ) foi um mestre marionetista e membro da Akatsuki, conhecido como Sasori das Areias Vermelhas. Ele transformou seu próprio corpo em uma marionete, buscando a imortalidade através da arte de manipular bonecos humanos. Suas criações e habilidades o tornaram um dos mais mortais membros da Akatsuki.' 
  },
  { name: 'Zetsu', 
    image: 'zetsu.png', 
    description: 'Zetsu (ゼツ) foi um dos membros mais misteriosos da Akatsuki, com uma personalidade dividida em duas metades: a branca e a negra. Ele era tanto um espião quanto um lutador, com a habilidade de se fundir com o solo e as plantas. Zetsu desempenhou um papel crucial nos planos da Akatsuki e na manipulação de eventos históricos do mundo ninja.' 
  },
  { name: 'Obito', 
    image: 'obito.png', 
    description: 'Obito Uchiha (うちはオビト, Uchiha Obito) foi um antigo membro do Time Minato e mais tarde se tornou o vilão mascarado conhecido como Tobi. Obito foi manipulado por Madara Uchiha e desempenhou um papel importante na Quarta Guerra Mundial Shinobi, buscando criar um mundo ilusório. Sua história é de redenção, sendo salvo por Naruto e Kakashi no final.' 
  },
  { name: 'Madara', 
    image: 'madara.png', 
    description: 'Madara Uchiha (うちはマダラ, Uchiha Madara) foi um dos fundadores de Konohagakure e o líder do clã Uchiha. Ele é um dos shinobi mais poderosos de todos os tempos, conhecido por suas incríveis habilidades com o Sharingan e o Rinnegan. Madara tentou impor sua visão de paz através da força, resultando em sua ressurreição durante a Quarta Guerra Mundial Shinobi.' 
  },
  { name: 'Kabuto', 
    image: 'kabuto.png', 
    description: 'Kabuto Yakushi (薬師カブト, Yakushi Kabuto) foi o assistente leal de Orochimaru e um talentoso ninja médico. Após a morte de Orochimaru, Kabuto assimilou as habilidades de seu mestre e se tornou um dos principais vilões na Quarta Guerra Mundial Shinobi, utilizando a Técnica de Ressurreição Impura para reviver antigos ninjas lendários.' 
  },
  { name: 'Zabuza', 
    image: 'zabuza.png', 
    description: 'Zabuza Momochi (桃地再不斬, Momochi Zabuza) foi um dos Sete Espadachins da Névoa e um dos primeiros grandes vilões enfrentados por Naruto e seus companheiros. Conhecido como o Demônio da Névoa Oculta, ele era um assassino implacável, mas sua relação com Haku revelou uma faceta mais trágica e complexa de sua personalidade.' 
  },  
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
