
function nav_bar(){
    const rangeValue = document.getElementById("rangeValue");
    const range = document.getElementById("myRange");
    rangeValue.textContent = range.value; 
    range.addEventListener("input", () => {
    rangeValue.textContent = range.value; 
    });
}

function swap(i, j) {
    let v = document.getElementById("numbers-container");
    
    let num1_text = v.children[i].textContent;
    let num2_text = v.children[j].textContent;

    v.children[i].textContent = num2_text;
    v.children[j].textContent = num1_text;

    let num1_height = v.children[i].style.height;
    let num2_height = v.children[j].style.height;

    v.children[i].style.height = num2_height;
    v.children[j].style.height = num1_height;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sort(){
    
    let buton1 = document.getElementsByClassName("btn1");
    let buton2 = document.getElementsByClassName("btn2");
    
    buton1[0].disabled = true;
    buton2[0].disabled = true;
    buton1[0].style.background = "#4CAF50";
    buton2[0].style.background = "#4CAF50";


    let v = document.getElementById("numbers-container");
    let gata = false;
    while(gata == false)
    {
        gata = true;
        for(let i=0; i<v.children.length-1; i++)
        {
            if(parseInt(v.children[i].textContent) > parseInt(v.children[i+1].textContent))
            {
                v.children[i].style.border = "solid red 3px";
                v.children[i+1].style.border = "solid red 3px";
                await sleep(200);
                swap(i,i+1);
                v.children[i].style.border = "solid aquamarine 3px";
                v.children[i+1].style.border = "solid aquamarine 3px";
                gata = false;
            }
        }
    }

    buton1[0].disabled = false;
    buton2[0].disabled = false;
    buton1[0].style.background = "#2b9c14";
    buton2[0].style.background = "#2b9c14";

}

nav_bar();

