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
  if (arcY == 600) {
    moveY = 0 - moveY;
  } else if (arcY == 0) {
    moveY = 0 - moveY;
  } else if (arcX == 700) {
    moveX = 0 - moveX;
  } else if (arcX == 0) {
    moveX = 0 - moveX;
  }
}
function ballWallBounce() {
  if (ballY == 600) {
    ballMoveY = 0 - ballMoveY;
  } else if (ballY == 0) {
    ballMoveY = 0 - ballMoveY;
  } else if (ballX == 700) {
    ballMoveX = 0 - ballMoveX;
  } else if (ballX == 0) {
    ballMoveX = 0 - ballMoveX;
  }
}
function ballWallBounceTwo() {
  if (ballTwoY == 600) {
    ballTwoMoveY = 0 - ballTwoMoveY;
  } else if (ballTwoY == 0) {
    ballTwoMoveY = 0 - ballTwoMoveY;
  } else if (ballTwoX == 700) {
    ballTwoMoveX = 0 - ballTwoMoveX;
  } else if (ballTwoX == 0) {
    ballTwoMoveX = 0 - ballTwoMoveX;
  }
}
function ballWallBounceThree() {
  if (ballThreeY == 600) {
    ballThreeMoveY = 0 - ballThreeMoveY;
  } else if (ballThreeY == 0) {
    ballThreeMoveY = 0 - ballThreeMoveY;
  } else if (ballThreeX == 700) {
    ballThreeMoveX = 0 - ballThreeMoveX;
  } else if (ballThreeX == 0) {
    ballThreeMoveX = 0 - ballThreeMoveX;
  }
}
function ballWallBounceFour() {
  if (ballFourY == 600) {
    ballFourMoveY = 0 - ballFourMoveY;
  } else if (ballFourY == 0) {
    ballFourMoveY = 0 - ballFourMoveY;
  } else if (ballFourX == 700) {
    ballFourMoveX = 0 - ballFourMoveX;
  } else if (ballFourX == 0) {
    ballFourMoveX = 0 - ballFourMoveX;
  }
}
function ballWallBounceFive() {
  if (ballFiveY == 600) {
    ballFiveMoveY = 0 - ballFiveMoveY;
  } else if (ballFiveY == 0) {
    ballFiveMoveY = 0 - ballFiveMoveY;
  } else if (ballFiveX == 700) {
    ballFiveMoveX = 0 - ballFiveMoveX;
  } else if (ballFiveX == 0) {
    ballFiveMoveX = 0 - ballFiveMoveX;
  }
}
function objectInteractionBounce() {
  if (
    arcX - ballX < 10 &&
    arcX - ballX > -10 &&
    arcY - ballY < 10 &&
    arcY - ballY > -10
  ) {
    moveX = 0 - moveX;
    moveY = 0 - moveY;
    ballMoveY = 0 - ballMoveY;
    ballMoveX = 0 - ballMoveX;
  }
}
function objectInteractionBounceTwo() {
  if (
    arcX - ballTwoX < 30 &&
    arcX - ballTwoX > -30 &&
    arcY - ballTwoY < 30 &&
    arcY - ballTwoY > -30
  ) {
    moveX = 0 - moveX;
    moveY = 0 - moveY;
    ballTwoMoveY = 0 - ballTwoMoveY;
    ballTwoMoveX = 0 - ballTwoMoveX;
  }
}
function objectInteractionBounceThree() {
  if (
    arcX - ballThreeX < 30 &&
    arcX - ballThreeX > -30 &&
    arcY - ballThreeY < 30 &&
    arcY - ballThreeY > -30
  ) {
    moveX = 0 - moveX;
    moveY = 0 - moveY;
    ballThreeMoveY = 0 - ballThreeMoveY;
    ballThreeMoveX = 0 - ballThreeMoveX;
  }
}
function objectInteractionBounceFour() {
  if (
    arcX - ballFourX < 30 &&
    arcX - ballFourX > -30 &&
    arcY - ballFourY < 30 &&
    arcY - ballFourY > -30
  ) {
    moveX = 0 - moveX;
    moveY = 0 - moveY;
    ballFourMoveY = 0 - ballFourMoveY;
    ballFourMoveX = 0 - ballFourMoveX;
  }
}
function objectInteractionBounceFive() {
  if (
    arcX - ballFiveX < 30 &&
    arcX - ballFiveX > -30 &&
    arcY - ballFiveY < 30 &&
    arcY - ballFiveY > -30
  ) {
    moveX = 0 - moveX;
    moveY = 0 - moveY;
    ballFiveMoveY = 0 - ballFiveMoveY;
    ballFiveMoveX = 0 - ballFiveMoveX;
  }
}
