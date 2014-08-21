
/**
 * Given n number of integer filled arrays, sum the index of each array and return that array.

 * @param  {number[]} An array of integers. Can pass in multiple arrays to sum them all.
 * @return {array}    Returns an array filled with the sums of the passed in arrays
 */
 module.exports = function() {
    var arrays = [].splice.call(arguments, 0)

    return arrays.reduce(function(prev, cur) {
        var diff = cur.length - prev.length
        while (diff > 0) {
            prev.push(0)
            diff--
        }
        return prev.map(function(num, i) {
            return num + (cur[i] ? cur[i] : 0)
        })
    }, arrays.shift())
}
