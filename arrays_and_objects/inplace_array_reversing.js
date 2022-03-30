let numbers = [1, 2, 3, 4, 5];

function reverseArray(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = i; j >= 0; j) {
            numbers[i] = numbers[j];
        }
    }
}
reverseArray(numbers);
console.log(numbers);