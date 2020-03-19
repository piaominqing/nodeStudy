const {promisfy} = require('util')
const fs = require('fs')
const readFile = promisfy(f.readFile)
readFile('./async.js').then(
  console.log('read end')
)