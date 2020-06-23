import Game from './game.js';

const canvas = document.getElementById('gameScreen');
const ctx = canvas.getContext('2d');

const GAME_WIDTH = 1000;
const GAME_HEIGHT = 800;

const game = new Game(GAME_WIDTH, GAME_HEIGHT);


let lastTime = 0;

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    game.update(deltaTime);
    game.draw(ctx);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
