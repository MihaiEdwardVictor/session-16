// Ex 4 (For, Arrays, Objects):
// Scrie un program care primește de la utilizator un array de obiecte, fiecare obiect reprezentând un produs (cu proprietăți precum nume, preț, cantitate). Calculează valoarea totală a produselor (preț x cantitate) și o afișează în consolă.


const products = [
    {name: "ardei gras",pret:6, cantitate: 20},
    {name: "castraveti",pret:4, cantitate: 12},
    {name: "cartofi",pret:3.5, cantitate:30},
];

let valoareTotala = 0;

for(let i=0;i<products.length; i++){
    valoareTotala = valoareTotala + products[i].pret*products[i].cantitate;
}

console.log(`Valoarea totala a produselor: ${valoareTotala}`);



// Ex 5 (While / Do-While, Functions, Arrays, Objects):
// Scrie un program care primește de la utilizator un array de obiecte reprezentând studenți (cu proprietăți precum nume, vârstă, note) și calculează media notelor pentru fiecare student. Afișează numele și media fiecărui student în consolă

const studenți = [
    {nume: "Marcel",varsta:15,note: [10,7,9]},
    {nume: "Petrica", varsta: 16 , note:[5,6,8]},
    {nume: "Mariana",varsta:15,note:[9,8,10]},

];



for(let i = 0;i<studenți.length;i++){
    let sum = 0;
    for(let j = 0;j<studenți[i].note.length;j++){
        sum = sum + studenți[i].note[j];
    }
    const media = sum/studenți[i].note.length;
    console.log(`Studentul cu numele: ${studenți[i].nume} are media ${media.toFixed(2)}`);
}



