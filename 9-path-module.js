const path = require("path")

// separator property -- platform specific 
console.log(path.sep)


// join menthod
const filePath = path.join("/content", "subfolder", "test.txt")
console.log(filePath)

// getting base name
const base = path.basename(filePath)
console.log(base)


// returns an absolute path
const absolutePath = path.resolve(__dirname, "content", "subfolder", "test.txt")
console.log(absolutePath)