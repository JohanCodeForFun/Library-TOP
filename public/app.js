"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Book_id, _Book_title, _Book_author, _Book_pages, _Book_isRead, _Library_books;
document.addEventListener("DOMContentLoaded", () => {
    const formHandler = FormHandler.create();
    formHandler.initializeEventListeners();
});
const bookParagraph = document.querySelector("#bookParagraph");
const sortById = document.querySelector("#sort-by-id");
const sortByTitle = document.querySelector("#sort-by-title");
const sortByAuthor = document.querySelector("#sort-by-author");
const sortByPages = document.querySelector("#sort-by-pages");
const sortByRead = document.querySelector("#sort-by-read");
const booksBody = document.querySelector("#booksBody");
// initialize popovers for modal, succesfully add book to list
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));
class FindLastID {
    constructor(lastId) {
        this.lastId = lastId;
    }
    static getLastId() {
        if (!Array.isArray(myLibrary) || myLibrary.length === 0) {
            let lastId = 1;
            return lastId;
        }
        let lastId = myLibrary.length - 1;
        return lastId;
    }
}
const FormHandler = (() => {
    function create() {
        const submitButton = document.querySelector("#submitBook");
        function getFormValues() {
            const title = document.querySelector("#inputTitle").value;
            const author = document.querySelector("#inputAuthor").value;
            const pages = parseInt(document.querySelector("#inputPages").value, 10);
            const isRead = document.querySelector("#inputIsRead").checked;
            return { title, author, pages, isRead };
        }
        function handleFormSubmission(event) {
            event.preventDefault();
            const { title, author, pages, isRead } = getFormValues();
            myLibrary.addBook(title, author, pages, isRead);
        }
        function initializeEventListeners() {
            submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", handleFormSubmission);
        }
        return {
            initializeEventListeners
        };
    }
    return {
        create,
    };
})();
class Book {
    constructor(id, title, author, pages, isRead) {
        _Book_id.set(this, void 0);
        _Book_title.set(this, void 0);
        _Book_author.set(this, void 0);
        _Book_pages.set(this, void 0);
        _Book_isRead.set(this, void 0);
        __classPrivateFieldSet(this, _Book_id, id, "f");
        __classPrivateFieldSet(this, _Book_title, title, "f");
        __classPrivateFieldSet(this, _Book_author, author, "f");
        __classPrivateFieldSet(this, _Book_pages, pages, "f");
        __classPrivateFieldSet(this, _Book_isRead, isRead, "f");
    }
    get id() {
        return __classPrivateFieldGet(this, _Book_id, "f");
    }
    get title() {
        return __classPrivateFieldGet(this, _Book_title, "f");
    }
    set title(newTitle) {
        __classPrivateFieldSet(this, _Book_title, newTitle, "f");
    }
    get author() {
        return __classPrivateFieldGet(this, _Book_author, "f");
    }
    set author(newAuthor) {
        __classPrivateFieldSet(this, _Book_author, newAuthor, "f");
    }
    get pages() {
        return __classPrivateFieldGet(this, _Book_pages, "f");
    }
    set pages(newPages) {
        __classPrivateFieldSet(this, _Book_pages, newPages, "f");
    }
    get isRead() {
        return __classPrivateFieldGet(this, _Book_isRead, "f");
    }
    set isRead(newIsRead) {
        __classPrivateFieldSet(this, _Book_isRead, newIsRead, "f");
    }
}
_Book_id = new WeakMap(), _Book_title = new WeakMap(), _Book_author = new WeakMap(), _Book_pages = new WeakMap(), _Book_isRead = new WeakMap();
class Library {
    constructor() {
        _Library_books.set(this, void 0);
        __classPrivateFieldSet(this, _Library_books, [], "f");
    }
    addBook(title, author, pages, isRead) {
        const id = __classPrivateFieldGet(this, _Library_books, "f").length === 0 ? 1 : Math.max(...__classPrivateFieldGet(this, _Library_books, "f").map(book => book.id)) + 1;
        const newBook = new Book(id, title, author, pages, isRead);
        __classPrivateFieldGet(this, _Library_books, "f").push(newBook);
        this.loadLibrary();
    }
    fillLibrary() {
        const book1 = new Book(1, "Zero To One", "Peter Thiel", 210, true);
        const book2 = new Book(2, "Hackers & Painters", "Paul Graham", 258, true);
        const book3 = new Book(3, "Computer Science Distilled", "Wladston Ferreira Filho", 168, true);
        const book4 = new Book(4, "Grokking Algorithms", "Aditya Y. Bhargava", 238, true);
        const book5 = new Book(5, "START SMALL, STAY SMALL", "Rob Walling", 201, false);
        __classPrivateFieldGet(this, _Library_books, "f").push(book1, book2, book3, book4, book5);
    }
    ;
    loadLibrary() {
        const tabelData = this.getBooks()
            .map((value) => {
            return `
        <tr>
          <td> ${value.title} </td>
          <td> ${value.author} </td>
          <td> ${value.pages} </td>
          <td> 
          <div class="form-check">
          <label class="form-check-label" for="flexCheckDefault-${value.id}">Read</label>
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault-${value.id}" ${this.getCheckedAttribute(value.isRead)}>
          </div>
          </td>
          <td> <button value="${value.id}" class="btn btn-danger">Remove</button> </td>
        </tr>`;
        })
            .join("");
        booksBody.innerHTML = tabelData;
        this.addDeleteEventListeners();
        this.addIsReadEventListeners();
    }
    ;
    getBooks() {
        return __classPrivateFieldGet(this, _Library_books, "f");
    }
    removeBook(bookId) {
        __classPrivateFieldSet(this, _Library_books, __classPrivateFieldGet(this, _Library_books, "f").filter(book => book.id !== bookId), "f");
        this.loadLibrary();
        return __classPrivateFieldGet(this, _Library_books, "f");
    }
    getCheckedAttribute(isRead) {
        return isRead ? 'checked' : '';
    }
    updateIsRead(bookId) {
        let book = __classPrivateFieldGet(this, _Library_books, "f").find(book => book.id === bookId);
        if (book) {
            book.isRead = !book.isRead;
            this.loadLibrary();
        }
        else {
            console.error("no book found");
        }
    }
    addDeleteEventListeners() {
        const deleteButtonsNodeList = document.querySelectorAll("button.btn-danger");
        const deleteButtons = Array.from(deleteButtonsNodeList).map(node => node);
        deleteButtons.forEach((button) => {
            button.addEventListener("click", (event) => {
                const target = event.target;
                if (target) {
                    const bookId = parseInt(target.value);
                    myLibrary.removeBook(bookId);
                }
                ;
            });
        });
    }
    addIsReadEventListeners() {
        const checkboxNodeList = document.querySelectorAll('input[type="checkbox"]');
        const checkboxes = Array.from(checkboxNodeList).map(node => node);
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener("click", (event) => {
                const match = checkbox.id.match(/\d+$/);
                if (match) {
                    const bookId = parseInt(match[0], 10);
                    myLibrary.updateIsRead(bookId);
                }
                else {
                    console.error('No numeric part found in the id');
                }
            });
        });
    }
}
_Library_books = new WeakMap();
const myLibrary = new Library();
myLibrary.fillLibrary();
myLibrary.loadLibrary();
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
