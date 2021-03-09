var player;
var npc1, npc2, npc3, npc4, npc5;

function setup() {
  createCanvas(900,1000);
  player = new Player(450,950);
  npc1 = new Bot(20,750);
  npc1.velocityX = 4;
  npc2 = new Bot(860,600);
  npc2.velocityX = -4;
  npc3 = new Bot(20,450);
  npc3.velocityX = 4;
  npc4 = new Bot(860,300);
  npc4.velocityX = -4;
  npc5 = new Bot(20,150);
  npc5.velocityX = 4;
}

function draw() {
  background(0);  
  drawSprites();
  player.display();
  npc1.display();
  npc2.display();
  npc3.display();
  npc4.display();
  npc5.display();
}