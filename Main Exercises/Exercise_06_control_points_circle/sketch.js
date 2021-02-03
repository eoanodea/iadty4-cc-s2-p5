/**
 * File: sketch.js
 * Project: Exercise_02_random_walking_extended
 * Version <<projectversion>>
 * File Created: Wednesday, 20th January 2021 9:40:55 am
 * Author: Eoan O'Dea (eoan@web-space.design)
 * -----
 * File Description:
 * Last Modified: Wednesday, 3rd February 2021 10:47:33 am
 * Modified By: Eoan O'Dea (eoan@web-space.design>)
 * -----
 * Copyright 2021 WebSpace, WebSpace
 */

let radius = 150;
let numOfSegments = 16;

let points = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);

  let angle = radians(360 / numOfSegments);

  for (let i = 0; i < numOfSegments; i++) {
    let xPos = cos(angle * i) * radius;
    let yPos = sin(angle * i) * radius;

    points.push(createVector(xPos, yPos));
  }
}

function draw() {
  background(0);
  push();
  translate(width / 2, height / 2);

  beginShape();

  for (let i = 0; i < points.length; i++) {
    fill(255, 0, 0);
    ellipse(points[i].x, points[i].y, 10, 10);
  }

  noFill();
  stroke(255);

  beginShape();

  // First Control Point (Not Drawn)
  curveVertex(points[points.length - 1].x, points[points.length - 1].y);

  for (let i = 0; i < points.length; i++) {
    curveVertex(points[i].x, points[i].y);
  }

  curveVertex(points[0].x, points[0].y);
  curveVertex(points[1].x, points[1].y);

  endShape();
  stroke(255);

  pop();
}
