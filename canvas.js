function Resize(canvas) {
  // Resizing
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Global Variables
/** @type {HTMLCanvasElement} */
let canvas;
/** @type {CanvasRenderingContext2D} */
let ctx;

window.addEventListener("load", () => {
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  Resize(canvas);

  let drawing = false;
  function startPosition() {
    drawing = true;
    console.log("Mouse is down");
  }
  function endPosition() {
    drawing = false;
    console.log("Mouse is up");
    ctx.beginPath();
  }
  function draw(event) {
    if (!drawing) return;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.lineTo(event.clientX, event.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX, event.clientY);
  }
  //   Mouse event listener
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", endPosition);
  canvas.addEventListener("mousemove", draw);
});

window.addEventListener("resize", () => {
  Resize(canvas);
});
