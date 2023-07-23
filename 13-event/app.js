const EventEmitter = require("events");
const emitter = new EventEmitter();
const callback1 = (args) => {
  console.log("first callback -", args);
};

// emitter.on("dream", (args) => {
//   console.log("first callback - ", args);
// });
emitter.on("dream", callback1);

emitter.on("dream", (args) => {
  console.log("second callback - ", args);
});

emitter.emit("dream", { message: 1 });
emitter.emit("dream", { message: 2 });
emitter.removeListener("dream", callback1); // 세번째 메시지는 callback1 처리 x
emitter.emit("dream", { message: 3 });
