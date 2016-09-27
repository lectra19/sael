var x, y ; 
var lab2={str:"",x:420,y:0,width:0,height:0}; 		///lab1, lab2, lab3, lab4 useless
var lab3={str:"",x:420,y:0,width:0,height:0};
var lab4={str:"",x:420,y:0,width:0,height:0};
var lab1={str:"",x:420,y:0,width:0,height:0};
var labtxt={str:"Τι κοινό έχουν οι παρακάτω γάτες;",x:70,y:120,width:0,height:0};
var labnums={str:"",x:500,y:180,width:0,height:0};

var labsen1={str:"",x:20,y:0,width:0,height:0};
var labsen2={str:"",x:20,y:0,width:0,height:0};
var labsen3={str:"",x:20,y:0,width:0,height:0};
var labsen4={str:"",x:20,y:0,width:0,height:0};
var labsen5={str:"",x:20,y:0,width:0,height:0};
var labsen6={str:"",x:20,y:0,width:0,height:0};
var labsen7={str:"",x:20,y:0,width:0,height:0};
var labsen8={str:"",x:20,y:0,width:0,height:0};
var labsen9={str:"",x:20,y:0,width:0,height:0};

var answer1={str:"",x:70,y:0,width:0,height:0};
var answer2={str:"",x:70,y:0,width:0,height:0};
var answer3={str:"",x:70,y:0,width:0,height:0};

var sumtxt0={str:"",x:420,y:0,width:0,height:0};
var sumtxt1={str:"",x:420,y:0,width:0,height:0};
var sumtxt2={str:"",x:420,y:0,width:0,height:0};
var sumtxt3={str:"",x:420,y:0,width:0,height:0};
var sumtxt4={str:"",x:420,y:0,width:0,height:0};
var sumtxt5={str:"",x:420,y:0,width:0,height:0};
var sumtxt6={str:"",x:420,y:0,width:0,height:0};

labsen1.str = "Η γάτα με το όνομα Γκαρφιλντ έχει μία μακριά ουρά";
labsen2.str = "Η γάτα με το όνομα Μπερλιόζ έχει μία φουντωτή ουρά";
labsen3.str = "Η γάτα με το όνομα Μαρί έχει μία χοντρή ουρά";
labsen4.str = "Η γάτα με το όνομα Γκαρφιλντ έχει κίτρινα μάτια";
labsen5.str = "Η γάτα με το όνομα Μπερλιόζ έχει πράσινα μάτια";
labsen6.str = "Η γάτα με το όνομα Μαρί έχει μία πορτοκαλί μάτια";
labsen7.str = "Η γάτα με το όνομα Γκαρφιλντ έχει κανελί γούνα";
labsen8.str = "Η γάτα με το όνομα Μπερλιόζ έχει άσπρη γούνα";
labsen9.str = "Η γάτα με το όνομα Μαρί έχει μία γκρί γούνα";

answer1.str = "Απάντηση : Όλες οι γάτες έχουν ουρά";
answer2.str = "Απάντηση : Όλες οι γάτες έχουν μάτια";
answer3.str = "Απάντηση : Όλες οι γάτες έχουν γούνα";

sumtxt0.str = "Συμπέρασμα";
sumtxt1.str = "Βλέπουμε οτι αναζητώντας κάτι κοινό σε αυτές τις γάτες αφαιρέσαμε τις περιττές λεπτομέριες";
sumtxt2.str = "και τώρα ξέρουμε οτι κάθε γάτα έχει ουρά, μάτια και γούνα. Αυτό αποτελεί ένα μοντέλο.";
sumtxt3.str = "Δηλαδή το μοντέλο της γάτας εχει τρεία στοιχεία: την ουρά, τα μάτια και την γούνα";
sumtxt4.str = "Και με αυτό μπορούμε να περιγράψουμε όλες τις γάτες, όχι μόνο την γάτα με την άσπρη γούνα ";
sumtxt5.str = "και τα πράσινα μάτια. Επομένως, μόλις βρούμε το μοντέλο ενός προβλήματος, ";
sumtxt6.str = "μπορούμε να σχεδιάσουμε και τον αλγόριθμο για την λύση του";

