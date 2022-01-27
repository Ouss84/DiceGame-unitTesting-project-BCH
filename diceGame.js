"use strict";

const Dice = require("./dice");

const diceA = new Dice();
const diceB = new Dice();

console.log("diceA:", diceA.toString());
console.log("diceB:", diceB.toString());
console.log(`Dice B status: ${diceB}`);

// diceB.roll();
// console.log(`dice B dots: ${diceB}`);
const wins = {
  Awins: 0,
  Bwins: 0,
  ties: 0,
};
for (let i = 0; i < 10; i++) {
  diceA.roll();
  diceB.roll();

  console.log("dice A dots:", diceA.dots);
  console.log("dice B dots:", diceB.toString());
  console.log(`dice B dots: ${diceB}`);

  if (diceA.dots === diceB.dots) {
    console.log("same dots");
    wins.ties++;
  } else if (diceA.dots > diceB.dots) {
    console.log("A wins");
    wins.Awins++;
  } else {
    console.log("B wins");
    wins.Bwins++;
  }
}

console.log("###### game statistics ######");
console.log(`Wins for A:${wins.Awins}
wins for B ${wins.Bwins}
ties: ${wins.ties}`);

const coin = new Dice(2);
coin.roll();
console.log(`result: ${coin.dots === 1 ? "heads" : "tails"}`);

const diceArray = [new Dice(), new Dice(), new Dice()];

diceArray.forEach((dice) => console.log(dice.toString()));
