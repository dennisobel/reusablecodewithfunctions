// arguments are inputs to a function

// inside of a function definition, instead of empty parentheses, we add in some variable name

function greet(nickname) {
  console.log("Hi " + nickname);
}

// greet("dennis");

function square(num) {
  console.log(num * num);
}

// square(4);

function rollDice() {
  let roll = Math.floor(Math.random() * 6 + 1);

  console.log("Rolled: ", roll);
}

// call rollDice from inside another function

function throwDice(numOfTimes) {
  //   throw dice 6 times
  for (let i = 0; i < numOfTimes; i++) {
    rollDice();
  }
}

// throwDice(1);

// multiple arguments

function divide(x, y) {
  console.log(x / y);
}

divide(4, 1);
