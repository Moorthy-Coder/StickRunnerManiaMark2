var RunningAnimation;

var BackGroundOpener;
var BasicMapImage, BasicBridgeImage, DoublePillarImage, DrawBridgeImage, RopeImage, SpikeFloorImage, StepsImage;
var Player1, Player2, Player3;

var Mapper;
var form;

var database;
var dbase;

var Count = 0;

var Hurdles;

var topHurd;
var botHurd;

var state = 0;
var rand = 0;

var Player1, Player2, Player3;

var Ground1, Ground2, Ground3;

function preload() {
    HurdletopImg = loadImage("Images/Obstacles/Hurdletop.png");
    HurdleBottomImg = loadImage("Images/Obstacles/Hurdlebottom.png");

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

    frameRate(50);

    Player1 = new Player(100, 100);
    Ground1 = createSprite(300, 150, 800, 20);
    Player1.player.addAnimation("Runcycle1", RunningAnimation);
    Player1.player.scale = 0.25;

    Player2 = new Player(100, 300);
    Ground2 = createSprite(300, 350, 800, 20);
    Player2.player.addAnimation("Runcycle2", RunningAnimation);
    Player2.player.scale = 0.25;

    Player3 = new Player(100, 500);
    Ground3 = createSprite(300, 550, 880, 20);
    Player3.player.addAnimation("Runcycle3", RunningAnimation);
    Player3.player.scale = 0.25;

    Mapper = new MapGenerator();

    Hurdles = new Group();

}

function draw() {
    background(255);
    // text("x: " + mouseX + "  y: " + mouseY, mouseX, mouseY);
    Player1.movement();
    Player1.player.collide(Ground1);

    Player2.movement();
    Player2.player.collide(Ground2);

    Player3.movement();
    Player3.player.collide(Ground3);

    if (Count == 3) {
        drawSprites();
        form.hideGreetings();
        Mapper.Generate();
        Mapper.CollideHurd()
    }

}