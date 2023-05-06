async function sort() {
    let buton1 = document.getElementsByClassName("btn1");
    let buton2 = document.getElementsByClassName("btn2");
    
    buton1[0].disabled = true;
    buton2[0].disabled = true;
    buton1[0].style.background = "#4CAF50";
    buton2[0].style.background = "#4CAF50";

    let v = document.getElementById("numbers-container");
    
    for(let i=0; i<v.children.length-1; i++)
    {
        let j = i+1;
        while(parseInt(v.children[j-1].textContent) > parseInt(v.children[j].textContent))
        {
            
                v.children[j-1].style.border = "solid red 3px";
                v.children[j].style.border = "solid red 3px";
                await sleep(200);
                swap(j-1,j);
                v.children[j-1].style.border = "solid aquamarine 3px";
                v.children[j].style.border = "solid aquamarine 3px";
                j--;
                if (j==0) break;
            
        }
    }

    buton1[0].disabled = false;
    buton2[0].disabled = false;
    buton1[0].style.background = "#2b9c14";
    buton2[0].style.background = "#2b9c14";

}