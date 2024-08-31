const container = document.querySelector("#container");
container.style.cssText = "display: flex; flex-direction: column;"

for (let i = 0; i < 16; i++)
{
    let innerContainer = document.createElement("div");
    innerContainer.setAttribute("class", "inner-container");
    innerContainer.style.cssText = "display: flex";
    for (let j = 0; j < 16; j++)
    {
        let squareDiv = document.createElement("div");
        squareDiv.setAttribute("class", "square-div")
        squareDiv.style.cssText = "width: 30px; height: 30px; border: 1px solid black; background-color: white;"
        innerContainer.appendChild(squareDiv);
    }
    container.appendChild(innerContainer); 
}

const buttonContainer = document.querySelector("#button-container");
buttonContainer.style.cssText = "display: flex; justify-content: space-around; margin: 30px auto; background-color: gray; border: 5px solid darkblue; border-radius: 5px; width: 350px; padding: 10px;"

const randomColourButton = document.createElement("button");
randomColourButton.textContent = "Add random colours!";
randomColourButton.setAttribute("class", "buttons");
buttonContainer.appendChild(randomColourButton);


const eraserButton = document.createElement("button");
eraserButton.textContent = "Eraser";
eraserButton.setAttribute("class", "buttons");
buttonContainer.appendChild(eraserButton);