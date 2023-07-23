const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("./file.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./file4.zip");
// stream연결.
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on("finish", () => {
  console.log("done!!");
});

const http = require("http");

// 파일을 다 읽은다음에 메모리에 들어온 데이터를 반응해서 보내는 이 방식보다는 stream 사용하는 것이 더 좋음.
// const server = http.createServer((req, res) => {
//   fs.readFile("file.txt", (err, data) => {
//     res.end(data);
//   });
// });
// server.listen(3000);

const server = http.createServer((req, res) => {
  // stream 자체를 response에 piping해서 연결해주는게 더 좋은 방식.
  const stream = fs.createReadStream("./file.txt");
  stream.pipe(res);
});
server.listen(3000);
