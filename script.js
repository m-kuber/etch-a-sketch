const container = document.querySelector("#container");
container.style.cssText = "display: flex; flex-direction: column;"

function randomColor()
{
    function r()
    {
        return Math.floor(Math.random() * 256);
    }

    return "rgb(" + r() + ", " + r() + ", " + r() + ")";
}

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
buttonContainer.style.cssText = "display: flex; gap: 10px; justify-content: space-around; margin: 30px auto; background-color: gray; border: 5px solid darkblue; border-radius: 5px; width: 600px; padding: 10px;"

const randomColourButton = document.createElement("button");
randomColourButton.textContent = "Add random colours!";
randomColourButton.setAttribute("class", "buttons");
buttonContainer.appendChild(randomColourButton);

const darkenerButton = document.createElement("button");
darkenerButton.textContent = "Progressive Darkening!";
darkenerButton.setAttribute("class", "buttons");
buttonContainer.appendChild(darkenerButton);

const eraserButton = document.createElement("button");
eraserButton.textContent = "Eraser";
eraserButton.setAttribute("class", "buttons");
buttonContainer.appendChild(eraserButton);

let buttonChoice = 0;

randomColourButton.addEventListener("click", () => {
    buttonChoice = 0;
});    
darkenerButton.addEventListener("click", () => {
    buttonChoice = 1;
})
eraserButton.addEventListener("click", () => {
    buttonChoice = 2;
});

document.querySelectorAll(".square-div").forEach((div) => {
    div.addEventListener("mouseover", () => {
        if (buttonChoice == 0) 
        {
            div.style.backgroundColor = randomColor();
        }
        else if (buttonChoice == 1)
        {
            if (div.style.backgroundColor == "white")
            {
                div.style.backgroundColor = randomColor();
                div.style.opacity = 0.3;
            }
            else if (div.style.opacity < 1)
            {
                div.style.opacity = (parseFloat(div.style.opacity) + 0.1).toString();
            }
        }
        else if (buttonChoice == 2 && div.style.backgroundColor != "white")
        {
            div.style.backgroundColor = "white";
            div.style.opacity = "1";
        }
    });
});