async function flip(n) {
    let i = 0;
    let v = document.getElementById("numbers-container");
    while (i < n) 
    {
        v.children[i].style.border = "solid red 3px";
        v.children[n].style.border = "solid red 3px";
        await sleep(200);
        swap(i,n);
        v.children[i].style.border = "solid aquamarine 3px";
        v.children[n].style.border = "solid aquamarine 3px";
        i++;
        n--;
    }
  }
  
  async function findMaxIndex(n) {
    let maxIndex = 0;
    let v = document.getElementById("numbers-container");
    for (let i = 0; i <= n; i++) {
      if (parseInt(v.children[i].textContent) > parseInt(v.children[maxIndex].textContent)) {
        maxIndex = i;
      }
    }
    return maxIndex;
  }
  
  async function sort() {
    let buton1 = document.getElementsByClassName("btn1");
    let buton2 = document.getElementsByClassName("btn2");
  
    buton1[0].disabled = true;
    buton2[0].disabled = true;
    buton1[0].style.background = "#4CAF50";
    buton2[0].style.background = "#4CAF50";
  
    let v = document.getElementById("numbers-container");
  
    for (let i = v.children.length - 1; i >= 0; i--) {
      let maxIndex = await findMaxIndex(i);
      if (maxIndex == i) {
        continue;
      }
      if (maxIndex !== 0) {
        await flip(maxIndex);
      }
      await flip(i);
    }
  
    buton1[0].disabled = false;
    buton2[0].disabled = false;
    buton1[0].style.background = "#2b9c14";
    buton2[0].style.background = "#2b9c14";
  }
  