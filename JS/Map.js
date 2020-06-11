class MapGenerator {
    constructor() {
    }

    Generate() {
        if (World.frameCount % 160 === 0) {
            topHurd = createSprite(Math.round(random(800, 1205)), 315);
            topHurd.addImage(HurdletopImg);
            topHurd.scale = 0.15;
            topHurd.velocityX = -5;
            Hurdles.add(topHurd);

            botHurd = createSprite(810, 335);
            botHurd.addImage(HurdleBottomImg);
            botHurd.scale = 0.15;
            botHurd.velocityX = -5;
            botHurd.x = topHurd.x - 10;
        }
    }

    CollideHurd() {
        for (var i = 0; i < Hurdles.length; i++) {
            if (Player2.collide(topHurd)) {
                topHurd.velocityX = -2;
            }
            if (topHurd.velocityX <= -2) {
                topHurd.VelocityX += 0.5;
            }
            if (topHurd.velocityX >= -5) {
                topHurd.velocityX = -5;
            }
        }
    }
}

/*

Difference between the both hurdles:
    X --> -10
    Y --> +20

Template for both hurdles:
        topHurd = createSprite(400, 300);
        topHurd.addImage(HurdletopImg);
        topHurd.scale = 0.15;

        botHurd = createSprite(390, 320);
        botHurd.addImage(HurdleBottomImg);
        botHurd.scale = 0.15;
*/
