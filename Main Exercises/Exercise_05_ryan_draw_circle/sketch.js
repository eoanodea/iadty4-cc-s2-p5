/**
 * File: sketch.js
 * Project: Exercise_02_random_walking_extended
 * Version <<projectversion>>
 * File Created: Wednesday, 20th January 2021 9:40:55 am
 * Author: Eoan O'Dea (eoan@web-space.design)
 * -----
 * File Description:
 * Last Modified: Wednesday, 3rd February 2021 9:56:18 am
 * Modified By: Eoan O'Dea (eoan@web-space.design>)
 * -----
 * Copyright 2021 WebSpace, WebSpace
 */

let centerPoint;
let angle = 25;
let angleInRadians;
let radius = 150;

let vectorArray = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  centerPoint = createVector(250, 250);
  angleInRadians = angle * (PI / 180);

  drawCircle();
}

function drawCircle() {
  push();
  translate(250, 250);
  point(centerPoint.x, centerPoint.y);

  beginShape();

  for (let i = 0; i <= TWO_PI; i += angleInRadians) {
    pointToDraw = createVector(cos(i) * radius, sin(i) * radius);
    vectorArray.push(pointToDraw);
    stroke("purple"); // Change the color
    strokeWeight(10);

    line(
      point(pointToDraw.x, pointToDraw.y),
      point(pointToDraw.x + 1, pointToDraw.y + 1)
    );

    // curveVertex(pointTo/Draw.x, pointToDraw.y);
  }
  endShape(CLOSE);

  pop();
}

function johnDrawCircle() {
  push();
  translate(250, 250);
  point(centerPoint.x, centerPoint.y);

  beginShape();

  for (let i = 0; i <= TWO_PI; i += angleInRadians) {
    pointToDraw = createVector(cos(i) * radius, sin(i) * radius);
    vectorArray.push(pointToDraw);
    stroke("purple"); // Change the color
    strokeWeight(10);

    line(
      point(pointToDraw.x, pointToDraw.y),
      point(pointToDraw.x + 1, pointToDraw.y + 1)
    );

    // curveVertex(pointTo/Draw.x, pointToDraw.y);
  }
  endShape(CLOSE);

  pop();
}
