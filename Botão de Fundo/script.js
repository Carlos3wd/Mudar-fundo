// Captura o botão através do seu ID
const btnMudarFundo = document.getElementById('btnMudarFundo');

// Adiciona um ouvinte de evento para detectar o clique no botão
btnMudarFundo.addEventListener('click', mudarFundo);

// Função para mudar o fundo da página
function mudarFundo() {
  // Aqui, você pode definir a cor de fundo que deseja, por exemplo, "#ff0000" para vermelho.
  // Para este exemplo, vamos gerar uma cor aleatória.
  const novaCor = gerarCorAleatoria();

  // Muda o fundo da página para a nova cor
  document.body.style.backgroundColor = novaCor;
}

// Função para gerar uma cor aleatória
function gerarCorAleatoria() {
  const letras = '0123456789ABCDEF';
  let cor = '#';
  for (let i = 0; i < 6; i++) {
    cor += letras[Math.floor(Math.random() * 16)];
  }
  return cor;
}
