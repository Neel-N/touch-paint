var last_position_x, last_position_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


color="Pink";
width_of_line=5;


var width=screen.width;
var new_width=screen.width-70;
var new_height=screen.height-300;
if(width<992){
 document.getElementById("myCanvas").width=new_width;
 document.getElementById("myCanvas").height=new_height;
 document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    console.log("My_Touchstart");
    color=document.getElementById("color").value;
    width_of_line=document.getElementById(Width_of_line).value;

    last_position_x=e.touches[0].clientX-canvasoffsetLeft;
    last_position_y=e.touchest[0].clientY-canvasoffsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    console.log("My_Touchmove");
    current_position_of_mouse_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.touches[0].clientY-canvasoffsetTop;

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;


console.log("Last position of x and y coordinates=");
console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
ctx.moveTo(last_position_of_x, last_position_of_y);

console.log("Current position of x and y coordinates=");
console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
ctx.stroke();

last_position_of_x = current_position_of_mouse_x;
last_position_y = current_position_of_mouse_y;
}
function clear_drawing(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}


