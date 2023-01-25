
let btn_leermas = document.getElementById('btn_leermas');
let hideText = document.getElementById('hideT');

btn_leermas.addEventListener('click', Text);

function Text() {
  hideText.classList.toggle('showT');

  if(hideText.classList.contains('showT')) {
    btn_leermas.innerHTML = 'Leer menos'
  }
  else {
    btn_leermas.innerHTML = 'Leer mas'
  }
}