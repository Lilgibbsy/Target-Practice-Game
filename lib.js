function background() {
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 700, 600);
  ctx.restore();
}
function target() {
  ctx.beginPath();
  ctx.arc(arcX, arcY, 1, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.arc(arcX, arcY, 6, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.arc(arcX, arcY, 10, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.restore();
}
function ball() {
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(ballX, ballY, 20, 0, 2 * Math.PI);
  ctx.fill();
  ctx.restore();
}
function ballTwo() {
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(ballTwoX, ballTwoY, 20, 0, 2 * Math.PI);
  ctx.fill();
  ctx.restore();
}
function ballThree() {
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(ballThreeX, ballThreeY, 20, 0, 2 * Math.PI);
  ctx.fill();
  ctx.restore();
}
function ballFour() {
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(ballFourX, ballFourY, 20, 0, 2 * Math.PI);
  ctx.fill();
  ctx.restore();
}
function ballFive() {
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(ballFiveX, ballFiveY, 20, 0, 2 * Math.PI);
  ctx.fill();
  ctx.restore();
}
function targetMove() {
  arcX += moveX;
  arcY += moveY;
}
function ballMove() {
  ballX += ballMoveX;
  ballY += ballMoveY;
}
function ballTwoMove() {
  ballTwoX += ballTwoMoveX;
  ballTwoY += ballTwoMoveY;
}
function ballThreeMove() {
  ballThreeX += ballThreeMoveX;
  ballThreeY += ballThreeMoveY;
}
function ballFourMove() {
  ballFourX += ballFourMoveX;
  ballFourY += ballFourMoveY;
}
function ballFiveMove() {
  ballFiveX += ballFiveMoveX;
  ballFiveY += ballFiveMoveY;
}

function wallBounce() {
  if (arcY > 599) {
    moveY = 0 - moveY;
  } else if (arcY < 1) {
    moveY = 0 - moveY;
  } else if (arcX > 699) {
    moveX = 0 - moveX;
  } else if (arcX < 1) {
    moveX = 0 - moveX;
  }
}
function ballWallBounce() {
  if (ballY > 599) {
    ballMoveY = 0 - ballMoveY;
  } else if (ballY < 1) {
    ballMoveY = 0 - ballMoveY;
  } else if (ballX > 699) {
    ballMoveX = 0 - ballMoveX;
  } else if (ballX < 1) {
    ballMoveX = 0 - ballMoveX;
  }
}
function ballWallBounceTwo() {
  if (ballTwoY > 599) {
    ballTwoMoveY = 0 - ballTwoMoveY;
  } else if (ballTwoY < 1) {
    ballTwoMoveY = 0 - ballTwoMoveY;
  } else if (ballTwoX > 699) {
    ballTwoMoveX = 0 - ballTwoMoveX;
  } else if (ballTwoX < 1) {
    ballTwoMoveX = 0 - ballTwoMoveX;
  }
}
function ballWallBounceThree() {
  if (ballThreeY > 599) {
    ballThreeMoveY = 0 - ballThreeMoveY;
  } else if (ballThreeY < 1) {
    ballThreeMoveY = 0 - ballThreeMoveY;
  } else if (ballThreeX > 699) {
    ballThreeMoveX = 0 - ballThreeMoveX;
  } else if (ballThreeX < 1) {
    ballThreeMoveX = 0 - ballThreeMoveX;
  }
}
function ballWallBounceFour() {
  if (ballFourY > 599) {
    ballFourMoveY = 0 - ballFourMoveY;
  } else if (ballFourY < 1) {
    ballFourMoveY = 0 - ballFourMoveY;
  } else if (ballFourX > 699) {
    ballFourMoveX = 0 - ballFourMoveX;
  } else if (ballFourX < 1) {
    ballFourMoveX = 0 - ballFourMoveX;
  }
}
function ballWallBounceFive() {
  if (ballFiveY > 599) {
    ballFiveMoveY = 0 - ballFiveMoveY;
  } else if (ballFiveY < 1) {
    ballFiveMoveY = 0 - ballFiveMoveY;
  } else if (ballFiveX > 699) {
    ballFiveMoveX = 0 - ballFiveMoveX;
  } else if (ballFiveX < 1) {
    ballFiveMoveX = 0 - ballFiveMoveX;
  }
}
function objectInteractionBounce() {
  if (
    arcX - ballX < 20 &&
    arcX - ballX > -20 &&
    arcY - ballY < 20 &&
    arcY - ballY > -20
  ) {
    moveX = 0 - moveX;
    moveY = 0 - moveY;
    ballMoveY = 0 - ballMoveY;
    ballMoveX = 0 - ballMoveX;
  }
}
function objectInteractionBounceTwo() {
  if (
    arcX - ballTwoX < 20 &&
    arcX - ballTwoX > -20 &&
    arcY - ballTwoY < 20 &&
    arcY - ballTwoY > -20
  ) {
    moveX = 0 - moveX;
    moveY = 0 - moveY;
    ballTwoMoveY = 0 - ballTwoMoveY;
    ballTwoMoveX = 0 - ballTwoMoveX;
  }
}
function objectInteractionBounceThree() {
  if (
    arcX - ballThreeX < 20 &&
    arcX - ballThreeX > -20 &&
    arcY - ballThreeY < 20 &&
    arcY - ballThreeY > -20
  ) {
    moveX = 0 - moveX;
    moveY = 0 - moveY;
    ballThreeMoveY = 0 - ballThreeMoveY;
    ballThreeMoveX = 0 - ballThreeMoveX;
  }
}
function objectInteractionBounceFour() {
  if (
    arcX - ballFourX < 20 &&
    arcX - ballFourX > -20 &&
    arcY - ballFourY < 20 &&
    arcY - ballFourY > -20
  ) {
    moveX = 0 - moveX;
    moveY = 0 - moveY;
    ballFourMoveY = 0 - ballFourMoveY;
    ballFourMoveX = 0 - ballFourMoveX;
  }
}
function objectInteractionBounceFive() {
  if (
    arcX - ballFiveX < 20 &&
    arcX - ballFiveX > -20 &&
    arcY - ballFiveY < 20 &&
    arcY - ballFiveY > -20
  ) {
    moveX = 0 - moveX;
    moveY = 0 - moveY;
    ballFiveMoveY = 0 - ballFiveMoveY;
    ballFiveMoveX = 0 - ballFiveMoveX;
  }
}
function end() {
  ctx.font = "30px Arial";
  ctx.fillText("End", arcX + 15, arcY + 10);
}
