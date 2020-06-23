export default class Background {
    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.image = document.getElementById('img_background');
        this.position = {
            x: 0,
            y: 0
        }
        this.scrollSpeed = 7;
    }

    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.gameWidth,
            this.gameHeight
        );
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y - this.gameHeight,
            this.gameWidth,
            this.gameHeight
        );
    }

    update(deltaTime) {
        this.position.y += this.scrollSpeed;
        if (this.position.y >= this.gameHeight) this.position.y = 0;
    }
}
