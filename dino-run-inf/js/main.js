import { Player } from "./player.js";
import { handleControls } from "./controls.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 1280;
canvas.height = 720;
const player = new Player(100, 500);
handleControls(player);

function clearCanvas() {
  ctx.fillStyle = "#1F1F1F";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function update() {
  player.update();
}

function draw() {
  player.draw(ctx);
}

function gameloop() {
  clearCanvas();
  update();
  draw();
  requestAnimationFrame(gameloop);
}

gameloop();

// gameloop() starts loop.
// Fills canvas with dark gray frame
