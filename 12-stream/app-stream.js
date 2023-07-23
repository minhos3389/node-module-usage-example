const fs = require("fs");

const data = [];

fs.createReadStream("./file.txt", {
  highWaterMark: 8,
  // encoding: "utf-8",
})
  .once("data", (chunk) => {
    // once는 한번만 받음 chunk 처음 1개
    data.push(chunk);
    console.count("data");
  })
  .on("end", () => {
    console.log(data.join(""));
  })
  .on("error", (error) => {
    console.log(error);
  });

// const readStream = fs.createReadStream("./file.txt", {
//   // highWaterMark: 8, // 64 Kbytes
//   // encoding: "utf-8",
// });

// const data = [];

// readStream.on("data", (chunk) => {
//   // console.log(chunk);
//   data.push(chunk);
//   console.count("data");
// });

// readStream.on("end", () => {
//   console.log(data.join(""));
// });

// readStream.on("error", (error) => {
//   console.log(error);
// });
