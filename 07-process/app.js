const process = require("process");

console.log(process.execPath); // /Users/이름/.nvm/versions/node/v18.16.0/bin/node 위치
console.log(process.version); //v18.16.0
console.log(process.pid); // 36056 프로세스id
console.log(process.ppid); // 28726 프로세스 부모의 id
console.log(process.platform); // darwin 플랫폼에 대한정보
console.log(process.env); // 컴퓨터에 저장된 환경변수에 대한 정보
console.log(process.uptime()); //0.028855833
console.log(process.cwd());
console.log(process.cpuUsage()); // { user: 41502, system: 11232 } cpu 사용량

setTimeout(() => {
  console.log("setTimeout");
}, 0);

process.nextTick(() => {
  console.log("nextTick"); // 태스크 큐에 다른 콜백함수가 들어있어도 이를 무시하고, 태스크 큐의 앞부분에 넣어줌.
});

for (let i = 0; i < 10; i++) {
  console.log("for loop");
}

// for loop
// for loop
// for loop
// for loop
// for loop
// for loop
// for loop
// for loop
// for loop
// for loop
// nextTick
// setTimeout
