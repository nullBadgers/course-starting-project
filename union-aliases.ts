type Combineable = number | string;
// type aliases, defined at the top of the func

type ConversionDesc = 'as-number' | 'as-text';




function combine(
    input1: Combineable,
    input2: Combineable,
    resultConversion: ConversionDesc,
    // literal types, we want a string but it must contain one of these two possible values
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
// union types



const combinedAges = combine(25, 30, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('25', '30', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Stoofer', 'Bobby', 'as-text');
console.log(combinedNames);
