function target() {
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
}
function targetMove() {
  arcX += moveX;
  arcY += moveY;
}
