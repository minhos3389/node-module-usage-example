const fs = require("fs").promises;

// read a file
fs.readFile("./text.txt", "utf8") // 인코딩하지 않으면 파일의 buffer를 적나라하게 다 보여줌.
  .then((data) => console.log(data))
  .catch(console.error);

// writing a file
fs.writeFile("./file.txt", "Hello! Coder!") //
  .catch(console.error);

fs.appendFile("./file.txt", "Yo! Nomad Coders! :<") //
  .then(() => {
    //copy -> 순서를 보장하려면 해당하는 Promise가 완료된 이후 then() 에서 처리해야 함.
    fs.copyFile("./file.txt", "./file2.txt") //
      .catch(console.error);
  })
  .catch(console.error);

// copy -> 비동기는 순차적으로 될수도 있고 안될수도 있기 떄문에 이점에 유의해야 함. 빈 file2.txt가 나왔음.
// fs.copyFile("./file.txt", "./file2.txt") //
//   .catch(console.error);

// folder - 하위에 폴더 생성
fs.mkdir("sub-folder").catch(console.error);

fs.readdir("./") //
  .then(console.log)
  .catch(console.error);

// [
//   "app.js",
//   "app2.js",
//   "file.txt",
//   "file2.txt",
//   "sub-folder",
//   "text-new.txt",
//   "text.txt",
// ];
