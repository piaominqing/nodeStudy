const path = require('path')

/**
 * ! path: extname
 * (method) path.PlatformPath.extname(p: string): string
 * Return the extension of the path, 
 * from the last '.' to end of string in the last portion of the path. 
 * If there is no '.' in the last portion of the path or the first character of it is '.', 
 * then it returns an empty string
 * @param p — the path to evaluate.
 */

//返回最后一个.结束的部分
console.log(path.extname('index.spec.js')) // .js

// .开始或没有. 则返回空字符串
console.log(path.extname('.js')) // empty string
console.log(path.extname('js'))  // empty string