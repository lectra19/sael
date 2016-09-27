var x, y ; 
var lab2={str:"",x:420,y:0,width:0,height:0}; 
var lab3={str:"",x:420,y:0,width:0,height:0};
var lab4={str:"",x:420,y:0,width:0,height:0};
var lab1={str:"",x:420,y:0,width:0,height:0};
var labtxt={str:"Ποιο είναι το επόμενο σχήμα που θα εμφανιστεί;",x:70,y:120,width:0,height:0};
//var labnums={str:"",x:500,y:180,width:0,height:0};

//dhmiourgw parakatw dyo images me onomata image1 kai image2

var image1=new Image();
image1.src="/static/computational_thinking/assets/thumb.png"; 

var image2=new Image();
image2.src="/static/computational_thinking/assets/thumbdown.png"; 

var image3 = new Image();
image3.src = "/static/computational_thinking/assets/apple2.png";
img3={img:image3, x:250,y:280,width:80,height:80};

var image4 = new Image();
image4.src = "/static/computational_thinking/assets/burger.png";
img4={img:image4, x:350,y:280,width:80,height:80};

var image5 = new Image();
image5.src = "/static/computational_thinking/assets/pink-icecream.png";
img5={img:image5, x:450,y:280,width:80,height:80};

var image6 = new Image();
image6.src = "/static/computational_thinking/assets/pink-strawberry.png";
img6={img:image6, x:550,y:280,width:80,height:80};


var imgArray = new Array();
imgArray = [img3, img4, img5, img6];




