// big difference between returning a value and printing a value out.

function greet() {
  console.log("Hello above");
  return "Hello";
  console.log("Hello below");
}

// greet();

// function isPurple(color) {
//   if (color === "purple") {
//     return true;
//     console.log("yes purple");
//   } else {
//     return false;
//     console.log("no purple");
//   }
// }

// function isPurple(color) {
//   if (color === "purple") {
//     return true;
//   }
//   return false;
// }

function isPurple(color) {
  return color === "purple";
}

console.log(isPurple("purple"));
