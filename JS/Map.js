class MapGenerator {
    constructor() {
        this.basicmap = createSprite(150, 125);
        this.basicmap.addImage(BasicMapImage);
        this.basicmap.scale = 0.25;
        this.basicmap.debug = true;

        this.basicbridge = createSprite(150, 125);
        this.basicbridge.addImage(BasicBridgeImage);
        this.basicbridge.scale = 0.25;
        this.basicbridge.debug = true;

        this.doublepillar = createSprite(150, 105);
        this.doublepillar.addImage(DoublePillarImage);
        this.doublepillar.scale = 0.2;
        this.doublepillar.debug = true;

        this.drawbridge = createSprite(150, 125);
        this.drawbridge.addImage(DrawBridgeImage);
        this.drawbridge.scale = 0.25;
        this.drawbridge.debug = true;

        this.rope = createSprite(150, 75);
        this.rope.addImage(RopeImage);
        this.rope.scale = 0.25;
        this.rope.debug = true;

        this.spike = createSprite(150, 125);
        this.spike.addImage(SpikeFloorImage);
        this.spike.scale = 0.25;
        this.spike.debug = true;

        this.steps = createSprite(150, 125);
        this.steps.addImage(StepsImage);
        this.steps.scale = 0.25;
        this.steps.debug = true;
    }

    Generate() {
        var Pointer = 150;
        var MapObstacles = [this.basicmap, this.basicbridge, this.doublepillar, this.drawbridge, this.rope, this.spike, this.steps];
        MapObstacles = shuffle(MapObstacles);
        for (var i = 0; i < MapObstacles.length; i++) {
            MapObstacles[i].x = Pointer + (MapObstacles[i].getScaledWidth()) / 2;
            console.log(MapObstacles[i].x, Pointer);
            Pointer += MapObstacles[i].getScaledWidth() + 50;
        }
    }
}