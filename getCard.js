// Write a getCard() function which returns a random playing card object, like:
// {
//     value:"K",
//     suit:"clubs"
// }

// PICK A RANDOM VALUE FROM
// 1,2,3,4,5,6,7,8,9,10,J,Q,K,A
// PICK A RANDOM SUIT
// CLUBS, SPADES, HEARTS, DIAMONDS

function pick(arr) {
  // return random element from array
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function getCard() {
  const values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "A",
    "Q",
  ];
  const suits = ["clubs", "spades", "hearts", "diamonds"];

  return {
    value: pick(values),
    suit: pick(suits),
  };
}

let playHand = getCard();
console.log(playHand);
