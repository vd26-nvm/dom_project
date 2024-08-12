// Add your code to this file
let backColor = document.querySelector("body");
backColor.style.backgroundColor = "#081AA1";

let topBorder = document.getElementById("starters_image_div");
topBorder.style.border = "5px dotted #D7966B";
topBorder.style.width = "530px";
topBorder.style.padding = "5px";
topBorder.style.margin = "auto";
topBorder.style.textAlign = "center"

let otherImages = document.querySelectorAll(".pokemon_images");

for (let i = 0; i < otherImages.length; i++) {
    otherImages[i].style.border = "5px dotted #D7966B";
    otherImages[i].style.width = "200px";
    otherImages[i].style.height = "200px";
    otherImages[i].style.padding = "5px";
    otherImages[i].style.margin = "auto";
    otherImages[i].style.textAlign = "center"

}

let theirNames = document.querySelectorAll(".pokemon_names");

for (let i = 0; i < theirNames.length; i++) {
    theirNames[i].textContent += "!";
    theirNames[i].style.fontSize = "200%";
    theirNames[i].style.fontWeight = "bold";
    theirNames[i].style.color = "#EDEBA0";

}

let header = document.querySelector("h1");
header.style.textDecoration = "underline";

let header2 = document.querySelector("h2");
header2.style.textAlign = "center";
header2.innerHTML = "Here are pokemon's incredible Gen 1 Starters!";

let bulbasaur = document.querySelector("#bulbasaur_container");
bulbasaur.style.backgroundColor = "teal";