// Palindromo o no?

// prendiamo l'input della parola
const stringa = prompt('Inserisci una parola: ');

// chiamo la funzione
const palindromo = document.getElementById('palindromo');

console.log(palindromo);

//stampo in DOM
palindromo.innerHTML = checkPalindromo(stringa);

function checkPalindromo(str) {

   // find the length of a string
   const lunghezza = str.length;

   // loop through half of the string
   for (let i = 0; i < lunghezza / 2; i++) {

       // check if first and last string are same
       if (str[i] !== str[lunghezza - 1 - i]) {
           return 'La parola inserita NON é palindroma';
       }
   }
   return 'La parola inserita é palindroma';
}