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

let font;
let path;
let fontPath;
let tracker = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
  opentype.load("./assets/fonts/DotGothic16-Regular.otf", function (err, f) {
    if (err) return console.log("Error! ", err);

    font = f;
  });
}

function draw() {
  if (!font) return;

  translate(0, 500);

  fontPath = font.getPath("iadt", 0, 0, 300);

  path = new g.Path(fontPath.commands);
  path = g.resampleByLength(path, 30);
  pathArray = path.commands;

  // beginShape();
  // for (let i = 0; i < fontPath.commands.length; i++) {
  //   fill(0, 255, 0);
  //   noStroke();
  //   // const element = fontPath.commands[i];
  //   vertex(fontPath.commands[i].x, fontPath.commands[i].y);
  // }
  // endShape();

  beginShape();
  for (let i = tracker; i < pathArray.length; i++) {
    if (pathArray[i].type === "Z") {
      tracker = i + 1;
      break;
    } else {
      // fill(255, 0, 0);
      // noStroke();
      vertex(pathArray[i].x, pathArray[i].y);
    }
  }
  endShape(CLOSE);
}
