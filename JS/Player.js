class Player {
    constructor() {
        this.name = null;
        this.index = 0;
        this.y = 0;
        this.rank = 0;
    }

    update(value) {
        database.ref('/').update({
            PlayerCount: value
        });
    }

    movement() {
        // Player1.x += 3;
        if (keyDown("Space") || keyDown("w") || keyDown(UP_ARROW)) {
            // Player1.y -= 2.5;
        }
        camera.position.x = Player1.x;
    }
}