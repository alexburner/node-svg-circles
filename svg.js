'use strict';

module.exports = class SVG {
    constructor (width, height, strokeColor, strokeWidth, fillColor) {
        this.open = `
            <svg
                x="0"
                y="0"
                width="${width}"
                height="${height}"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
            >
        `;
        this.content = '';
        this.close = '</svg>';
        this.circleStyle = `
            style="
                fill:transparent;
                stroke:${strokeColor};
                stroke-width:${strokeWidth}
            "
        `;
        this.rectStyle = `
            style="
                fill:${fillColor};
            "
        `;
    }

    toString() {
        return this.open + this.content + this.close;
    }

    writeCircle(circle) {
        this.content += `
            <circle
                cx="${circle.cx}"
                cy="${circle.cy}"
                r="${circle.r}"
                ${this.circleStyle}
            />
        `;
    }

    writeRect(rect) {
        this.content += `
            <rect
                x="${rect.x}"
                y="${rect.y}"
                width="${rect.w}"
                height="${rect.h}"
                ${this.rectStyle}
            />
        `;
    }
}