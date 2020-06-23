import Enemy from './enemy.js'

export function buildLevel(game, level) {
    let enemies = [];
    level.forEach((row, rowIndex) => {
        row.forEach((enemy, enemIndex) => {
            if (enemy === 1) {
                let position = {
                    x: 50 + 60 * enemIndex,
                    y: 10 + 50 * rowIndex
                };
                enemies.push(new Enemy(game, position));
            }
        })
    })
    return enemies;
}

export const level0 = [
  [0,1,0,1,0,1,0,1,0,1,0],
  [1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1],
];

export const level1 = [
  [1,1,1,1,0,1,1,1,1,1,0],
  [1,0,0,1,0,1,1,0,0,1,0],
  [1,0,0,1,0,1,1,0,0,1,1],
  [1,1,1,1,0,1,1,0,0,1,1],
  [1,0,0,1,0,1,1,0,0,1,0],
  [1,0,0,1,0,1,1,0,0,1,0],
  [1,0,0,1,1,1,1,1,1,1,1],
];

export const level2 = [
  [0,1,0,1,0,1,0,1,0,1],
  [1,0,1,0,1,0,1,0,1,0],
  [1,0,0,0,0,0,0,0,0,1],
  [1,1,0,1,1,1,1,0,1,1]
];
