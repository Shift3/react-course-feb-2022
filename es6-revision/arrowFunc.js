// Old way
function addOldWay(...nums){
  let total = nums.reduce(function(x, y){
    return x+y;
  });
  console.log('Total calculated using old way:', total)
}

addOldWay(4, 5, 6, 7, 8, 9);

// New way
const addNewWay = (...nums) => {
  let total = nums.reduce((x, y) => {
    return x+y;
  });

  console.log('Total calculated using new way:', total)
}

addNewWay(4, 5, 6, 7, 8, 9);

/*
  Limitations for using arrow functions:
  1- Does not have its own bindings to this or super
  2- Should not be used as methods
  3- Does not have new.target keyword
  4- Noy suitable for call, apply, and bind methods
  5- Can not be used as constructors
  6- Can not use yield within its body.
*/
