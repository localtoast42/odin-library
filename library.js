const myLibrary = [];

function Book(title, author, numPages) {
    title: title;
    author: author;
    numPages: numPages;
}

function addBookToLibrary(title, author, numPages) {
    let book = new Book(title, author, numPages);
    myLibrary.push(book);
    displayLibrary();
}

function displayLibrary() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        cardContainer.removeChild(card);
    });

    let card = document.createElement('div');
    card.setAttribute('class', 'card');

    myLibrary.forEach((book) => {
        card.textContent = book.title;
        cardContainer.appendChild(card);
    });
}

const cardContainer = document.querySelector('.card-container');
const newBookBtn = document.querySelector('.new-book');
const submitBtn = document.querySelector('.submit');
const titleField = document.querySelector('#title');
const authorField = document.querySelector('#author');
const numPagesField = document.querySelector('#num-pages');

newBookBtn.addEventListener('click', () => {
    addBookToLibrary();
});

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let title = titleField.value;
    let author = authorField.value;
    let numPages = numPagesField.value;
    addBookToLibrary(title, author, numPages);
});

displayLibrary();