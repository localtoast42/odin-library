const myLibrary = [];

function Book(title, author, numPages) {
    this.index = 0;
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = false;
}

Book.prototype.markRead = function () {
    this.isRead = this.isRead ? false : true;
}

function addBookToLibrary(title, author, numPages) {
    let book = new Book(title, author, numPages);
    book.index = bookIndex;
    bookIndex++;
    myLibrary.push(book);
    displayLibrary();
}

function removeBookFromLibrary(index) {
    for (i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].index === index) {
            myLibrary.splice(i, 1);
            break;
        }
    }
}

function displayLibrary() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        cardContainer.removeChild(card);
    });

    myLibrary.forEach((book) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        
        const titleDiv = document.createElement('h2');
        const authorDiv = document.createElement('h3');
        const numPagesDiv = document.createElement('p');
        titleDiv.textContent = book.title;
        authorDiv.textContent = 'by ' + book.author;
        numPagesDiv.textContent = 'Page Count: ' + book.numPages;

        const removalButton = document.createElement('button');
        removalButton.setAttribute('class', 'remove');
        removalButton.textContent = 'Remove';
        removalButton.dataset.index = book.index;
        removalButton.addEventListener('click', (e) => {
            const bookToRemove = parseInt(e.target.dataset.index);
            removeBookFromLibrary(bookToRemove);
            displayLibrary();
        });

        const readButton = document.createElement('button');
        readButton.setAttribute('class', 'read');
        readButton.textContent = 'Mark Read';
        readButton.addEventListener('click', (e) => {
            book.markRead();
        });

        card.appendChild(titleDiv);
        card.appendChild(authorDiv);
        card.appendChild(numPagesDiv);
        card.appendChild(removalButton);
        card.appendChild(readButton);

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
let bookIndex = 0;

newBookBtn.addEventListener('click', () => {
    titleField.value = '';
    authorField.value = '';
    numPagesField.value = '';
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