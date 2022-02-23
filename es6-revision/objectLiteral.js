function addressMaker(city, state){
  const newAddressOldWay = {
    newCity: city,
    newState: state
  }

  console.log('newAddressOldWay: ', newAddressOldWay);

  const newAddressNewWay = { city, state };
  console.log('newAddressNewWay: ',  newAddressNewWay);
}

addressMaker('Toledo', 'Ohio');