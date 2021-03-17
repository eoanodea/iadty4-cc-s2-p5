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
let originalPos = [];

let radius = 150;
let numOfSegments = 100;

let stepX = 0.8;
let stepY = 0.8;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  background(0);

  let angle = radians(360 / numOfSegments);

  for (let i = 0; i < numOfSegments; i++) {
    let xPos = cos(angle * i) * radius;
    let yPos = sin(angle * i) * radius;

    points.push(createVector(xPos, yPos));
  }

  originalPos = points;
}

function draw() {
  background(0);

  push();
  translate(width / 2, height / 2);
  vertObjects = [];
  stroke("#F14719");
  fill("#F14719");
  beginShape();

  curveVertex(points[points.length - 1].x, points[points.length - 1].y);

  for (var i = 0; i < points.length; i++) {
    const range = 0.2;
    const spiciness = 20;

    const offsetX = map(random([-1, 1]), -1, 1, -range, range);
    const offsetY = map(random([-1, 1]), -1, 1, -range, range);

    if (
      points[i].y + offsetX < originalPos[i].x + range * spiciness &&
      points[i].x + offsetX > originalPos[i].x - range * spiciness
    ) {
      points[i].x += offsetX;
    }

    if (
      points[i].y + offsetY < originalPos[i].y + range * spiciness &&
      points[i].y + offsetY > originalPos[i].y - range * spiciness
    ) {
      points[i].y += offsetY;
    }

    curveVertex(points[i].x, points[i].y);
    // curveVertex(points[0].x, points[0].y);
    // curveVertex(points[38].x, points[38].y);

    vertObjects.push(createVector(points[i].x, points[i].y));
  }
  curveVertex(points[0].x, points[0].y);
  curveVertex(points[1].x, points[1].y);

  endShape(CLOSE);
  pop();
}
