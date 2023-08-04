// this is your main.js script

let challenge = '30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);

console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());

console.log(challenge.substr(0,2));
console.log(challenge.substring(3));

console.log(challenge.includes('Script'));
console.log(challenge.split());
console.log(challenge.split(' '));

let str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(str.split(','));

console.log(challenge.replace('JavaScript','Python'));

console.log(challenge.charAt(15));

console.log(challenge.charCodeAt(challenge.indexOf('J')));

console.log(challenge.indexOf('a'));

console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.');

console.log(parseFloat('9.8'));
console.log(Math.round(parseFloat('9.8')));
