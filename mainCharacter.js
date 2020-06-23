export default class MainCharacter {
    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.image = document.getElementById('img_spaceship');
        this.width = 80;
        this.height = 80;
        this.position = {
            x: this.gameWidth / 2 - this.width /2,
            y: this.gameHeight - this.height - 20
        }
        this.maxSpeed = 6;
        this.speedX = 0;
        this.speedY = 0;
    }

    moveLeft() {
        this.speedX = -this.maxSpeed;
        console.log('left');
    }

    moveRight() {
        this.speedX = this.maxSpeed
        console.log('right');
    }

    moveUp() {
        this.speedY= -this.maxSpeed;
        console.log('up');
    }

    moveDown() {
        this.speedY = this.maxSpeed
        console.log('down');
    }

    stopX() {
        this.speedX = 0;
        console.log('stop');
    }

    stopY() {
        this.speedY = 0;
        console.log('stop');
    }


    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    update(deltaTime) {
        //if (!deltaTime) return;

        this.position.x += this.speedX;
        this.position.y += this.speedY;

        if (this.position.x <= 0) this.position.x = 0;              //Evitar que se salga por izquierda
        if (this.position.x >= this.gameWidth - this.width) {       //Evitar que se salga por derecha
            this.position.x = this.gameWidth - this.width;
        }
        if (this.position.y <= 0) this.position.y = 0;              //Evitar que se salga por arriba
        if (this.position.y >= this.gameHeight - this.height) {       //Evitar que se salga por abajo
            this.position.y = this.gameHeight - this.height;
        }
    }
}
