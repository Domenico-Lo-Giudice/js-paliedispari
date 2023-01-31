// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.

// chiediamo all'utente di scegliere tra pari o dispari 
const evenOddChoice = prompt('Scegli pari o dispari:');
console.log('Il giocatore ha scelto: ' + evenOddChoice)

// chiediamo all'utente un numero da 1 a 5
const userNumber = parseInt(prompt('Scegli un numero da 1 a 5:'));


// generiamo un numero random da 1 a 5 per il computer
const computerNumber = generateRandomNumber(1, 5);


function generateRandomNumber(minNumber, maxNumber) {

    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);

    return randomNumber;
}


// sommiamo i numeri scelti dal giocatore e dal computer
const numbersSum = userNumber + computerNumber;

console.log("Il numero del computer è: " + computerNumber);
console.log("Il numero dell'utente è: " + userNumber);
console.log("La loro somma è: " + numbersSum);



// verifichiamo se la somma dei due numeri è pari o dipari 
function checkNumberIsEven(numbersSum) {

    if (numbersSum % 2 == 0) {

        return true;
    }

        return false;
}

// dichiariamo se vince pari o dispari
if (checkNumberIsEven(numbersSum)) {

    alert("Vince Pari");
    

} else {

    alert("Vince Dispari");

}
