// ... rest operator 

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

const [primeironumero, segundonumero, ...resto] = numeros;

console.log(primeironumero, segundonumero);
console.log(resto);

//                     0          1           2   
//                  0  1  2    0  1  2     0  1  2 
const numeros1 = [ [1, 2, 3], [4, 5, 6,], [7, 8, 9] ];
const [,[,,seis]] = numeros1;
console.log(seis);