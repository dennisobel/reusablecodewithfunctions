// a panagram is a sentence that contains every letter in the alphabet

function isPanagram(sentence) {
  let lowercased = sentence.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let char of alphabet) {
    if (lowercased.indexOf(char) === -1) {
      return false;
    }
  }

  return true;
}

let panagram = isPanagram("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG");
console.log(panagram);
