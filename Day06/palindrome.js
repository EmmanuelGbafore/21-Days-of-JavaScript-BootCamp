
let word = 'dad';        // Enter any word in the single quotes
let reversedWord = word.split('').reverse().join('');
if (word===reversedWord){
    console.log('This word is a palindrome')
} else {
    console.log('This word is not a palindrome')  
}