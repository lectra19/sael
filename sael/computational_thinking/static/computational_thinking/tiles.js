
var lab1={str:"",x:420,y:500,width:0,height:0}; 
var lab2={str:"",x:420,y:540,width:0,height:0};
var lab3={str:"",x:520,y:500,width:0,height:0};
var lab4={str:"",x:520,y:540,width:0,height:0};
var lab5={str:"",x:420,y:500,width:0,height:0}; 
var lab6={str:"",x:420,y:540,width:0,height:0};
var lab7={str:"",x:580,y:500,width:0,height:0};
var lab8={str:"",x:580,y:540,width:0,height:0};
var labtxt={str:"Ποια είναι η απόσταση απο το Α στο Β;",x:30,y:120,width:0,height:0}; 
var labtxt1={str:"Μετά υπολόγισε το εμδαδόν του δωματίου. Ποιο είναι αυτό;",x:30,y:150,width:0,height:0};
var done = false;

var image1=new Image();
image1.src="/static/computational_thinking/assets/tiles.png"; 

var image2=new Image();
image2.src="/static/computational_thinking/assets/thumb.png"; 

var image3=new Image();
image3.src="/static/computational_thinking/assets/thumbdown.png"; 


function play()
{
	var buttonx = 800;
	var buttony=540;

	var buttReady = false;
	var buttImage = new Image();
	buttImage.onload = function () {
	buttReady = true;
		};

	buttImage.src = "/static/computational_thinking/assets/lamp.png";   //ΚΑΤΑΛΛΗΛΗ ΕΙΚΟΝΑ
	//Butt Image
	
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
    ctx.fillStyle = '#000';

    /// draw text on top
    ctx.fillText(txt, x, y);

    /// restore original state
    ctx.restore();
}
	
	
	
	
	//generating random number for x, y and filling labels
	function generate(lab1,lab2,lab3,lab4, val1, val2, val3, val4){
		
		lab1.str=val1;
		lab2.str=val2;
		lab3.str=val3;
		lab4.str=val4;
		
		var labels = [lab1, lab2, lab3, lab4]; 
		shuffle(labels);
		//alert(lab1.str);
		//alert(labels[0].str);
		
		for(i=0 ; i< labels.length ; i++){
			
			labels[i].width=canvas.getContext("2d").measureText(labels[i].str).width *2.4;
			labels[i].height=parseInt("20px Verdana", 10);
			
		}
	}
	
	function collides( x, y,lbl) {
    var isCollision = false;
            var left = lbl.x;
			var right = lbl.x + lbl.width;
			var top = lbl.y;
			var bottom = lbl.y + lbl.height;
        if (right >= x
            && left <= x
            && bottom >= y
            && top <= y) {
            isCollision = true;
        }
    return isCollision;
}
	
var canvas = document.createElement("canvas");
var drawingSurface = canvas.getContext("2d");

canvas.width = 1020;
canvas.height = 600;
canvas.style.backgroundColor="#7FFFD4";


var stage=1;


document.getElementById("gameboard").appendChild(canvas);

canvas.addEventListener("mousemove", mousemoveHandler, false);
canvas.addEventListener("mousedown", mousedownHandler, false);

function mousemoveHandler(event)
{ 
  //Find the mouse's x and y position
  var mouseX = event.pageX - canvas.offsetLeft;
  var mouseY = event.pageY - canvas.offsetTop;
  


   if (stage==1) {
	  canvas.style.cursor = "default";
	if(collides(mouseX, mouseY, lab1) || collides(mouseX, mouseY, lab2) || collides(mouseX, mouseY, lab3) || collides(mouseX, mouseY, lab4))
    canvas.style.cursor = "pointer";
   
   }

   if (stage==2 || stage==3) {
   canvas.style.cursor = "default";
   if (mouseX>100 && mouseX<350  && mouseY>400 && mouseY<550){
  canvas.style.cursor = "pointer";}
   }
   
}


