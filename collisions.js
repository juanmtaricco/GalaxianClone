export function detectCollision(bullet, enemy) {

    //Bullet limits
    const topOfBullet = bullet.position.y;
    const bottomOfBullet = bullet.position.y + bullet.height;
    const xPositionOfBullet = bullet.position.x;
    //Enemy ship limits
    const leftSideOfEnemy = enemy.position.x;
    const rightSideOfEnemy = enemy.position.x + enemy.size;
    const topOfEnemy = enemy.position.y;
    const bottomOfEnemy = enemy.position.y + enemy.size;

    //Was the enemy hit by a bullet?
    if (topOfBullet <= bottomOfEnemy &&
        xPositionOfBullet >= leftSideOfEnemy &&
        xPositionOfBullet <= rightSideOfEnemy &&
        bottomOfBullet > topOfEnemy) {
        console.log('Toma');
        return true;
    } else {
        return false;
        }
}
