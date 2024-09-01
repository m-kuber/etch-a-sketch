const container = document.querySelector("#container");

function randomColor()
{
    function r()
    {
        return Math.floor(Math.random() * 256);
    }

    return "rgb(" + r() + ", " + r() + ", " + r() + ")";
}

// Create a 16x16 grid for painting
// box-sizing: border-box is used so that the grid does not overflow the container
for (let i = 0; i < 16; i++)
{
    let innerContainer = document.createElement("div");
    innerContainer.setAttribute("class", "inner-container");
    innerContainer.style.cssText = "display: flex";
    for (let j = 0; j < 16; j++)
    {
        let squareDiv = document.createElement("div");
        squareDiv.setAttribute("class", "square-div");
        squareDiv.style.cssText = "width: 30px; height: 30px; border: 1px solid black; background-color: white; box-sizing: border-box";
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

// Event delegation is utilized here, as the event is attached to the container, which means that the new grids will also be able to be coloured
// If we use the event listener on the square divs themselves, the event listener won't work for the new square divs in the new grids
container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("square-div"))
    {
        let div = event.target;
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
            // opacity is reassigned, else the opacity will remain at 0.3 and the grid won't look "erased"
            div.style.opacity = "1";
        }
    }
})

const newSketch = document.querySelector("#new-sketch");
newSketch.addEventListener("click", createNewSketch);

function createNewSketch()
{
    let size = prompt("Enter size of new grid (maximum 100): ", "16");
    while (!(size !== null && +size >= 1 && +size <= 100))
    {
        size = prompt("Enter valid size: ", "16");
    }

    while (container.hasChildNodes())
    {
        container.removeChild(container.firstElementChild);
    }

    // A new grid is created similar to above, except here the length of the boxes depends on the user input
    size = +size; // Convert size from string to number
    let side = (480 / size) + "px"; // side is a string becuase of concatenation
    for (let i = 0; i < size; i++)
    {
        innerContainer = document.createElement("div");
        innerContainer.setAttribute("class", "inner-container");
        innerContainer.style.cssText = "display: flex";

        for (let j = 0; j < size; j++)
        {
            let squareDiv = document.createElement("div");
            squareDiv.setAttribute("class", "square-div");
            squareDiv.style.cssText = `width: ${side}; height: ${side};border: 1px solid black; background-color: white; box-sizing: border-box;`;
            innerContainer.appendChild(squareDiv);
        }

        container.appendChild(innerContainer); 
    }
}