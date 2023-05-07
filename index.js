let counterValue = parseInt(localStorage.getItem('counterValue')) || 0;
const counterElement = document.getElementById('counter');
counterElement.textContent = counterValue;

const incrementButton = document.querySelector('.btn2');
incrementButton.addEventListener('click', function() {
  counterValue++;
  counterElement.textContent = counterValue;
  localStorage.setItem('counterValue', counterValue);
});

window.addEventListener('beforeunload', function(event) {
  localStorage.clear();
});

