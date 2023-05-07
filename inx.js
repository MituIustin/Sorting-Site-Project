

const div1 = document.querySelector('#titlu1');
const div2 = document.querySelector('#titlu2');


div1.classList.add('cls_proiect');
div2.classList.add('cls_proiect');


const img1 = document.querySelector('.img1');

img1.addEventListener("mouseover", function() {
    img1.style.width = "100%";
});

img1.addEventListener("mouseout", function() {
    img1.style.width = "80%";
});

const img2 = document.querySelector('.img2');

img2.addEventListener("mouseover", function() {
    img2.style.width = "100%";
});

img2.addEventListener("mouseout", function() {
    img2.style.width = "80%";
});