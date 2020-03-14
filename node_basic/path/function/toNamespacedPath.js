const path = require('path')

/**
 * ! path: toNamespacedPath
 * (method) path.PlatformPath.toNamespacedPath(path: string): string
 * On Windows systems only, returns an equivalent namespace-prefixed 
 * path for the given path. If path is not a string, path will be returned 
 * without modifications. This method is meaningful only on Windows system. 
 * On POSIX systems, the method is non-operational and always returns path 
 * without modifications.
 */

console.log(path.win32.toNamespacedPath('abc/ddd.js'))
// \\?\e:\nodeStudy\node_basic\abc\ddd.js