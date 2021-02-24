let userInput: unknown;
let userName: string;

userInput = 5
userInput = 'Stoofer';
if (typeof userInput === 'string') {
    userName = userInput;
}
// this IF type check will check if the unknown type of userInput is string, best to use unknown over the 'any' type

