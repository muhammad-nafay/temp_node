// const Logger = require('./logger')
// const logger = new Logger();
// const path = require('path');
// const os =require ('os');
// const fs =require ('fs'); 
// const EventEmitter =require ('events'); 

// const { application } = require("express")

// let pathObj = path.parse(__filename);

// let totalMemory = os.totalmem();
// let freeMemory = os.freemem();
// let files = fs.readdirSync('./');

// console.log("Results from path.parse\n",pathObj);
// console.log(`\nTotal memory: ${(totalMemory/(1024*1024*1024)).toFixed()}GB  Free Memory: ${(freeMemory/(1024*1024*1024)).toFixed()}GB`);
// console.log("\nAll files are :--\n",files,"\n");

// // Register a listener
// logger.addListener('message Logged',  (eventArg) =>  {
//     console.log("Listener Called!  ", eventArg);
// })
// logger.log("Muhammad Nafay Khan");

// const http = require('http');

// const server = http.createServer((req, res) => {

//     if (req.url=='/') {
//         res.write("Hello World");
//         res.end();
//         }

//     if (req.url === '/api/courses') {
//         res.write(JSON.stringify([1,2,3]));
//         res.end();
//     }
// });

// server.on("connection", (socket) => {
//     console.log("New Connection!")
// });
// server.listen(3000);

// console.log("Listening on port 3000...");




const utils = require('./utils.js');
const names = require('./name.js');
const data = require('./alternative_flavour.js');
const mind_puzzle = require('./mind_gernade.js');

utils.sayHi('susan');
utils.sayHi(names.john);
utils.sayHi(names.peter);

console.log(data);





