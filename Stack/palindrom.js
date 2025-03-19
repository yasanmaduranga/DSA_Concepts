let word = "racecar";

let WordArr = [];
let reverseWord = "";

for(let i=0; i< word.length; i++) {
    WordArr.push(word[i]);
}

for(let i=0; i< word.length; i++) {
    reverseWord += WordArr.pop();
}

if (word === reverseWord) {
    console.log('word is a palindrom');
} else {
    console.log('word is not a palindrom');
}