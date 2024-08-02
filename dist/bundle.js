/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Book.ts":
/*!*********************!*\
  !*** ./src/Book.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Book_id, _Book_title, _Book_author, _Book_pages, _Book_isRead;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Book);


/***/ }),

/***/ "./src/Library.ts":
/*!************************!*\
  !*** ./src/Library.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.ts");
/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Book */ "./src/Book.ts");
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover */ "./src/popover.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Library_books;



const booksBody = document.querySelector("#booksBody");
class Library {
    constructor() {
        _Library_books.set(this, void 0);
        __classPrivateFieldSet(this, _Library_books, [], "f");
    }
    addBook(title, author, pages, isRead) {
        const id = __classPrivateFieldGet(this, _Library_books, "f").length === 0 ? 1 : Math.max(...__classPrivateFieldGet(this, _Library_books, "f").map(book => book.id)) + 1;
        const newBook = new _Book__WEBPACK_IMPORTED_MODULE_1__["default"](id, title, author, pages, isRead);
        __classPrivateFieldGet(this, _Library_books, "f").push(newBook);
        (0,_popover__WEBPACK_IMPORTED_MODULE_2__.triggerPopover)();
        this.loadLibrary();
    }
    fillLibrary() {
        const book1 = new _Book__WEBPACK_IMPORTED_MODULE_1__["default"](1, "Zero To One", "Peter Thiel", 210, true);
        const book2 = new _Book__WEBPACK_IMPORTED_MODULE_1__["default"](2, "Hackers & Painters", "Paul Graham", 258, true);
        const book3 = new _Book__WEBPACK_IMPORTED_MODULE_1__["default"](3, "Computer Science Distilled", "Wladston Ferreira Filho", 168, true);
        const book4 = new _Book__WEBPACK_IMPORTED_MODULE_1__["default"](4, "Grokking Algorithms", "Aditya Y. Bhargava", 238, true);
        const book5 = new _Book__WEBPACK_IMPORTED_MODULE_1__["default"](5, "START SMALL, STAY SMALL", "Rob Walling", 201, false);
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
                    _app__WEBPACK_IMPORTED_MODULE_0__.myLibrary.removeBook(bookId);
                }
                ;
            });
        });
    }
    addIsReadEventListeners() {
        const checkboxNodeList = document.querySelectorAll('input[type="checkbox"]');
        const checkboxes = Array.from(checkboxNodeList).map(node => node);
        const filteredCheckboxes = checkboxes.filter(checkbox => checkbox.id !== "inputIsRead");
        filteredCheckboxes.forEach((checkbox) => {
            checkbox.addEventListener("click", () => {
                const match = checkbox.id.match(/\d+$/);
                if (match) {
                    const bookId = parseInt(match[0], 10);
                    _app__WEBPACK_IMPORTED_MODULE_0__.myLibrary.updateIsRead(bookId);
                }
                else {
                    console.error('No numeric part found in the id');
                }
            });
        });
    }
}
_Library_books = new WeakMap();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Library);


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   myLibrary: () => (/* binding */ myLibrary)
/* harmony export */ });
/* harmony import */ var _formHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formHandler */ "./src/formHandler.ts");
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sort */ "./src/sort.ts");
/* harmony import */ var _Library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Library */ "./src/Library.ts");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");





document.addEventListener("DOMContentLoaded", () => {
    const formHandler = _formHandler__WEBPACK_IMPORTED_MODULE_0__["default"].create();
    formHandler.initializeEventListeners();
    const table = document.querySelector("table");
    if (table) {
        (0,_sort__WEBPACK_IMPORTED_MODULE_1__["default"])(table, 0, true);
    }
});
const myLibrary = new _Library__WEBPACK_IMPORTED_MODULE_2__["default"]();
myLibrary.fillLibrary();
myLibrary.loadLibrary();


/***/ }),

/***/ "./src/formHandler.ts":
/*!****************************!*\
  !*** ./src/formHandler.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.ts");

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
            _app__WEBPACK_IMPORTED_MODULE_0__.myLibrary.addBook(title, author, pages, isRead);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormHandler);


/***/ }),

/***/ "./src/popover.ts":
/*!************************!*\
  !*** ./src/popover.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   triggerPopover: () => (/* binding */ triggerPopover)
