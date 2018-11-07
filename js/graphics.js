let xposition1 = 0;
let yposition1 = 0;
let xposition2 = 0;
let yposition2 = 0;
let xx1,xx2,yy1,yy2 =0;
$(document).ready(function () {


});
function draw(type){
    $("#mainCanvas").mousedown(function () {
        xposition1 = event.x;
        yposition1 = event.y;
    });
    $("#mainCanvas").mousedown(function () {
        xposition2 = event.x;
        yposition2 = event.y;
    });
    mainCanvasDraw = mainCanvas.getContext('2d');
    if(type == "circle"){

        mainCanvasDraw = mainCanvas.getContext('2d');
        xx1 , xx2, yy1 , yy2 =0;
        $("#mainCanvas").mousedown(function () {
            xx1 = event.x - 127;
            yy1 = event.y -89;
            mainCanvasDraw.beginPath();
            // alert( xx1 + " " + yy1)
        });


        $("#mainCanvas").mouseup(function () {
            xx2 = event.x -127;
            yy2 = event.y -89;
            radius = (xx2 - yy2)/Math.PI;
            mainCanvasDraw.arc(xx1,yy1,radius,0,2*Math.PI);
            mainCanvasDraw.stroke();

        });
    }

    else if(type == "square"){
        alert(type);
        mainCanvasDraw = mainCanvas.getContext('2d');
        xx1 , xx2, yy1 , yy2 =0;
        $("#mainCanvas").mousedown(function () {
            xx1 = event.x - 127;
            yy1 = event.y -89;
            // alert( xx1 + " " + yy1)
        });


        $("#mainCanvas").mouseup(function () {
            xx2 = event.x -127;
            yy2 = event.y -89;
            mainCanvasDraw.rect(xx1,yy1,xx2 -xx1,yy2-yy1);
            mainCanvasDraw.stroke();

        });
    }

    else if(type == "line"){
        alert(type);
        mainCanvasDraw = mainCanvas.getContext('2d');
        xx1 , xx2, yy1 , yy2 =0;
        $("#mainCanvas").mousedown(function () {
            xx1 = event.x - 127;
            yy1 = event.y -89;
            // alert( xx1 + " " + yy1)
        });


        $("#mainCanvas").mouseup(function () {
            xx2 = event.x -127;
            yy2 = event.y -89;
            mainCanvasDraw.moveTo(xx1,yy1);
            $("#mainCanvas").mousemove(function () {
                mainCanvasDraw.lineTo(xx2,yy2);
                mainCanvasDraw.stroke();

            });

        });





        // $("#mainCanvas").mouseup(function () {
        //    mainCanvasDraw.stop();
        // });

    }
}