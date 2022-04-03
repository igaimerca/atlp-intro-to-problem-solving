let arr = [3, 1, 3, 4, 4, 5, 3, 5, 3, 3, 3, 6, 3];
// let arr = [3,1,3,4,4] ;

function majority(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let majorityCount = 0;

        for (let j = 0; j < len; j++) {
            if (arr[i] == arr[j]) {
                majorityCount += 1;
            }
        }
        if (majorityCount > len / 2) return `Majority element is ${arr[i]}`;

    }
    return "No majority element";
}

console.log(majority(arr));