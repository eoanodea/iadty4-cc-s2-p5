/**
 * File: sketch.js
 * Project: Exercise_02_random_walking_extended
 * Version <<projectversion>>
 * File Created: Wednesday, 20th January 2021 9:40:55 am
 * Author: Eoan O'Dea (eoan@web-space.design)
 * -----
 * File Description:
 * Last Modified: Tuesday, 9th February 2021 2:25:19 pm
 * Modified By: Eoan O'Dea (eoan@web-space.design>)
 * -----
 * Copyright 2021 WebSpace, WebSpace
 */

let points = [];

let radius = 150;
let numOfSegments = 16;

let stepX = 0.8;
let stepY = 0.8;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background("#F14719");

  let angle = radians(360 / numOfSegments);

  for (let i = 0; i < numOfSegments; i++) {
    let xPos = cos(angle * i) * radius;
    let yPos = sin(angle * i) * radius;

    points.push(createVector(xPos, yPos));
  }

  smooth(1);
}

function draw() {
  background("#F14719");

  push();
  translate(width / 2, height / 2);

  beginShape();

  stroke(0);
  fill(0);
  beginShape();

  // First Control Point (Not Drawn)
  curveVertex(points[points.length - 1].x, points[points.length - 1].y);

  for (let i = 0; i < points.length; i++) {
    curveVertex(points[i].x, points[i].y);
  }

  curveVertex(points[0].x, points[0].y);
  curveVertex(points[1].x, points[1].y);

  endShape();
  stroke(0);

  pop();

  for (let i = 0; i < points.length; i++) {
    points[round(random(0, points.length - 1))].x += random(-stepX, stepX);
    points[round(random(0, points.length - 1))].y += random(-stepY, stepY);
  }
}
