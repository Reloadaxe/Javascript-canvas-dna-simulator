createPoints = (color, pointRadius, height, width, firstPoints) => {
    let points = [];
    let behind = false;
    let x = 0;
    for (let y = 0; 20 + y * pointRadius < height; y++) {
        points.push(new Point(!firstPoints ? width - x : x, 20 + y * pointRadius, color, firstPoints, behind));
        if (behind && x <= 0 || !behind && x >= width)
            behind = !behind;
        if (behind) {
            x -= pointRadius;
        } else {
            x += pointRadius;
        }
    }
    return points;
}