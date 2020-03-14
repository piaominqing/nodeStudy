const path = require('path')

/**
 * ! path: relative
 * (method) path.PlatformPath.relative(from: string, to: string): string
 * Solve the relative path from {from} to {to}. At times we have two absolute paths, 
 * and we need to derive the relative path from one to the other. 
 * This is actually the reverse transform of path.resolve.
 */

 console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'))
// 返回: '../../impl/bbb'