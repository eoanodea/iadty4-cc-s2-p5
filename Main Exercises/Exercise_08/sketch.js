/**
 * File: sketch.js
 * Project: Exercise_02_random_walking_extended
 * Version <<projectversion>>
 * File Created: Wednesday, 20th January 2021 9:40:55 am
 * Author: Eoan O'Dea (eoan@web-space.design)
 * -----
 * File Description:
 * Last Modified: Tuesday, 9th February 2021 3:03:34 pm
 * Modified By: Eoan O'Dea (eoan@web-space.design>)
 * -----
 * Copyright 2021 WebSpace, WebSpace
 */

let points = [];

let radius = 150;
let numOfSegments = 50;

let stepX = 3;
let stepY = 5;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);

  let angle = radians(360 / numOfSegments);

  for (let i = 0; i < numOfSegments; i++) {
    let xPos = cos(angle * i) * radius;
    let yPos = sin(angle * i) * radius;

    points.push(createVector(xPos, yPos));
  }

  push();

  translate(0, height / 2);

  stroke(255);
  beginShape();

  // First Control Point (Not Drawn)

  curveVertex(points[points.length - 1].x, points[points.length - 1].y);

  for (let i = 0; i < points.length; i++) {
    const multiplier = round(random(-1, 0));
    curveVertex(
      (points[i].x = i * 25),
      (points[i].y = i * (multiplier === -1 ? -1 : 1))
    );
  }

  endShape();
  pop();
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    points[i].y += cos(frameCount / 150) * 0.8;
    points[i].x += sin(frameCount / 100) * 0.8;
  }
}
