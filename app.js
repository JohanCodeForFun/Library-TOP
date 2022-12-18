'use strict';
var myLibrary = [
    { title: 'Zero To One', author: 'Peter Thiel', pages: '210', id: '1', read: true },
    { title: 'Hackers & Painters', author: 'Paul Graham', pages: '258', id: '2', read: true },
    { title: 'Computer Science Distilled', author: 'Wladston Ferreira Filho', pages: '168', id: '3', read: true },
];
var inputTitle = document.querySelector('#inputTitle');
var inputAuthor = document.querySelector('#inputAuthor');
var inputPages = document.querySelector('#inputPages');
var bookParagraph = document.querySelector('#bookParagraph');
var submitButton = document.querySelector('#submitBook');
var booksBody = document.querySelector('#booksBody');
var loadLibrary = function () {
    var tabelData = myLibrary.map(function (value) {
        return ("<tr>\n\t<th scope=\"row\"> ".concat(value.id, " </th>\n\t<td> ").concat(value.title, " </td>\n\t<td> ").concat(value.author, " </td>\n\t<td> ").concat(value.pages, " </td>\n\t<td> \n\t<div class=\"form-check\">\n<input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"flexCheckDefault\">\n<label class=\"form-check-label\" for=\"flexCheckDefault\">\n</label>\n</div>\n\t</td>\n\t<td> <button class=\"btn btn-danger\">Remove</button> </td>\n</tr>"));
    }).join('');
    booksBody === null || booksBody === void 0 ? void 0 : booksBody.innerHTML = tabelData;
};
loadLibrary();
function Book(title, author, pages, id, read) {
    this.title = title,
        this.author = author,
        this.pages = pages;
    this.id = id,
        this.read = read;
}
var addBookToLibrary = function () {
    var id = 1;
    myLibrary.push(new Book("".concat(inputTitle.value), "".concat(inputAuthor.value), "".concat(inputPages.value), "".concat(id), true));
    loadLibrary();
};
// function to listen for input and update live in console.
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener('click', addBookToLibrary);
