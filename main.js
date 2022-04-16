canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
nasa_images_array=["nasa 1.jpg" , "nasa 2.jpg" , "nasa 3.jpg" , "nasa 4.jpg"];
randomnumber=Math.floor(Math.random()*4);
console.log(randomnumber);
roverwidth=100;
roverheight=90;
backgrond_image=nasa_images_array[randomnumber];
console.log("background_image="+backgrond_image);
rover_image="rover.png";
rover_x=10;
rover_y=10;
 
function add(){
    backgrond_imgtag=new Image();
    backgrond_imgtag.onload=uploadbackground;
    backgrond_imgtag.src=backgrond_image;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_image;
}

function uploadbackground(){
    ctx.drawImage(backgrond_imgtag, 0,0,canvas.width,canvas.height);

}

function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,roverwidth, roverheight);
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e){
keypressed=e.keyCode;
console.log(keypressed);

if(keypressed=="38")
{
    up();
    console.log("up");

}
if(keypressed=="40")
{
    down();
    console.log("down");
    
}
if(keypressed=="37")
{
    left();
    console.log("left");
    
}
if(keypressed=="39")
{
    right();
    console.log("right");
    
}


}

function up(){
if(rover_y>=0){
    rover_y=rover_y-10;
    console.log("when up arrow is pressed, x="+rover_x+ "y="+rover_y);
    uploadbackground();
    uploadrover();

}
}

function down(){
    if(rover_y<=500){
    rover_y=rover_y+10;
    console.log("when down arrow is pressed, x="+rover_x+ "y="+rover_y);
    uploadbackground();
    uploadrover();
    }
}

function left(){
    if(rover_x>=0){
    rover_x=rover_x-10;
    console.log("when left arrow is pressed, x="+rover_x+ "y="+rover_y);
    uploadbackground();
    uploadrover();
    }
}

function right(){
    if(rover_x<=700){
    rover_x=rover_x+10;
    console.log("when right arrow is pressed, x="+rover_x+ "y="+rover_y);
    uploadbackground();
    uploadrover();
    }
}



