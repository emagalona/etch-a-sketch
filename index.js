document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("canvas");

    for(let i=1; i<=16; i++){
        for(let j=1; j<=16; j++){
            const content = document.createElement('div');
            content.setAttribute('id', `${i}${j}`);
            content.textContent = ``;
            content.style.width='29.25px';
            content.style.height='29.25px';
            container.appendChild(content);
        }
    }

});


const changeBtn = document.getElementById('change-pixel');
const canvasDiv = document.getElementById('canvas');
const userInput = document.getElementById('pixel-value');


changeBtn.addEventListener('click', function (){
    while(canvasDiv.hasChildNodes()){
        canvasDiv.removeChild(canvasDiv.firstChild);
    }

    const userInput = document.getElementById('pixel-value').value;
    
    let newDimension = (500 / parseInt(userInput));

    let numberOfDiv = 500 / parseFloat(newDimension).toFixed(2);
    let numberOfDivConverted = Math.round(numberOfDiv);
    let newWidth = newDimension - 2;
    let newHeight = newDimension - 2;

    for (let i = 1; i<= numberOfDivConverted; i++) {
        for (let j=1; j<= numberOfDivConverted; j++){
            const newContent = document.createElement('div');
            newContent.setAttribute('id', `${i}${j}`);
            newContent.style.width = `${newWidth}px`;
            newContent.style.height = `${newHeight}px`;
            newContent.textContent = ``;
            canvasDiv.appendChild(newContent);
        }
    }

    console.log(newDimension);
    console.log(numberOfDiv);
})