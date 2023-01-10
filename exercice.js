// Daily Challenge: Not Bad

// Create a variable called . The value of the variable should be a string that contains the words “not” and “bad”.
let strings = "The film is not so bad, I like it";
let array = strings.split("");

// Create a variable called where it’s value is the first appearance (ie. the position) of the substring “not” (from the variable).
let wordNot = strings.indexOf("not");

// Create a variable called where it’s value is the first appearance (ie. the position) of the substring “bad” (from the variable).
const wordBad = strings.indexOf("bad");

// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
if (wordNot < wordBad && wordBad !== -1) {
  array.splice(wordNot, wordBad-wordNot+3, "good");
  newSentence = array.join("");
  console.log(newSentence);

// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
} else {
  console.log(sentence);
}
