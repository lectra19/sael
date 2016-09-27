// Create the canvas

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 1020;
canvas.height = 600;
canvas.style.backgroundColor="#7FFFD4";

	
var state = "page1";
var buttonx = 480;
var buttony=340;


function collides( x, y) {
    var isCollision = false;
            var left = buttonx;
			var right = buttonx + buttImage.width;
			var top = buttony;
			var bottom = buttony + buttImage.height;
        if (right >= x
            && left <= x
            && bottom >= y
            && top <= y) {
            isCollision = true;
        }
    return isCollision;
}

// listener, using W3C style for example    
    canvas.addEventListener('click', function(e) {
        
        var rect = collides(e.offsetX, e.offsetY);
        if (rect && state == "page1") {
            state= "page2";
        } else if(rect && state == "page2") {
			state = "page3";
        }
    }, false);


document.getElementById("gameboard").appendChild(canvas);
// Button image
var buttReady = false;
var buttImage = new Image();
buttImage.onload = function () {
	buttReady = true;
};

buttImage.src = "/static/computational_thinking/assets/next-button.png";
//Butt Image
buttImage.onclick = function(){
		if (state == "page1"){
			state = "page2";
		}
}


var reset = function () {
	// hero.x = canvas.width / 2;
	// hero.y = canvas.height / 2;

	//Throw the monster somewhere on the screen randomly
	// monster.x = 32 + (Math.random() * (canvas.width - 64));
	// monster.y = 32 + (Math.random() * (canvas.height - 64));
};

// Update game objects
var update = function (modifier) {
	// if (38 in keysDown) { // Player holding up
		// hero.y -= hero.speed * modifier;
	// }
	// if (40 in keysDown) { // Player holding down
		// hero.y += hero.speed * modifier;
	// }
	// if (37 in keysDown) { // Player holding left
		// hero.x -= hero.speed * modifier;
	// }
	// if (39 in keysDown) { // Player holding right
		// hero.x += hero.speed * modifier;
	// }

	// Are they touching?
	// if (
		// hero.x <= (monster.x + 32)
		// && monster.x <= (hero.x + 32)
		// && hero.y <= (monster.y + 32)
		// && monster.y <= (hero.y + 32)
	// ) {
		// ++monstersCaught;
		// reset();
	// }
};

// Pages
var drawPage1 = function() {
	var text1 = "Καλώς ήλθατε \n στο εκπαιδευτικό λογισμικό";
	var text2 = "Computational Thinking!";
	ctx.fillStyle = "rgb(80, 14, 17)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText(text1 , 32 , canvas.height/2-24);
	ctx.fillText(text2 , 32 , canvas.height/2 );
	
	
}


var drawPage2 = function() {
	var text1 = "Με βάση το λογισμικό αυτό θα μάθεις να λύνεις προβλήματα";
	var text2 = "που σου φαίνονται δύσκολα με απλά βήματα.";
	var text3 = "Θα σε βοηθήσει να σκέφτεσαι μόνος σου με ένα διαφορετικό";
	var text4 = "τρόπο για κάθε πρόβλημα και η επίλυση του να μοιάζει ευκολότερη.";
	ctx.fillStyle = "rgb(80, 14, 17)";
	ctx.font = "18px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText(text1 ,24, canvas.height/2-40 );
	ctx.fillText(text2, 24, canvas.height/2-20);
	ctx.fillText(text3 ,24, canvas.height/2 );
	ctx.fillText(text4, 24, canvas.height/2+20);
	
}

var drawPage3 = function() {
	var text1 = "Οι Τέσσερις κατηγορίες είναι: ";
	var text2 = "Αποσύνθεση(Decomposition), Επαναλαμβανόμενο Μοτίβο( Patterns)";
	var text3 = "Αφαίρεση(Abstraction), Αλγόριθμοι(Algorithms)";
	var text4 = "Ας ξεκινήσουμε...";
	ctx.fillStyle = "rgb(80, 14, 17)";
	ctx.font = "16px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText(text1 ,24,canvas.height/2-60 );
	ctx.fillText(text2, 24, canvas.height/2-40);
	ctx.fillText(text3 ,24, canvas.height/2-20 );
	ctx.fillText(text4, 24, canvas.height/2+20);
}


// Draw everything
var render = function () {
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	
	if (buttReady) {
		 ctx.drawImage(buttImage, buttonx, buttony);
	}
	
    
	if(state == "page1"){
		drawPage1();
	
	}
	else if(state == "page2"){
		drawPage2();
	}
	else if(state == "page3"){
		drawPage3();
	}

	
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();
