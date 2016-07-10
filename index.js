'use strict';


//
// Modules
let SVG = require('./svg');
let Flower = require('./flower');


//
// Settings
let strokeWidth = 1;
let strokeColor = 'black';
let fillColor = 'white';
let radius = 40;
let rings = 60;

let ppi = 300;
let width = 8.5 * ppi;
let height = 11 * ppi;

let centerX = width / 2;
let centerY = height / 2;


//
// Drawing
let svg = new SVG(width, height, strokeColor, strokeWidth, fillColor);

svg.writeRect({
    x: 0,
    y: 0,
    w: width,
    h: height
});

Flower
    .makeCircles(centerX, centerY, radius, rings)
    .forEach(circle => svg.writeCircle(circle));

Flower
    .makeCircles(centerX, centerY, radius, rings, true)
    .forEach(circle => svg.writeCircle(circle));


//
// Output
let output = svg.toString();
let fs = require(`fs`);
let exec = require('child_process').exec;
let destinationSVG = `${__dirname}/test.svg`;
let destinationPDF = `${__dirname}/test.pdf`;
fs.writeFile(destinationSVG, output, err => {
    if (err) return console.log(err);
    else console.log(destinationSVG);
    exec(`cairosvg ${destinationSVG} -o ${destinationPDF}`, err => {
        if (err) return console.log(err);
        else console.log(destinationPDF);
    });
});