window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    let birdGame;
    startButton.addEventListener("click", startGame);
    function startGame () {
        birdGame = new Game();
        birdGame.start();
    }
    document.addEventListener("keydown", (event)=> {
        if (event.code === "ArrowLeft") {
            birdGame.player.directionX = -birdGame.player.speed;
        } else if (event.code === "ArrowRight") {
            birdGame.player.directionX = birdGame.player.speed;
        } else if (event.code === "ArrowDown") {
            birdGame.player.directionY = birdGame.player.speed;
        } else if (event.code === "ArrowUp") {
            birdGame.player.directionY = -birdGame.player.speed;
        }
    })
    document.addEventListener("keyup", (event) => {
        if (event.code === "ArrowLeft") {
            birdGame.player.directionX = 0;
        } else if (event.code === "ArrowRight") {
           birdGame.player.directionX = 0;
        } else if (event.code === "ArrowDown") {
            birdGame.player.directionY = 0;
        } else if (event.code === "ArrowUp") {
            birdGame.player.directionY = 0;
        } 
    })
    restartButton.addEventListener("click", () => {
    birdGame.end()
});
        
}