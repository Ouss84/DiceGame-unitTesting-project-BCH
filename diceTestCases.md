# Test cases for the Dice class

## Test cases for the constractor

UpperBound 2: dots 1,2
UpperBound 3: dots 1,2,3

UpperBound 7: dots 1,2,3,4,5,6,7

new Dice (2) creates Dice with upper bound 2
new Dice () creates Dice with upper bound 6
new Dice(12)
new Dice (6)
new Dice (20)
test with all upper bounds 2..20

Check that dot count is set to 0.

new Dice ('s') throws `'Upper bound must be an integer'`
new Dice ('s') throws `'Upper bound must be an integer'`

new Dice(21) throws `'Upper bound too big'`
new Dice(100) throws `'Upper bound too big'`

new Dice(1) throws `'Upper bound too small'`
new Dice(-4) `'Upper bound too small'`

## test cases for roll()

dice = new Dice(upperBound)
dice.roll()
check if 1 <= dot count <= upperBount

dice = new Dice()
dice.roll()
check if 1 <= dot count <= 6

## test cases for toString()

- Roll the dice and then compare the dots to the string returned from toString method.
- If not rolled yet, then should return text `'Not rolled yet'`
