console.log("Hello");
function initialize(){
    const ball = document.getElementById("ball");
    const court = document.getElementById("court");
    console.log(window.innerHeight);
    console.log(court.height);
    const randomTop = Math.floor(Math.random() * (window.innerHeight)); // Random vertical position
    const randomLeft = Math.floor(Math.random() * window.innerWidth); // Random horizontal position
    // ball.style.position = "absolute";
    ball.style.top = `${randomTop}px`;
    ball.style.left = `${randomLeft}px`;
    console.log("function initialized");
}

function setBallNum() {
    // Get the selected number of balls
    const selectedNum = parseInt(document.getElementById("ballNums").value);

    // Get the court container
    const court = document.getElementById("court");

    // Remove any existing ball elements
    while (court.firstChild) {
        court.removeChild(court.firstChild);
    }

    // Create and add new ball elements based on the selected number
    for (let i = 0; i < selectedNum; i++) {
        const ball = document.createElement("div");
        ball.className = "ball";
        court.appendChild(ball);
    }
}


let ballVelocity;
let game = "run";
function resumeOrSuspend(event){
    if(game == "pause"){
        clearInterval(ballVelocity);
        game = "run"
        return;
    }
    const ball = document.getElementById("ball");
    let velocityX = 1; // Initial horizontal velocity
    let velocityY = 1; // Initial vertical velocity
    const randomTop = Math.floor(Math.random() * window.innerHeight); // Random vertical position
    const randomLeft = Math.floor(Math.random() * window.innerWidth); // Random horizontal position
    console.log(ball.style.top);
    function bounce(){
        // let newTop = parseInt(ball.style.top);
        // newTop+= 1;
        // ball.style.top = newTop +"px";

        // let newLeft= parseInt(ball.style.left);
        // newLeft+= 1;
        // ball.style.left = newLeft +"px";
        const newTop = parseInt(ball.style.top);
        const newLeft = parseInt(ball.style.left);
        const ballWidth = ball.clientWidth; // Width of the ball
        const ballHeight = ball.clientHeight; // Height of the ball

        // Update the position based on velocity
        const newPositionX = newLeft + velocityX;
        const newPositionY = newTop + velocityY;

        // Check for collisions with the court boundaries
        if (newPositionX <= 0 || newPositionX + ballWidth >= court.clientWidth) {
            velocityX = -velocityX; // Reverse horizontal velocity on wall collision
        }

        if (newPositionY <= 0 || newPositionY + ballHeight >= court.clientHeight) {
            velocityY = -velocityY; // Reverse vertical velocity on wall collision
        }

        // Update the ball's position
        ball.style.left = newPositionX + "px";
        ball.style.top = newPositionY + "px";
        console.log(velocityX, velocityY);

    }
    ballVelocity = setInterval(bounce,0.5);
    game = "pause";
}
