const path = require('path')

/**
 * ! path: isAbsolute
 * (method) path.PlatformPath.isAbsolute(p: string): boolean
 * Determines whether {path} is an absolute path. 
 * An absolute path will always resolve to the same location, 
 * regardless of the working directory.
 * @param path — path to test.
 */

 // 开头以磁盘目录或者/开始的为绝对路径
 console.log(path.isAbsolute('/path/function/isAbsolute.js')) // true
 console.log(path.isAbsolute('path/function/isAbsolute.js')) // false
 console.log(path.isAbsolute('../path/function/isAbsolute.js')) // false
