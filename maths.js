'use strict';

module.exports = class Maths {
    static getFlowerCount(rings) {
        // center circle
        let count = 1;
        // each ring adds i * 6 more circles to total
        for (let i = 1; i < rings; i++) count += i * 6;
        // hooray
        return count;
    }

    static rotatePoint (point, origin, angle) {
        // via http://stackoverflow.com/a/17411276/3717556
        let x = point[0];
        let y = point[1];
        let ox = origin[0];
        let oy = origin[1];
        let radians = (Math.PI / 180) * angle;
        let cos = Math.cos(radians);
        let sin = Math.sin(radians);
        let nx = (cos * (x - ox)) + (sin * (y - oy)) + ox;
        let ny = (cos * (y - oy)) - (sin * (x - ox)) + oy;
        point[0] = Maths.roundish(nx);
        point[1] = Maths.roundish(ny);
    }

    static roundish (number, decimals) {
        return Number(number.toFixed(decimals || 3));
    }
};
