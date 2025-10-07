const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Draw rectangle
ctx.fillStyle = "#add8e6"; // light blue
ctx.fillRect(100, 100, 200, 100);

// Add text
ctx.fillStyle = "black";
ctx.font = "20px Arial";
ctx.fillText("Helloooo", 150, 160);
