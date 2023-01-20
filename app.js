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
var bookParagraph = document.querySelector("#bookParagraph");
var submitButton = document.querySelector("#submitBook");
var sortById = document.querySelector("#sort-by-id");
var sortByTitle = document.querySelector("#sort-by-title");
var sortByAuthor = document.querySelector("#sort-by-author");
var sortByPages = document.querySelector("#sort-by-pages");
var sortByRead = document.querySelector("#sort-by-read");
var booksBody = document.querySelector("#booksBody");
// initialize popovers for modal, succesfully add book to list
var popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
var popoverList = __spreadArray([], popoverTriggerList, true).map(function (popoverTriggerEl) { return new bootstrap.Popover(popoverTriggerEl); });
var loadLibrary = function () {
    var tabelData = myLibrary
        .map(function (value) {
        return "\n\t\t\t<tr>\n\t\t\t\t<td> ".concat(value.title, " </td>\n\t\t\t\t<td> ").concat(value.author, " </td>\n\t\t\t\t<td> ").concat(value.pages, " </td>\n\t\t\t\t<td> \n\t\t\t\t<div class=\"form-check\">\n\t\t\t<input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"flexCheckDefault\">\n\t\t\t<label class=\"form-check-label\" for=\"flexCheckDefault\">\n\t\t\t</label>\n\t\t\t</div>\n\t\t\t</td>\n\t\t\t<td> <button id=\"removeBtn\" value=\"").concat(value.id, "\" class=\"btn btn-danger\">Remove</button> </td>\n</tr>");
    })
        .join("");
    booksBody.innerHTML = tabelData;
};
var Book = /** @class */ (function () {
    function Book(title, author, pages, id, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.id = id;
        this.read = read;
    }
    return Book;
}());
var fillLibrary = function () {
    var book1 = new Book("Zero To One", "Peter Thiel", 210, 0, true);
    var book2 = new Book("Hackers & Painters", "Paul Graham", 258, 1, true);
    var book3 = new Book("Computer Science Distilled", "Wladston Ferreira Filho", 168, 2, false);
    myLibrary.push(book1, book2, book3);
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
    button.addEventListener("click", function (event) {
        var target = event.target;
        if (target)
            console.log(target.value);
        // myLibrary.splice(target.value, 1);
        // varför slutar btn click att fungera efter att jag använder loadLibrary()?
        loadLibrary();
    });
});
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
    var rows = Array.from(tBody.querySelectorAll("tr"));
    // Sort each row
    var sortedRows = rows.sort(function (a, b) {
        var aColText = a.querySelector("td:nth-child(".concat(column + 1, ")")).textContent.trim();
        var bColText = b.querySelector("td:nth-child(".concat(column + 1, ")")).textContent.trim();
        return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
    });
    // Remove all existing TRs from the table
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }
    // Re-add the newly sorted rows
    tBody.append.apply(tBody, sortedRows);
    // Rememeber how the column is currently sorted
    table.querySelectorAll("th")
        .forEach(function (th) { return th.classList.remove("th-sort-asc", "th-sort-desc"); });
    table.querySelector("th:nth-child(".concat(column + 1, ")"))
        .classList.toggle("th-sort-asc", asc);
    table.querySelector("th:nth-child(".concat(column + 1, ")"))
        .classList.toggle("th-sort-desc", !asc);
}
document.querySelectorAll(".table-sortable th").forEach(function (headerCell) {
    headerCell.addEventListener("click", function () {
        var _a, _b, _c;
        // const tableElement = headerCell.closest('.table');
        var tableElement = (_b = (_a = headerCell.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
        var headerIndex = Array.prototype.indexOf.call((_c = headerCell.parentElement) === null || _c === void 0 ? void 0 : _c.children, headerCell);
        var currentIsAscending = headerCell.classList.contains("th-sort-asc");
        sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
    });
});
