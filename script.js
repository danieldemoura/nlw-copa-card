const divCard = document.querySelector(".card")

let isExplorer = true;
divCard.onclick = () => {
    const styleCard = isExplorer ? "ingnite" : "explorer";
    switch(styleCard) {
        case "explorer":
            divCard.classList.add(styleCard)
            divCard.classList.remove("ingnite")
        break;
        case "ingnite":
            divCard.classList.add(styleCard)
            divCard.classList.remove("explorer")
        break;  
    }

    //divCard.classList.toggle(styleCard)
   // divCard.style.backgroundImage = `url(./assets/bg-${styleCard}.svg)`
    isExplorer = !isExplorer;
}