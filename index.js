1. Fonctions de manipulation de chaînes
1.1. Inverser une chaîne
javascript
Copier le code
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Exemple
console.log(reverseString("hello")); // ➞ "olleh"
1.2. Compter les caractères
javascript
Copier le code
function countCharacters(str) {
  return str.length;
}

// Exemple
console.log(countCharacters("hello")); // ➞ 5
1.3. Capitaliser les mots
javascript
Copier le code
function capitalizeWords(sentence) {
  return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Exemple
console.log(capitalizeWords("hello world")); // ➞ "Hello World"
2. Fonctions de tableau
2.1. Trouver le maximum
javascript
Copier le code
function findMax(arr) {
  return Math.max(...arr);
}

// Exemple
console.log(findMax([1, 2, 3, 4, 5])); // ➞ 5
2.2. Trouver le minimum
javascript
Copier le code
function findMin(arr) {
  return Math.min(...arr);
}

// Exemple
console.log(findMin([1, 2, 3, 4, 5])); // ➞ 1
2.3. Somme des éléments du tableau
javascript
Copier le code
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Exemple
console.log(sumArray([1, 2, 3, 4, 5])); // ➞ 15
2.4. Filtrer un tableau
javascript
Copier le code
function filterArray(arr, condition) {
 return arr.filter(condition);
}

// Exemple : filtrer les nombres pairs
console.log(filterArray([1, 2, 3, 4, 5], num => num % 2 === 0)); // ➞ [2, 4]
3. Fonctions mathématiques
3.1. Calculer la factorielle
javascript
Copier le code
function factorial(n) {
  if (n <= 1) return 1;
return n * factorial(n - 1);
}

// Exemple
console.log(factorial(5)); // ➞ 120
3.2. Vérification d'un nombre premier
javascript
Copier le code
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
return true;
}

// Exemple
console.log(isPrime(7)); // ➞ true
console.log(isPrime(10)); // ➞ false
3.3. Générer une séquence de Fibonacci
javascript
Copier le code
function fibonacciSequence(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}

// Exemple
console.log(fibonacciSequence(7)); // ➞ [0, 1, 1, 2, 3, 5, 8]