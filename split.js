function splitter(word){
  if (word.length % 2 != 0){
    word = word + "_"
  }
  let holder = word.split("");
  let newHold = [];
  for(let i = 0; i < holder.length; i+=2){
    holder[i]+=holder[i+1];
    if (i % 2 == 0){
      newHold.push(holder[i]);
    }
  }
  console.log(newHold);
}
splitter("coronay");
