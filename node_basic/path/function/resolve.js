const path = require('path')

/**
 * ! path: resolve
 * (method) path.PlatformPath.resolve(...pathSegments: string[]): string
 * The right-most parameter is considered {to}. 
 * Other parameters are considered an array of {from}.
 * Starting from leftmost {from} parameter, resolves {to} to an absolute path.
 * If {to} isn't already absolute, {from} arguments are prepended 
 * in right to left order, until an absolute path is found. 
 * If after using all {from} paths still no absolute path is found, 
 * the current working directory is used as well. 
 * The resulting path is normalized, and trailing slashes are removed unless 
 * the path gets resolved to the root directory.
 * @param pathSegments — string paths to join. Non-string arguments are ignored.
 */

console.log(path.posix.resolve('/foo/bar', 'baz'))
// 返回: '/foo/bar/baz'

console.log(path.posix.resolve('/foo/bar', './baz'))
// 返回: '/foo/bar/baz'

console.log(path.posix.resolve('/foo/bar', '../baz'))
// 返回: '/foo/baz'

console.log(path.posix.resolve('foo/bar', 'baz'))
// 返回: e:\nodeStudy\node_basic/foo/bar/baz

console.log(path.posix.resolve('foo/bar', '/tmp/file/'))
// 返回: '/tmp/file'

console.log(path.posix.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'))
// e:\nodeStudy\node_basic/wwwroot/static_files/gif/image.gif