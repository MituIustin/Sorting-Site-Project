function generate(){
    let numbersContainer = document.getElementById("numbers-container");
    numbersContainer.innerHTML = "";
    numbersContainer.style.marginTop = "10em";
    numbersContainer.style.marginLeft = "auto";
    numbersContainer.style.marginRight = "auto";
    
    const range = document.getElementById("myRange");

    for (let i = 0; i < range.value; i++) {
        let dataDiv = document.createElement("div");
        let randomNumber = Math.floor(Math.random() * 100) + 10;
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
        
        
    
        numbersContainer.appendChild(dataDiv);
      }
   
   
}