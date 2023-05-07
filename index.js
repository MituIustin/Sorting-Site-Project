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

const titlu = document.querySelector(".tit");
const computedStyle = getComputedStyle(titlu);
const font_family = computedStyle.fontFamily;
const font_color = computedStyle.color;

const paragraf1 = document.getElementsByClassName("p");

for (let i = 0; i < paragraf1.length; i++) {
  paragraf1[i].style.fontFamily = font_family;
  paragraf1[i].style.color = font_color;
}
