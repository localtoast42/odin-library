const myLibrary = [];

function Book(title, author, numPages) {
    title: title;
    author: author;
    numPages: numPages;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        container.removeChild(card);
    });

    let card = document.createElement('div');
    card.setAttribute('class', 'card');

    myLibrary.forEach((book) => {
        card.textContent = book.title;
        container.appendChild(card);
    });
}

const container = document.querySelector('.container');
const newBookBtn = document.querySelector('.new-book');

newBookBtn.addEventListener('click', () => {
    addBookToLibrary();
});

displayLibrary();