test('测试匹配器',()=>{
  expect(1+1).toBe(2)
  expect(1+1).not.toBe(1)
})

test('test to be true or false',()=>{
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})

test('test number',()=>{
  expect(1).toBeGreaterThan(0)
  expect(1).toBeLessThan(2)
})

test('test objcet',()=>{
  expect({a:1}).toEqual({a:1})
})