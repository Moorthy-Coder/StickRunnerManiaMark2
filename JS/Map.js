class MapGenerator {
    constructor() {
        this.basicmap = createSprite();
        this.basicmap.addImage(BasicMapImage);
        this.basicmap.scale = 0.25;
        this.basicmap.debug = true;

        this.basicbridge = createSprite();
        this.basicbridge.addImage(BasicBridgeImage);
        this.basicbridge.scale = 0.25;
        this.basicbridge.debug = true;

        this.doublepillar = createSprite();
        this.doublepillar.addImage(DoublePillarImage);
        this.doublepillar.scale = 0.25;
        this.doublepillar.debug = true;

        this.drawbridge = createSprite();
        this.drawbridge.addImage(DrawBridgeImage);
        this.drawbridge.scale = 0.25;
        this.drawbridge.debug = true;

        this.rope = createSprite();
        this.rope.addImage(RopeImage);
        this.rope.scale = 0.25;
        this.rope.debug = true;

        this.spike = createSprite();
        this.spike.addImage(SpikeFloorImage);
        this.spike.scale = 0.25;
        this.spike.debug = true;

        this.steps = createSprite();
        this.steps.addImage(StepsImage);
        this.steps.scale = 0.25;
        this.steps.debug = true;
    }

    Generate() {
        var Pointer = 0;
        var MapObstacles = [this.basicmap, this.basicbridge, this.doublepillar, this.drawbridge, this.rope, this.spike, this.steps];
        MapObstacles = shuffle(MapObstacles);
        for (var i = 0; i < MapObstacles.length; i++) {
            MapObstacles[i].x = Pointer + MapObstacles[i].width / 2;
            console.log(Pointer);
            MapObstacles[i].y = 450;
            Pointer += MapObstacles[i].width;
        }
    }
}