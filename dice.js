"use strict";

module.exports = class Dice {
  constructor(upperBound = 6) {
    if (!Number.isInteger(upperBound)) {
      throw new Error("Upper bound must be an integer");
    }
    if (upperBound > 20) {
      throw new Error("Upper bound too big");
    }
    if (upperBound < 2) {
      throw new Error("Upper bound too small");
    }
    this.dotCount = 0;
    this.upperBound = upperBound;
  }
  get minimumValue() {
    return 1;
  }
  get maximumValue() {
    return this.upperBound;
  }
  get dots() {
    return this.dotCount;
  }
  roll() {
    this.dotCount = Math.ceil(Math.random() * this.upperBound);
  }
  toString() {
    // if (this.dotCount === 0) {
    //   return "Not rolled yet";
    // } else {
    //   return `${this.dots}`;
    // }
    return this.dotCount === 0 ? "Not rolled yet" : `${this.dots}`;
  }
};
