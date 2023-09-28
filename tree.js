class Tree {
    constructor() {
        this.gameScreen = document.getElementById('game-play');
        this.left = Math.random()*(window.innerWidth - 140);
        this.top = -200;
        this.width = 200;
        this.height = 200;
        this.speed = 4;
        this.element = document.createElement("img");
        this.image = ["images/tree-1.png", "images/tree-2.png", "images/tree-3.png"];
        this.randomImage = this.image[Math.floor(Math.random() * this.image.length)];
        this.element.src = this.randomImage;
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        this.gameScreen.appendChild(this.element);
    }

    moveTree() {
        this.top += this.speed;
        this.element.style.top = `${this.top}px`;
    }}