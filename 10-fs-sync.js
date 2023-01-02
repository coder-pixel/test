const { readFileSync, writeFileSync } = require('fs')
console.log('start')

const firstFile = readFileSync("./content/first.txt", "utf8");
const secondFile = readFileSync("./content/second.txt", "utf8");
console.log(firstFile)
console.log(secondFile)

writeFileSync(
    "./content/result-sync.txt",
    `Here is the result: ${firstFile}, ${secondFile} \n`,
    {
        flag: "a" //to append -- optional
    }
)

console.log("done with this task")
console.log("starting the next one")