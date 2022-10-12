let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 600;
let arcX = Math.round(Math.random() * 695);
let arcY = Math.round(Math.random() * 595);
let moveX = 1;
let moveY = 1;
let score = 0;
setInterval(loop, 1);
function loop() {
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 700, 600);
  ctx.restore();
  ctx.beginPath();
  ctx.arc(arcX, arcY, 1, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.arc(arcX, arcY, 6, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.arc(arcX, arcY, 10, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.restore();
  arcX += moveX;
  arcY += moveY;
}

function mousemove(event) {
  let mouseX = event.pageX;
  let mouseY = event.pageY;
  if (
    mouseX - arcX < 10 &&
    mouseX - arcX > -10 &&
    mouseY - arcY < 10 &&
    mouseY - arcY > -10
  ) {
    arcX = Math.round(Math.random() * 699);
    arcY = Math.round(Math.random() * 599);
    moveX = 0 - moveX;
    moveY = 0 - moveY;
    score++;
    document.getElementById("score").innerHTML = "Points: " + score;
  }
}
window.addEventListener("click", mousemove);

setInterval(wallBounce, 1);
function wallBounce() {
  if (arcY == 600) {
    moveY = -1;
  } else if (arcY == 0) {
    moveY = 1;
  } else if (arcX == 700) {
    moveX = -1;
  } else if (arcX == 0) {
    moveX = 1;
  }
}
let time = 60;

setInterval(timer, 1000);
function timer() {
  if (time > 0) {
    time -= 1;
  } else if (time == 0) {
    moveY = 0;
    moveX = 0;
    document.getElementById("points").innerHTML =
      "Score: " + Math.round((score / 60) * 10) + " /10";
  }
  document.getElementById("timer").innerHTML = time + "s";
}
