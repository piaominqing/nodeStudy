const path = require('path')
/**
 * ! path.delimiter
 * (property) path.PlatformPath.delimiter: string
 * The platform-specific file delimiter. ';' or ':'.
 */

// * ; 用于 Windows
// * : 用于 POSIX
// 在Windows
console.log(path.delimiter) //;

// todo 在POSIX 
console.log(path.delimiter) //

// 在Windows
console.log(process.env.PATH);
// C:\Windows\system32;
// C:\Windows;C:\Windows\System32\Wbem;
// C:\Windows\System32\WindowsPowerShell\v1.0\;
// C:\Program Files (x86)\NVIDIA Corporation\PhysX\Common;
// C:\Program Files\Git\cmd;
// C:\Program Files\TortoiseSVN\bin;
// C:\Program Files\nodejs\;
// C:\Users\nhn\AppData\Local\Microsoft\WindowsApps;
// ;
// D:\Microsoft VS Code\bin;
// C:\Users\nhn\AppData\Roaming\npm

console.log(process.env.PATH.split(path.delimiter))
// [
//     'C:\\Windows\\system32',
//     'C:\\Windows',
//     'C:\\Windows\\System32\\Wbem',
//     'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\',
//     'C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common',
//     'C:\\Program Files\\Git\\cmd',
//     'C:\\Program Files\\TortoiseSVN\\bin',
//     'C:\\Program Files\\nodejs\\',
//     'C:\\Users\\nhn\\AppData\\Local\\Microsoft\\WindowsApps',
//     '',
//     'D:\\Microsoft VS Code\\bin',
//     'C:\\Users\\nhn\\AppData\\Roaming\\npm'
//   ]


// todo 在POSIX
console.log(process.env.PATH);

console.log(process.env.PATH.split(path.delimiter));