# Writing SVG circles

Requires Node.js version 5+

Run like `$ node index.js`

If you don't have `cairosvg` installed remove this chunk from `index.js`:
```javascript
exec(`cairosvg ${destinationSVG} -o ${destinationPDF}`, err => {
    if (err) return console.log(err);
    else console.log(destinationPDF);
});
```
