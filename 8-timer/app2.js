console.log("code 1");
console.time("timeout 0");
setTimeout(() => {
  console.timeEnd("timeout 0");
  console.log("setTimeout 0");
}, 0);

// code 1
// setTimeout 0
// timeout 0: 1.845ms

// console.log("code 2");
// setImmediate(() => {
//   console.log("setImmediate");
// });

// console.log("code 3");
// process.nextTick(() => {
//   console.log("process.nextTick");
// });

// code 1
// code 2
// code 3
// process.nextTick
// setTimeout 0
// setImmediate

// setTimeout과 setImmediate는 비슷함. 거의 비슷하게 동작하기 때문에 큰 차이 X
