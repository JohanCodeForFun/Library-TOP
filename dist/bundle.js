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
const popoverTrigger = document.querySelector('[data-bs-toggle="popover"]');
new bootstrap.Popover(popoverTrigger);
const triggerPopover = () => {
    const modal = document.querySelector('#modal');
    const modalPopover = document.querySelector('[data-bs-toggle="popover"]');
    const buttonLink = document.querySelector('#submitBook');
    if (!modal || !modalPopover || !buttonLink) {
        console.error('Modal, popover or button element not found');
        return;
    }
    const popoverInstance = bootstrap.Popover.getInstance(modalPopover) || new bootstrap.Popover(modalPopover);
    buttonLink.style.pointerEvents = 'none';
    buttonLink.style.color = 'lightgray';
    setTimeout(() => {
        hideModal(modal);
        restButtonLink(buttonLink);
        popoverInstance.hide();
    }, 2100);
};
const hideModal = (modal) => {
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('aria-modal');
    modal.removeAttribute('role');
    modal.classList.remove("fade");
    const backdrop = document.querySelector('.modal-backdrop');
    if (!backdrop) {
        return;
    }
    backdrop.remove();
};
const restButtonLink = (buttonLink) => {
    buttonLink.style.pointerEvents = '';
    buttonLink.style.color = '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9Cb29rLnRzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvTGlicmFyeS50cyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL2Zvcm1IYW5kbGVyLnRzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvcG9wb3Zlci50cyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL3NvcnQudHMiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjbGFzcyBCb29rIHtcbiAgI2lkOiBudW1iZXI7XG4gICN0aXRsZTogc3RyaW5nO1xuICAjYXV0aG9yOiBzdHJpbmc7XG4gICNwYWdlczogbnVtYmVyO1xuICAjaXNSZWFkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHRpdGxlOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBwYWdlczogbnVtYmVyLCBpc1JlYWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLiNpZCA9IGlkO1xuICAgIHRoaXMuI3RpdGxlID0gdGl0bGU7XG4gICAgdGhpcy4jYXV0aG9yID0gYXV0aG9yO1xuICAgIHRoaXMuI3BhZ2VzID0gcGFnZXM7XG4gICAgdGhpcy4jaXNSZWFkID0gaXNSZWFkO1xuICB9XG5cbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLiNpZDtcbiAgfVxuXG4gIGdldCB0aXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jdGl0bGU7XG4gIH1cblxuICBzZXQgdGl0bGUobmV3VGl0bGU6IHN0cmluZykge1xuICAgIHRoaXMuI3RpdGxlID0gbmV3VGl0bGU7XG4gIH1cblxuICBnZXQgYXV0aG9yKCkge1xuICAgIHJldHVybiB0aGlzLiNhdXRob3I7XG4gIH1cblxuICBzZXQgYXV0aG9yKG5ld0F1dGhvcjogc3RyaW5nKSB7XG4gICAgdGhpcy4jYXV0aG9yID0gbmV3QXV0aG9yO1xuICB9XG5cbiAgZ2V0IHBhZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLiNwYWdlcztcbiAgfVxuXG4gIHNldCBwYWdlcyhuZXdQYWdlczogbnVtYmVyKSB7XG4gICAgdGhpcy4jcGFnZXMgPSBuZXdQYWdlcztcbiAgfVxuXG4gIGdldCBpc1JlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2lzUmVhZDtcbiAgfVxuXG4gIHNldCBpc1JlYWQobmV3SXNSZWFkOiBib29sZWFuKSB7XG4gICAgdGhpcy4jaXNSZWFkID0gbmV3SXNSZWFkO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2s7IiwiaW1wb3J0IHsgbXlMaWJyYXJ5IH0gZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgQm9vayBmcm9tIFwiLi9Cb29rXCI7XG5pbXBvcnQgeyB0cmlnZ2VyUG9wb3ZlciB9IGZyb20gXCIuL3BvcG92ZXJcIjtcblxuY29uc3QgYm9va3NCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rc0JvZHlcIikhO1xuXG5jbGFzcyBMaWJyYXJ5IHtcbiAgI2Jvb2tzOiBCb29rW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4jYm9va3MgPSBbXVxuICB9XG5cbiAgYWRkQm9vayh0aXRsZTogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgcGFnZXM6IG51bWJlciwgaXNSZWFkOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgaWQgPSB0aGlzLiNib29rcy5sZW5ndGggPT09IDAgPyAxIDogTWF0aC5tYXgoLi4udGhpcy4jYm9va3MubWFwKGJvb2sgPT4gYm9vay5pZCkpICsgMTtcbiAgICBjb25zdCBuZXdCb29rID0gbmV3IEJvb2soaWQsIHRpdGxlLCBhdXRob3IsIHBhZ2VzLCBpc1JlYWQpO1xuICAgIHRoaXMuI2Jvb2tzLnB1c2gobmV3Qm9vayk7XG5cbiAgICB0cmlnZ2VyUG9wb3ZlcigpO1xuXG4gICAgdGhpcy5sb2FkTGlicmFyeSgpO1xuICB9XG5cbiAgZmlsbExpYnJhcnkoKTogdm9pZCB7XG4gICAgY29uc3QgYm9vazEgPSBuZXcgQm9vaygxLCBcIlplcm8gVG8gT25lXCIsIFwiUGV0ZXIgVGhpZWxcIiwgMjEwLCB0cnVlKTtcbiAgICBjb25zdCBib29rMiA9IG5ldyBCb29rKDIsIFwiSGFja2VycyAmIFBhaW50ZXJzXCIsIFwiUGF1bCBHcmFoYW1cIiwgMjU4LCB0cnVlKTtcbiAgICBjb25zdCBib29rMyA9IG5ldyBCb29rKDMsIFwiQ29tcHV0ZXIgU2NpZW5jZSBEaXN0aWxsZWRcIiwgXCJXbGFkc3RvbiBGZXJyZWlyYSBGaWxob1wiLCAxNjgsIHRydWUpO1xuICAgIGNvbnN0IGJvb2s0ID0gbmV3IEJvb2soNCwgXCJHcm9ra2luZyBBbGdvcml0aG1zXCIsIFwiQWRpdHlhIFkuIEJoYXJnYXZhXCIsIDIzOCwgdHJ1ZSk7XG4gICAgY29uc3QgYm9vazUgPSBuZXcgQm9vayg1LCBcIlNUQVJUIFNNQUxMLCBTVEFZIFNNQUxMXCIsIFwiUm9iIFdhbGxpbmdcIiwgMjAxLCBmYWxzZSk7XG4gICAgdGhpcy4jYm9va3MucHVzaChib29rMSwgYm9vazIsIGJvb2szLCBib29rNCwgYm9vazUpO1xuICB9O1xuXG4gIGxvYWRMaWJyYXJ5KCkge1xuICAgIGNvbnN0IHRhYmVsRGF0YSA9IHRoaXMuZ2V0Qm9va3MoKVxuICAgICAgLm1hcCgodmFsdWUpID0+IHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZD4gJHt2YWx1ZS50aXRsZX0gPC90ZD5cbiAgICAgICAgICA8dGQ+ICR7dmFsdWUuYXV0aG9yfSA8L3RkPlxuICAgICAgICAgIDx0ZD4gJHt2YWx1ZS5wYWdlc30gPC90ZD5cbiAgICAgICAgICA8dGQ+IFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImZsZXhDaGVja0RlZmF1bHQtJHt2YWx1ZS5pZH1cIj5SZWFkPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJcIiBpZD1cImZsZXhDaGVja0RlZmF1bHQtJHt2YWx1ZS5pZH1cIiAke3RoaXMuZ2V0Q2hlY2tlZEF0dHJpYnV0ZSh2YWx1ZS5pc1JlYWQpfT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZD4gPGJ1dHRvbiB2YWx1ZT1cIiR7dmFsdWUuaWR9XCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiPlJlbW92ZTwvYnV0dG9uPiA8L3RkPlxuICAgICAgICA8L3RyPmA7XG4gICAgICB9KVxuICAgICAgLmpvaW4oXCJcIik7XG5cbiAgICBib29rc0JvZHkuaW5uZXJIVE1MID0gdGFiZWxEYXRhO1xuXG4gICAgdGhpcy5hZGREZWxldGVFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuYWRkSXNSZWFkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfTtcblxuICBnZXRCb29rcygpOiBCb29rW10ge1xuICAgIHJldHVybiB0aGlzLiNib29rcztcbiAgfVxuXG4gIHJlbW92ZUJvb2soYm9va0lkOiBudW1iZXIpOiBCb29rW10ge1xuICAgIHRoaXMuI2Jvb2tzID0gdGhpcy4jYm9va3MuZmlsdGVyKGJvb2sgPT4gYm9vay5pZCAhPT0gYm9va0lkKTtcblxuICAgIHRoaXMubG9hZExpYnJhcnkoKVxuXG4gICAgcmV0dXJuIHRoaXMuI2Jvb2tzO1xuICB9XG5cbiAgZ2V0Q2hlY2tlZEF0dHJpYnV0ZShpc1JlYWQ6IGJvb2xlYW4pIHtcbiAgICByZXR1cm4gaXNSZWFkID8gJ2NoZWNrZWQnIDogJyc7XG4gIH1cblxuICB1cGRhdGVJc1JlYWQoYm9va0lkOiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgYm9vayA9IHRoaXMuI2Jvb2tzLmZpbmQoYm9vayA9PiBib29rLmlkID09PSBib29rSWQpO1xuXG4gICAgaWYgKGJvb2spIHtcbiAgICAgIGJvb2suaXNSZWFkID0gIWJvb2suaXNSZWFkO1xuXG4gICAgICB0aGlzLmxvYWRMaWJyYXJ5KClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihcIm5vIGJvb2sgZm91bmRcIik7XG4gICAgfVxuICB9XG5cbiAgYWRkRGVsZXRlRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uc05vZGVMaXN0OiBOb2RlTGlzdE9mPEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvbi5idG4tZGFuZ2VyXCIpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbnM6IEhUTUxCdXR0b25FbGVtZW50W10gPSBBcnJheS5mcm9tKGRlbGV0ZUJ1dHRvbnNOb2RlTGlzdCkubWFwKG5vZGUgPT4gbm9kZSBhcyBIVE1MQnV0dG9uRWxlbWVudCk7XG5cbiAgICBkZWxldGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIGNvbnN0IGJvb2tJZCA9IHBhcnNlSW50KHRhcmdldC52YWx1ZSk7XG5cbiAgICAgICAgICBteUxpYnJhcnkucmVtb3ZlQm9vayhib29rSWQpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRJc1JlYWRFdmVudExpc3RlbmVycygpOiB2b2lkIHtcbiAgICBjb25zdCBjaGVja2JveE5vZGVMaXN0OiBOb2RlTGlzdE9mPEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG4gICAgY29uc3QgY2hlY2tib3hlczogSFRNTElucHV0RWxlbWVudFtdID0gQXJyYXkuZnJvbShjaGVja2JveE5vZGVMaXN0KS5tYXAobm9kZSA9PiBub2RlIGFzIEhUTUxJbnB1dEVsZW1lbnQpO1xuICAgIGNvbnN0IGZpbHRlcmVkQ2hlY2tib3hlcyA9IGNoZWNrYm94ZXMuZmlsdGVyKGNoZWNrYm94ID0+IGNoZWNrYm94LmlkICE9PSBcImlucHV0SXNSZWFkXCIpXG5cbiAgICBmaWx0ZXJlZENoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gY2hlY2tib3guaWQubWF0Y2goL1xcZCskLyk7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgIGNvbnN0IGJvb2tJZCA9IHBhcnNlSW50KG1hdGNoWzBdLCAxMCk7XG5cbiAgICAgICAgICBteUxpYnJhcnkudXBkYXRlSXNSZWFkKGJvb2tJZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignTm8gbnVtZXJpYyBwYXJ0IGZvdW5kIGluIHRoZSBpZCcpXG4gICAgICAgIH1cblxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlicmFyeTsiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZvcm1IYW5kbGVyIGZyb20gXCIuL2Zvcm1IYW5kbGVyXCI7XG5pbXBvcnQgc29ydFRhYmxlQnlDb2x1bW4gZnJvbSBcIi4vc29ydFwiO1xuaW1wb3J0IExpYnJhcnkgZnJvbSBcIi4vTGlicmFyeVwiO1xuXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgZm9ybUhhbmRsZXIgPSBGb3JtSGFuZGxlci5jcmVhdGUoKTtcbiAgZm9ybUhhbmRsZXIuaW5pdGlhbGl6ZUV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGFibGVcIikgYXMgSFRNTFRhYmxlRWxlbWVudDtcbiAgaWYgKHRhYmxlKSB7XG4gICAgc29ydFRhYmxlQnlDb2x1bW4odGFibGUsIDAsIHRydWUpO1xuICB9XG59KVxuXG5leHBvcnQgY29uc3QgbXlMaWJyYXJ5ID0gbmV3IExpYnJhcnkoKTtcblxubXlMaWJyYXJ5LmZpbGxMaWJyYXJ5KCk7XG5cbm15TGlicmFyeS5sb2FkTGlicmFyeSgpO1xuIiwiaW1wb3J0IHsgbXlMaWJyYXJ5IH0gZnJvbSBcIi4vYXBwXCI7XG5cbmNvbnN0IEZvcm1IYW5kbGVyID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0Qm9va1wiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblxuICAgIGZ1bmN0aW9uIGdldEZvcm1WYWx1ZXMoKSB7XG4gICAgICBjb25zdCB0aXRsZSA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0VGl0bGVcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgICBjb25zdCBhdXRob3IgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dEF1dGhvclwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICAgIGNvbnN0IHBhZ2VzID0gcGFyc2VJbnQoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRQYWdlc1wiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSwgMTApO1xuICAgICAgY29uc3QgaXNSZWFkID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRJc1JlYWRcIikgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZDtcblxuICAgICAgcmV0dXJuIHsgdGl0bGUsIGF1dGhvciwgcGFnZXMsIGlzUmVhZCB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pc3Npb24oZXZlbnQ6IEV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgeyB0aXRsZSwgYXV0aG9yLCBwYWdlcywgaXNSZWFkIH0gPSBnZXRGb3JtVmFsdWVzKCk7XG5cbiAgICAgIG15TGlicmFyeS5hZGRCb29rKHRpdGxlLCBhdXRob3IsIHBhZ2VzLCBpc1JlYWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemVFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHN1Ym1pdEJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUZvcm1TdWJtaXNzaW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaW5pdGlhbGl6ZUV2ZW50TGlzdGVuZXJzXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGUsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtSGFuZGxlcjsiLCJkZWNsYXJlIGxldCBib290c3RyYXA6IGFueTtcblxuLy8gaW5pdGlhbGl6ZSBwb3BvdmVycyBmb3IgbW9kYWwsIHN1Y2Nlc2Z1bGx5IGFkZCBib29rIHRvIGxpc3RcbmNvbnN0IHBvcG92ZXJUcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJ1tkYXRhLWJzLXRvZ2dsZT1cInBvcG92ZXJcIl0nXG4pO1xubmV3IGJvb3RzdHJhcC5Qb3BvdmVyKHBvcG92ZXJUcmlnZ2VyKTtcblxuZXhwb3J0IGNvbnN0IHRyaWdnZXJQb3BvdmVyID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgY29uc3QgbW9kYWxQb3BvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYnMtdG9nZ2xlPVwicG9wb3ZlclwiXScpIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgY29uc3QgYnV0dG9uTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRCb29rJykgYXMgSFRNTEFuY2hvckVsZW1lbnQgfCBudWxsO1xuXG5cbiAgaWYgKCFtb2RhbCB8fCAhbW9kYWxQb3BvdmVyIHx8ICFidXR0b25MaW5rKSB7XG4gICAgY29uc29sZS5lcnJvcignTW9kYWwsIHBvcG92ZXIgb3IgYnV0dG9uIGVsZW1lbnQgbm90IGZvdW5kJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcG9wb3Zlckluc3RhbmNlID0gYm9vdHN0cmFwLlBvcG92ZXIuZ2V0SW5zdGFuY2UobW9kYWxQb3BvdmVyKSB8fCBuZXcgYm9vdHN0cmFwLlBvcG92ZXIobW9kYWxQb3BvdmVyKTtcblxuICBidXR0b25MaW5rLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gIGJ1dHRvbkxpbmsuc3R5bGUuY29sb3IgPSAnbGlnaHRncmF5JztcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBoaWRlTW9kYWwobW9kYWwpO1xuICAgIHJlc3RCdXR0b25MaW5rKGJ1dHRvbkxpbmspO1xuICAgIHBvcG92ZXJJbnN0YW5jZS5oaWRlKCk7XG4gIH0sIDIxMDApO1xufVxuXG5jb25zdCBoaWRlTW9kYWwgPSAobW9kYWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICBtb2RhbC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKVxuICBtb2RhbC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKVxuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZVwiKTtcblxuICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1iYWNrZHJvcCcpXG4gIFxuICBpZiAoIWJhY2tkcm9wKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGJhY2tkcm9wLnJlbW92ZSgpO1xufVxuXG5jb25zdCByZXN0QnV0dG9uTGluayA9IChidXR0b25MaW5rOiBIVE1MQW5jaG9yRWxlbWVudCkgPT4ge1xuICBidXR0b25MaW5rLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnJztcbiAgYnV0dG9uTGluay5zdHlsZS5jb2xvciA9ICcnO1xufVxuIiwiXG4vKipcbiAqIFNvcnRzIHRoZSBib29rc1xuICpcbiAqIEBwYXJhbSB7SFRNTFRhYmxlRWxlbWVudH0gdGFibGUgdGhlIHRhYmxlIHNvcnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW4gdGhlIGluZGV4IG9mIHRoZSBjb2x1bW4gdG8gc29ydFxuICogQHBhcmFtIHtib29sZWFufSBhc2MgZGV0ZXJtaW5lcyBpZiB0aGUgc29ydGluZyB3aWxsIGJlIGFzY2VuZGluZyBvcmRlclxuICovXG5cbmZ1bmN0aW9uIHNvcnRUYWJsZUJ5Q29sdW1uKFxuICB0YWJsZTogSFRNTFRhYmxlRWxlbWVudCxcbiAgY29sdW1uOiBudW1iZXIsXG4gIGFzYyA9IHRydWVcbikge1xuICBjb25zdCBkaXJNb2RpZmllciA9IGFzYyA/IDEgOiAtMTtcbiAgY29uc3QgdEJvZHkgPSB0YWJsZS50Qm9kaWVzWzBdO1xuICBjb25zdCByb3dzID0gQXJyYXkuZnJvbSh0Qm9keS5xdWVyeVNlbGVjdG9yQWxsKFwidHJcIikpO1xuXG4gIC8vIFNvcnQgZWFjaCByb3dcbiAgY29uc3Qgc29ydGVkUm93cyA9IHJvd3Muc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGFDb2xUZXh0ID0gYS5xdWVyeVNlbGVjdG9yKGB0ZDpudGgtY2hpbGQoJHtjb2x1bW4gKyAxfSlgKSEudGV4dENvbnRlbnQhLnRyaW0oKTtcbiAgICBjb25zdCBiQ29sVGV4dCA9IGIucXVlcnlTZWxlY3RvcihgdGQ6bnRoLWNoaWxkKCR7Y29sdW1uICsgMX0pYCkhLnRleHRDb250ZW50IS50cmltKCk7XG5cbiAgICByZXR1cm4gYUNvbFRleHQgPiBiQ29sVGV4dCA/IDEgKiBkaXJNb2RpZmllciA6IC0xICogZGlyTW9kaWZpZXI7XG4gIH0pO1xuXG4gIC8vIFJlbW92ZSBhbGwgZXhpc3RpbmcgVFJzIGZyb20gdGhlIHRhYmxlXG4gIHdoaWxlICh0Qm9keS5maXJzdENoaWxkKSB7XG4gICAgdEJvZHkucmVtb3ZlQ2hpbGQodEJvZHkuZmlyc3RDaGlsZCk7XG4gIH1cblxuICAvLyBSZS1hZGQgdGhlIG5ld2x5IHNvcnRlZCByb3dzXG4gIHRCb2R5LmFwcGVuZCguLi5zb3J0ZWRSb3dzKTtcblxuICAvLyBSZW1lbWViZXIgaG93IHRoZSBjb2x1bW4gaXMgY3VycmVudGx5IHNvcnRlZFxuICB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwidGhcIilcbiAgICAuZm9yRWFjaCgodGgpID0+IHRoLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aC1zb3J0LWFzY1wiLCBcInRoLXNvcnQtZGVzY1wiKSk7XG4gIHRhYmxlLnF1ZXJ5U2VsZWN0b3IoYHRoOm50aC1jaGlsZCgke2NvbHVtbiArIDF9KWApIVxuICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwidGgtc29ydC1hc2NcIiwgYXNjKTtcbiAgdGFibGUucXVlcnlTZWxlY3RvcihgdGg6bnRoLWNoaWxkKCR7Y29sdW1uICsgMX0pYCkhXG4gICAgLmNsYXNzTGlzdC50b2dnbGUoXCJ0aC1zb3J0LWRlc2NcIiwgIWFzYyk7XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFibGUtc29ydGFibGUgdGhcIikuZm9yRWFjaCgoaGVhZGVyQ2VsbCkgPT4ge1xuICBoZWFkZXJDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gY29uc3QgdGFibGVFbGVtZW50ID0gaGVhZGVyQ2VsbC5jbG9zZXN0KCcudGFibGUnKTtcbiAgICBjb25zdCB0YWJsZUVsZW1lbnQgPSBoZWFkZXJDZWxsLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnRcbiAgICAgID8ucGFyZW50RWxlbWVudCBhcyBIVE1MVGFibGVFbGVtZW50O1xuICAgIGNvbnN0IGhlYWRlckluZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChcbiAgICAgIGhlYWRlckNlbGwucGFyZW50RWxlbWVudD8uY2hpbGRyZW4sXG4gICAgICBoZWFkZXJDZWxsXG4gICAgKTtcbiAgICBjb25zdCBjdXJyZW50SXNBc2NlbmRpbmcgPSBoZWFkZXJDZWxsLmNsYXNzTGlzdC5jb250YWlucyhcInRoLXNvcnQtYXNjXCIpO1xuXG4gICAgc29ydFRhYmxlQnlDb2x1bW4odGFibGVFbGVtZW50LCBoZWFkZXJJbmRleCwgIWN1cnJlbnRJc0FzY2VuZGluZyk7XG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNvcnRUYWJsZUJ5Q29sdW1uOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9