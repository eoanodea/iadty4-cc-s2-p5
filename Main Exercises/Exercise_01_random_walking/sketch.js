/**
 * File: sketch.js
 * Project: random_walking
 * Version <<projectversion>>
 * File Created: Tuesday, 19th January 2021 2:19:19 pm
 * Author: Eoan O'Dea (eoan@web-space.design)
 * -----
 * File Description:
 * Last Modified: Wednesday, 20th January 2021 9:32:42 am
 * Modified By: Eoan O'Dea (eoan@web-space.design>)
 * -----
 * Copyright 2021 WebSpace, WebSpace
 */

var xPos;
var yPos;
var stepSize = 5;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);

  xPos = 200;
  yPos = 200;
}

function draw() {
  let speed = map(mouseX, 0, width, 2, 40);
  let diam = map(mouseY, 0, height, 1, 10);

  for (let x = 0; x < speed; x++) {
    fill(255, 50);
    noStroke();
    const ranNumX = Math.round(random(-1, 1));
    const ranNumY = Math.round(random(-1, 1));
    xPos += ranNumX * stepSize;
    yPos += ranNumY * stepSize;

    ellipse(xPos, yPos, diam, diam);
  }
  checkBoundries();
}

function checkBoundries() {
  if (yPos > window.innerHeight || yPos < 0) {
    yPos = window.innerHeight / 2;
  }
  if (xPos > window.innerWidth || xPos < 0) {
    xPos = 0;
  }
}
