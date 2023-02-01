// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// Verificare se la parola inseria sia palindroma

const userWord = prompt("Inserisci una parola: ");



if (isPalindrome (userWord)) {
    console.log(userWord + " è palindroma");
} else {
    console.log(userWord + " non è palindroma");
}


/** Function that verify if a word is palindorme 
 * 
 * @param {string} word Param that contains the word to verify
 * @returns {boolean} return true if the word is palindrome or false if it's not
 * 
 * 
*/

// funzione per capire se la parola inserita è palindroma
function isPalindrome (word) { 

    let reverseWord = "";

    for (let i = 0; i < word.length; i++) {
        const currentLetter = word[i];
        // console.log(currentLetter);

        reverseWord = currentLetter + reverseWord;
        // console.log(reverseWord);
    }

    // console.log(reverseWord);

    return word == reverseWord
    // ovvero
    // if (word == reverseWord) {
    //     return true;
    // }

    // return false;
} 