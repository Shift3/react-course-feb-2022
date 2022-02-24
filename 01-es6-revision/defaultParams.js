function add(numArray = []){
  let total = 0;
  numArray.forEach(element => {
    total += element;
  });

  console.log('Total: ', total);
}

add();