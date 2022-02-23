import { Animal } from './class.js';

const cat = new Animal('Cat', 4);

console.log(cat.type);
console.log(cat.legs);

cat.makeNoise('Mew');