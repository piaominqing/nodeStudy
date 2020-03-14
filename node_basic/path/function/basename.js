const path = require('path')
/**
 * ! test path api: basename  
 * (method) path.PlatformPath.basename(p: string, ext?: string): string
 * Return the last portion of a path. Similar to the Unix basename command. 
 * Often used to extract the file name from a fully qualified path.
 * @param p — the path to evaluate.
 * @param ext — optionally, an extension to remove from the result.
 */

// * path 模块的默认操作因 Node.js 应用程序运行所在的操作系统而异。
// * POSIX 文件路径：/abc/class.js
// * Windows 文件路径： E:\\nodeStudy\\node_basic\\path\\index.js

// TODO 在POSIX上 使用Windows路径
path.basename('C:\\temp\\myfile.html');
// 返回: 'C:\\temp\\myfile.html'

// 在Windows，使用Windows 文件路径时
const baseName2 = path.basename('E:\\nodeStudy\\node_basic\\path\\index.js')
console.log('baseName2', baseName2) // index.js

// 在Windows，使用POSIX 文件路径时
const baseName3 = path.basename('/abc/class.js')
console.log('baseName3', baseName3) // class.js

// 要在任何操作系统上使用 Windows 文件路径时获得一致的结果，则使用 path.win32：
const baseName4 = path.win32.basename('E:\\nodeStudy\\node_basic\\path\\index.js')
console.log('baseName4', baseName4) // 在 POSIX 和 Windows 上: index.js

// 要在任何操作系统上使用 Windows 文件路径时获得一致的结果，则使用 path.posix
const baseName5 = path.posix.basename('E:\\nodeStudy\\node_basic\\path\\index.js')
console.log('baseName5', baseName5) // 在 POSIX 和 Windows 上: E:\nodeStudy\node_basic\path\index.js

// 在结果中删除 可选参 ext内容
const baseName6 = path.basename('/abc/class.js', '.js')
console.log('baseName6', baseName6) // class

// path 和 ext 有一个不是字符串则报 TypeError
const baseName7 = path.basename('/abc/class.js', 0)
console.log('baseName7', baseName7) 
// TypeError [ERR_INVALID_ARG_TYPE]: The "ext" argument must be of type string. Received type number (0)