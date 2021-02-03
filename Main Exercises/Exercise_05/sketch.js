/**
 * File: sketch.js
 * Project: Exercise_02_random_walking_extended
 * Version <<projectversion>>
 * File Created: Wednesday, 20th January 2021 9:40:55 am
 * Author: Eoan O'Dea (eoan@web-space.design)
 * -----
 * File Description:
 * Last Modified: Wednesday, 27th January 2021 11:00:44 am
 * Modified By: Eoan O'Dea (eoan@web-space.design>)
 * -----
 * Copyright 2021 WebSpace, WebSpace
 */

var xPos = 250;
var yPos = 250;

var angle = 0;
var stepSize = 0.1;

var angleCount = 3;

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
  const direction = floor(random(angleCount * -1, angleCount));
  const angle = floor((180 / direction) * 0.5);
  //90 / 2 = 45 + angleCount * 10

  console.log("direction", angle);
  //floor random angle + add 0.5 to it

  if (_y < 0) return angle;

  if (_y > height) return angle + 180;

  if (_x > width) return angle + 90;

  if (_x < 0) return angle + 270;
}
