// This is recursive function that takes in an integer and splits it into individual characters, adds them one by one and then produces an answer
// If this answer is also a multiple character it calls the function again. This is due to the recursive nature of the code.
// For example, digitalRoot(577) will split 577 into 5+5+7 = 17. 17 will further be split into 1+7=8. Thus the answer is 8.

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
