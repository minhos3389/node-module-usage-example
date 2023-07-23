const os = require("os");

// End Of Line - 운영체제별 상이
console.log(os.EOL === "\n"); // mac의 경우 true
console.log(os.EOL === "\r\n"); // window의 경우 true

console.log(os.totalmem()); //  34359738368
console.log(os.freemem()); //
console.log(os.type()); // Darwin
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.homedir()); // 홈디렉토리
console.log(os.hostname()); // 호스트명
