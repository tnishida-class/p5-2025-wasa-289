// 最終課題を制作しよう

const size = 50;
const g = 1;    
const jump = 20; 
const ground =40;
let x,y,vy;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width*0.1; 
  y = height-ground-size/2;
  vy=0;
}

function draw(){
  background(160, 192, 255);

  //ゴールライン
  fill(0);
  rect(width*0.95,height*0.3 ,width*0.02, height*0.7);

  //お邪魔ブロック
  let gy=height-ground;
  fill(0);
  for(let i = 0; i < 3; i++){
    rect(i * 300+400, gy-i*40-50, 50, i*40+50);}

  //地面
  fill(64, 192, 64);
  rect(0,gy,width,gy);
  
  //操作キャラ
  fill(255,255,255)
  ellipse(x,y,size,size);
  

  
y += vy;
  
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }

  //ワープ判定
  for(let i = 0; i < 3; i++){
  let warpLeft = i*300+400-size/2;
  let warpRight = i*300+450+size/2;
  let warpTop = gy -i*40-50-size/2;
  let warpBottom = gy;

  if (warpLeft < x && x < warpRight &&
      warpTop < y && y < warpBottom) {
    x = width * 0.1;
    y = gy - size / 2;
  }}

  //ジャンプ判定
 if(y< height - ground - size / 2){
    vy += g;}
  else{
     vy = 0;
    y = height - ground - size / 2;
  }

  //ゴール演出
 if(x>=width*0.95){
  textSize(70); 
  textAlign(CENTER, CENTER); 
  text("GOAL!", width / 2, height / 2);
 }
}

//ジャンプ操作
function keyPressed(){
  if(key == " "){ 
  if(y >= height - ground - size / 2){
    vy = -jump;     
  }} 
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


