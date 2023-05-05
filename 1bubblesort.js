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


