function play()
{
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
var stage=0;
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
   for(i=1;i<8;i++){
   if (mouseX>420+i*70 && mouseX<480+i*70  && mouseY>360 && mouseY<410){
  canvas.style.cursor = "pointer";}
   }
   for(i=8;i<15;i++){
   if (mouseX>420+(i-7)*70 && mouseX<480+(i-7)*70  && mouseY>420 && mouseY<470){
  canvas.style.cursor = "pointer";}
   }
   for(i=15;i<22;i++){
   if (mouseX>420+(i-14)*70 && mouseX<480+(i-14)*70  && mouseY>480 && mouseY<530){
  canvas.style.cursor = "pointer";}
   }
   
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
    
   for(i=1;i<8;i++){
   if (mouseX>420+i*70 && mouseX<480+i*70  && mouseY>360 && mouseY<410){
    if(r1<r2){
        a=(i-1)+r11;}
    if(r2<r1){
        a=(i-1)+r22;}
    if (a==r3) {
        cor++;
        stage=2;}
     if (a!=r3) {
        stage=3;}   
    }
   }
   for(i=8;i<15;i++){
   if (mouseX>420+(i-7)*70 && mouseX<480+(i-7)*70  && mouseY>430 && mouseY<470){

    if(r1<r2){
        a=(i-1)+r11;}
    if(r2<r1){
        a=(i-1)+r22;}
     if (a==r3) {
        cor++;
        stage=2;}   
     if (a!=r3) {
        stage=3;} 
    }
   }
   for(i=15;i<22;i++){
   if (mouseX>420+(i-14)*70 && mouseX<480+(i-14)*70  && mouseY>480 && mouseY<530){

    if(r1<r2){
        a=(i-1)+r11;}
    if(r2<r1){
        a=(i-1)+r22;}
      if (a==r3) {
        cor++;
        stage=2;}
       if (a!=r3) {
        stage=3;}  
    }
   }

  }
   
   if (stage==2 || stage==3) {
   if (mouseX>100 && mouseX<350  && mouseY>400 && mouseY<550){
    if (count<=10) {
  stage=1;
  count++;}
   if (count>10) {
  stage=4;}
   mouseY=0;
   }        
   }

   if (stage==4) {
    if (mouseX>100 && mouseX<370  && mouseY>400 && mouseY<550){
   window.location.href = "riddle2.html";}
   }


}

update();


