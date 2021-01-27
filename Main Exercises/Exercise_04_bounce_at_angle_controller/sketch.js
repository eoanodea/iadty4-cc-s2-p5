/**
 * File: sketch.js
 * Project: Exercise_02_random_walking_extended
 * Version <<projectversion>>
 * File Created: Wednesday, 20th January 2021 9:40:55 am
 * Author: Eoan O'Dea (eoan@web-space.design)
 * -----
 * File Description:
 * Last Modified: Tuesday, 26th January 2021 2:59:16 pm
 * Modified By: Eoan O'Dea (eoan@web-space.design>)
 * -----
 * Copyright 2021 WebSpace, WebSpace
 */

var xPos = 250;
var yPos = 250;

var angle = 0;
var stepSize = 0.1;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
}

function draw() {
  // let speed = map(mouseX, 0, width, 2, 10);

  for (let x = 0; x < 5; x++) {
    stroke(255);
    strokeWeight(10);

    point(xPos, yPos);

    xPos += cos(radians(angle)) + stepSize;
    yPos += sin(radians(angle)) + stepSize;
  }

  if (
    yPos > window.innerHeight ||
    yPos < 0 ||
    xPos > window.innerWidth ||
    xPos < 0
  ) {
    angle = getRandomAngle(xPos, yPos);
  }
}

function getRandomAngle(_x, _y) {
  const angle = floor(random(0, 180));

  if (_y < 0) return angle;

  if (_y > height) return angle + 180;

  if (_x > width) return angle + 90;

  if (_x < 0) return angle + 270;
}
