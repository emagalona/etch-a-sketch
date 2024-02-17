document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");

    for(let i=1; i<=16; i++){
        for(let j=1; j<=16; j++){
            const content = document.createElement('div');
            content.setAttribute('id', `${i}${j}`);
            content.textContent = `${i}${j}`;
            container.appendChild(content);
        }
    }

    


});