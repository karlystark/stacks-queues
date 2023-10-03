const Queue = require("../queue");
const Stack = require("../stack");

function stringReversal(str) {

  const queue = new Queue();

  for (let i = str.length - 1; i >= 0; i--) {
    queue.enqueue(str[i]);
  }

  let reversedStr = "";

  while (!queue.isEmpty()) {
    reversedStr += queue.dequeue();
  }

  return reversedStr;
}


function balancedBrackets(str) {
  // stack if open brackets, add to top
  // if closed bracket, subtract from top (checking if it's matching pair)

  const openBrackets = ["(", "[", "{"];
  const closedBrackets = [")", "]", "}"];
  const strSplit = str.split("");

  const stack = new Stack();

  for (let el of strSplit) {
    if (openBrackets.includes(el)) {
      stack.push(el);
    } else if (closedBrackets.includes(el)) {
      if (stack.isEmpty()) {
        return false;
      } else {
        let idx = closedBrackets.indexOf(el);
        let recentPush = stack.pop();
        if (openBrackets.indexOf(recentPush) !== idx) {
          return false;
        }
      }
    }
  }

  if(!stack.isEmpty()){
    return false;
  }

  return true;

}

function josephusSurvivor(peopleNum, skip) {
}

function calculator(input) {
}

module.exports = {
  calculator,
  josephusSurvivor,
  balancedBrackets,
  stringReversal,
};
