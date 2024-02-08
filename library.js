const myLibrary = [];

function Book(title, author, numPages) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
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

    myLibrary.forEach((book) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        
        const titleDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const numPagesDiv = document.createElement('div');
        titleDiv.textContent = book.title;
        authorDiv.textContent = book.author;
        numPagesDiv.textContent = book.numPages;

        card.appendChild(titleDiv);
        card.appendChild(authorDiv);
        card.appendChild(numPagesDiv);

        cardContainer.appendChild(card);
    });
}

const cardContainer = document.querySelector('.card-container');
const newBookBtn = document.querySelector('.new-book');
const submitBtn = document.querySelector('.submit');
const titleField = document.querySelector('#title');
const authorField = document.querySelector('#author');
const numPagesField = document.querySelector('#num-pages');
const inputForm = document.querySelector('form');

newBookBtn.addEventListener('click', () => {
    inputForm.setAttribute('style', 'display: flex;');
});

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let title = titleField.value;
    let author = authorField.value;
    let numPages = numPagesField.value;
    addBookToLibrary(title, author, numPages);
    inputForm.setAttribute('style', 'display: none;');
});

displayLibrary();