let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 600;
let arcX = Math.round(Math.random() * 695);
let arcY = Math.round(Math.random() * 595);
let ballTwoX = Math.round(Math.random() * 695);
let ballTwoY = Math.round(Math.random() * 595);
let ballThreeX = Math.round(Math.random() * 695);
let ballThreeY = Math.round(Math.random() * 595);
let ballFourX = Math.round(Math.random() * 695);
let ballFourY = Math.round(Math.random() * 595);
let ballFiveX = Math.round(Math.random() * 695);
let ballFiveY = Math.round(Math.random() * 595);
let ballX = Math.round(Math.random() * 695);
let ballY = Math.round(Math.random() * 595);
let moveX = 1;
let moveY = 1;
let ballMoveX = -1;
let ballMoveY = 1;
let ballTwoMoveX = 1;
let ballTwoMoveY = 1;
let ballThreeMoveX = 1;
let ballThreeMoveY = -1;
let ballFourMoveX = 1;
let ballFourMoveY = 1;
let ballFiveMoveX = -1;
let ballFiveMoveY = 1;
let score = 0;
let accuracyScore = 0;

setInterval(loop, 1);
function loop() {
  if (gameOn) {
    background();
    target();
    ball();
    targetMove();
    wallBounce();
    ballMove();
    ballWallBounce();
    objectInteractionBounce();
    objectInteractionBounceTwo();
    objectInteractionBounceThree();
    objectInteractionBounceFour();
    objectInteractionBounceFive();
    ballTwo();
    ballThree();
    ballFour();
    ballFive();
    ballTwoMove();
    ballThreeMove();
    ballFourMove();
    ballFiveMove();
    ballWallBounceTwo();
    ballWallBounceThree();
    ballWallBounceFour();
    ballWallBounceFive();
  }
}

let gameOn = true;
function mousemove(event) {
  if (gameOn) {
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
      ballTwoX = Math.round(Math.random() * 695);
      ballTwoY = Math.round(Math.random() * 595);
      ballThreeX = Math.round(Math.random() * 695);
      ballThreeY = Math.round(Math.random() * 595);
      ballFourX = Math.round(Math.random() * 695);
      ballFourY = Math.round(Math.random() * 595);
      ballFiveX = Math.round(Math.random() * 695);
      ballFiveY = Math.round(Math.random() * 595);
      ballX = Math.round(Math.random() * 695);
      ballY = Math.round(Math.random() * 595);
      moveX = 0 - moveX;
      moveY = 0 - moveY;
      score++;
      document.getElementById("score").innerHTML = "Hits: " + score;
      if (moveX < 0 && moveY < 0) {
        moveX -= 0.1;
        moveY -= 0.1;
      } else if (moveX > 0 && moveY > 0) {
        moveX += 0.1;
        moveY += 0.1;
      } else if (moveX > 0 && moveY < 0) {
        moveX += 0.1;
        moveY -= 0.1;
      } else if (moveX < 0 && moveY > 0) {
        moveX -= 0.1;
        moveY += 0.1;
      }
      console.log(moveX, moveY);
    }
  }
}
window.addEventListener("click", mousemove);

let time = 60;
setInterval(timer, 1000);
function timer() {
  if (time > 0) {
    time -= 1;
  } else if (time == 0) {
    moveY = 0;
    moveX = 0;
    ballMoveX = 0;
    ballMoveY = 0;
    ballTwoMoveX = 0;
    ballTwoMoveY = 0;
    ballThreeMoveX = 0;
    ballThreeMoveY = 0;
    ballFourMoveX = 0;
    ballFourMoveY = 0;
    ballFiveMoveX = 0;
    ballFiveMoveY = 0;
    document.getElementById("points").innerHTML =
      "Score: " + Math.round((score / 60) * 10) + " /6";
    gameOn = false;
    end();
  }
  document.getElementById("timer").innerHTML = time + "s";
}
