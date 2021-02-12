/**
 * File: sketch.js
 * Project: Exercise_02_random_walking_extended
 * Version <<projectversion>>
 * File Created: Wednesday, 20th January 2021 9:40:55 am
 * Author: Eoan O'Dea (eoan@web-space.design)
 * -----
 * File Description:
 * Last Modified: Friday, 12th February 2021 4:38:47 pm
 * Modified By: Eoan O'Dea (eoan@web-space.design>)
 * -----
 * Copyright 2021 WebSpace, WebSpace
 */

let points = [];
let radius = 50;
let minRadius = 5,
  maxRadius = 15;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  background(0);

  points.push(new Point(width / 2, height / 2, null));
  points.push(new Point(width / 2, height / 2, 0));
}

function draw() {
  background(0);
  for (let i = 0; i < points.length; i++) {
    points[i].render();
  }
  if (points[points.length - 1].isFinished()) {
    points.push(
      new Point(random(0, width), random(0, height), points.length - 1)
    );
  }
}
