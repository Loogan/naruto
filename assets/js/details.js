const CHAR_PICTURE = document.getElementById('char-picture'),
      CHAR_NAME = document.getElementById('char-name'),
      CHAR_DESC = document.getElementById('char-desc');

const QUERY_STRING = window.location.search;
const URL_PARAMS = new URLSearchParams(QUERY_STRING);

let id = Number(URL_PARAMS.get('id'));  // Certifique-se de que 'id' é um número
let char = Number(URL_PARAMS.get('char'));  // Certifique-se de que 'char' é um número

// Seleciona o array correto de personagens baseado no valor de 'char'
let personagens = char === 1 ? CHARS_SHINOBI : CHARS_AKATSUKI;

// Verificação dos dados para garantir que está funcionando
console.log('Array de personagens:', personagens);
console.log('ID do personagem:', id);
console.log('Personagem selecionado:', personagens[id]);

// Certifique-se de que os elementos existem antes de tentar usar innerHTML
if (personagens[id]) {
  // Usa a função getImagePath para obter o caminho correto da imagem
  const imagePath = getImagePath(personagens[id].image, char === 1 ? 'herois' : 'viloes');
  
  // Define os valores nos elementos da página
  CHAR_PICTURE.setAttribute('src', imagePath);
  CHAR_NAME.innerHTML = personagens[id].name;
  CHAR_DESC.innerHTML = personagens[id].description;
} else {
  console.error('Personagem não encontrado!');
}