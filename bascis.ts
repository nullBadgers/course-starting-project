console.log('Code goes here...magic!');

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    console.log(typeof number1);
    //this will show what type is number, printed on the console

    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
        // this will sometimes return a value and sometimes not
    }
}

const number1 = 5;
const number2 = 8;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase);