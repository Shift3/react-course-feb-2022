const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(4);
mySet.add(4);
mySet.add('SOME TEXT');

const obj = {
  a: 1,
  b: 2
};

mySet.add(obj);

console.log(mySet);
console.log(mySet.has(2));
console.log(mySet.has(7));
console.log(mySet.size);

for(let item of mySet){
  console.log(item);
}