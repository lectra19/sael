var x, y ; 
var lab2={str:"",x:420,y:0,width:0,height:0}; 
var lab3={str:"",x:420,y:0,width:0,height:0};
var lab4={str:"",x:420,y:0,width:0,height:0};
var lab1={str:"",x:420,y:0,width:0,height:0};
var labtxt={str:"Ποιο είναι το αποτέλεσμα του παρακάτω πολλαππλασιασμού;",x:70,y:120,width:0,height:0};
var labnums={str:"",x:500,y:180,width:0,height:0};

var image1=new Image();
image1.src="/static/computational_thinking/assets/thumb.png";
var image2=new Image();
image2.src="/static/computational_thinking/assets/thumbdown.png";



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
    ///ctx.fillStyle = 'white';

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
	
	function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	
	//generating random number for x, y and filling labels
	function generate(x,y,lab1,lab2,lab3,lab4, labnums){
		
		x = getRandomInt(1,10);
		y = getRandomInt(1,10);
		
		
		//alert(x);
		//alert(y);
		var f=x.toString();
		var z=y.toString();
		var nums = "";
		nums= nums.concat(f,"*",z);
		labnums.str = nums;
		var l1="",l2="",l3="",l4="";
		for(i=0 ; i<(y-1) ; i++){
			l1=l1.concat(f,"+");
		}
		l1=l1.concat(f);
		for(i=0 ; i<(y) ; i++){
			l2=l2.concat(f,"+");
		}
		l2=l2.concat(f);
		for(i=0 ; i<(x+1) ; i++){
			l3=l3.concat(z,"+");
		}
		l3=l3.concat(z);
		for(i=0 ; i<(x+2) ; i++){
			l4=l4.concat(z,"+");
		}
		l4=l4.concat(z);
		
		lab1.str=l1;
		lab2.str=l2;
		lab3.str=l3;
		lab4.str=l4;
		
		var labels = [lab1, lab2, lab3, lab4]; 
		shuffle(labels);
		//alert(lab1.str);
		//alert(labels[0].str);
		
		for(i=0 ; i< labels.length ; i++){
			
			labels[i].width=canvas.getContext("2d").measureText(labels[i].str).width *2.4;
			labels[i].height=parseInt("20px Verdana", 10);
			labels[i].y = 300 + i*(labels[i].height+15);
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
	if(collides(mouseX, mouseY, lab1) || collides(mouseX, mouseY, lab2) || collides(mouseX, mouseY, lab3) || collides(mouseX, mouseY, lab4))
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
		mouseY=0;
		}
   }
  
  
  
  if (stage==1) {
    
	if(collides(mouseX, mouseY, lab1)){
		stage=2;
		cor++;
  }
	else if(collides(mouseX, mouseY, lab2) || collides(mouseX, mouseY, lab3) || collides(mouseX, mouseY, lab4))
        stage=3;
	
   
	if (imgcollides(mouseX, mouseY))
		alert("Σπάσε τον πολλαπλασιασμό σε διαδοχικές προσθέσεις");
  }
   
   if (stage==2 || stage==3) {
   if (mouseX>100 && mouseX<350  && mouseY>400 && mouseY<550){
    if (count<=10) {
	generate(x,y,lab1,lab2,lab3,lab4, labnums);
	stage=1;
  count++;}
   if (count>10) {
  stage=4;}
   mouseY=0;
   }        
   }

   if (stage==4) {
    if (mouseX>100 && mouseX<370  && mouseY>400 && mouseY<550){
   window.location.href = "multi.html";}
   }


}

generate(x,y,lab1,lab2,lab3,lab4, labnums);
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
	drawTextBG(canvas.getContext("2d"), labnums.str, "35px Verdana", labnums.x, labnums.y);
	drawTextBG(canvas.getContext("2d"), lab1.str, "20px Verdana", 420, lab1.y);
	drawTextBG(canvas.getContext("2d"), lab2.str, "20px Verdana", 420, lab2.y);
	drawTextBG(canvas.getContext("2d"), lab3.str, "20px Verdana", 420, lab3.y);
	drawTextBG(canvas.getContext("2d"), lab4.str, "20px Verdana", 420, lab4.y);
	
	if (buttReady) {
		 canvas.getContext("2d").drawImage(buttImage, 800, 540, 50, 50);
	}
	
	
	
}

if (stage==0) {		// ΝΑ ΕΜΦΑΝΙΣΤΕΙ stage=0 'Η ΝΑ ΔΗΜΙΟΥΡΓΗΣΟΥΜΕ ΙΝΤΡΟ ΓΙΑ ΠΟΛΛΑΠΛΑΣΙΑΣΜΟ
	
drawingSurface.fillStyle="#5AFFFF";
drawingSurface.fillRecaat(0, 0, canvas.width, canvas.height);

drawingSurface.font = "80px Verdana";
drawingSurface.fillStyle= "#660000";
drawingSurface.fillText("ΣΠΑΖΟΚΕΦΑΛΙΕΣ 2",100,120);

drawingSurface.font = "30px Verdana";
drawingSurface.fillStyle= "#000080";
drawingSurface.fillText("Για ηλικίες: 8+",20,360);




drawingSurface.drawImage(image2,350,170, 250, 250);

drawingSurface.fillStyle= "#500E11";
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
drawingSurface.fillText("Η σωστή απάντηση είναι:  "+lab1.str,100,270);

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