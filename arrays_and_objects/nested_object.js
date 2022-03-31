let identities = [
    "Patrick wayne, 30",
    "lil wayne, 32",
    "Eric mimi, 21",
    "Dodos deck, 21",
    "Alien Dwine, 22",
    "Patrick wayne, 33",
    "Patrick wayne, 100",
    "Patrick wayne, 40"
];

const nestedObject = arr => {
    let len = arr.length;
    let formatedObj = {};

    for (let i = 0; i < len; i++) {
        let person = arr[i].split(" "),
            firstName = person[0],
            lastName = person[1].split(",")[0],
            age = person[2];
        Object.assign(formatedObj, {
            [firstName]: {
                lastname: lastName,
                age: age
            }
        })
    }
    return formatedObj;
}

let obj = nestedObject(identities);
console.log(obj);