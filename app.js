'use strict';
var myLibrary = [];
var inputTitle = document.querySelector('#inputTitle');
var inputAuthor = document.querySelector('#inputAuthor');
var inputPages = document.querySelector('#inputPages');
var bookParagraph = document.querySelector('#bookParagraph');
var submitButton = document.querySelector('#submitBook');
var booksBody = document.querySelector('#booksBody');
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
function Book(title, author, pages, id, read) {
    this.title = title, // = inputTitle?.value,
        this.author = author, // = inputAuthor?.value,
        this.pages = pages; // = inputPages?.value,
    this.id = id,
        this.read = read;
    this.bookInfo = function () {
        return; // ... 
    };
}
var book1 = new Book("javascript funktioner", "Johan Hellberg", 900, 1, true);
console.log(book1);
// example how to display data with .map
// https://stackoverflow.com/questions/14643617/create-table-using-javascript
var data = [{ Name: 'Sydney', Day: 'Monday', Time: '10:00AM' }, { Name: 'New York', Day: 'Monday', Time: '11:00AM' },]; // any json data or array of objects
var tabelData = data.map(function (value) {
    return ("<tr>\n\t<td> ".concat(value.Name, " </td>\n\t<td> ").concat(value.Day, " </td>\n\t<td> ").concat(value.Time, " </td>\n\t<td> ").concat(value.Time, " </td>\n</tr>"));
}).join('');
booksBody === null || booksBody === void 0 ? void 0 : booksBody.innerHTML = tabelData;
// bookParagraph?.textContent = book1.title
var book1content = "\n<tr>\n\t<td> ".concat(book1.title, " </td>\n\t<td> ").concat(book1.author, " </td>\n\t<td> ").concat(book1.pages, " </td>\n\t<td> ").concat(book1.read, " </td>\n</tr>");
