// Daily Challenge: Not Bad

// Create a variable called . The value of the variable should be a string that contains the words “not” and “bad”.
const sentence = "The film is not so bad, I like it";

// Create a variable called where it’s value is the first appearance (ie. the position) of the substring “not” (from the variable).
const wordNot = sentence.indexOf("not");

// Create a variable called where it’s value is the first appearance (ie. the position) of the substring “bad” (from the variable).
const wordBad = sentence.indexOf("bad");

// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
if (wordNot !== -1 && wordBad !== -1 && wordNot < wordBad) {
  const newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
  console.log(newSentence);

// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
} else {
  console.log(sentence);
}
