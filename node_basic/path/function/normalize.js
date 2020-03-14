const path = require('path')

/**
 * ! path: normalize
 * (method) path.PlatformPath.normalize(p: string): string
 * Normalize a string path, reducing '..' and '.' parts. 
 * When multiple slashes are found, they're replaced by a single one; 
 * when the path contains a trailing slash, it is preserved. 
 * On Windows backslashes are used.
 * @param p — string path to normalize.
 */

 // 将字符串路径正常化，减少..和.的部分。
 console.log(path.posix.normalize('.././basename.js')) // ../basename.js ./有点多余的感觉
 console.log(path.posix.normalize('/path/function/../')) // /path/
 // 当发现多个斜杠时，它们将被单个斜杠替换;
 console.log(path.posix.normalize('/path///function//normalize.js')) // /path/function/normalize.js
 // 当路径包含一个结尾的斜杠时，它被保留。
 console.log(path.posix.normalize('/path///function/')) // /path/function/
 // 在Windows上使用反斜杠。
 console.log(path.normalize('/basename.js')) // \basename.js