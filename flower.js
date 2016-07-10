'use strict';

let Maths = require('./Maths');

module.exports.makeCircles = (centerX, centerY, radius, rings, twist) => {
    let limit = Maths.getFlowerCount(rings);
    let count = 0;
    let circles = [];
    let exists = {};
    let queue = [];

    function addCircle(point) {
        if (count + 1 > limit) return;
        let cx = point[0];
        let cy = point[1];
        let id = `${cx},${cy}`;
        if (exists[id]) return;
        else exists[id] = true;
        circles.push({
            cx: cx,
            cy: cy,
            r: radius
        });
        queue.push(point);
        count++;
    }

    function addChildren(point) {
        for (let i = 0; i < 6; i++) {
            let angle = i * 60;
            let child = point.slice();
            if (twist) child[0] += radius;
            else child[1] += radius;
            Maths.rotatePoint(child, point, angle);
            addCircle(child);
        }
    }

    // plot first circle
    addCircle([centerX, centerY]);

    // plot children recursively, BFS style
    while (queue.length) addChildren(queue.shift());

    // hooray
    return circles;
};