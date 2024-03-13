/*
Consegna:
Data una lista della spesa:
const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];
Stampare sulla pagina (anche brutalmente, basta che si vedano) 
gli elementi della lista individualmente.
*/



// Dichiaro l'array lista
const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];

// Seleziono la lista dal DOM
const groceryList = document.querySelector('#grocery-list');

// Dichiaro la variabile contatore
let index = 0;

// Leggo gli elementi della lista
while (index < list.length) {

    // Inserisco ogni elemento in un list item
    let listItem = `<li>${list[index]}</li>`;

    // Inserisco il list item all'interno della unordered list del DOM
    groceryList.innerHTML += listItem;

    index++;
    
}


