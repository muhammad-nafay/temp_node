
// const utils = require('./utils.js');
// const names = require('./name.js');
// const data = require('./alternative_flavour.js');
// const mind_puzzle = require('./mind_gernade.js');


// const os = require('os');
// const {readFileSync, writeFileSync} = require('fs');
// const {readFile, writeFile} = require('fs');

// method returns the system up time in seconds
// console.log(`The system uptime is ${os.uptime()/60} minutes`);

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
//     userInfo: os.userInfo(),
//     hostName: os.hostname(),
//     machine: os.machine()
// }

// console.log("System Information listed below\n",currentOS.name);

// const first = readFileSync('./first.txt','utf8');
// console.log("File read using synchronous function readFileSync!\n",first,"the end\n")

// writeFileSync('./first.txt', '\nI have added my own line using readFileSync!', {flag: 'a'});

// console.log("start");
// readFile('./first.txt', 'utf8',  (err, result) => {
//     console.log("In 1st read file async!");
//     if(err) {
//         console.log(err);
//         return ;
//     }
//     const first = result;

//     readFile('./second.txt', 'utf8', (err, result) => {
//         console.log("In 2nd read file async!");
//         if(err) {
//             console.log(err);
//             return ;
//         }
//         const second = result;
//         writeFile('./result_async.txt', `Content of first.txt and second.txt: ,${first}, ${second}`,
//         (err, result) => {
//             console.log("In write file async!");
//             if(err) {
//                 console.log(err);
//                 return ;
//             }
//             //console.log(result);
//         })

//     })

// })




async function run () {
    await console.log("1");
    console.log("3");
}
run();
console.log('2');