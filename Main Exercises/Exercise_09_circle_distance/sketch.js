/**
 * File: sketch.js
 * Project: Exercise_02_random_walking_extended
 * Version <<projectversion>>
 * File Created: Wednesday, 20th January 2021 9:40:55 am
 * Author: Eoan O'Dea (eoan@web-space.design)
 * -----
 * File Description:
 * Last Modified: Wednesday, 10th February 2021 11:06:02 am
 * Modified By: Eoan O'Dea (eoan@web-space.design>)
 * -----
 * Copyright 2021 WebSpace, WebSpace
 */

let points = [];
let radius = 50;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  points.push(createVector(100, 300));
  points.push(createVector(400, 200));
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    fill(255, 0, 0);
    noStroke();
    ellipse(points[i].x, points[i].y, radius, radius);
  }

  let resultant = p5.Vector.sub(points[0], points[1]);
  let rHeading = resultant.heading();
  let rDist = resultant.mag();
  let aDist = rDist - radius;

  let newX = cos(rHeading) * aDist;
  let newY = sin(rHeading) * aDist;

  fill(255, 255, 0);
  // console.log(newX, newY);
  ellipse(newX, newY, radius, radius);

  stroke(1);
  line(points[0].x, points[0].y, points[1].x, points[1].y);
}
