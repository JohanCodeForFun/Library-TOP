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
var myLibrary = [];
var inputTitle = document.querySelector('#inputTitle');
var inputAuthor = document.querySelector('#inputAuthor');
var inputPages = document.querySelector('#inputPages');
var bookParagraph = document.querySelector('#bookParagraph');
var submitButton = document.querySelector('#submitBook');
var sortById = document.querySelector('#sort-by-id');
var sortByTitle = document.querySelector('#sort-by-title');
var sortByAuthor = document.querySelector('#sort-by-author');
var sortByPages = document.querySelector('#sort-by-pages');
var sortByRead = document.querySelector('#sort-by-read');
var booksBody = document.querySelector('#booksBody');
// initialize popovers for modal, succesfully add book to list
var popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
var popoverList = __spreadArray([], popoverTriggerList, true).map(function (popoverTriggerEl) { return new bootstrap.Popover(popoverTriggerEl); });
var loadLibrary = function () {
    var tabelData = myLibrary.map(function (value) {
        return ("<tr>\n\t<th scope=\"row\"> ".concat(value.id, " </th>\n\t<td> ").concat(value.title, " </td>\n\t<td> ").concat(value.author, " </td>\n\t<td> ").concat(value.pages, " </td>\n\t<td> \n\t<div class=\"form-check\">\n<input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"flexCheckDefault\">\n<label class=\"form-check-label\" for=\"flexCheckDefault\">\n</label>\n</div>\n\t</td>\n\t<td> <button id=\"removeBtn\" value=\"").concat(value.id, "\" class=\"btn btn-danger\">Remove</button> </td>\n</tr>"));
    }).join('');
    booksBody === null || booksBody === void 0 ? void 0 : booksBody.innerHTML = tabelData;
};
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
// {title: 'Zero To One', author: 'Peter Thiel', pages: '210', id: '0', read: true},
// {title: 'Hackers & Painters', author: 'Paul Graham', pages: '258', id: '1', read: true},
// {title: 'Computer Science Distilled', author: 'Wladston Ferreira Filho', pages: '168', id: '2', read: true},
var fillLibrary = function () {
    myLibrary.push(new Book('Zero To One', 'Peter Thiel', 210, 0, true));
    myLibrary.push(new Book('Hackers & Painters', 'Paul Graham', 258, 1, true));
    myLibrary.push(new Book('Computer Science Distilled', 'Wladston Ferreira Filho', 168, 2, false));
};
fillLibrary();
loadLibrary();
var addBookToLibrary = function () {
    var lastId = findLastID() + 1;
    myLibrary.push(new Book("".concat(inputTitle.value), "".concat(inputAuthor.value), "".concat(inputPages.value), "".concat(lastId), true));
    loadLibrary();
    updateBtnValue();
};
var findLastID = function () {
    var lastId = myLibrary.length - 1;
    return lastId;
};
findLastID();
// function to listen for input and update live in console.
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener('click', addBookToLibrary);
var btns = document.querySelectorAll('#removeBtn');
var updateBtnValue = function () {
    for (var _i = 0, btns_1 = btns; _i < btns_1.length; _i++) {
        var btn = btns_1[_i];
        btn.addEventListener('click', function () {
            console.log(this.value);
        });
    }
};
updateBtnValue();
// const sortByIdReverse = (a, b) => b.id - a.id;
// sort functions
var active = false;
sortById === null || sortById === void 0 ? void 0 : sortById.addEventListener('click', function () {
    active = !active;
    if (active) {
        sortById.classList.add('active');
        myLibrary.sort(function (a, b) { return b.id - a.id; });
        sortById.style.transform = 'rotate(180deg)';
        loadLibrary();
    }
    else {
        sortById.classList.remove('active');
        myLibrary.sort(function (a, b) { return a.id - b.id; });
        sortById.style.transform = 'rotate(0deg)';
        loadLibrary();
    }
});
sortByTitle === null || sortByTitle === void 0 ? void 0 : sortByTitle.addEventListener('click', function () {
    myLibrary.sort(function (a, b) { return a.title - b.title; });
    loadLibrary();
});
