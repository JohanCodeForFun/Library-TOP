"use strict";
let myLibrary = [];
const inputTitle = document.querySelector("#inputTitle");
const inputAuthor = document.querySelector("#inputAuthor");
const inputPages = document.querySelector("#inputPages");
const bookParagraph = document.querySelector("#bookParagraph");
const submitButton = document.querySelector("#submitBook");
const sortById = document.querySelector("#sort-by-id");
const sortByTitle = document.querySelector("#sort-by-title");
const sortByAuthor = document.querySelector("#sort-by-author");
const sortByPages = document.querySelector("#sort-by-pages");
const sortByRead = document.querySelector("#sort-by-read");
const booksBody = document.querySelector("#booksBody");
// initialize popovers for modal, succesfully add book to list
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));
const loadLibrary = () => {
    const tabelData = myLibrary
        .map((value) => {
        return `
			<tr>
				<td> ${value.title} </td>
				<td> ${value.author} </td>
				<td> ${value.pages} </td>
				<td> 
				<div class="form-check">
			<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
			<label class="form-check-label" for="flexCheckDefault">
			</label>
			</div>
			</td>
			<td> <button id="removeBtn" value="${value.id}" class="btn btn-danger">Remove</button> </td>
</tr>`;
    })
        .join("");
    booksBody.innerHTML = tabelData;
};
class Book {
    constructor(title, author, pages, id, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.id = id;
        this.read = read;
    }
}
const fillLibrary = () => {
    const book1 = new Book("Zero To One", "Peter Thiel", 210, 0, true);
    const book2 = new Book("Hackers & Painters", "Paul Graham", 258, 1, true);
    const book3 = new Book("Computer Science Distilled", "Wladston Ferreira Filho", 168, 2, false);
    myLibrary.push(book1, book2, book3);
};
fillLibrary();
loadLibrary();
const addBookToLibrary = () => {
    // use findLastId() to find id from myLibrary array
    let lastId = findLastID() + 1;
    myLibrary.push(new Book(`${inputTitle.value}`, `${inputAuthor.value}`, Number(`${inputPages.value}`), Number(`${lastId}`), true));
    loadLibrary();
};
const findLastID = () => {
    let lastId = myLibrary.length - 1;
    return lastId;
};
findLastID();
// function to listen for input and update live in console.
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", addBookToLibrary);
// remove book function
let btns = document.querySelectorAll("#removeBtn");
btns.forEach((button) => {
    button.addEventListener("click", (event) => {
        const target = event.target;
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
function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));
    // Sort each row
    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
        return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
    });
    // Remove all existing TRs from the table
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }
    // Re-add the newly sorted rows
    tBody.append(...sortedRows);
    // Rememeber how the column is currently sorted
    table.querySelectorAll("th")
        .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${column + 1})`)
        .classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${column + 1})`)
        .classList.toggle("th-sort-desc", !asc);
}
document.querySelectorAll(".table-sortable th").forEach((headerCell) => {
    headerCell.addEventListener("click", () => {
        var _a, _b, _c;
        // const tableElement = headerCell.closest('.table');
        const tableElement = (_b = (_a = headerCell.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
        const headerIndex = Array.prototype.indexOf.call((_c = headerCell.parentElement) === null || _c === void 0 ? void 0 : _c.children, headerCell);
        const currentIsAscending = headerCell.classList.contains("th-sort-asc");
        sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
    });
});