var labels = [labsen1, labsen2, labsen3]; 
		shuffle(labels);
		//alert(lab1.str);
		//alert(labels[0].str);
		
		for(i=0 ; i< labels.length ; i++){
			
			labels[i].width=canvas.getContext("2d").measureText(labels[i].str).width *2.4;
			labels[i].height=parseInt("20px Verdana", 10);
			labels[i].y = 180 + i*(labels[i].height+30);
		}

function play()
{
	var buttonx = 800;
	var buttony=540;

	var buttReady = false;
	var buttImage = new Image();
	buttImage.onload = function () {
	buttReady = true;
		};

	buttImage.src = "/static/computational_thinking/assets/next-button.png";
	//Butt Image
	
	var qbuttonx = 800;
	var qbuttony = 270;

	var qbuttReady = false;
	var qbuttImage = new Image();
	qbuttImage.onload = function () {
	qbuttReady = true;
		};

	qbuttImage.src = "/static/computational_thinking/assets/question.png";
	//Button Image
	
	function imgcollides( x, y) {												/// ALAGH
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
	
	function qimgcollides( x, y) {												/// ALAGH
    var isCollision = false;
            var left = qbuttonx;
			var right = qbuttonx + qbuttImage.width;
			var top = qbuttony;
			var bottom = qbuttony + qbuttImage.height;
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

image1=new Image();
image1.src="/static/computational_thinking/assets/next-button.png";
image2=new Image();
image2.src="/static/computational_thinking/assets/next-button.png";


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
 
	
	if (stage==5) {
		canvas.style.cursor = "default";
		if (qimgcollides(mouseX, mouseY) || imgcollides(mouseX, mouseY))
			canvas.style.cursor = "pointer";
	
    }
  
    if(stage==4){
	  canvas.style.cursor = "default";
	  if(imgcollides(mouseX, mouseY))
		canvas.style.cursor = "pointer";
    }
  

   
   if(stage==3){
	   canvas.style.cursor = "default";
	   if (qimgcollides(mouseX, mouseY) || imgcollides(mouseX, mouseY))
		canvas.style.cursor = "pointer";
   }
   
   if(stage==2){
	   canvas.style.cursor = "default";
	   if(imgcollides(mouseX, mouseY))
		   canvas.style.cursor = "pointer";
   }
   
   if (stage==1) {
    canvas.style.cursor = "default";
    if (qimgcollides(mouseX, mouseY) || imgcollides(mouseX, mouseY))
		canvas.style.cursor = "pointer";
  }

   if (stage==7){
	   canvas.style.cursor = "default";
	   if(imgcollides(mouseX,mouseY))
		canvas.style.cursor = "pointer";
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
	
	if (stage==7){
	   if(imgcollides(mouseX,mouseY))
		window.location.href = "abstraction.html";
	}
	
	if(stage==6){
		if(imgcollides(mouseX, mouseY))
		  stage = 7;
	}

	
	if (stage==5) {
    
		if (qimgcollides(mouseX, mouseY))
			stage=6;
		
	
		if (imgcollides(mouseX, mouseY))
			alert("Σπάσε τον πολλαπλασιασμό σε διαδοχικές προσθέσεις");
	
	
    }
  
    if(stage==4){
	  if(imgcollides(mouseX, mouseY))
		  stage = 5;
    }
  

   
   if(stage==3){
	   if (qimgcollides(mouseX, mouseY))
		stage=4;
			
		if (imgcollides(mouseX, mouseY))
		alert("Σπάσε τον πολλαπλασιασμό σε διαδοχικές προσθέσεις");
	
   }
   
   if(stage==2){
	   if(imgcollides(mouseX, mouseY))
		   stage=3;
   }
   
   if (stage==1) {
    
    if (qimgcollides(mouseX, mouseY)){
		stage=2;
		cor++;}
	
	if (imgcollides(mouseX, mouseY))
		alert("Σπάσε τον πολλαπλασιασμό σε διαδοχικές προσθέσεις");
	
	
  }
  

}

//generate(x,y,lab1,lab2,lab3,lab4, labnums);
update();


function update() {
requestAnimationFrame(update, canvas);

if (stage==1) {
	
	drawingSurface.fillStyle="#7FFFD4";
	drawingSurface.fillRect(0, 0, canvas.width, canvas.height);
	
	
	drawTextBG(canvas.getContext("2d"), labtxt.str, "30px Verdana", labtxt.x, labtxt.y);

	drawTextBG(canvas.getContext("2d"), labsen1.str, "20px Verdana", 180, 180);
	drawTextBG(canvas.getContext("2d"), labsen2.str, "20px Verdana", 180, 210);
	drawTextBG(canvas.getContext("2d"), labsen3.str, "20px Verdana", 180, 240);
	
	/*if (buttReady) {
		 canvas.getContext("2d").drawImage(buttImage, 800, 540, 50, 50);
	}
	*/
	
	if (qbuttReady) {
		 canvas.getContext("2d").drawImage(qbuttImage, 800, 270);
	}
	
	
}

if (stage==0) {		// ΝΑ ΕΜΦΑΝΙΣΤΕΙ stage=0 'Η ΝΑ ΔΗΜΙΟΥΡΓΗΣΟΥΜΕ ΙΝΤΡΟ ΓΙΑ ΠΟΛΛΑΠΛΑΣΙΑΣΜΟ
	
drawingSurface.fillStyle="#7FFFD4";
drawingSurface.fillRecaat(0, 0, canvas.width, canvas.height);

drawingSurface.font = "80px Verdana";
drawingSurface.fillStyle= "#660000";
drawingSurface.fillText("ΣΠΑΖΟΚΕΦΑΛΙΕΣ 2",100,120);

drawingSurface.font = "30px Verdana";
drawingSurface.fillStyle= "#000080";
drawingSurface.fillText("Για ηλικίες: 8+",20,360);




drawingSurface.drawImage(image2,350,170, 250, 250);

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
	
	
	
	//drawingSurface.font = "30px Verdana";
	/*drawingSurface.fillStyle= "#ffffff";
	drawingSurface.fillText(lab1.str,420,360);
	drawingSurface.fillText(lab2.str,420,450);
	drawingSurface.fillText(lab3.str,420,520);
	drawingSurface.fillText(lab4.str,420,600);
	*/
	drawTextBG(canvas.getContext("2d"), labtxt.str, "30px Verdana", labtxt.x, labtxt.y);
	drawTextBG(canvas.getContext("2d"), labsen1.str, "20px Verdana", 180, 180);
	drawTextBG(canvas.getContext("2d"), labsen2.str, "20px Verdana", 180, 210);
	drawTextBG(canvas.getContext("2d"), labsen3.str, "20px Verdana", 180, 240);
	drawTextBG(canvas.getContext("2d"), answer1.str, "22px Verdana", 180, 300);
	
	if (buttReady) {
		 canvas.getContext("2d").drawImage(buttImage, 800, 540);
	}
	
	
//flag=true;

}

if (stage==3) {
	drawingSurface.fillStyle="#7FFFD4";
	drawingSurface.fillRect(0, 0, canvas.width, canvas.height);
	
	
	drawTextBG(canvas.getContext("2d"), labtxt.str, "30px Verdana", labtxt.x, labtxt.y);
	//drawTextBG(canvas.getContext("2d"), labnums.str, "35px Verdana", labnums.x, labnums.y);
	/*drawTextBG(canvas.getContext("2d"), lab1.str, "20px Verdana", 420, lab1.y);
	drawTextBG(canvas.getContext("2d"), lab2.str, "20px Verdana", 420, lab2.y);
	drawTextBG(canvas.getContext("2d"), lab3.str, "20px Verdana", 420, lab3.y);
	drawTextBG(canvas.getContext("2d"), lab4.str, "20px Verdana", 420, lab4.y);
	*/
	drawTextBG(canvas.getContext("2d"), labsen4.str, "20px Verdana", 180, 180);
	drawTextBG(canvas.getContext("2d"), labsen5.str, "20px Verdana", 180, 210);
	drawTextBG(canvas.getContext("2d"), labsen6.str, "20px Verdana", 180, 240);

	
	if (qbuttReady) {
		 canvas.getContext("2d").drawImage(qbuttImage, 800, 270);
	}
	
	

flag=true;

}

if (stage==4) {
	drawingSurface.fillStyle="#7FFFD4";
	drawingSurface.fillRect(0, 0, canvas.width, canvas.height);
	
	
	drawTextBG(canvas.getContext("2d"), labtxt.str, "30px Verdana", labtxt.x, labtxt.y);
	drawTextBG(canvas.getContext("2d"), labsen4.str, "20px Verdana", 180, 180);
	drawTextBG(canvas.getContext("2d"), labsen5.str, "20px Verdana", 180, 210);
	drawTextBG(canvas.getContext("2d"), labsen6.str, "20px Verdana", 180, 240);
	drawTextBG(canvas.getContext("2d"), answer2.str, "20px Verdana", 180, 300);
	
	if (buttReady) {
		 canvas.getContext("2d").drawImage(buttImage, 800, 540);
	}
	
	
}

if (stage==5) {
	
	drawingSurface.fillStyle="#7FFFD4";
	drawingSurface.fillRect(0, 0, canvas.width, canvas.height);
	
	
	drawTextBG(canvas.getContext("2d"), labtxt.str, "30px Verdana", labtxt.x, labtxt.y);
	//drawTextBG(canvas.getContext("2d"), labnums.str, "35px Verdana", labnums.x, labnums.y);
	/*drawTextBG(canvas.getContext("2d"), lab1.str, "20px Verdana", 420, lab1.y);
	drawTextBG(canvas.getContext("2d"), lab2.str, "20px Verdana", 420, lab2.y);
	drawTextBG(canvas.getContext("2d"), lab3.str, "20px Verdana", 420, lab3.y);
	drawTextBG(canvas.getContext("2d"), lab4.str, "20px Verdana", 420, lab4.y);
	*/
	drawTextBG(canvas.getContext("2d"), labsen7.str, "20px Verdana", 180, 180);
	drawTextBG(canvas.getContext("2d"), labsen8.str, "20px Verdana", 180, 210);
	drawTextBG(canvas.getContext("2d"), labsen9.str, "20px Verdana", 180, 240);
	
	
	
	if (qbuttReady) {
		 canvas.getContext("2d").drawImage(qbuttImage, 800, 270);
	}
	
}

if (stage==6) {
	drawingSurface.fillStyle="#7FFFD4";
	drawingSurface.fillRect(0, 0, canvas.width, canvas.height);
	
	drawTextBG(canvas.getContext("2d"), labtxt.str, "30px Verdana", labtxt.x, labtxt.y);
	drawTextBG(canvas.getContext("2d"), labsen7.str, "20px Verdana", 180, 180);
	drawTextBG(canvas.getContext("2d"), labsen8.str, "20px Verdana", 180, 210);
	drawTextBG(canvas.getContext("2d"), labsen9.str, "20px Verdana", 180, 240);
	drawTextBG(canvas.getContext("2d"), answer3.str, "22px Verdana", 180, 300);
	
	if (buttReady) {
		 canvas.getContext("2d").drawImage(buttImage, 800, 540);
	}
	
}

if (stage==7) {
	drawingSurface.fillStyle="#7FFFD4";
	drawingSurface.fillRect(0, 0, canvas.width, canvas.height);
	
	
	drawTextBG(canvas.getContext("2d"), sumtxt0.str, "35px Verdana", 350, 150);
	drawTextBG(canvas.getContext("2d"), sumtxt1.str, "20px Verdana", 45, 210);
	drawTextBG(canvas.getContext("2d"), sumtxt2.str, "20px Verdana", 45, 240);
	drawTextBG(canvas.getContext("2d"), sumtxt3.str, "20px Verdana", 45, 270);
	drawTextBG(canvas.getContext("2d"), sumtxt4.str, "20px Verdana", 45, 300);
	drawTextBG(canvas.getContext("2d"), sumtxt5.str, "20px Verdana", 45, 330);
	drawTextBG(canvas.getContext("2d"), sumtxt6.str, "20px Verdana", 45, 360);
	
	if (buttReady) {
		 canvas.getContext("2d").drawImage(buttImage, 800, 540);
	}
	
}

}

}