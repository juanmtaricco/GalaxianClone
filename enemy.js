//import { selectMovement } from './movements.js';
import { detectCollision } from './collisions.js';

export default class Enemy {
    constructor(game, position){
        this.game = game;
        this. position = position;
        this.image = document.getElementById('img_enemy');
        this.size = 30;
        this.speed = 3;
        this.acceleration = 0;
        this.markedForDeletion = false;
    }

    update(deltaTime) {
        this.game.bullets.forEach(bullet => {
            if (detectCollision(bullet, this)) {
                this.markedForDeletion = true;
            }
        });
        if (this.position.x >= this.game.gameWidth - this.size - 40 ||
            this.position.x <= 40) {
                this.speed = -this.speed;
                this.position.y += 25;
                this.acceleration++;
        }
        this.position.x += this.speed;
        if (this.acceleration === 2) {
            this.speed += 2;
            this.acceleration = 0;
        }
    }

    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.size,
            this.size,
        )
    }
}
