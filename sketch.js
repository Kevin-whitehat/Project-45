var backgroundimg
var player;
var playerImage;
var rock, rockImg, rocksGroup;

function preload() {
	backgroundimg = loadImage("background.png")
	playerImage = loadImage("plswork.png")
	rockImg = loadImage("rock.png")
}

function setup() {
	createCanvas(windowWidth - 10, windowHeight - 10);


	var background = createSprite(width / 2, height / 2, width, height);
	background.addImage(backgroundimg)

	//Create the Bodies Here.
	player = createSprite(200, height - 400, 30, 30)
	player.addImage("image", playerImage);
	//image(playerImage, 300, 400, 30, 30)
	player.scale = 0.5;
	//player.debug = true;
	player.setCollider('circle', 0, 0, 100)
	rocksGroup = new Group();



}


function draw() {
	if (keyIsDown(DOWN_ARROW) && player.y < height - 30) {
		player.y += 7
	}
	if (keyIsDown(UP_ARROW) && player.y > 50) {
		player.y -= 7
	}

	createRock(rocksGroup);
	drawSprites();


}

function createRock(rockGroup) {
	if (frameCount % 100 == 0) {
		y = Math.round(random(50, height - 50))
		var rock = createSprite(width, y, 30, 30);
		rock.addImage(rockImg);
		rock.velocityX = -(5 /*+ score / 1000*/);
		rockGroup.add(rock);
		rock.scale = 0.5;
		//rock.debug = true;
		rock.setCollider("circle", 0, 0, 5)
		rock.bounceOff(player);
		if (rock.x < 0) {
			rock.remove();
		}
	}
}

