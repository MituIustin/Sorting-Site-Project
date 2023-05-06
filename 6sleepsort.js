function getindex(arr, x) {
  let v = document.getElementById("numbers-container");
  for(let i=0; i<arr.length; i++)
  {
    if(parseInt(v.children[i].textContent)==x) 
    {
      return i;
      break;
    }
  }
}

function sleepSort(array) {
  let sortedArray = [];
  let cnt = -1;
  let v = document.getElementById("numbers-container");
  for (let i = 0; i < array.length; i++) 
  {
    setTimeout(function () {
      cnt++;
      let inx = getindex(array,array[i]);
      swap(cnt,inx);
      v.children[cnt].style.border = "solid red 3px";
      
    }, array[i]*100);
  }
}


async function sort() {
  let buton1 = document.getElementsByClassName("btn1");
  let buton2 = document.getElementsByClassName("btn2");
  
  
  buton1[0].disabled = true;
  buton2[0].disabled = true;
  buton1[0].style.background = "#4CAF50";
  buton2[0].style.background = "#4CAF50";
  
  let v = document.getElementById("numbers-container");

  arr = [];

  for(let i=0; i<v.children.length; i++)
  {
    arr.push(parseInt(v.children[i].textContent));
  }

  sleepSort(arr);

  setTimeout(function () {
    for( let i=0; i<v.children.length; i++)
    {
      v.children[i].style.border = "solid aquamarine 3px";
    }
  }, Math.max(...arr)*100 + 100);


  buton1[0].disabled = false;
  buton2[0].disabled = false;
  buton1[0].style.background = "#2b9c14";
  buton2[0].style.background = "#2b9c14";
    
}

//aceasta generare asigura faptul ca nu sunt numere care se repeta
//altfel nu pot aplica sleepsort()
  
function generate1(){
  let numbersContainer = document.getElementById("numbers-container");
  numbersContainer.innerHTML = "";
  numbersContainer.style.marginTop = "10em";
  numbersContainer.style.marginLeft = "auto";
  numbersContainer.style.marginRight = "auto";
  
  const range = document.getElementById("myRange");

  arr = [];

  for (let i = 0; i < range.value; i++) {
      let dataDiv = document.createElement("div");
      let randomNumber = Math.floor(Math.random() * 100) + 10;
      
      if(arr.length != 0)
      {
        while(arr.indexOf(randomNumber) !=-1)
        {
          randomNumber = Math.floor(Math.random() * 100) + 10;
        }
      }

      dataDiv.innerText = randomNumber;
    
      dataDiv.style.borderRadius = "10px";
      dataDiv.style.border = "solid aquamarine 3px";
      dataDiv.style.background = "green";
      dataDiv.style.fontSize = "20px";
      dataDiv.style.height = (3*randomNumber) + "px";
      dataDiv.style.display = "inline-block";
      dataDiv.style.margin = "2px";
      dataDiv.style.verticalAlign = "bottom";

      dataDiv.setAttribute("innerText", randomNumber.toString());
      dataDiv.setAttribute("borderRadius", "10px");
      dataDiv.setAttribute("border", "solid aquamarine 3px");
      dataDiv.setAttribute("background", "green");
      dataDiv.setAttribute("fontSize","20px");
      dataDiv.setAttribute("height", (3*randomNumber) + "px");
      dataDiv.setAttribute("display","inline-block");
      dataDiv.setAttribute("margin","2px");
      dataDiv.setAttribute("verticalAlign","bottom");
      
      arr.push(randomNumber);
  
      numbersContainer.appendChild(dataDiv);
    }
 
 
}

