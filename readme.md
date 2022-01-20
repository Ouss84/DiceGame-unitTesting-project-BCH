# Dice class (API)

This is a dice class for dice games. Dice holds the number of dots. The number of dots is between 1 and given upper bound(included).
The maximun upper bound is 20. The minimum upper bound is 2.
If the dice hasn't been rolled, the number of dots is 0.
After the dice has been rolled, the dot count can't become zero again.

## Operations

### **constractor**

- Initializes the dice with upper bound that is passed as a parameter.
- If no upperBound is given, the default upper bound will be 6.
- Initializes dot count to 0.

- If upperBound is not an integer, throw an exception
  `'Upper bound must be an integer'`

- If upper bound is not between 2 and 20, an exception is thrown:
  - upperBound >20: `'Upper bound too big'`
  - upperBound <2: `'Upper bound too small'`

### Methods

#### **roll()**

- Roll the dice
- When rolled, the dot count become a random number between 1 and upper bound (included).

- Return nothing.

#### **toString()**

- Return dot count as a string. For exemple:`'4'`
- If dice hasn't been rolled yet, returns a text`'Not rolled yet'`

### Getters

#### **dots**

- returns the number of dots.

#### **minimumValue**

- returns the minimum number of dots. It should be 1.

#### **maximumValue**

- Returns the upper bound of the dice.
