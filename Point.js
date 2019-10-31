class Point {
    constructor(x, y, color, sens, behind) {
        this.y = y;
        this.x = x;
        this.color = color;
        this.behind = behind;
        this.sens = sens;
    }

    update = () => {
        var x = Math.abs(width / 2 - this.x);
        var minAcc = 0.2;
        var maxAcc = 1;
        var distFromMid = Math.abs((width / 2) - x);
        var distMax = width / 2;
        var accRange = maxAcc - minAcc;
        var acceleration = (distFromMid * accRange / distMax) + minAcc;
        if (acceleration > maxAcc * 2 / 3)
            acceleration = maxAcc * 2 / 3;

        if (this.behind && this.sens || !this.behind && !this.sens)
            this.x -= acceleration;
        else
            this.x += acceleration;
        if (this.x >= 200 || this.x <= 0) {
            if (this.x >= 200)
                this.x = 200;
            else
                this.x = 0;
            this.behind = !this.behind;
        }
    }

    draw = () => {
        var x = Math.abs(width / 2 - this.x);
        var minalpha = 50;
        var maxalpha = 255;
        var medalpah = (minalpha + maxalpha) / 2;
        var distance = this.behind ? Math.abs(medalpah - minalpha) : Math.abs(medalpah - maxalpha);
        var initalpha = this.behind && this.sens || !this.behind && !this.sens ? minalpha : maxalpha;
        context.globalAlpha = (initalpha - (x * distance / (width / 2)) * (this.behind && this.sens || !this.behind && !this.sens ? -1 : 1)) / 255;
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(canvas.width / 2 - width / 2 + this.x, this.y, pointRadius, 0, Math.PI * 2);
        context.closePath();
        context.fill();
    }
}