function mousedownHandler(event)
{ 
  //Find the mouse's x and y position
  var mouseX = event.pageX - canvas.offsetLeft;
  var mouseY = event.pageY - canvas.offsetTop;
  
  
  if (stage==1) {
    
	if(collides(mouseX, mouseY, lab2)){
		stage=2;
		
  }
	else if(collides(mouseX, mouseY, lab1) || collides(mouseX, mouseY, lab3) || collides(mouseX, mouseY, lab4))
        stage=3;
	
   
	if (imgcollides(mouseX, mouseY))
		alert("Μήκος απο το πλακάκι επί τον αριθμό των πλακακίων"); //ΑΛΛΑΓΗ ΟΔΗΓΕΙΩΝ
  }
   
	if(stage==2 || stage==3){
		    if (mouseX>100 && mouseX<370  && mouseY>400 && mouseY<550  && !done){
				generate(lab5,lab6, lab7, lab8, "900", "1800", "1200", "90");
				stage=4;
				
			}
			else if (done) window.location.href = "decompose.html";
	
	}

	if(stage==4){
		done = true;
		if(collides(mouseX, mouseY, lab5)){
		stage=2;
		
		}
		else if(collides(mouseX, mouseY, lab6) || collides(mouseX, mouseY, lab7) || collides(mouseX, mouseY, lab8))
		stage=3;
	
	}
}
generate(lab1,lab2,lab3,lab4, "10", "30", "90", "40");
update();


function update() {
requestAnimationFrame(update, canvas);

if (stage==1) {
	
	drawingSurface.fillStyle="#7FFFD4";
	drawingSurface.fillRect(0, 0, canvas.width, canvas.height);
	
	
	drawTextBG(canvas.getContext("2d"), labtxt.str, "24px Verdana", labtxt.x, labtxt.y);
	
	drawTextBG(canvas.getContext("2d"), lab1.str, "20px Verdana", lab1.x, lab1.y);
	drawTextBG(canvas.getContext("2d"), lab2.str, "20px Verdana", lab2.x, lab2.y);
	drawTextBG(canvas.getContext("2d"), lab3.str, "20px Verdana", lab3.x, lab3.y);
	drawTextBG(canvas.getContext("2d"), lab4.str, "20px Verdana", lab4.x, lab4.y);
	
	if (buttReady) {
		 canvas.getContext("2d").drawImage(buttImage, 800, 540, 50, 50);
	}
	
	drawingSurface.drawImage
	(image1,226,170,  600, 320);
	
}



if (stage==2) {
drawingSurface.fillStyle="#7FFFD4";
drawingSurface.fillRect(0, 0, canvas.width, canvas.height);

drawingSurface.font = "80px Verdana";
drawingSurface.fillStyle= "#000080";
drawingSurface.fillText("ΜΠΡΑΒΟ!ΣΩΣΤΟ!",170,200);

drawingSurface.drawImage
 (image2,600,330, 250, 250);

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
if(!done)
drawingSurface.fillText("Η σωστή απάντηση είναι:  "+lab2.str,100,270);
else drawingSurface.fillText("Η σωστή απάντηση είναι:  "+lab5.str,100,270);

drawingSurface.drawImage
 (image3,600,330, 250, 250);


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
	
	
	drawTextBG(canvas.getContext("2d"), labtxt1.str, "24px Verdana", labtxt1.x, labtxt1.y);
	drawTextBG(canvas.getContext("2d"), lab5.str, "20px Verdana", lab5.x, lab5.y);
	drawTextBG(canvas.getContext("2d"), lab6.str, "20px Verdana", lab6.x, lab6.y);
	drawTextBG(canvas.getContext("2d"), lab7.str, "20px Verdana", lab7.x, lab7.y);
	drawTextBG(canvas.getContext("2d"), lab8.str, "20px Verdana", lab8.x, lab8.y);
	
	if (buttReady) {
		 canvas.getContext("2d").drawImage(buttImage, 800, 540);
	}
	
	drawingSurface.drawImage
	(image1,226,170,  600, 320);
	
}



}


}