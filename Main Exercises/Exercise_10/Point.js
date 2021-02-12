/**
 * File: Point.js
 * Project: Exercise_10
 * Version <<projectversion>>
 * File Created: Friday, 12th February 2021 3:50:34 pm
 * Author: Eoan O'Dea (eoan@web-space.design)
 * -----
 * File Description:
 * Last Modified: Friday, 12th February 2021 4:37:37 pm
 * Modified By: Eoan O'Dea (eoan@web-space.design>)
 * -----
 * Copyright 2021 WebSpace, WebSpace
 */

class Point {
  constructor(_x, _y, _root) {
    this.position = createVector(_x, _y);
    // this.root = _root;
    this.rootI = _root;
    this.setPosition = this.position;
    this.distance =
      this.rootI && this.setPosition.dist(points[this.rootI].position);
    this.radius = round(random(minRadius, maxRadius));
    this.amount = 0;
    this.finished = false;
  }

  render() {
    fill(255);

    if (this.rootI && this.distance > this.radius + points[this.rootI].radius) {
      this.amount += 0.01;

      this.setPosition = p5.Vector.lerp(
        this.position,
        points[this.rootI].setPosition,
        this.amount
      );
      this.distance = this.setPosition.dist(points[this.rootI].setPosition);
    } else {
      //   this.finsihed = true;
      this.setIsFinished();
      //   console.log("yes!", this.finished);
    }

    ellipse(this.setPosition.x, this.setPosition.y, 20, 20);
  }

  setIsFinished() {
    this.finished = true;
  }

  isFinished() {
    return this.finished;
  }
}
