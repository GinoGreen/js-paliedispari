// Palindromo o no?

// prendiamo l'input della parola
const stringa = prompt('Inserisci una parola: ');

// chiamo la funzione
const palindromo = document.getElementById('palindromo');

console.log(palindromo);

//stampo in DOM
palindromo.innerHTML = checkPalindromo(stringa);

function checkPalindromo(str) {

   // trova la lunghezza della stringa
   const lunghezza = str.length;

   // dai un iterazione sulla metá lunghezza della parola
   for (let i = 0; i < lunghezza / 2; i++) {

       // controllo se la prima l'ultima lettera sono uguali, e cosí via, seconda e penultima, ecc...
       if (str[i] !== str[lunghezza - 1 - i]) {
           return 'La parola inserita NON é palindroma';
       }
   }
   return 'La parola inserita é palindroma';
}