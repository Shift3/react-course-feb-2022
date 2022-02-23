import { Animal, Dog } from './class.js';

const cat = new Animal('Cat', 4);

console.log(cat.type);
console.log(cat.legs);

cat.makeNoise('Mew');

console.log(Animal.returnTen());
console.log(cat.metaData);

const doggy = new Dog('Dog', 4);
console.log(doggy.type, doggy.legs);
doggy.makeNoise();