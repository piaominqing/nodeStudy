const path = require('path')

/**
 * ! path: dirname
 * (method) path.PlatformPath.dirname(p: string): string
 * Return the directory name of a path. Similar to the Unix dirname command.
 * @param p — the path to evaluate
 */

 // 返回一个路径的目录部分
 console.log(path.dirname('/foo/bar/baz/asdf/quux')) // * 输出：/foo/bar/baz/asdf