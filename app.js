"use strict";
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
var inputTitle = document.querySelector("#inputTitle");
var inputAuthor = document.querySelector("#inputAuthor");
var inputPages = document.querySelector("#inputPages");
var bookParagraph = (document.querySelector("#bookParagraph"));
var submitButton = document.querySelector("#submitBook");
var sortById = document.querySelector("#sort-by-id");
var sortByTitle = document.querySelector("#sort-by-title");
var sortByAuthor = document.querySelector("#sort-by-author");
var sortByPages = document.querySelector("#sort-by-pages");
var sortByRead = document.querySelector("#sort-by-read");
// const image = document.getElementById('photo') as HTMLImageElement | null;
// if (image !== null) {
//   image.src = 'photo.jpg';
// }
var booksBody = document.querySelector("#booksBody");
// initialize popovers for modal, succesfully add book to list
var popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
var popoverList = __spreadArray([], popoverTriggerList, true).map(function (popoverTriggerEl) { return new bootstrap.Popover(popoverTriggerEl); });
var loadLibrary = function () {
    var tabelData = myLibrary
        .map(function (value) {
        return "<tr>\n\t<th scope=\"row\"> ".concat(value.id, " </th>\n\t<td> ").concat(value.title, " </td>\n\t<td> ").concat(value.author, " </td>\n\t<td> ").concat(value.pages, " </td>\n\t<td> \n\t<div class=\"form-check\">\n<input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"flexCheckDefault\">\n<label class=\"form-check-label\" for=\"flexCheckDefault\">\n</label>\n</div>\n\t</td>\n\t<td> <button id=\"removeBtn\" value=\"").concat(value.id, "\" class=\"btn btn-danger\">Remove</button> </td>\n</tr>");
    })
        .join("");
    booksBody.innerHTML = tabelData;
};
function Book(title, author, pages, id, read) {
    (this.title = title), (this.author = author), (this.pages = pages);
    (this.id = id), (this.read = read);
}
// {title: 'Zero To One', author: 'Peter Thiel', pages: '210', id: '0', read: true},
// {title: 'Hackers & Painters', author: 'Paul Graham', pages: '258', id: '1', read: true},
// {title: 'Computer Science Distilled', author: 'Wladston Ferreira Filho', pages: '168', id: '2', read: true},
var fillLibrary = function () {
    var book1 = new Book("Zero To One", "Peter Thiel", 210, 0, true);
    var book2 = new Book("Hackers & Painters", "Paul Graham", 258, 1, true);
    var book3 = new Book("Computer Science Distilled", "Wladston Ferreira Filho", 168, 2, false);
    myLibrary.push(book1, book2, book3);
    // myLibrary.push(new Book("Zero To One", "Peter Thiel", 210, 0, true));
    // myLibrary.push(new Book("Hackers & Painters", "Paul Graham", 258, 1, true));
    // myLibrary.push(
    //   new Book("Computer Science Distilled", "Wladston Ferreira Filho", 168, 2, false));
};
fillLibrary();
loadLibrary();
var addBookToLibrary = function () {
    // use findLastId() to find id from myLibrary array
    var lastId = findLastID() + 1;
    myLibrary.push(new Book("".concat(inputTitle.value), "".concat(inputAuthor.value), Number("".concat(inputPages.value)), Number("".concat(lastId)), true));
    loadLibrary();
};
var findLastID = function () {
    var lastId = myLibrary.length - 1;
    return lastId;
};
findLastID();
// function to listen for input and update live in console.
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", addBookToLibrary);
// remove book function
var btns = document.querySelectorAll("#removeBtn");
btns.forEach(function (button) {
    button.addEventListener("click", function (e) {
        console.log(e.target.value);
        // myLibrary.splice(e.target.value, 0);
        // let library2 = myLibrary.filter((delete) => delete.value > 5));
        // loadLibrary();
    });
});
// const result = words.filter(word => word.length > 6);
// const removeBook = () => {
//   console.log(this.value);
// };
// removeBook();
/**
 * Sorts the books
 *
 * @param {HTMLTableElement} table the table sort
 * @param {number} column the index of the column to sort
 * @param {boolean} asc determines if the sorting will be ascending order
 */
function sortTableByColumn(table, column, asc) {
    if (asc === void 0) { asc = true; }
    var dirModifier = asc ? 1 : -1;
    var tBody = table.tBodies[0];
    var rows = Array.from(tBody.querySelectorAll('tr'));
    // Sort each row
    var sortedRows = rows.sort(function (a, b) {
        var aColText = a.querySelector("td:nth-child(".concat(column + 1, ")")).textContent.trim();
        var bColText = b.querySelector("td:nth-child(".concat(column + 1, ")")).textContent.trim();
        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
    });
    // Remove all existing TRs from the table
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }
    // Re-add the newly sorted rows
    tBody.append.apply(tBody, sortedRows);
    // Rememeber how the column is currently sorted
    table.querySelectorAll('th').forEach(function (th) { return th.classList.remove('th-sort-asc', 'th-sort-desc'); });
    table.querySelector("th:nth-child(".concat(column + 1, ")")).classList.toggle('th-sort-asc', asc);
    table.querySelector("th:nth-child(".concat(column + 1, ")")).classList.toggle('th-sort-desc', !asc);
}
sortTableByColumn(document.querySelector('table'), 1, false);
