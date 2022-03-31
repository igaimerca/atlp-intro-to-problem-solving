let numbers = [5, 6, 7, 8, 9];
console.log("BEFORE", numbers);

const reverse = () => {
    let len = numbers.length;
    for (let i = 0; i < len / 2; i++) {
        let temp = numbers[i];
        numbers[i] = numbers[len - 1 - i];
        numbers[len - 1 - i] = temp;
    }
}

reverse();
console.log("AFTER ", numbers);