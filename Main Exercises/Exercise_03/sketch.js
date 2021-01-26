/**
 * File: sketch.js
 * Project: Exercise_02_random_walking_extended
 * Version <<projectversion>>
 * File Created: Wednesday, 20th January 2021 9:40:55 am
 * Author: Eoan O'Dea (eoan@web-space.design)
 * -----
 * File Description:
 * Last Modified: Tuesday, 26th January 2021 2:25:31 pm
 * Modified By: Eoan O'Dea (eoan@web-space.design>)
 * -----
 * Copyright 2021 WebSpace, WebSpace
 */

var xPos;
var yPos;
// var speed = 20;
var angle = 120;
var stepSize = 1;
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
  let speed = map(mouseX, 0, width, 2, 10);
  // let diam = map(mouseY, 0, height, 1, 10);

  for (let x = 0; x < 10; x++) {
    stroke(255);
    strokeWeight(10);

    point(xPos, yPos);

    xPos += cos(radians(angle)) + stepSize;
    yPos += sin(radians(angle)) + stepSize;
  }
}
