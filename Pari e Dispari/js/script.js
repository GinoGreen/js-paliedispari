// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//chiedere all'utente di scegliere tra pari o dispari
const stringaPariDispari;

do {

   stringaPariDispari = prompt('Inserisci pari o dispari');

   //faccio un controllo sulla corretta grammatica
   if (stringaPariDispari != 'pari' || stringaPariDispari != 'dispari') {
      alert('Inserisci correttamente pari o dispari');
   }

} while (stringaPariDispari != 'pari' || stringaPariDispari != 'dispari');

//imposto una variabile booleana per controllare cosa ha scelto l'utente
let valuePariDispari = false;

//chiedere all'utente di inserire un numero da 1 a 5
const numeroUtente = 5;
//controllo se il numbero é compreso tra 1 e 5, in caso contrario, ripetere la richiesta

//controllo se l'utente ha scelto pari o dispari
if (stringaPariDispari === 'pari' || stringaPariDispari === 'Pari') {
   valuePariDispari = true;
}

//genero un numero random da 1 a 5 e lo inserisco nella variabile numeroCPU
const numeroCPU = getNumeroRandom(1, 5);

console.log('Numero inserito dalla CPU', numeroCPU);
console.log('Numero inserito dall utente', numeroUtente);
console.log('Opzione scelta: ', stringaPariDispari);

//faccio la somma di numero utente e numero computer
const somma = getSum(numeroCPU, numeroUtente);

console.log('la somma dei due numeri é: ', somma);

//controllo se la somma é pari o dispari
const valueSommaPariDispari = getPariDispari(somma);

console.log('la somma é false se é dispari, true se é pari: ', valueSommaPariDispari);

//controllo il vincitore
const esito = document.getElementById('esito');

if (valuePariDispari === valueSommaPariDispari) {
   esito.innerHTML = `L'utente ha vinto`;
} else {
   esito.innerHTML = 'Il compute ha vinto';
}

//funzioni
function getNumeroRandom(min, max){

   return Math.floor(Math.random() * (max - min + 1) + min);
 
 }

function getSum(num1, num2) {
   
   return num1 + num2;
}

function getPariDispari(number) {
   
   if (number % 2 === 0) {

      return true;
   }

   return false;
}