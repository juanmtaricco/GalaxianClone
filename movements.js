export function selectMovement(enemy) {
    const movements = [normal, zigzag];
    return movements[Math.floor(Math.random() * movements.length)](enemy);
}

const normal = function (enemy) {
    if (enemy.position.x >= enemy.game.gameWidth - enemy.size - 40 ||
        enemy.position.x <= 40) {
            enemy.speed = -enemy.speed;
            enemy.position.y += 25;
            enemy.acceleration++;
    }
    enemy.position.x += enemy.speed;
    if (enemy.acceleration === 2) {
        enemy.speed += 2;
        enemy.acceleration = 0;
    }
}

const zigzag = function (enemy) {
    if (enemy.position.x >= enemy.game.gameWidth - enemy.size - 40 ||
        enemy.position.x <= 40) {
            enemy.speed = -enemy.speed;
            enemy.position.y += 75;
            enemy.acceleration++;
    }
    enemy.position.x += enemy.speed;
    if (enemy.acceleration === 2) {
        enemy.speed += 3;
        enemy.acceleration = 0;
    }
}


/*
export default class Movement {
    constructor(enemy) {
        enemy.gameWidth = enemy.gameWidth;
        enemy.gameHeight = enemy.gameHeight;
        enemy.size = enemy.size;
        enemy.speed = 1;
        enemy.acceleration = 0;
    }

    selectMovement() {
        const movement = []
    }
}*/
