const container = document.getElementById('container');
const smallGrid = document.getElementById('btn-small-grid');
const mediumGrid = document.getElementById('btn-medium-grid');
const largeGrid = document.getElementById('btn-large-grid');
const clearGrid = document.getElementById('btn-clear-grid');
const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');

let drawMode = 0;
let num = 16;

newGrid(num);

function newGrid(num) {
  container.innerHTML = '';
  container.style.setProperty('--grid-rows', num);
  container.style.setProperty('--grid-cols', num);
  for (i = 0; i < num * num; i++) {
    let cell = document.createElement('div');
    cell.style.backgroundColor = '#fcfcfc';
    if (drawMode === 0) {
      cell.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = '#333';
      });
    } else if (drawMode === 1) {
      cell.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = randomColour();
      });
    } else {
      cell.addEventListener('mouseenter', (e) => {
        if (Number.isNaN(parseFloat(e.target.style.opacity))) {
          e.target.style.backgroundColor = '#333';
          e.target.style.opacity = 0.10;
        } else if (parseFloat(e.target.style.opacity) < 0.90) {
          e.target.style.backgroundColor = '#333';
          opacity = parseFloat(e.target.style.opacity) + 0.10;
          e.target.style.opacity = opacity;
        }
      });
    }
    container.appendChild(cell).className = 'grid-item';
    console.log("for function")
  }
}

function randomColour() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var rgbColour = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  return rgbColour;
}

smallGrid.addEventListener('click', function () {
  mediumGrid.className = '';
  largeGrid.className = '';
  smallGrid.classList.add('btn-active');
  num = 8;
  newGrid(num);
});

mediumGrid.addEventListener('click', function () {
  smallGrid.className = '';
  largeGrid.className = '';
  mediumGrid.classList.add('btn-active');
  num = 16;
  newGrid(num);
});

largeGrid.addEventListener('click', function () {
  smallGrid.className = '';
  mediumGrid.className = '';
  largeGrid.classList.add('btn-active');
  num = 32;
  newGrid(num);
});

clearGrid.addEventListener('click', function () {
  newGrid(num);
});

button1.addEventListener('click', function () {
  button3.className = '';
  button2.className = '';
  button1.classList.add('btn-active');
  container.className = '';
  drawMode = 0;
  newGrid(num);
});

button2.addEventListener('click', function () {
  button3.className = '';
  button1.className = '';
  button2.classList.add('btn-active');
  container.className = '';
  container.classList.add('colourBorder');
  drawMode = 1;
  newGrid(num);
});

button3.addEventListener('click', function () {
  button1.className = '';
  button2.className = '';
  button3.classList.add('btn-active');
  container.className = '';
  container.classList.add('additiveBorder');
  drawMode = 2;
  newGrid(num);
});