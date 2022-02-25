function resolveAfter2Seconds(){
  return new Promise((resolved, rejected) =>{
    setTimeout(() => {
      resolved('Resolved');
    }, 2000);
  });
}

resolveAfter2Seconds().then(data => console.log(data));

async function getAsyncData(){
  const data = await resolveAfter2Seconds();
  console.log(data);
}

getAsyncData();