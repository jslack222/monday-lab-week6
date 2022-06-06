const {returnTwo, greeting, add} = require("./functions.js")    

test('should return 2', () => {
    expect(returnTwo()).toBe(2)
})

test('should greet james', () => {
    expect(greeting('james')).toBe('Hello james')
})

test('should equal 4', () => {
    expect(add(2,2)).toBe(4)
})