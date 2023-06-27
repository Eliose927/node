//To read, write and append in file
const { log } = require('console')
const { readFileSync,writeFileSync }=require('fs')
console.log("start")

const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')

writeFileSync('./content/result.txt',`Here is the result: ${first}, ${second}`, {flag:'a'})
console.log("Done with this stask")
console.log("Starting next")