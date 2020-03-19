
test('TEST func01',()=>{
    const {func01} = require('../class.js')
    const ret = func01()
    expect(ret)
        .toBe('test return')
})

test('TEST func02',()=>{
    const {func02} = require('../class.js')
    const ret = func02()
    expect(ret)
        .toBe('test return')
})