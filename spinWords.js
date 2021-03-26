// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"

// spinWords( "This is a test") => returns "This is a test"

// spinWords( "This is another test" )=> returns "This is rehtona test"


function spinWords(str){
    var newstr= str.split(' ')
    var answer=[]
    
    for (var i = 0 ; i < newstr.length;i++){
      if (newstr[i].length>=5){
        answer.push(newstr[i].split('').reverse().join(''))
      } else{
         answer.push(newstr[i])
      }
     
    }
   
    return  answer.join(' ')
   
  }