class Game {
    constructor() {
        this.startScreen = document.getElementById('first-page');
        this.gameScreen = document.getElementById('game-play');
        this.gameEndScreen = document.getElementById('end-page');
        this.height = 650;
        this.width = 1150;
        this.trees = [new Tree(), new Tree(), new Tree()];
        this.score = 0;
        this.scoreElement = document.getElementById('score');
        this.lives = 2;
        this.livesElement = document.getElementById('lives');
        this.gameIsOver = false;
        this.player = new Bird();
        this.tornado = new Tornado();
        this.counter = 0;
        this.startCounter = false;
    }

    start() {
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;

        this.startScreen.style.display = "none";

        this.gameScreen.style.display = "block";

        this.gameLoop(); 
    } 

    end() {
      location.reload()
    }

    gameLoop() {
        if (this.gameIsOver) {
          return;
        }

        this.update();

        window.requestAnimationFrame(() => this.gameLoop());
    }
    
    update() {
      console.log(this.tornado)
      if(this.startCounter === true) {
        this.counter++;
      }
        this.player.moveBird();

        this.tornado.moveTornado();

        if (this.tornado.left > this.width){
          this.tornado.left = 0;
         }

         if(this.tornado.top > this.height) {
          this.tornado.top = 0;
         }

        if (this.player.speedDetection(this.tornado)){
          this.tornado.left = Math.random() * (this.width - this.tornado.width);
          this.tornado.top = Math.random() * (this.height - this.tornado.height);
          this.player.speed += 3;
          this.startCounter = true;
        }

        if(this.counter === 50) {
          this.player.speed = 3;
          this.startCounter = false;
          this.counter = 0;
        }

        this.trees.forEach((tree, i) => {
          tree.moveTree();
             if (tree.top > this.height){
              tree.element.remove();
              this.trees.splice(i, 1);
              this.trees.push(new Tree(), new Tree());
             }

            if (this.player.collisionDetection(tree)) {
            tree.element.remove();
            this.trees.splice(i, 1);
            this.lives--;
            this.livesElement.innerText = this.lives;
            i--;
            }  else if (tree.top > this.height) {
            this.score++;
            this.scoreElement.innerText = this.score;
            tree.element.remove();
            this.trees.splice(i, 1);
            i--;
            }
        })

        if (this.lives === 0) {
        this.gameOver();
        }
      }
      

    gameOver() {
        this.player.element.remove();
        this.gameIsOver = true;

        this.gameScreen.style.display = "none";
        this.gameEndScreen.style.display = "block";
      }
}
