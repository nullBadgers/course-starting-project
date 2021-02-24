// const person = {
//     name: 'Stoofer',
//     age: 30,
//     hobbies: ['Cooking', 'Guitar'],
//     role: [2, 'author ']
//     // tuple, fixed length array

// };

enum Role {ADMIN, READ_ONLY, AUTHOR};
// assigns labels to numbers, hover over each of the roles above so IDE will display the number

const person = {
    name: 'Stoofer',
    age: 30,
    hobbies: ['Cooking', 'Guitar'],
    role: Role.AUTHOR
};

let favActivity: string[];
// this forces array to be of string value

console.log(person);
 
for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase());
}
// this will print out in console the person's hobbies in uppercase

if (person.role === Role.AUTHOR) {
    console.log('is author');
}