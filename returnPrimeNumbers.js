function testPrime(number) {
    if(number === 1 || number == 0) {
        return false; 
    }else if(number === 2) {
        return true;
    }else {
        for(let i = 0; i < number; i++) {
            if(number % i == 0) {
                return false;
            }
        }
        return true;
    }
}

function returnPrime(numbers) {
    let newArray = [];
    for (let j = 0; j < numbers.length; j++) {
        if(testPrime(numbers[j])) {
            newArray.push(numbers[j]);
        }
    }
    return newArray;
}

console.log(returnPrime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));