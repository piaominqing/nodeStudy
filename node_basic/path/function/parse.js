const path = require('path')

/**
 * ! path: parse
 * (method) path.PlatformPath.parse(p: string): path.ParsedPath
 * Returns an object from a path string - the opposite of format().
 * @param pathString — path to evaluate.
 * * 跟format相反
 */

 console.log(path.parse('/path/function/parse.js'))
//  {
//     root: '/',
//     dir: '/path/function',
//     base: 'parse.js',
//     ext: '.js',
//     name: 'parse'
//   }