
function nav_bar(){
    const rangeValue = document.getElementById("rangeValue");
    const range = document.getElementById("myRange");
    rangeValue.textContent = range.value; 
    range.addEventListener("input", () => {
    rangeValue.textContent = range.value; 
    });
}

function sort(){

}

function generate(){
    let numbersContainer = document.getElementById("numbers-container");
    numbersContainer.innerHTML = "";
    tabel = document.createElement("table");
    let linie = document.createElement("tr");

    const range = document.getElementById("myRange");
    for (let i = 0; i < range.value; i++) 
    {
        let casuta = document.createElement("td");
        const randomNumber = Math.floor(Math.random() * 100);
        casuta.innerText = randomNumber;

        casuta.style.borderRadius= "10px";
        casuta.style.border = "solid aquamarine 3px"
        casuta.style.background = "green";
        casuta.style.fontSize = "20px";
    
        linie.appendChild(casuta);
    }
    tabel.appendChild(linie);
    
    numbersContainer.appendChild(tabel);
}

nav_bar();

