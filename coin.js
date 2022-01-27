"use strict";

const Dice = require("./dice");

class Coin extends Dice {
  constructor() {
    super(2);
  }
  flip() {
    this.roll();
  }
  toString() {
    if (this.dotCount === 0) {
      return "Not flipped yet";
    }
    return this.dotCount === 1 ? "heads" : "tails";
  }
}

const coin = new Coin();
console.log(coin);
console.log(coin.toString());
coin.flip();
console.log(coin.toString());