/* harmony export */ });
// initialize popovers for modal, succesfully add book to list
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));
const triggerPopover = () => {
    const modal = document.querySelector('#modal');
    const modalPopover = document.querySelector('[data-bs-toggle="popover"]');
    const popoverInstance = bootstrap.Popover.getInstance(modalPopover) || new bootstrap.Popover(modalPopover);
    setTimeout(() => {
        if (modal) {
            modal.style.display = "none";
            modal.setAttribute('aria-hiden', 'true');
            modal.removeAttribute('aria-modal');
            modal.removeAttribute('role');
            modal.classList.remove("fade");
        }
        popoverInstance.hide();
        closeModal();
    }, 2100);
};
const closeModal = () => {
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
        backdrop.remove();
    }
};


/***/ }),

/***/ "./src/sort.ts":
/*!*********************!*\
  !*** ./src/sort.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
        console.log("first");
        // const tableElement = headerCell.closest('.table');
        const tableElement = (_b = (_a = headerCell.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
        const headerIndex = Array.prototype.indexOf.call((_c = headerCell.parentElement) === null || _c === void 0 ? void 0 : _c.children, headerCell);
        const currentIsAscending = headerCell.classList.contains("th-sort-asc");
        sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortTableByColumn);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDO0FBRUQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7SUFDckUsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7O1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQ3BCLHFEQUFxRDtRQUNyRCxNQUFNLFlBQVksR0FBRyxzQkFBVSxDQUFDLGFBQWEsMENBQUUsYUFBYSwwQ0FDeEQsYUFBaUMsQ0FBQztRQUN0QyxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzlDLGdCQUFVLENBQUMsYUFBYSwwQ0FBRSxRQUFRLEVBQ2xDLFVBQVUsQ0FDWCxDQUFDO1FBQ0YsTUFBTSxrQkFBa0IsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUV4RSxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNwRSxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7VUMzRGpDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvQm9vay50cyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL0xpYnJhcnkudHMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9mb3JtSGFuZGxlci50cyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL3BvcG92ZXIudHMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9zb3J0LnRzIiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY2xhc3MgQm9vayB7XG4gICNpZDogbnVtYmVyO1xuICAjdGl0bGU6IHN0cmluZztcbiAgI2F1dGhvcjogc3RyaW5nO1xuICAjcGFnZXM6IG51bWJlcjtcbiAgI2lzUmVhZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCB0aXRsZTogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgcGFnZXM6IG51bWJlciwgaXNSZWFkOiBib29sZWFuKSB7XG4gICAgdGhpcy4jaWQgPSBpZDtcbiAgICB0aGlzLiN0aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuI2F1dGhvciA9IGF1dGhvcjtcbiAgICB0aGlzLiNwYWdlcyA9IHBhZ2VzO1xuICAgIHRoaXMuI2lzUmVhZCA9IGlzUmVhZDtcbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jaWQ7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3RpdGxlO1xuICB9XG5cbiAgc2V0IHRpdGxlKG5ld1RpdGxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLiN0aXRsZSA9IG5ld1RpdGxlO1xuICB9XG5cbiAgZ2V0IGF1dGhvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jYXV0aG9yO1xuICB9XG5cbiAgc2V0IGF1dGhvcihuZXdBdXRob3I6IHN0cmluZykge1xuICAgIHRoaXMuI2F1dGhvciA9IG5ld0F1dGhvcjtcbiAgfVxuXG4gIGdldCBwYWdlcygpIHtcbiAgICByZXR1cm4gdGhpcy4jcGFnZXM7XG4gIH1cblxuICBzZXQgcGFnZXMobmV3UGFnZXM6IG51bWJlcikge1xuICAgIHRoaXMuI3BhZ2VzID0gbmV3UGFnZXM7XG4gIH1cblxuICBnZXQgaXNSZWFkKCkge1xuICAgIHJldHVybiB0aGlzLiNpc1JlYWQ7XG4gIH1cblxuICBzZXQgaXNSZWFkKG5ld0lzUmVhZDogYm9vbGVhbikge1xuICAgIHRoaXMuI2lzUmVhZCA9IG5ld0lzUmVhZDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29rOyIsImltcG9ydCB7IG15TGlicmFyeSB9IGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IEJvb2sgZnJvbSBcIi4vQm9va1wiO1xuaW1wb3J0IHsgdHJpZ2dlclBvcG92ZXIgfSBmcm9tIFwiLi9wb3BvdmVyXCI7XG5cbmNvbnN0IGJvb2tzQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9va3NCb2R5XCIpITtcblxuY2xhc3MgTGlicmFyeSB7XG4gICNib29rczogQm9va1tdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuI2Jvb2tzID0gW11cbiAgfVxuXG4gIGFkZEJvb2sodGl0bGU6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIHBhZ2VzOiBudW1iZXIsIGlzUmVhZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IGlkID0gdGhpcy4jYm9va3MubGVuZ3RoID09PSAwID8gMSA6IE1hdGgubWF4KC4uLnRoaXMuI2Jvb2tzLm1hcChib29rID0+IGJvb2suaWQpKSArIDE7XG4gICAgY29uc3QgbmV3Qm9vayA9IG5ldyBCb29rKGlkLCB0aXRsZSwgYXV0aG9yLCBwYWdlcywgaXNSZWFkKTtcbiAgICB0aGlzLiNib29rcy5wdXNoKG5ld0Jvb2spO1xuXG4gICAgdHJpZ2dlclBvcG92ZXIoKTtcblxuICAgIHRoaXMubG9hZExpYnJhcnkoKTtcbiAgfVxuXG4gIGZpbGxMaWJyYXJ5KCk6IHZvaWQge1xuICAgIGNvbnN0IGJvb2sxID0gbmV3IEJvb2soMSwgXCJaZXJvIFRvIE9uZVwiLCBcIlBldGVyIFRoaWVsXCIsIDIxMCwgdHJ1ZSk7XG4gICAgY29uc3QgYm9vazIgPSBuZXcgQm9vaygyLCBcIkhhY2tlcnMgJiBQYWludGVyc1wiLCBcIlBhdWwgR3JhaGFtXCIsIDI1OCwgdHJ1ZSk7XG4gICAgY29uc3QgYm9vazMgPSBuZXcgQm9vaygzLCBcIkNvbXB1dGVyIFNjaWVuY2UgRGlzdGlsbGVkXCIsIFwiV2xhZHN0b24gRmVycmVpcmEgRmlsaG9cIiwgMTY4LCB0cnVlKTtcbiAgICBjb25zdCBib29rNCA9IG5ldyBCb29rKDQsIFwiR3Jva2tpbmcgQWxnb3JpdGhtc1wiLCBcIkFkaXR5YSBZLiBCaGFyZ2F2YVwiLCAyMzgsIHRydWUpO1xuICAgIGNvbnN0IGJvb2s1ID0gbmV3IEJvb2soNSwgXCJTVEFSVCBTTUFMTCwgU1RBWSBTTUFMTFwiLCBcIlJvYiBXYWxsaW5nXCIsIDIwMSwgZmFsc2UpO1xuICAgIHRoaXMuI2Jvb2tzLnB1c2goYm9vazEsIGJvb2syLCBib29rMywgYm9vazQsIGJvb2s1KTtcbiAgfTtcblxuICBsb2FkTGlicmFyeSgpIHtcbiAgICBjb25zdCB0YWJlbERhdGEgPSB0aGlzLmdldEJvb2tzKClcbiAgICAgIC5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+ICR7dmFsdWUudGl0bGV9IDwvdGQ+XG4gICAgICAgICAgPHRkPiAke3ZhbHVlLmF1dGhvcn0gPC90ZD5cbiAgICAgICAgICA8dGQ+ICR7dmFsdWUucGFnZXN9IDwvdGQ+XG4gICAgICAgICAgPHRkPiBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJmbGV4Q2hlY2tEZWZhdWx0LSR7dmFsdWUuaWR9XCI+UmVhZDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiXCIgaWQ9XCJmbGV4Q2hlY2tEZWZhdWx0LSR7dmFsdWUuaWR9XCIgJHt0aGlzLmdldENoZWNrZWRBdHRyaWJ1dGUodmFsdWUuaXNSZWFkKX0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQ+IDxidXR0b24gdmFsdWU9XCIke3ZhbHVlLmlkfVwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIj5SZW1vdmU8L2J1dHRvbj4gPC90ZD5cbiAgICAgICAgPC90cj5gO1xuICAgICAgfSlcbiAgICAgIC5qb2luKFwiXCIpO1xuXG4gICAgYm9va3NCb2R5LmlubmVySFRNTCA9IHRhYmVsRGF0YTtcblxuICAgIHRoaXMuYWRkRGVsZXRlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmFkZElzUmVhZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgZ2V0Qm9va3MoKTogQm9va1tdIHtcbiAgICByZXR1cm4gdGhpcy4jYm9va3M7XG4gIH1cblxuICByZW1vdmVCb29rKGJvb2tJZDogbnVtYmVyKTogQm9va1tdIHtcbiAgICB0aGlzLiNib29rcyA9IHRoaXMuI2Jvb2tzLmZpbHRlcihib29rID0+IGJvb2suaWQgIT09IGJvb2tJZCk7XG5cbiAgICB0aGlzLmxvYWRMaWJyYXJ5KClcblxuICAgIHJldHVybiB0aGlzLiNib29rcztcbiAgfVxuXG4gIGdldENoZWNrZWRBdHRyaWJ1dGUoaXNSZWFkOiBib29sZWFuKSB7XG4gICAgcmV0dXJuIGlzUmVhZCA/ICdjaGVja2VkJyA6ICcnO1xuICB9XG5cbiAgdXBkYXRlSXNSZWFkKGJvb2tJZDogbnVtYmVyKTogdm9pZCB7XG4gICAgbGV0IGJvb2sgPSB0aGlzLiNib29rcy5maW5kKGJvb2sgPT4gYm9vay5pZCA9PT0gYm9va0lkKTtcblxuICAgIGlmIChib29rKSB7XG4gICAgICBib29rLmlzUmVhZCA9ICFib29rLmlzUmVhZDtcblxuICAgICAgdGhpcy5sb2FkTGlicmFyeSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJubyBib29rIGZvdW5kXCIpO1xuICAgIH1cbiAgfVxuXG4gIGFkZERlbGV0ZUV2ZW50TGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbnNOb2RlTGlzdDogTm9kZUxpc3RPZjxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b24uYnRuLWRhbmdlclwiKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b25zOiBIVE1MQnV0dG9uRWxlbWVudFtdID0gQXJyYXkuZnJvbShkZWxldGVCdXR0b25zTm9kZUxpc3QpLm1hcChub2RlID0+IG5vZGUgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpO1xuXG4gICAgZGVsZXRlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICBjb25zdCBib29rSWQgPSBwYXJzZUludCh0YXJnZXQudmFsdWUpO1xuXG4gICAgICAgICAgbXlMaWJyYXJ5LnJlbW92ZUJvb2soYm9va0lkKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkSXNSZWFkRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgY29uc3QgY2hlY2tib3hOb2RlTGlzdDogTm9kZUxpc3RPZjxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuICAgIGNvbnN0IGNoZWNrYm94ZXM6IEhUTUxJbnB1dEVsZW1lbnRbXSA9IEFycmF5LmZyb20oY2hlY2tib3hOb2RlTGlzdCkubWFwKG5vZGUgPT4gbm9kZSBhcyBIVE1MSW5wdXRFbGVtZW50KTtcbiAgICBjb25zdCBmaWx0ZXJlZENoZWNrYm94ZXMgPSBjaGVja2JveGVzLmZpbHRlcihjaGVja2JveCA9PiBjaGVja2JveC5pZCAhPT0gXCJpbnB1dElzUmVhZFwiKVxuXG4gICAgZmlsdGVyZWRDaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaCA9IGNoZWNrYm94LmlkLm1hdGNoKC9cXGQrJC8pO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBib29rSWQgPSBwYXJzZUludChtYXRjaFswXSwgMTApO1xuXG4gICAgICAgICAgbXlMaWJyYXJ5LnVwZGF0ZUlzUmVhZChib29rSWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIG51bWVyaWMgcGFydCBmb3VuZCBpbiB0aGUgaWQnKVxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpYnJhcnk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGb3JtSGFuZGxlciBmcm9tIFwiLi9mb3JtSGFuZGxlclwiO1xuaW1wb3J0IHNvcnRUYWJsZUJ5Q29sdW1uIGZyb20gXCIuL3NvcnRcIjtcbmltcG9ydCBMaWJyYXJ5IGZyb20gXCIuL0xpYnJhcnlcIjtcblxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGZvcm1IYW5kbGVyID0gRm9ybUhhbmRsZXIuY3JlYXRlKCk7XG4gIGZvcm1IYW5kbGVyLmluaXRpYWxpemVFdmVudExpc3RlbmVycygpO1xuXG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRhYmxlXCIpIGFzIEhUTUxUYWJsZUVsZW1lbnQ7XG4gIGlmICh0YWJsZSkge1xuICAgIHNvcnRUYWJsZUJ5Q29sdW1uKHRhYmxlLCAwLCB0cnVlKTtcbiAgfVxufSlcblxuZXhwb3J0IGNvbnN0IG15TGlicmFyeSA9IG5ldyBMaWJyYXJ5KCk7XG5cbm15TGlicmFyeS5maWxsTGlicmFyeSgpO1xuXG5teUxpYnJhcnkubG9hZExpYnJhcnkoKTtcbiIsImltcG9ydCB7IG15TGlicmFyeSB9IGZyb20gXCIuL2FwcFwiO1xuXG5jb25zdCBGb3JtSGFuZGxlciA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdEJvb2tcIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgICBmdW5jdGlvbiBnZXRGb3JtVmFsdWVzKCkge1xuICAgICAgY29uc3QgdGl0bGUgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dFRpdGxlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgICAgY29uc3QgYXV0aG9yID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRBdXRob3JcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgICBjb25zdCBwYWdlcyA9IHBhcnNlSW50KChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0UGFnZXNcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsIDEwKTtcbiAgICAgIGNvbnN0IGlzUmVhZCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0SXNSZWFkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWQ7XG5cbiAgICAgIHJldHVybiB7IHRpdGxlLCBhdXRob3IsIHBhZ2VzLCBpc1JlYWQgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXNzaW9uKGV2ZW50OiBFdmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHsgdGl0bGUsIGF1dGhvciwgcGFnZXMsIGlzUmVhZCB9ID0gZ2V0Rm9ybVZhbHVlcygpO1xuXG4gICAgICBteUxpYnJhcnkuYWRkQm9vayh0aXRsZSwgYXV0aG9yLCBwYWdlcywgaXNSZWFkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0aWFsaXplRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBzdWJtaXRCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVGb3JtU3VibWlzc2lvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGluaXRpYWxpemVFdmVudExpc3RlbmVyc1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybUhhbmRsZXI7IiwiZGVjbGFyZSBsZXQgYm9vdHN0cmFwOiBhbnk7XG5cbi8vIGluaXRpYWxpemUgcG9wb3ZlcnMgZm9yIG1vZGFsLCBzdWNjZXNmdWxseSBhZGQgYm9vayB0byBsaXN0XG5jb25zdCBwb3BvdmVyVHJpZ2dlckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAnW2RhdGEtYnMtdG9nZ2xlPVwicG9wb3ZlclwiXSdcbik7XG5jb25zdCBwb3BvdmVyTGlzdCA9IFsuLi5wb3BvdmVyVHJpZ2dlckxpc3RdLm1hcChcbiAgKHBvcG92ZXJUcmlnZ2VyRWwpID0+IG5ldyBib290c3RyYXAuUG9wb3Zlcihwb3BvdmVyVHJpZ2dlckVsKVxuKTtcblxuZXhwb3J0IGNvbnN0IHRyaWdnZXJQb3BvdmVyID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgY29uc3QgbW9kYWxQb3BvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYnMtdG9nZ2xlPVwicG9wb3ZlclwiXScpIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcblxuICBjb25zdCBwb3BvdmVySW5zdGFuY2UgPSBib290c3RyYXAuUG9wb3Zlci5nZXRJbnN0YW5jZShtb2RhbFBvcG92ZXIpIHx8IG5ldyBib290c3RyYXAuUG9wb3Zlcihtb2RhbFBvcG92ZXIpO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmIChtb2RhbCkge1xuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZW4nLCAndHJ1ZScpXG4gICAgICBtb2RhbC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKVxuICAgICAgbW9kYWwucmVtb3ZlQXR0cmlidXRlKCdyb2xlJylcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJmYWRlXCIpO1xuICAgIH1cblxuICAgIHBvcG92ZXJJbnN0YW5jZS5oaWRlKCk7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9LCAyMTAwKTtcbn1cblxuY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYmFja2Ryb3AnKVxuXG4gIGlmIChiYWNrZHJvcCkge1xuICAgIGJhY2tkcm9wLnJlbW92ZSgpO1xuICB9XG59XG4iLCJcbi8qKlxuICogU29ydHMgdGhlIGJvb2tzXG4gKlxuICogQHBhcmFtIHtIVE1MVGFibGVFbGVtZW50fSB0YWJsZSB0aGUgdGFibGUgc29ydFxuICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbiB0aGUgaW5kZXggb2YgdGhlIGNvbHVtbiB0byBzb3J0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGFzYyBkZXRlcm1pbmVzIGlmIHRoZSBzb3J0aW5nIHdpbGwgYmUgYXNjZW5kaW5nIG9yZGVyXG4gKi9cblxuZnVuY3Rpb24gc29ydFRhYmxlQnlDb2x1bW4oXG4gIHRhYmxlOiBIVE1MVGFibGVFbGVtZW50LFxuICBjb2x1bW46IG51bWJlcixcbiAgYXNjID0gdHJ1ZVxuKSB7XG4gIGNvbnN0IGRpck1vZGlmaWVyID0gYXNjID8gMSA6IC0xO1xuICBjb25zdCB0Qm9keSA9IHRhYmxlLnRCb2RpZXNbMF07XG4gIGNvbnN0IHJvd3MgPSBBcnJheS5mcm9tKHRCb2R5LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0clwiKSk7XG5cbiAgLy8gU29ydCBlYWNoIHJvd1xuICBjb25zdCBzb3J0ZWRSb3dzID0gcm93cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgY29uc3QgYUNvbFRleHQgPSBhLnF1ZXJ5U2VsZWN0b3IoYHRkOm50aC1jaGlsZCgke2NvbHVtbiArIDF9KWApIS50ZXh0Q29udGVudCEudHJpbSgpO1xuICAgIGNvbnN0IGJDb2xUZXh0ID0gYi5xdWVyeVNlbGVjdG9yKGB0ZDpudGgtY2hpbGQoJHtjb2x1bW4gKyAxfSlgKSEudGV4dENvbnRlbnQhLnRyaW0oKTtcblxuICAgIHJldHVybiBhQ29sVGV4dCA+IGJDb2xUZXh0ID8gMSAqIGRpck1vZGlmaWVyIDogLTEgKiBkaXJNb2RpZmllcjtcbiAgfSk7XG5cbiAgLy8gUmVtb3ZlIGFsbCBleGlzdGluZyBUUnMgZnJvbSB0aGUgdGFibGVcbiAgd2hpbGUgKHRCb2R5LmZpcnN0Q2hpbGQpIHtcbiAgICB0Qm9keS5yZW1vdmVDaGlsZCh0Qm9keS5maXJzdENoaWxkKTtcbiAgfVxuXG4gIC8vIFJlLWFkZCB0aGUgbmV3bHkgc29ydGVkIHJvd3NcbiAgdEJvZHkuYXBwZW5kKC4uLnNvcnRlZFJvd3MpO1xuXG4gIC8vIFJlbWVtZWJlciBob3cgdGhlIGNvbHVtbiBpcyBjdXJyZW50bHkgc29ydGVkXG4gIHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0aFwiKVxuICAgIC5mb3JFYWNoKCh0aCkgPT4gdGguY2xhc3NMaXN0LnJlbW92ZShcInRoLXNvcnQtYXNjXCIsIFwidGgtc29ydC1kZXNjXCIpKTtcbiAgdGFibGUucXVlcnlTZWxlY3RvcihgdGg6bnRoLWNoaWxkKCR7Y29sdW1uICsgMX0pYCkhXG4gICAgLmNsYXNzTGlzdC50b2dnbGUoXCJ0aC1zb3J0LWFzY1wiLCBhc2MpO1xuICB0YWJsZS5xdWVyeVNlbGVjdG9yKGB0aDpudGgtY2hpbGQoJHtjb2x1bW4gKyAxfSlgKSFcbiAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInRoLXNvcnQtZGVzY1wiLCAhYXNjKTtcbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZS1zb3J0YWJsZSB0aFwiKS5mb3JFYWNoKChoZWFkZXJDZWxsKSA9PiB7XG4gIGhlYWRlckNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImZpcnN0XCIpXG4gICAgLy8gY29uc3QgdGFibGVFbGVtZW50ID0gaGVhZGVyQ2VsbC5jbG9zZXN0KCcudGFibGUnKTtcbiAgICBjb25zdCB0YWJsZUVsZW1lbnQgPSBoZWFkZXJDZWxsLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnRcbiAgICAgID8ucGFyZW50RWxlbWVudCBhcyBIVE1MVGFibGVFbGVtZW50O1xuICAgIGNvbnN0IGhlYWRlckluZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChcbiAgICAgIGhlYWRlckNlbGwucGFyZW50RWxlbWVudD8uY2hpbGRyZW4sXG4gICAgICBoZWFkZXJDZWxsXG4gICAgKTtcbiAgICBjb25zdCBjdXJyZW50SXNBc2NlbmRpbmcgPSBoZWFkZXJDZWxsLmNsYXNzTGlzdC5jb250YWlucyhcInRoLXNvcnQtYXNjXCIpO1xuXG4gICAgc29ydFRhYmxlQnlDb2x1bW4odGFibGVFbGVtZW50LCBoZWFkZXJJbmRleCwgIWN1cnJlbnRJc0FzY2VuZGluZyk7XG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNvcnRUYWJsZUJ5Q29sdW1uOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9