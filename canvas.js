
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d");

let penColor = "black";
let penWidth = "2";
let drawing = false;

let strokeArray = [];
let i = -1;

const backgroundImg = new Image();
backgroundImg.src= 'eyes.png';



canvas.addEventListener("mousedown", startDrawing, false);
canvas.addEventListener("mousemove", draw, false);

canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

function drawBackground() {

    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);

}

function startDrawing(event) {

    drawing = true;
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);


}

function draw(event){

    if (drawing) {
        ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);

        ctx.strokeStyle = penColor;
        ctx.lineWidth = penWidth;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        ctx.stroke();
    }

}

function stop (event) {

    if (drawing) {

        ctx.stroke();
        ctx.closePath();
        drawing = false;

    }

    if (event.type != 'mouseout') { 
    strokeArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    i += 1;

    }

}


function clearCanvas () {

    drawBackground();
    strokeArray = [];
    i = -1;

}

function undoStroke () {

    if (i <= 0 ) {

        clearCanvas();

    }

    else {

        i -= 1;
        strokeArray.pop();
        ctx.putImageData(strokeArray[i], 0, 0);

    }
}

