import { detectCollision } from './collisions.js'

export default class Shot {
    constructor(game){
        this.image = document.getElementById('img_blast');
        this.width = 10;
        this.height = 20;
        this.game = game;
        this.position = {
            x: this.game.mainCharacter.position.x + this.game.mainCharacter.width / 2 - this.width / 2,
            y: this.game.mainCharacter.position.y - this.height
        };
        this.speed = 9;
        this.death = false;
    }

    update(deltaTime) {
        this.position.y -= this.speed;
        this.game.enemies.forEach(enemy => {
            if (detectCollision(this, enemy)) {
                this.death = true;
            }
        });
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
}
