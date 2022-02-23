// Olde way
function addOldWay(nums){
  console.log(arguments);
}

// New way
function addNewWay(...nums){
  console.log(nums);
}

addOldWay(5, 7, 9);
addNewWay(5, 7, 9);
