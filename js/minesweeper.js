function make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

var grid;
var cols;
var rows;
var w = 80;
var totalMines = 1;
var safeClicks = [];
var totalLives = 5;

function setup() {
  createCanvas(401, 401);
  cols = floor(width / w);
  rows = floor(height / w);
  grid = make2DArray(cols, rows);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j, w);
    }
  }
  var options = [];
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      options.push([i, j]);
    }
  }
  for (var n = 0; n < totalMines; n++) {
    var index = floor(random(options.length));
    var choice = options[index];
    var i = choice[0];
    var j = choice[1];
    // Deletes that spot so it's no longer an option
    options.splice(index, 1);
    grid[i][j].mine = true;
  }


  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].countMines();
    }
  }

}

function gameLost() {
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].revealed = true;
    }
  }
}

function startOver() {
  totalLives -= 1;
  if (totalLives == 0) {
    alert("You lose a life!");
  } else {
    alert("You lost! Lives remaining:" + totalLives);
    setup();
    safeClicks = [];
  }
}

function gameWon() {
  alert("You won");
  $("#helNextDiv").show();
}


function mousePressed() {
  console.log(safeClicks.length);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      if (grid[i][j].contains(mouseX, mouseY)) {
        grid[i][j].reveal();
        if (grid[i][j].mine) {
          gameLost();
          startOver();
        }
      }
    }
  }
}

function draw() {
  background(255);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }
}
