'use strict';
var myLibrary = [];
var inputTitle = document.querySelector('#inputTitle');
var inputAuthor = document.querySelector('#inputAuthor');
var inputPages = document.querySelector('#inputPages');
var bookParagraph = document.querySelector('#bookParagraph');
var submitButton = document.querySelector('#submitBook');
var booksBody = document.querySelector('#booksBody');
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
var addBookToLibrary = function () {
    var id = 1;
    myLibrary.push(new Book("".concat(inputTitle.value), "".concat(inputAuthor.value), "".concat(inputPages.value), "".concat(id), true));
    var tabelData = myLibrary.map(function (value) {
        return ("<tr>\n\t\t<td> ".concat(value.title, " </td>\n\t\t<td> ").concat(value.author, " </td>\n\t\t<td> ").concat(value.pages, " </td>\n\t\t<td> ").concat(id, " </td>\n\t</tr>"));
    }).join('');
    booksBody === null || booksBody === void 0 ? void 0 : booksBody.innerHTML = tabelData;
};
// function to listen for input and update live in console.
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener('click', addBookToLibrary);
