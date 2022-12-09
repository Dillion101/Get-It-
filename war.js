function digitalRoot(num){
  let holder = 0;
  let temp = (""+num).split("").map(Number);
  for(let i = 0; i < temp.length; i++){
    holder += temp[i];
  }
  console.log(holder);
  if (holder >= 10){
    digitalRoot(holder);
  }
}
digitalRoot(577);
