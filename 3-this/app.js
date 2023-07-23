function hello() {
  console.log(this); // this가 global인 것 확인가능. 함수 안에서 this 호출하면 global
  console.log(this === global); // true
}

hello();
{
  /* <ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 27.526542007923126,
      nodeStart: 1.781499981880188,
      v8Start: 4.304957985877991,
      bootstrapComplete: 20.757166981697083,
      environment: 10.76641696691513,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1690109585117.34
  },
  fetch: [AsyncFunction: fetch]
}
true */
}

class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log("------ class ------");
    console.log(this);
    console.log(this === global);
  }
}

const a = new A(1);
a.memberFunction();
// ------ class ------
// A { num: 1 }
// false

//  class 안에 있는 this는 클래스 자체를 가리키고 있음.
// this는 global이 아님. (false)
// class 에서 this란 자기 자신을 가리킴.

console.log("--- global scope ---");
console.log(this);
console.log(this === module.exports);
// 브라우저에서는 밖에서 쓰이는 this는 global을 가리키지만, nodejs에서는 밖에서 쓰이는 this는 module.exports와 동일
// module에 있는 exports
