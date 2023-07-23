const path = require("path");

// 운영체제마다 파일 경로가 다르기때문에 path를 통해 운영체제별로 경로가 달라도 잘 동작하게 만들어야 함.
// POSIX (Unix: Mac, Linux) : 'Users/유저명/파일명'
// Windows : 'C:\\유저명\\파일명'

console.log(__dirname); // 현재 디렉토리 이름
console.log(__filename); // 현재 디렉토리 이름 + 파일 이름.

console.log(path.sep);
console.log(path.delimiter);

// basename
console.log(path.basename(__filename)); //app.js
console.log(path.basename(__filename, ".js")); // app

// dirname
console.log(path.dirname(__filename)); ///Users/projects/node/9-path

//  extension
console.log(path.extname(__filename)); // .js

// parse
const parsed = path.parse(__filename);
console.log(parsed);
// {
//   root: '/',
//   dir: '/Users/miku/node/9-path',
//   base: 'app.js',
//   ext: '.js',
//   name: 'app'
// }

parsed.root;
parsed.name;

const str = path.format(parsed); // parsing 한것 합침.
console.log(str);

// isAbsolute
console.log("isAbsolute?", path.isAbsolute(__dirname)); // true
console.log("isAbsollute?", path.isAbsolute("../")); // false

// normalize -> 경로가 이상하면 알아서 고쳐줌.
console.log(path.normalize("./folder///sub")); // folder/sub

// join
console.log(__dirname + "/" + "image");
console.log(__dirname + path.sep + "image");
console.log(path.join(__dirname, "image"));
// /Users/miku/node/9-path/image
// /Users/miku/node/9-path/image
// /Users/miku/node/9-path/image
