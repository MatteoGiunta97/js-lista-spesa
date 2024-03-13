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

// Leggo gli elementi della lista
for (let index = 0; index < list.length; index++) {

    // Inserisco ogni elemento in un list item
    let listItem = `<li>${list[index]}</li>`;

    // Inserisco il list item all'interno della unordered list del DOM
    groceryList.innerHTML += listItem;
    
}