test('测试Hello world', () => {
    const helloworld = require('../index')
    expect(helloworld).toBe('hello world3')//判断两个对象是否相等
})