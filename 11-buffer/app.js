// Fixed-size chunk of memory
// array of intergers, byte of data
const fs = require("fs");
const buf = Buffer.from("Hi");
console.log(buf); // <Buffer 48 69>
console.log(buf.length); // 2

// ascii code형태로 출력. 대문자 H는 72, i는 105
console.log(buf[0]); // 72
console.log(buf[1]); // 105
console.log(buf.toString("utf-8")); // Hi 기본값은 utf-8 으로 비워둬도 됨
console.log(buf.toString());

// create
// buffer를 직접 만들 수 있음.
// alloccation의 약자인 alloc을 사용하면 size가2인 Buffer 생성. 메모리에서 사용가능한 chunk를 찾아 초기화시켜줌.
const buf2 = Buffer.alloc(2);
// 메모리를 찾긴하는데 초기화시켜주지 않는 api도 있음. allocUnsafe()
// 기존에 다른 데이터가 들어있으나, 사용되지 않는 메모리라면 공간을 확보하지만 초기화x 초기화하지 않기때문에 이 함수가 조금 더 빠름.  fase
// 하지만 데이터가 들어있을수도 있으므로 초기화해주는게 안전함.
const buf3 = Buffer.allocUnsafe(2);

console.log(buf2);
// <Buffer 00 00>
console.log(buf3);
// <Buffer 00 00>

buf2[0] = 72;
buf2[1] = 105;

buf2.copy(buf3);
console.log(buf2.toString()); // Hi
console.log(buf3.toString()); // Hi

//concat
// 여러가지 buffer를 모을 수 있음.
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString()); //HiHiHi
