const str = '5';
console.log(str.padStart(2, '0'));

const fullNumber = '20134568909765432186';
const lastFourDigits = fullNumber.slice(-4);
console.log(lastFourDigits);
const maskedNumber = lastFourDigits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
console.log(fullNumber.length, maskedNumber.length);