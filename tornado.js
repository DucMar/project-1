class Tornado {
    constructor() {
        this.gameScreen = document.getElementById('game-play');
        this.left = 50;
        this.top = 50;
        this.width = 90;
        this.height = 90;
        this.element = document.createElement("img");
        this.element.src = "images/tornado.png";
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        this.gameScreen.appendChild(this.element);
    } 

    moveTornado() {
        this.left += 3;
        this.top += 0.5;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }
}
