let userInput: unknown;
let userName: string;

userInput = 5
userInput = 'Stoofer';
if (typeof userInput === 'string') {
    userName = userInput;
}
// this IF type check will check if the unknown type of userInput is string, best to use unknown over the 'any' type

function generateError(message: string, code: number) {
    throw { message: message, errorCode: code };
}
// can also explicit to void or never by replacing never, or with void if required:
// function generateError(message: string, code: number): never {

generateError('An error has happened! :( ', 666);
// call the error. note that he 500 is an arbitury value, obiv use something that's actaully relevent to your usecase



