let count = 0;

function increase() {
  count++;
}

function getCount() {
  return count;
}

module.exports.getCount = getCount;
// module.exports.increase = increase;
console.log(module.exports === exports); // true
exports = {}; // exports는 module을 참조하고 있는데 exports에 빈 객체를 할당했기 때문에 더이상 참조하지못하는 문제 발생.
console.log(module.exports === exports); // false
exports.increase = increase;
// console.log(module);
