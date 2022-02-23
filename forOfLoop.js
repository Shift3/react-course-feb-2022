// Example of an array
let incomes = [60000, 35000, 75000, 120000];
let total = 0;

for(const income of incomes){
  console.log(income);
  total += income;
}

console.log('Total: ', total);

