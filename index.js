var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 10;
var context = canvas.getContext("2d");

var pointRadius = 20; // Rayon des boules d'ADN
context.lineWidth = pointRadius / 2;

var height = 1000; // Hauteur de l'ADN
var width = 200; // Largeur de l'ADN
var points1 = createPoints("blue", pointRadius, height, width, true);
var points2 = createPoints("red", pointRadius, height, width, false);

update = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < points1.length; i++) {
        points1[i].draw();
        points1[i].update();
        points2[i].draw();
        points2[i].update();
        context.strokeStyle = points1[i].color;
        context.beginPath();
        context.moveTo(canvas.width / 2 - width / 2 + points1[i].x, points1[i].y);
        context.lineTo(canvas.width / 2 - width / 2 + (points2[i].x > points1[i].x ? points2[i].x + (points1[i].x - points2[i].x) / 2 :  points1[i].x + (points2[i].x - points1[i].x) / 2), points2[i].y);
        context.closePath();
        context.stroke();

        context.strokeStyle = points2[i].color;
        context.beginPath();
        context.moveTo(canvas.width / 2 - width / 2 + points2[i].x, points2[i].y);
        context.lineTo(canvas.width / 2 - width / 2 + (points1[i].x > points2[i].x ? points1[i].x + (points2[i].x - points1[i].x) / 2 :  points2[i].x + (points1[i].x - points2[i].x) / 2), points1[i].y);
        context.closePath();
        context.stroke();
    }
}

setInterval(update, 10);