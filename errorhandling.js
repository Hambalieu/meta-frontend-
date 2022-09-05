//Error Handling 
function addTwoNums(a, b){
  try{
    if(typeof(a) != 'number'){
      throw new ReferenceError("the first argument is not a number")
   }else if (typeof(b) != 'number'){
     throw new ReferenceError("the second argument is not a number")  
   }else {
       console.log(a + b)
   }
  }catch(err){
    console.log("Error!", err)
  }
}
addTwoNums(5, "5")

console.log("It still works")


// Defensive Programming 

function letterFinder(word, match) {
  var conditional1 = typeof(word) == 'string' && word.length >= 2;
  var conditional2 = typeof(match) == 'string' && match.length == 1;
  if(conditional1 && conditional2 ){
    for(var i = 0; i < word.length; i++) {
      if(word[i] == match) {
          console.log('Found the', match, 'at', i)
      } else {
          console.log('---No match found at', i)
      }
    }
  }else {
    console.log("Please pass a correct arguments to the function.")
  }
}
// letterFinder(5 ,4)
letterFinder("cat", "c")
