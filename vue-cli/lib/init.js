const {promisify} = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const {clone} = require('./download')
const log = content => {
  console.log(chalk.green(content))
}

module.exports = async name => {
  // 打开欢迎界面
  clear()
  const data = await figlet('kkb welcome')
  log(data)
  // 克隆项目
  await clone('github:su37josephxia/vue-template', name)
  log('安装依赖')
  console.log(process.platform)
  await spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['install'], {cwd: `./${name}`})
  log('安装完成')
}

function spawn(...args){
  const {spawn} = require('child_process')
  return new Promise(resolve => {
    const proc = spawn(...args)
    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)
    proc.on('close', () => {
      resolve()
    })

  })
}