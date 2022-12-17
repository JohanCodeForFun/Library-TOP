var myLibrary = [];
var inputTitle = document.querySelector('#inputTitle');
var inputAuthor = document.querySelector('#inputAuthor');
var inputPages = document.querySelector('#inputPages');
var bookParagraph = document.querySelector('#bookParagraph');
var submitButton = document.querySelector('#submitBook');
// function to listen for input and update live in console.
// inputTitle?.addEventListener('input', () => console.log(`${inputTitle.value}`))
var addBookToLibrary = function () {
    bookParagraph === null || bookParagraph === void 0 ? void 0 : bookParagraph.textContent = "Added book, ".concat(inputTitle === null || inputTitle === void 0 ? void 0 : inputTitle.value, " ").concat(inputAuthor === null || inputAuthor === void 0 ? void 0 : inputAuthor.value, " ").concat(inputPages === null || inputPages === void 0 ? void 0 : inputPages.value);
    var id = 1;
    // const book1 = new (Book as any)('Amazing Title', 'John Doe')
    // // do stuff here
    // console.log(book1)
};
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener('click', addBookToLibrary);
function Book(title, author) {
    this.title = inputTitle === null || inputTitle === void 0 ? void 0 : inputTitle.value,
        this.author = inputAuthor === null || inputAuthor === void 0 ? void 0 : inputAuthor.value,
        this.id,
        this.pages = inputPages === null || inputPages === void 0 ? void 0 : inputPages.value,
        this.read;
    this.bookInfo = function () {
        return; // ... 
    };
}
