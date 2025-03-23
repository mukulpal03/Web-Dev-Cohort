const fs = require('fs');  // 'fs' its called an id and it looks for it in the internal modules
const math = require('./math')

fs.writeFile('./test.txt', "Hello World", () => {})

function execute (exports, require, module, __filename, __dirname) { // the params comes in sequence only   // the node command reads the whole source code of file and runs it inside a wrapper fn with some params.


    // const fs = require('fs');

    // fs.writeFile('./test.txt', "Hello World", () => {})
}

console.log(math);


console.log(__filename);
console.log(__dirname);

function __require (id) {
    //... agr id . se shuru hua toh user ki dir m code ko dhundo
    //... baaki apne internal module m dhundo
    //... agr id .. se shuru hua toh parent dir m dhundo
    //... agr mil gya toh well n good
    //... nahi toh node_modules m dhundo
    //... nahi mila toh user ko error throw kardo
}