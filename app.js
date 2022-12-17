var myLibrary = [];
var inputTitle = document.querySelector('#inputTitle');
var inputAuthor = document.querySelector('#inputAuthor');
var bookParagraph = document.querySelector('#bookParagraph');
var submitButton = document.querySelector('#submitBook');
// function to listen for input and update live in console.
// inputTitle?.addEventListener('input', () => console.log(`${inputTitle.value}`))
var addBookToLibrary = function () {
    bookParagraph === null || bookParagraph === void 0 ? void 0 : bookParagraph.textContent = "Added book, ".concat(inputTitle === null || inputTitle === void 0 ? void 0 : inputTitle.value, " ").concat(inputAuthor === null || inputAuthor === void 0 ? void 0 : inputAuthor.value);
    // let count = 0;
    // const book1 = new (Book as any)('Amazing Title', 'John Doe')
    // // do stuff here
    // console.log(book1)
};
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener('click', addBookToLibrary);
function Book(title, author) {
    this.title,
        this.author,
        this.bookInfo = function () {
            return; // ... 
        };
}
