class Player {
    constructor(x, y) {
        this.name = null;
        this.index = 0;
        this.y = 0;
        this.rank = 0;
        this.player = createSprite(x, y);
    }

    update(value) {
        database.ref('/').update({
            PlayerCount: value
        });
    }

    movement() {
        this.player.velocityY += 0.8;
        if (keyDown("space")) {
            this.player.velocityY = -9;
        }
    }
} 