var svg = document.getElementById("svg");
var clearButton = document.getElementById("clear");
var prevX = -1;
var prevY = -1;

var drawCircles = function(e) {
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute('cx', e.offsetX);
    c1.setAttribute('cy', e.offsetY);
    c1.setAttribute('r', "20");
    c1.setAttribute('fill', "#BEEEEF");
    svg.appendChild(c1);
    if (prevX != -1){
    var c2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        c2.setAttribute('stroke', "#000000");
        c2.setAttribute('stroke-width', "1");
        c2.setAttribute('x1', prevX);
        c2.setAttribute('y1', prevY);
        c2.setAttribute('x2', e.offsetX);
        c2.setAttribute('y2', e.offsetY);
        svg.appendChild(c2);
    };
    prevX = e.offsetX;
    prevY = e.offsetY;
};

var clear = function(e) {
    while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
    };
    prevX = -1;
    prevY = -1;
};

svg.addEventListener("click", drawCircles);
clearButton.addEventListener("click", clear);
