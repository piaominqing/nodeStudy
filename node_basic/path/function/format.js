const path = require('path')

/**
 * ! path: format
 * (method) path.PlatformPath.format(pP: path.FormatInputPathObject): string
 * Returns a path string from an object - the opposite of parse().
 * @param pathString — path to evaluate.
 */

console.log(path.posix.format({dir: '/base', base: 'abc.js'})) // /base/abc.js

// 如果提供了 pathObject.dir，则忽略 pathObject.root。
// 如果 pathObject.base 存在，则忽略 pathObject.ext 和 pathObject.name。
 console.log(path.posix.format({
     dir: '/dir' ,
     root: '/root',
     base: 'base.js',
     name: 'name',
     ext: '.ext'
 }))  // /dir/base.js