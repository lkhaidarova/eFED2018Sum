function reverseArray(array) {
    var result = [];
    for (var i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }
    return result;
}
console.log(reverseArray([1, 2, 3, 4]));