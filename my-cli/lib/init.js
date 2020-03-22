const {promisify} = require('util') 
const figlet = promisify(require('figlet')) 
const clear = require('clear') 
const chalk = require('chalk') 
const log = content => console.log(chalk.green(content)) 
const {clone} = require('./download') 
const open = require("open")
module.exports = async name => {    
    // 打印欢迎画⾯面    
    clear()    
    const data = await figlet('KKB Welcome')   
    log(data) 
    // console.log('init ' + name)    
    log(' 创建项⽬目:' + name)    
    // 从github克隆隆项⽬目到指定⽂文件夹    
    await clone('github:su37josephxia/vue-template', name) 

    // ....    
    log('安装依赖')    
    await spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm' , ['install'], { cwd: `./${name}` })    
    log(chalk.green(` 安装完成： To get Start: ===========================    cd ${name}    npm run serve ===========================            `))

    // 打开浏览器器    
    open(`http://localhost:8080`);    
    await spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm' , ['run', 'serve'], { cwd: `./${name}` })
}

// promisiy化spawn 
// 对接输出流 
const spawn = async (...args) => {    
    const { spawn } = require('child_process');    
    return new Promise(resolve => {        
        const proc = spawn(...args)        
        proc.stdout.pipe(process.stdout)        
        proc.stderr.pipe(process.stderr)        
        proc.on('close', () => { 
            resolve()        
        })    
    }) 
}



