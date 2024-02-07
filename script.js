// Declaro variables
const container = document.querySelector('.container');
const switchButton = document.querySelector('.switch');


// Defino funciones
const changeTime = () => {
  if (switchButton.innerText === 'Noche'){
  container.style.backgroundColor = '#F0ECE5';
    switchButton.style.color = '#161A30';
    switchButton.innerText = 'Día';
  }else {
    container.style.backgroundColor = '#161A30';
    switchButton.style.color = '#F0ECE5';
    switchButton.innerText = 'Noche';
  }
}

// Agrego eventos
switchButton.addEventListener('click', changeTime)




