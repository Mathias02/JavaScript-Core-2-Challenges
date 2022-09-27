const btn = document.getElementById('btn');
const textArea = document.getElementById('textAreaContent');
const belowDiv = document.querySelector('.subDiv');
const char = document.querySelector('.char');
let innerSpn = document.querySelector('#innerSpan');
let letterCounter = 10;



btn.addEventListener('click', divContent);
textArea.addEventListener('input', character);
document.addEventListener('DOMContentLoaded', chara())

function divContent(e){
  e.preventDefault();
  const val = textArea.value;
  const val1 = Number(val)
  if(val === '')return;
  const newPara = document.createElement('p');
  newPara.classList.add('newContent');
  newPara.appendChild(document.createTextNode(val));
  belowDiv.appendChild(newPara);
  textArea.value = '';
  textArea.removeAttribute('disabled');
  textArea.classList.remove('overlimits');
  chara();
}

function chara(){
  innerSpn.textContent = `Remaining character(s) ${letterCounter }`;
}


function character(e){
  const target = e.target.value.length;
  let result = letterCounter - target;
  if(result === 0){
     textArea.classList.add('overlimits');
     textArea.setAttribute('disabled', 'disabled');
     return;
  }
  innerSpn.textContent = `Remaining character(s) ${result}`;
}