const fs = require("fs");

// 모든 api 는 3가지형태로 제공됨.
// 함수명이 rename이라고 하면, rename으로 제공.
// rename이라고 그냥 이용하면 비동기 rename(..., callback(error, data))
// 필요한 인자들을 전달 후, 콜백함수 전달하면 nodejs에서 일을 다한다음 콜백함수를 호출해줌.

// try { renameSync(...) } catch(e)
// -> Sync가 뒤에 붙은 형태.
// Blocking, 끝날때까지 다음줄로 넘어가지않음. 코드잘못되면 에러 발생.
// 에러가 발생해 노드 애플리케이션 죽이면 안되므로 항상 try {} catch {}로 감싸줘야 함.

// promises.rename().then().catch(0)
// promise안에 rename을 사용하면 promise형태로 사용할 수 있음.
try {
  fs.renameSync("./text.txt", "./text-new.txt"); // text-new.txt 로 잘 변경.
} catch (error) {
  console.error(error);
}

console.log("hello");

fs.rename("./text-new.txt", "./text.txt", (error) => {
  console.log(error); // error가 발생하지 않았기 때문에 null 출력.
});
console.log("hello");

fs.promises
  .rename("./text2.txt", "./text-new.txt")
  .then(() => console.log("Done!"))
  .catch(console.error);

// Sync는 사용하지 않고 callback으로 전달하던지 , Promise형태로 사용하는 것이 좋음.
