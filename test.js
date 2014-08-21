var assert = require('assert')
var add = require('./add')

assert(arraysEqual(add([1,2,3]), [1,2,3]))
assert(arraysEqual(add([1,2,3], [1,2,3]), [2,4,6]))
assert(arraysEqual(add([1,2,3], [1,2,3], [1,2,3]), [3,6,9]))
assert(arraysEqual(add([1], [123], [1]), [125]))
assert(arraysEqual(add([4,5],[4,5]), [8, 10]))
assert(arraysEqual(add([1, 2], [1], [1,3]), [3,5]))
assert(arraysEqual(add([1], [4], [1,3]), [6,3]))
assert(arraysEqual(add([1], [1,3], [4]), [6,3]))

function arraysEqual(a, b) {
    if (a === b) return true
    if (a == null || b == null) return false
    if (a.length !== b.length) return false

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false
    }
    return true
}
