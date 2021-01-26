/**
 * File: sketch.js
 * Project: Exercise_02_random_walking_extended
 * Version <<projectversion>>
 * File Created: Wednesday, 20th January 2021 9:40:55 am
 * Author: Eoan O'Dea (eoan@web-space.design)
 * -----
 * File Description:
 * Last Modified: Wednesday, 20th January 2021 10:29:04 am
 * Modified By: Eoan O'Dea (eoan@web-space.design>)
 * -----
 * Copyright 2021 WebSpace, WebSpace
 */

var xPos;
var yPos;
var diameter = 1;
var stepSize = 2;
var optionsX = [-1, 0, 1, 1];
var optionsY = [-1, 0, 1, 1];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);

  xPos = 0;
  yPos = 0;
}

function draw() {
  // let speed = map(mouseX, 0, width, 2, 40);
  // let diam = map(mouseY, 0, height, 1, 10);

  for (let x = 0; x < 2; x++) {
    fill(255, 50);
    noStroke();
    const ranNumX = round(random(0, optionsX.length - 1));
    const ranNumY = round(random(0, optionsY.length - 1));

    xPos += optionsX[ranNumX] * stepSize;
    yPos += optionsY[ranNumY] * stepSize;

    ellipse(xPos, yPos, diameter, diameter);
  }
  checkBoundries();
}

function checkBoundries() {
  if (yPos > window.innerHeight || yPos < 0) {
    yPos = 0;
  }

  if (xPos > window.innerWidth || xPos < 0) {
    xPos = 0;
  }
}

function keyReleased() {
  if (keyCode == DELETE || keyCode == BACKSPACE) {
    clear();
    background(0);
  }

  switch (key) {
    case "1":
      // drawMode = 1;
      stepSize = 1;
      diameter = 1;
      break;
    case "2":
      // drawMode = 2;
      stepSize = 5;
      diameter = 1;
      break;
    case "3":
      // drawMode = 3;
      stepSize = 10;
      diameter = 5;
      break;
    default:
      break;
  }
}
