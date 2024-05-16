/*Declare a constant variable named hexBtn and hexColorValue and assigns it the value of an HTML element with the class name “hex-btn" and hexColorValue. */
const hexBtn = document.querySelector(".hex-btn");
const hexColorValue = document.querySelector(".hex-color-vlaue");
const hexColorContainer = document.querySelector(".hex-color-container");
const hexCopyColor = document.querySelector(".hex-copy-color");

// Generating Hex color

/*Logic : 1) hexBtn.addEventListener("click", () => { ... }); 
This line adds an event listener to an HTML element with the class name “hexBtn” whenever the button is clicked the code inside the curly braces will execute.

2)* Inside curly braces intilaize two variables characterSet with the characters "0123456789ABCDEF" , This string represents the valid characters for a hexadecimal color code.
And hexColorOutput to store the generated hexadecimal color code

3) The loop will runs 6 times (from i = 0 to i < 6),
     I) Generate random floating number betn 0 to 1 using Math.random() method
     II)Multiply the random number by the length of the characterSet
     III) Using Math.floor() method rounds down the result to the nearest integer
     IV)  Retrieves the character at the computed index from the characterSet by using charAT.
     And Appends this character to the hexColorOutput string.
     V)Result - After the loop completes, hexColorOutput will contain a randomly generated six-character hexadecimal color code. for Eg - "#3A7B9F" */

hexBtn.addEventListener("click", () => {
  let characterSet = "0123456789ABCDEF";
  let hexColorOutput = "";

  for (i = 0, charSetLength = characterSet.length; i < 6; ++i) {
    hexColorOutput += characterSet.charAt(
      Math.floor(Math.random() * charSetLength)
    );
  }

  /* changing the text content of hexColorValue element to a string, whenever we click the button */
  hexColorValue.textContent = `#${hexColorOutput}`;

  /* sets the background color of the hexColorContainer element to the value represented by the hexColorOutput variable */
  hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;
});

// Generating rgb color
const rgbBtn = document.querySelector(".rgb-btn");
const getRedInputRange = document.querySelector("#red");
const getGreenInputRange = document.querySelector("#green");
const getBlueInputRange = document.querySelector("#blue");
const rgbColorContainer = document.querySelector(".rgb-color-container");
const rgbCopyBtn = document.querySelector(".rgb-copy-color");
const rgbColorValue = document.querySelector(".rgb-color-value");
const rgbCopyColor = document.querySelector(".rgb-copy-color");

rgbBtn.addEventListener("click", () => {
  let extractRedValue = getRedInputRange.value;
  let extractGreenValue = getGreenInputRange.value;
  let extractBlueValue = getBlueInputRange.value;

  rgbColorValue.textContent = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
  rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
});

// Copy to clipboard functionality

function copyHexColorToClipBoard() {
  navigator.clipboard.writeText(hexColorValue.textContent);
  alert("Hex Color is copied to clipboard! ");
}

hexCopyColor.addEventListener("click", copyHexColorToClipBoard);

function copyRgbColorToClipBoard() {
  navigator.clipboard.writeText(rgbColorValue.textContent);
  alert("Hex Color is copied to clipboard !");
}

rgbCopyColor.addEventListener("click", copyRgbColorToClipBoard);
