const path = require('path')
const fs = require('fs')
module.exports = class TestNow {
    /**
     * 生成测试代码文件
     */
    genJestSource(sourccePath = path.resolve('./')){
        // 生成测试代码目录
        const testPath = `${sourccePath}/__test__`
        if(!fs.existsSync(testPath)){
            fs.mkdirSync(testPath)
        }
        // 遍历逻辑代码文件
        let list = fs.readdirSync(sourccePath)
        list
            .map(v => `${sourccePath}/${v}`)
            // 过滤文件 
            .filter(v => fs.statSync(v).isFile())
            //排除测试代码
            .filter(v => v.indexOf('.spec') === -1)
            .map(v => this.genTestFile(v))
    }
    genTestFile(fileName){
        console.log('filename:', fileName)
        const testFileName = this.getTestFileName(fileName)

        // 判断测试代码文件是否存在
        if(fs.existsSync(testFileName)){
            console.log('该测试代码文件已存在',testFileName)
            return
        }

        const mod = require(fileName)
        let source
        if(typeof mod === 'object'){
            source = Object.keys(mod)
                .map(v=>this.getTestSource(v,path.basename(fileName),true))
                .join('\n')
        }else if(typeof mod === 'function'){
            const baseName = path.basename(fileName)
            source = this.getTestSource(baseName.replace('.js', ''), baseName)
        }
        fs.writeFileSync(testFileName,source)
    }
    /**
     * 生成测试内容
     * @param {*} filename 
     */
    getTestSource(methodName, classFile, isClass){
        return `
test('${'TEST '+methodName}',()=>{
    const ${isClass ? '{'+ methodName+'}':methodName} = require('../${classFile}')
    const ret = ${methodName}()
    expect(ret)
        .toBe('test return')
})`
    }
    /**
     * 生成方法名
     * @param {*} filename 
     */
    getTestFileName(filename){
        const dirName = path.dirname(filename)
        const baseName = path.basename(filename)
        const extName = path.extname(filename)
        const testName = baseName.replace(extName, `.spec${extName}`)
      return path.format({
          root: dirName + '/__test__/',
          base: testName
      })
    }
}