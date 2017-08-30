var path = require("path"); //using required function to bring in, akin to NPM

// var hello = "Hello world from node.js";
// var justnode = hello.slice(17);

//with require path
global.console.log(0, `Rock on world ${path.basename(__filename)}`)



//without require path
// console.log(1, __dirname) //path to this file
// console.log(2, __filename) //path to file AND file