function update() {
requestAnimationFrame(update, canvas);

if (stage==1) {
if(flag==true){
r1=Math.floor(Math.random()*9)+1; 
if(r1<3){
r2=r1+2;
l=Math.floor(Math.random()*2); 
if(l==0){
r3=Math.floor(Math.random()*10)+r1*10; }
if(l==1){
r3=Math.floor(Math.random()*10)+(r1+1)*10; }
}
if(r1>=3){
r2=r1-2;
l=Math.floor(Math.random()*2); 
if(l==0){
r3=Math.floor(Math.random()*9)+r2*10; }
if(l==1){
r3=Math.floor(Math.random()*9)+(r2+1)*10; }
}
flag=false;
}

r11=r1*10;
r22=r2*10;
d1=r3%10;
d2=Math.floor(r3/10);
s=d1+d2;
p=d1*d2;

drawingSurface.fillStyle="#00FFCC";
drawingSurface.fillRect(0, 0, canvas.width, canvas.height);

drawingSurface.drawImage
 (image1,150,20, 700, 340);
drawingSurface.drawImage
 (image2,50,330, 250, 250);

 
 drawingSurface.font = "20px Verdana";
drawingSurface.fillStyle= "#990000";
drawingSurface.fillText("Δοκιμασία: "+count+"/10",10,300);

 
 
drawingSurface.font = "20px Verdana";
drawingSurface.fillStyle= "#000066";
drawingSurface.fillText("Έχω στο μυαλό μου έναν  διψήφιο αριθμό.",200,80);
if(r1<r2){
drawingSurface.fillText("Ο αριθμός αυτός είναι μεταξύ του "+r11+"  και του "+r22+".",200,110);}
if(r2<=r1){
drawingSurface.fillText("Ο αριθμός αυτός είναι μεταξύ του "+r22+"  και του "+r11+".",200,110);}
drawingSurface.fillText("Το άθροισμα των ψηφίων του ισούται με "+s+".",200,140);
drawingSurface.fillText("Το γινόμενο των ψηφίων του ισούται με "+p+".",200,170);
if(d2>d1){
drawingSurface.fillText("Το πρώτο ψηφίο είναι μεγαλύτερο από το δεύτερο ψηφίο.",200,200);}
if(d1>d2){
drawingSurface.fillText("Το δεύτερο ψηφίο είναι μεγαλύτερο από το πρώτο ψηφίο.",200,200);}
if(d2==d1){
drawingSurface.fillText("Το πρώτο ψηφίο είναι ίσο με το δεύτερο ψηφίο",200,200);}
drawingSurface.fillText("Ποιός είναι ο αριθμός;",200,230);


drawingSurface.font = "35px Verdana";
drawingSurface.fillStyle= "#990000";
drawingSurface.fillText("Επέλεξε την απάντηση",540,340);


for(i=1;i<8;i++){
drawingSurface.fillStyle= "#FFFF66";
drawingSurface.fillRect(420+i*70,360,60,50);}
//for(i=8;i<15;i++){
//drawingSurface.fillRect(420+(i-7)*70,420,60,50);}
//for(i=15;i<22;i++){
//drawingSurface.fillRect(420+(i-14)*70,480,60,50);}


if(r1<r2){
drawingSurface.font = "20px Verdana";
drawingSurface.fillStyle= "#993300";
for(i=0;i<7;i++){
var k=r11+i;
drawingSurface.fillText(+k,505+i*70,395);}
for(i=7;i<14;i++){
var k=r11+i;
drawingSurface.fillText(+k,505+(i-7)*70,455);}
for(i=14;i<21;i++){
var k=r11+i;
drawingSurface.fillText(+k,505+(i-14)*70,515);}
}
if(r2<r1){
drawingSurface.font = "20px Verdana";
drawingSurface.fillStyle= "#993300";
for(i=0;i<7;i++){
var k=r22+i;
drawingSurface.fillText(+k,505+i*70,395);}
for(i=7;i<14;i++){
var k=r22+i;
drawingSurface.fillText(+k,505+(i-7)*70,455);}
for(i=14;i<21;i++){
var k=r22+i;
drawingSurface.fillText(+k,505+(i-14)*70,515);}
}

}

if (stage==0) {
drawingSurface.fillStyle="#00FFCC";
drawingSurface.fillRect(0, 0, canvas.width, canvas.height);

drawingSurface.font = "80px Verdana";
drawingSurface.fillStyle= "#660000";
drawingSurface.fillText("ΣΠΑΖΟΚΕΦΑΛΙΕΣ 2",100,120);

drawingSurface.font = "30px Verdana";
drawingSurface.fillStyle= "#000080";
drawingSurface.fillText("Για ηλικίες: 8+",20,360);




drawingSurface.drawImage
 (image2,350,170, 250, 250);

drawingSurface.fillStyle= "#CCFF66";
drawingSurface.fillRect(375,450,250,120);
drawingSurface.font = "40px Verdana";
drawingSurface.fillStyle= "#000080";
drawingSurface.fillText("ΞΕΚΙΝΑ",420,520);

drawingSurface.font = "20px Verdana";
drawingSurface.fillStyle= "#000080";
drawingSurface.fillText("kpapast Games",40,560);
}

if (stage==2) {
drawingSurface.fillStyle="#00FFCC";
drawingSurface.fillRect(0, 0, canvas.width, canvas.height);

drawingSurface.font = "80px Verdana";
drawingSurface.fillStyle= "#000080";
drawingSurface.fillText("ΜΠΡΑΒΟ!ΣΩΣΤΟ!",170,200);

drawingSurface.drawImage
 (image2,600,330, 250, 250);

drawingSurface.fillStyle= "#CCFF66";
drawingSurface.fillRect(100,400,250,150);
drawingSurface.font = "40px Verdana";
drawingSurface.fillStyle= "#660000";
drawingSurface.fillText("ΣΥΝΕΧΙΣΕ",115,490);


flag=true;

}

if (stage==3) {
drawingSurface.fillStyle="#00FFCC";
drawingSurface.fillRect(0, 0, canvas.width, canvas.height);

drawingSurface.font = "80px Verdana";
drawingSurface.fillStyle= "#660000";
drawingSurface.fillText("ΛΑΘΟΣ!!",320,180);
drawingSurface.font = "50px Verdana";
drawingSurface.fillStyle= "#000080";
drawingSurface.fillText("Η σωστή απάντηση είναι:  "+r3,100,270);

drawingSurface.drawImage
 (image2,600,330, 250, 250);


drawingSurface.fillStyle= "#CCFF66";
drawingSurface.fillRect(100,400,250,150);
drawingSurface.font = "40px Verdana";
drawingSurface.fillStyle= "#660000";
drawingSurface.fillText("ΣΥΝΕΧΙΣΕ",115,490);


flag=true;

}

if (stage==4) {
drawingSurface.fillStyle="#00FFCC";
drawingSurface.fillRect(0, 0, canvas.width, canvas.height);

drawingSurface.font = "80px Verdana";
drawingSurface.fillStyle= "#000080";
drawingSurface.fillText("ΤΕΛΟΣ ΠΑΙΧΝΙΔΙΟΥ",100,200);
drawingSurface.font = "50px Verdana";
drawingSurface.fillStyle= "#660000";
drawingSurface.fillText("Η βαθμολογία σου είναι:  "+cor+"/10",100,270);


drawingSurface.drawImage
 (image2,600,330, 250, 250);

drawingSurface.fillStyle= "#CCFF66";
drawingSurface.fillRect(100,400,270,150);
drawingSurface.font = "40px Verdana";
drawingSurface.fillStyle= "#660000";
drawingSurface.fillText("ΠΑΙΞΕ ΞΑΝΑ",110,490);

drawingSurface.font = "20px Verdana";
drawingSurface.fillStyle= "#000080";
drawingSurface.fillText("kpapast Games",850,580);

}

}

}