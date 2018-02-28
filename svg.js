var svg = document.getElementById("svg");
var clearButton = document.getElementById("clear");
var prevX = -1;
var prevY = -1;

var drawCircles = function(e) {
    var c1 = document.createElementNS("", "circle");
    c1.setAttribute('cx', e.offsetX);
    c1.setAttribute('cy', e.offsetY);
    c1.setAttribute('r', "20");
    c1.setAttribute('fill', "#BEEEEF");
    svg.appendChild(c1);
};

var clear = function(e) {
    
};

svg.addEventListener("click", drawCircles);
clearButton.addEventListener("click", clear);
