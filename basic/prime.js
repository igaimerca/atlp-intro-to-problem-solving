const arr = [1, 2, 3, 4, 5, 6];

function testPrime(number) {
    if (number === 1 || number == 0) {
        return false;
    } else if (number === 2) {
        return true;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}
function returnPrime(arr) {
    let newArray = [];

    for (let j = 0; j < arr.length; j++) {
        if (testPrime(arr[j])) {
            newArray.push(arr[j]);
        }
    }

    return newArray;
}

console.log(returnPrime([2,3,4,11]));