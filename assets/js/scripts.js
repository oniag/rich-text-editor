// Transforma a div em uma editável;
window.addEventListener('load', () => {
  document.querySelector('.textArea').setAttribute('contentEditable', true);
});

// executa o formato do estilo
// documentação:
// https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
const format = (command, value) => {
  document.execCommand(command, false, value);
}

// Pega o valor do atributo;
function getValue() {
  return select(this.dataset.attr);
}

// for para adicionar evento de click nos ícones;
const icon = document.querySelectorAll('.fas');
for(let i = 0; i < icon.length; i++) {
  icon[i].addEventListener('click', getValue);
}

// Função para transformar em link;
const urlTransform = () => {
  let url = prompt("Digite sua url: ");
  if (!url) {
    alert('Url não inserida!');
    return;
  }
  let textSelected = document.getSelection();
  document.execCommand('insertHTML', false,`<a href="${url}" title="${textSelected}" target="_blank">${textSelected}</a>`);
}
// Atribui a função ao click;
const link = document.querySelector('#urlTransform');
link.addEventListener('click', urlTransform);

// Função change para pegar valor do select de font size;
const FontSizeValue = () => {
  let fontSize = document.querySelector('#fontSize').value;
  if (fontSize) {
    let textSelected = document.getSelection();
    document.execCommand('fontSize', false, fontSize);
  }
}
const fontSize = document.querySelector('#fontSize');
fontSize.addEventListener('change', FontSizeValue);

// Switch para definir qual é o formato do atributo;
const select = (item) => {
  switch (item) {
    case 'bold':
      format(item, this);
      break;
    case 'italic':
      format(item, this);
      break;
    case 'underline':
      format(item, this);
      break;
    case 'justifyLeft':
      format(item, this);
      break;
    case 'justifyCenter':
      format(item, this);
      break
    case 'justifyRight':
      format(item, this);
      break;
    case 'removeFormat':
      format(item, this);
      break;
  }
}