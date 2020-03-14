const path = require('path')

/**
 * ! path: sep
 * (property) path.PlatformPath.sep: string
 * The platform-specific file separator. '\' or '/'.
 */
console.log(path.win32.sep) // \
console.log(path.posix.sep) // /