function play()
{
	var buttonx = 800;
	var buttony=540;

	var buttReady = false;
	var buttImage = new Image();
	buttImage.onload = function () {
	buttReady = true;
		};

	buttImage.src = "/static/computational_thinking/assets/lamp.png";
	//Button Image
	buttImage.width = 50;
	buttImage.height = 50;
	

	
	
	function imgcollides( x, y) {
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
	
	
	
	
	function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
	}
	
	
	
	
	
	function drawTextBG(ctx, txt, font, x, y) {

    /// lets save current state as we make a lot of changes        
    ctx.save();

    /// set font
    ctx.font = font;

    /// draw text from top - makes life easier at the moment
    ctx.textBaseline = 'top';

    /// color for background
    ///ctx.fillStyle = '#f50';

    /// get width of text
    var width = ctx.measureText(txt).width;

    /// draw background rect assuming height of font
    ctx.fillRect(x, y, width, parseInt(font, 10));

    /// text color
    ctx.fillStyle = 'white';

    /// draw text on top
    ctx.fillText(txt, x, y);

    /// restore original state
    ctx.restore();
}
	
	function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
		
	
	function collides( x, y,img) {
    var isCollision = false;
            var left = img.x;
			var right = img.x + img.width;
			var top = img.y;
			var bottom = img.y + img.height;
        if (right >= x
            && left <= x
            && bottom >= y
            && top <= y) {
            isCollision = true;
        }
    return isCollision;
}
	
	
	
var canvas = document.createElement("canvas");
//var canvas = document.querySelector("canvas");
var drawingSurface = canvas.getContext("2d");

canvas.width = 1020;
canvas.height = 600;
canvas.style.backgroundColor="#7FFFD4";




var r1;
var r2;
var r3;
var l;
var flag=true;
var d1;
var d2;
var s;
var p;
var r11;
var r22;
var a;
var stage=1;
var count=1;
var cor=0;

document.getElementById("gameboard").appendChild(canvas);

canvas.addEventListener("mousemove", mousemoveHandler, false);
canvas.addEventListener("mousedown", mousedownHandler, false);




function mousemoveHandler(event)
{ 
  //Find the mouse's x and y position
  var mouseX = event.pageX - canvas.offsetLeft;
  var mouseY = event.pageY - canvas.offsetTop;
  
  
    if (stage==0) {
   canvas.style.cursor = "default";
    if (mouseX>375 && mouseX<625  && mouseY>450 && mouseY<570){
  canvas.style.cursor = "pointer";}
   }
   
  

   if (stage==1) {
	  canvas.style.cursor = "default";
	if(collides(mouseX, mouseY, img3) || collides(mouseX, mouseY, img4) || collides(mouseX, mouseY, img5) || collides(mouseX, mouseY, img6))
    canvas.style.cursor = "pointer";
	if (imgcollides(mouseX, mouseY))
	canvas.style.cursor = "pointer";	
   
   }

   if (stage==2 || stage==3) {
   canvas.style.cursor = "default";
   if (mouseX>100 && mouseX<350  && mouseY>400 && mouseY<550){
  canvas.style.cursor = "pointer";}
   }

   if (stage==4) {
   canvas.style.cursor = "default";
    if (mouseX>100 && mouseX<370  && mouseY>400 && mouseY<550){
  canvas.style.cursor = "pointer";}
   }
   
   


}


function mousedownHandler(event)
{ 
  //Find the mouse's x and y position
  var mouseX = event.pageX - canvas.offsetLeft;
  var mouseY = event.pageY - canvas.offsetTop;
  
  if (stage==0) {
    if (mouseX>375 && mouseX<625  && mouseY>450 && mouseY<570){
  stage=1;
  mouseY=0;}
   }
  
  
  
  if (stage==1) {
    
  if(collides(mouseX, mouseY, imgArray[1])){
		stage=2;
		cor++;
  }
	else if(collides(mouseX, mouseY, imgArray[0]) || collides(mouseX, mouseY, imgArray[2]) || collides(mouseX, mouseY, imgArray[3]))
        stage=3;
	
   
	if (imgcollides(mouseX, mouseY))
		alert("Υπάρχει κάποια συγκεκριμένη σειρά με την οποία εμφανίζονται οι εικόνες;");
  }
   
   if (stage==2 || stage==3) {
   if (mouseX>100 && mouseX<350  && mouseY>400 && mouseY<550){
    if (count<=10) {
	//generate(x,y,lab1,lab2,lab3,lab4, labnums);
	shuffle(imgArray);
	stage=1;
  count++;}
   if (count>10) {
  stage=4;}
   mouseY=0;
   }        
   }

   if (stage==4) {
    if (mouseX>100 && mouseX<370  && mouseY>400 && mouseY<550){
   window.location.href = "pattern.html";}
   }


}

shuffle(imgArray);
update();


function update() {
requestAnimationFrame(update, canvas);

if (stage==1) {
	
	drawingSurface.fillStyle="#7FFFD4";
	drawingSurface.fillRect(0, 0, canvas.width, canvas.height);
	
	
	
	//drawingSurface.font = "30px Verdana";
	/*drawingSurface.fillStyle= "#ffffff";
	drawingSurface.fillText(lab1.str,420,360);
	drawingSurface.fillText(lab2.str,420,450);
	drawingSurface.fillText(lab3.str,420,520);
	drawingSurface.fillText(lab4.str,420,600);
	*/
	drawTextBG(canvas.getContext("2d"), labtxt.str, "30px Verdana", labtxt.x, labtxt.y);
	//var span = 0;
	for(i=0; i<4; i++){
		drawingSurface.drawImage
	(imgArray[i].img,imgArray[i].x ,280, 50, 50);
	//	imgArray[i].x = 250+span;
	//	span+=100;
	
	}
	
	
	drawingSurface.drawImage
	(imgArray[0].img,100,400, 50, 50);
	drawingSurface.drawImage
	(imgArray[0].img,175,400, 50, 50);
	drawingSurface.drawImage
	(imgArray[2].img,250,400, 50, 50);
	drawingSurface.drawImage
	(imgArray[1].img,325,400, 50, 50);
	drawingSurface.drawImage
	(imgArray[1].img,400,400, 50, 50);
	drawingSurface.drawImage
	(imgArray[3].img,475,400, 50, 50);
	drawingSurface.drawImage
	(imgArray[0].img,550,400, 50, 50);
	drawingSurface.drawImage
	(imgArray[0].img,625,400, 50, 50);
	drawingSurface.drawImage
	(imgArray[2].img,700,400, 50, 50);
	
	
	if (buttReady) {
		 canvas.getContext("2d").drawImage(buttImage, 800, 540 , buttImage.width, buttImage.height);
	}
	
	
	
}

if (stage==0) {		// ΝΑ ΕΜΦΑΝΙΣΤΕΙ stage=0 'Η ΝΑ ΔΗΜΙΟΥΡΓΗΣΟΥΜΕ ΙΝΤΡΟ ΓΙΑ ΠΟΛΛΑΠΛΑΣΙΑΣΜΟ
	
drawingSurface.fillStyle="#FFFFCC";
drawingSurface.fillRecaat(0, 0, canvas.width, canvas.height);

drawingSurface.font = "80px Verdana";
drawingSurface.fillStyle= "#660000";
drawingSurface.fillText("ΣΠΑΖΟΚΕΦΑΛΙΕΣ 2",100,120);

drawingSurface.font = "30px Verdana";
drawingSurface.fillStyle= "#000080";
drawingSurface.fillText("Για ηλικίες: 8+",20,360);




drawingSurface.drawImage
 (image2,350,170, 250, 250);

drawingSurface.fillStyle= "#7FFFD4";
drawingSurface.fillRect(375,450,250,120);
drawingSurface.font = "40px Verdana";
drawingSurface.fillStyle= "#000080";
drawingSurface.fillText("ΞΕΚΙΝΑ",420,520);

drawingSurface.font = "20px Verdana";
drawingSurface.fillStyle= "#000080";
}

if (stage==2) {
drawingSurface.fillStyle="#7FFFD4";
drawingSurface.fillRect(0, 0, canvas.width, canvas.height);

drawingSurface.font = "80px Verdana";
drawingSurface.fillStyle= "#000080";
drawingSurface.fillText("ΜΠΡΑΒΟ!ΣΩΣΤΟ!",170,200);

drawingSurface.drawImage
 (image1,600,330, 250, 250);

drawingSurface.fillStyle= "#7FFFD4";
drawingSurface.fillRect(100,400,250,150);
drawingSurface.font = "40px Verdana";
drawingSurface.fillStyle= "#660000";
drawingSurface.fillText("ΣΥΝΕΧΙΣΕ",115,490);


flag=true;

}

if (stage==3) {
drawingSurface.fillStyle="#7FFFD4";
drawingSurface.fillRect(0, 0, canvas.width, canvas.height);

drawingSurface.font = "80px Verdana";
drawingSurface.fillStyle= "#660000";
drawingSurface.fillText("ΛΑΘΟΣ!!",320,180);
drawingSurface.font = "30px Verdana";
drawingSurface.fillStyle= "#000080";
drawingSurface.fillText("Η σωστή απάντηση είναι:  ",100,270);
drawingSurface.drawImage
	(imgArray[1].img, 500, 235, 50, 50);


drawingSurface.drawImage
 (image2,600,330, 250, 250);


drawingSurface.fillStyle= "#7FFFD4";
drawingSurface.fillRect(100,400,250,150);
drawingSurface.font = "40px Verdana";
drawingSurface.fillStyle= "#660000";
drawingSurface.fillText("ΣΥΝΕΧΙΣΕ",115,490);


flag=true;

}

if (stage==4) {
drawingSurface.fillStyle="#7FFFD4";
drawingSurface.fillRect(0, 0, canvas.width, canvas.height);

drawingSurface.font = "80px Verdana";
drawingSurface.fillStyle= "#000080";
drawingSurface.fillText("ΤΕΛΟΣ ΠΑΙΧΝΙΔΙΟΥ",100,200);
drawingSurface.font = "50px Verdana";
drawingSurface.fillStyle= "#660000";
drawingSurface.fillText("Η βαθμολογία σου είναι:  "+cor+"/10",100,270);


drawingSurface.drawImage
 (image2,600,330, 250, 250);

drawingSurface.fillStyle= "#7FFFD4";
drawingSurface.fillRect(100,400,270,150);
drawingSurface.font = "40px Verdana";
drawingSurface.fillStyle= "#660000";
drawingSurface.fillText("ΠΙΣΩ",110,490);



}

}

}