import MainCharacter from './mainCharacter.js';
import InputHandler from './input.js';
import Shot from './shot.js';
import Background from './background.js';
import Enemy from './enemy.js';

import { buildLevel, level0, level1, level2 } from './levels.js';

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.background = new Background(this);
        this.mainCharacter = new MainCharacter(this);
        this.bullets = [];
        this.levels = [level0, level1, level2];
        this.currentLevel = 0;
        this.enemies = buildLevel(this, this.levels[this.currentLevel]);

        new InputHandler(this);
    }

    shoot() {
        this.shot = new Shot(this);
        this.bullets.push(this.shot);
    }

    update(deltaTime) {
        //if (!deltaTime) return;
        this.background.update(deltaTime);
        this.mainCharacter.update(deltaTime);
        this.enemies.forEach(enemy => enemy.update(deltaTime));
        this.bullets.forEach(bullet => bullet.update(deltaTime));
        this.enemies = this.enemies.filter(enemy => !enemy.markedForDeletion);
        this.bullets = this.bullets.filter(bullet => !bullet.death);
    }

    draw(ctx) {
        this.background.draw(ctx);
        this.mainCharacter.draw(ctx);
        this.enemies.forEach(enemy => enemy.draw(ctx));
        if (this.shot) this.bullets.forEach(bullet => bullet.draw(ctx));
    }
}
