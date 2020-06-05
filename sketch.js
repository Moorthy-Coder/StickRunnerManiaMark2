var RunningAnimation;

var BackGroundOpener;
var BasicMapImage, BasicBridgeImage, DoublePillarImage, DrawBridgeImage, RopeImage, SpikeFloorImage, StepsImage;
var Player1, Player2, Player3;

var Mapper;
var form;

var database;
var dbase;

var Count = 0;

var state = 0;
var gapFillerX, gapFillerY;

var player;

function preload() {
    BackGroundOpener = loadImage("Images/BackGroundImages/StickRunnerManiaBackgroundComplete.png");
    BasicMapImage = loadImage("Images/Obstacles/Basic Map.png");
    BasicBridgeImage = loadImage("Images/Obstacles/BasicMapBrigde.png");
    DoublePillarImage = loadImage("Images/Obstacles/DoublePillar.png");
    DrawBridgeImage = loadImage("Images/Obstacles/DrawBridge.png");
    RopeImage = loadImage("Images/Obstacles/RopeObstacle.png");
    SpikeFloorImage = loadImage("Images/Obstacles/SpikeFloor.png");
    StepsImage = loadImage("Images/Obstacles/StepsUP&DOWN.png");

    RunningAnimation = loadAnimation("Images/Animations/Contact1.png", "Images/Animations/Down.png",
        "Images/Animations/Up.png", "Images/Animations/Up2.png", "Images/Animations/Down2.png",
        "Images/Animations/Contact2.png");
}
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
// var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(shuffle(myArray));

function setup() {
    createCanvas(800, 600);
    database = firebase.database();
    dbase = database.ref('PlayerCount');
    dbase.on("value", (data) => {
        Count = data.val();
    });

    form = new Form();
    form.display();

    Player1 = createSprite(100, 100);
    Player1.addAnimation("RunCycle1", RunningAnimation);
    Player1.scale = 0.25;

    Player2 = createSprite(100, 300);
    Player2.addAnimation("RunCycle2", RunningAnimation);
    Player2.scale = 0.25;

    Player3 = createSprite(100, 500);
    Player3.addAnimation("RunCycle3", RunningAnimation);
    Player3.scale = 0.25;

    frameRate(50);

    player = new Player();

    Mapper = new MapGenerator();
    Mapper.Generate();
}

function draw() {
    background(255);
    text("x: " + mouseX + "  y: " + mouseY, mouseX, mouseY);
    Player1.velocityY += 0.8;
    player.movement();

    if (Count == 3) {
        drawSprites();
        form.hideGreetings();
    }

}