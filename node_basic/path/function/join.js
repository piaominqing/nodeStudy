const path = require('path')

/**
 * ! path: join
 * (method) path.PlatformPath.join(...paths: string[]): string
 * Join all arguments together and normalize the resulting path. 
 * Arguments must be strings. In v0.8, non-string arguments were silently ignored. 
 * In v0.10 and up, an exception is thrown.
 * @param paths — paths to join.
 */

 // * 用平台特定的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。
 console.log(path.join('abc', 'add', 'ccc')) //  abc\add\ccc
 console.log(path.join('', '', '')) //  .

//  path.join('foo', {}, 'bar');
// 抛出 'TypeError: Path must be a string. Received {}'