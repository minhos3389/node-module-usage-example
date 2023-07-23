console.log("logging...");
console.clear();

// Log level (개발할때부터 레벨별로 로그를 따로 사용하는 것이 좋음.)
console.log("log"); // 개발
console.info("info"); // 정보
console.warn("warn"); // 경보
console.error("error"); // 에러, 사용자 에러, 시스템 에러

// Assert
console.assert(2 === 3, "not ame!");
console.assert(2 === 2, "same!");

// Print object
const student = { name: "ellie", age: 20, company: { name: "AC" } };
console.log(student);
console.table(student); // 테이블 형태 출력.
console.dir(student); // console.dir()은 옵션 전달 가능.

// 중첩된 Object를 어느정도 깊이까지 보여줄 지 설정 가능.
console.dir(student, { showHidden: true, colors: false, depth: 2 }); // { name: 'ellie', age: 20, company: { name: 'AC' } }
console.dir(student, { showHidden: true, colors: false, depth: 0 }); // { name: 'ellie', age: 20, company: [Object] }

// Measuring time
console.time("for loop");
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop");
// for loop: 0.034ms

// Counting
function a() {
  console.count("a function");
}

a(); // a function: 1
a(); // a function: 2
console.countReset("a function");
a(); // a function: 1

// Trace
function f1() {
  f2();
}

function f2() {
  f3();
}

function f3() {
  console.log("f3");
  console.trace();
}

f1();
// Trace
//     at f3 (/Users/minhoseong/dream-coding/node/2-global/app.js:53:11)
//     at f2 (/Users/minhoseong/dream-coding/node/2-global/app.js:48:3)
//     at f1 (/Users/minhoseong/dream-coding/node/2-global/app.js:44:3)
//     at Object.<anonymous> (/Users/minhoseong/dream-coding/node/2-global/app.js:56:1)
//     at Module._compile (node:internal/modules/cjs/loader:1254:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
//     at Module.load (node:internal/modules/cjs/loader:1117:32)
//     at Module._load (node:internal/modules/cjs/loader:958:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:23:47
