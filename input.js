export default class InputHandler {
    constructor(game) {
        //document.addEventListener('keydown', e => console.log(e.keyCode));      //para mapear las teclas (dev)
        this.game = game;
        this.pressed = false;
        document.addEventListener('keydown', e => {
            switch(e.keyCode) {
                case 32:
                    if(this.pressed) return;
                    this.pressed = true;
                    this.game.shoot();
                    break;
                case 37:
                    this.game.mainCharacter.moveLeft();
                    break;
                case 38:
                    this.game.mainCharacter.moveUp();
                    break;
                case 39:
                    this.game.mainCharacter.moveRight();
                    break;
                case 40:
                    this.game.mainCharacter.moveDown();
                    break;
            }
        });

    document.addEventListener('keyup', e => {
        switch(e.keyCode) {
            case 37:
                if (this.game.mainCharacter.speedX < 0) this.game.mainCharacter.stopX();
                break;
            case 38:
                if (this.game.mainCharacter.speedY < 0) this.game.mainCharacter.stopY();
                break;
            case 39:
                if (this.game.mainCharacter.speedX > 0) this.game.mainCharacter.stopX();
                break;
            case 40:
                if (this.game.mainCharacter.speedY > 0) this.game.mainCharacter.stopY();
                break;
            case 32:
                this.pressed = false;
        }
    })
    }
}

/*        document.addEventListener('keydown', (event) => {
      alert(event.keyCode)})*/
