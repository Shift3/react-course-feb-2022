// Destructuring an Object
const personalInformation = {
  firstName: 'Mehdi',
  lastName: 'Aitbrahim',
  city: 'Toledo',
  state: 'Ohio',
  zipCode: 43609,
  male: true
};

const { firstName: fn, lastName: ln, city, state, zipCode, male } = personalInformation;

console.log(`${fn} ${ln} from ${city}, ${state}`);

// Destructring an array
let names = ['Mehdi', 'M', 'Aitbrahim'];
const [firstName, middleName, lastName] =  names;
console.log(`${firstName} ${middleName} ${lastName}`);