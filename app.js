'use strict';
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var myLibrary = [
    { title: 'Zero To One', author: 'Peter Thiel', pages: '210', id: '0', read: true },
    { title: 'Hackers & Painters', author: 'Paul Graham', pages: '258', id: '1', read: true },
    { title: 'Computer Science Distilled', author: 'Wladston Ferreira Filho', pages: '168', id: '2', read: true },
];
var inputTitle = document.querySelector('#inputTitle');
var inputAuthor = document.querySelector('#inputAuthor');
var inputPages = document.querySelector('#inputPages');
var bookParagraph = document.querySelector('#bookParagraph');
var submitButton = document.querySelector('#submitBook');
var removeBookButton = document.querySelector("#remove".concat(myLibrary[0].id));
removeBookButton === null || removeBookButton === void 0 ? void 0 : removeBookButton.addEventListener('click', function () { return console.log('click'); });
var booksBody = document.querySelector('#booksBody');
// initialize popovers for modal, succesfully add book to list
var popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
var popoverList = __spreadArray([], popoverTriggerList, true).map(function (popoverTriggerEl) { return new bootstrap.Popover(popoverTriggerEl); });
var loadLibrary = function () {
    var tabelData = myLibrary.map(function (value) {
        return ("<tr>\n\t<th scope=\"row\"> ".concat(value.id, " </th>\n\t<td> ").concat(value.title, " </td>\n\t<td> ").concat(value.author, " </td>\n\t<td> ").concat(value.pages, " </td>\n\t<td> \n\t<div class=\"form-check\">\n<input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"flexCheckDefault\">\n<label class=\"form-check-label\" for=\"flexCheckDefault\">\n</label>\n</div>\n\t</td>\n\t<td> <button id=\"remove").concat(value.id, "\" class=\"btn btn-danger\">Remove</button> </td>\n</tr>"));
    }).join('');
    booksBody === null || booksBody === void 0 ? void 0 : booksBody.innerHTML = tabelData;
};
loadLibrary();
var removeBook = function () {
    // remove book by clicking remove button
    // function, myLibrary.splice(${id}, 1)
    // forEach button with ${id}, get id value.
    // then run myLibrary.splice(${id}, 1) to remove that item
    // then update library app with the new array
    // by running loadLibrary.
};
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
