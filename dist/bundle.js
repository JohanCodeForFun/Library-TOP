/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
            console.log(book, book.isRead);
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
        let checkboxes = Array.from(checkboxNodeList).map(node => node);
        checkboxes = checkboxes.filter(checkbox => checkbox.id !== "inputIsRead");
        console.log(checkboxes);
        checkboxes.forEach((checkbox) => {
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
/* harmony import */ var _Library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Library */ "./src/Library.ts");



document.addEventListener("DOMContentLoaded", () => {
    const formHandler = _formHandler__WEBPACK_IMPORTED_MODULE_0__["default"].create();
    formHandler.initializeEventListeners();
});
// initialize popovers for modal, succesfully add book to list
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));
const myLibrary = new _Library__WEBPACK_IMPORTED_MODULE_1__["default"]();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxjQUFjLENBQXNCLENBQUMsT0FBTyxDQUFDO1lBRXBGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7UUFDekMsQ0FBQztRQUVELFNBQVMsb0JBQW9CLENBQUMsS0FBWTtZQUN4QyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLGFBQWEsRUFBRSxDQUFDO1lBRXpELDJDQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFFRCxTQUFTLHdCQUF3QjtZQUMvQixZQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDaEUsQ0FBQztRQUVELE9BQU87WUFDTCx3QkFBd0I7U0FDekI7SUFDSCxDQUFDO0lBRUQsT0FBTztRQUNMLE1BQU07S0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUVMLGlFQUFlLFdBQVcsRUFBQzs7Ozs7OztVQ3BDM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL0Jvb2sudHMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9MaWJyYXJ5LnRzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvZm9ybUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCb29rIHtcbiAgI2lkOiBudW1iZXI7XG4gICN0aXRsZTogc3RyaW5nO1xuICAjYXV0aG9yOiBzdHJpbmc7XG4gICNwYWdlczogbnVtYmVyO1xuICAjaXNSZWFkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHRpdGxlOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBwYWdlczogbnVtYmVyLCBpc1JlYWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLiNpZCA9IGlkO1xuICAgIHRoaXMuI3RpdGxlID0gdGl0bGU7XG4gICAgdGhpcy4jYXV0aG9yID0gYXV0aG9yO1xuICAgIHRoaXMuI3BhZ2VzID0gcGFnZXM7XG4gICAgdGhpcy4jaXNSZWFkID0gaXNSZWFkO1xuICB9XG5cbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLiNpZDtcbiAgfVxuXG4gIGdldCB0aXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jdGl0bGU7XG4gIH1cblxuICBzZXQgdGl0bGUobmV3VGl0bGU6IHN0cmluZykge1xuICAgIHRoaXMuI3RpdGxlID0gbmV3VGl0bGU7XG4gIH1cblxuICBnZXQgYXV0aG9yKCkge1xuICAgIHJldHVybiB0aGlzLiNhdXRob3I7XG4gIH1cblxuICBzZXQgYXV0aG9yKG5ld0F1dGhvcjogc3RyaW5nKSB7XG4gICAgdGhpcy4jYXV0aG9yID0gbmV3QXV0aG9yO1xuICB9XG5cbiAgZ2V0IHBhZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLiNwYWdlcztcbiAgfVxuXG4gIHNldCBwYWdlcyhuZXdQYWdlczogbnVtYmVyKSB7XG4gICAgdGhpcy4jcGFnZXMgPSBuZXdQYWdlcztcbiAgfVxuXG4gIGdldCBpc1JlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2lzUmVhZDtcbiAgfVxuXG4gIHNldCBpc1JlYWQobmV3SXNSZWFkOiBib29sZWFuKSB7XG4gICAgdGhpcy4jaXNSZWFkID0gbmV3SXNSZWFkO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2s7IiwiaW1wb3J0IHsgbXlMaWJyYXJ5IH0gZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgQm9vayBmcm9tIFwiLi9Cb29rXCI7XG5cbmNvbnN0IGJvb2tzQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9va3NCb2R5XCIpITtcblxuY2xhc3MgTGlicmFyeSB7XG4gICNib29rczogQm9va1tdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuI2Jvb2tzID0gW11cbiAgfVxuXG4gIGFkZEJvb2sodGl0bGU6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIHBhZ2VzOiBudW1iZXIsIGlzUmVhZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IGlkID0gdGhpcy4jYm9va3MubGVuZ3RoID09PSAwID8gMSA6IE1hdGgubWF4KC4uLnRoaXMuI2Jvb2tzLm1hcChib29rID0+IGJvb2suaWQpKSArIDE7XG4gICAgY29uc3QgbmV3Qm9vayA9IG5ldyBCb29rKGlkLCB0aXRsZSwgYXV0aG9yLCBwYWdlcywgaXNSZWFkKTtcbiAgICB0aGlzLiNib29rcy5wdXNoKG5ld0Jvb2spO1xuXG4gICAgdGhpcy5sb2FkTGlicmFyeSgpO1xuICB9XG5cbiAgZmlsbExpYnJhcnkoKTogdm9pZCB7XG4gICAgY29uc3QgYm9vazEgPSBuZXcgQm9vaygxLCBcIlplcm8gVG8gT25lXCIsIFwiUGV0ZXIgVGhpZWxcIiwgMjEwLCB0cnVlKTtcbiAgICBjb25zdCBib29rMiA9IG5ldyBCb29rKDIsIFwiSGFja2VycyAmIFBhaW50ZXJzXCIsIFwiUGF1bCBHcmFoYW1cIiwgMjU4LCB0cnVlKTtcbiAgICBjb25zdCBib29rMyA9IG5ldyBCb29rKDMsIFwiQ29tcHV0ZXIgU2NpZW5jZSBEaXN0aWxsZWRcIiwgXCJXbGFkc3RvbiBGZXJyZWlyYSBGaWxob1wiLCAxNjgsIHRydWUpO1xuICAgIGNvbnN0IGJvb2s0ID0gbmV3IEJvb2soNCwgXCJHcm9ra2luZyBBbGdvcml0aG1zXCIsIFwiQWRpdHlhIFkuIEJoYXJnYXZhXCIsIDIzOCwgdHJ1ZSk7XG4gICAgY29uc3QgYm9vazUgPSBuZXcgQm9vayg1LCBcIlNUQVJUIFNNQUxMLCBTVEFZIFNNQUxMXCIsIFwiUm9iIFdhbGxpbmdcIiwgMjAxLCBmYWxzZSk7XG4gICAgdGhpcy4jYm9va3MucHVzaChib29rMSwgYm9vazIsIGJvb2szLCBib29rNCwgYm9vazUpO1xuICB9O1xuXG4gIGxvYWRMaWJyYXJ5KCkge1xuICAgIGNvbnN0IHRhYmVsRGF0YSA9IHRoaXMuZ2V0Qm9va3MoKVxuICAgICAgLm1hcCgodmFsdWUpID0+IHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZD4gJHt2YWx1ZS50aXRsZX0gPC90ZD5cbiAgICAgICAgICA8dGQ+ICR7dmFsdWUuYXV0aG9yfSA8L3RkPlxuICAgICAgICAgIDx0ZD4gJHt2YWx1ZS5wYWdlc30gPC90ZD5cbiAgICAgICAgICA8dGQ+IFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImZsZXhDaGVja0RlZmF1bHQtJHt2YWx1ZS5pZH1cIj5SZWFkPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJcIiBpZD1cImZsZXhDaGVja0RlZmF1bHQtJHt2YWx1ZS5pZH1cIiAke3RoaXMuZ2V0Q2hlY2tlZEF0dHJpYnV0ZSh2YWx1ZS5pc1JlYWQpfT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZD4gPGJ1dHRvbiB2YWx1ZT1cIiR7dmFsdWUuaWR9XCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiPlJlbW92ZTwvYnV0dG9uPiA8L3RkPlxuICAgICAgICA8L3RyPmA7XG4gICAgICB9KVxuICAgICAgLmpvaW4oXCJcIik7XG5cbiAgICBib29rc0JvZHkuaW5uZXJIVE1MID0gdGFiZWxEYXRhO1xuXG4gICAgdGhpcy5hZGREZWxldGVFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuYWRkSXNSZWFkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfTtcblxuICBnZXRCb29rcygpOiBCb29rW10ge1xuICAgIHJldHVybiB0aGlzLiNib29rcztcbiAgfVxuXG4gIHJlbW92ZUJvb2soYm9va0lkOiBudW1iZXIpOiBCb29rW10ge1xuICAgIHRoaXMuI2Jvb2tzID0gdGhpcy4jYm9va3MuZmlsdGVyKGJvb2sgPT4gYm9vay5pZCAhPT0gYm9va0lkKTtcblxuICAgIHRoaXMubG9hZExpYnJhcnkoKVxuXG4gICAgcmV0dXJuIHRoaXMuI2Jvb2tzO1xuICB9XG5cbiAgZ2V0Q2hlY2tlZEF0dHJpYnV0ZShpc1JlYWQ6IGJvb2xlYW4pIHtcbiAgICByZXR1cm4gaXNSZWFkID8gJ2NoZWNrZWQnIDogJyc7XG4gIH1cblxuICB1cGRhdGVJc1JlYWQoYm9va0lkOiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgYm9vayA9IHRoaXMuI2Jvb2tzLmZpbmQoYm9vayA9PiBib29rLmlkID09PSBib29rSWQpO1xuXG4gICAgaWYgKGJvb2spIHtcbiAgICAgIGJvb2suaXNSZWFkID0gIWJvb2suaXNSZWFkO1xuXG4gICAgICBjb25zb2xlLmxvZyhib29rLCBib29rLmlzUmVhZClcblxuICAgICAgdGhpcy5sb2FkTGlicmFyeSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJubyBib29rIGZvdW5kXCIpO1xuICAgIH1cbiAgfVxuXG4gIGFkZERlbGV0ZUV2ZW50TGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbnNOb2RlTGlzdDogTm9kZUxpc3RPZjxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b24uYnRuLWRhbmdlclwiKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b25zOiBIVE1MQnV0dG9uRWxlbWVudFtdID0gQXJyYXkuZnJvbShkZWxldGVCdXR0b25zTm9kZUxpc3QpLm1hcChub2RlID0+IG5vZGUgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpO1xuXG4gICAgZGVsZXRlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICBjb25zdCBib29rSWQgPSBwYXJzZUludCh0YXJnZXQudmFsdWUpO1xuXG4gICAgICAgICAgbXlMaWJyYXJ5LnJlbW92ZUJvb2soYm9va0lkKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkSXNSZWFkRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgY29uc3QgY2hlY2tib3hOb2RlTGlzdDogTm9kZUxpc3RPZjxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuICAgIGxldCBjaGVja2JveGVzOiBIVE1MSW5wdXRFbGVtZW50W10gPSBBcnJheS5mcm9tKGNoZWNrYm94Tm9kZUxpc3QpLm1hcChub2RlID0+IG5vZGUgYXMgSFRNTElucHV0RWxlbWVudCk7XG4gICAgY2hlY2tib3hlcyA9IGNoZWNrYm94ZXMuZmlsdGVyKGNoZWNrYm94ID0+IGNoZWNrYm94LmlkICE9PSBcImlucHV0SXNSZWFkXCIpXG5cbiAgICBjb25zb2xlLmxvZyhjaGVja2JveGVzKVxuXG4gICAgY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBjaGVja2JveC5pZC5tYXRjaCgvXFxkKyQvKTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgYm9va0lkID0gcGFyc2VJbnQobWF0Y2hbMF0sIDEwKTtcblxuICAgICAgICAgIG15TGlicmFyeS51cGRhdGVJc1JlYWQoYm9va0lkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyBudW1lcmljIHBhcnQgZm91bmQgaW4gdGhlIGlkJylcbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaWJyYXJ5OyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRm9ybUhhbmRsZXIgZnJvbSBcIi4vZm9ybUhhbmRsZXJcIjtcbmltcG9ydCBzb3J0VGFibGVCeUNvbHVtbiBmcm9tIFwiLi9zb3J0XCI7XG5pbXBvcnQgTGlicmFyeSBmcm9tIFwiLi9MaWJyYXJ5XCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgZm9ybUhhbmRsZXIgPSBGb3JtSGFuZGxlci5jcmVhdGUoKTtcbiAgZm9ybUhhbmRsZXIuaW5pdGlhbGl6ZUV2ZW50TGlzdGVuZXJzKCk7XG59KVxuXG5kZWNsYXJlIGxldCBib290c3RyYXA6IGFueTtcblxuXG5cbi8vIGluaXRpYWxpemUgcG9wb3ZlcnMgZm9yIG1vZGFsLCBzdWNjZXNmdWxseSBhZGQgYm9vayB0byBsaXN0XG5jb25zdCBwb3BvdmVyVHJpZ2dlckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAnW2RhdGEtYnMtdG9nZ2xlPVwicG9wb3ZlclwiXSdcbik7XG5jb25zdCBwb3BvdmVyTGlzdCA9IFsuLi5wb3BvdmVyVHJpZ2dlckxpc3RdLm1hcChcbiAgKHBvcG92ZXJUcmlnZ2VyRWwpID0+IG5ldyBib290c3RyYXAuUG9wb3Zlcihwb3BvdmVyVHJpZ2dlckVsKVxuKTtcblxuZXhwb3J0IGNvbnN0IG15TGlicmFyeSA9IG5ldyBMaWJyYXJ5KCk7XG5cbm15TGlicmFyeS5maWxsTGlicmFyeSgpO1xuXG5teUxpYnJhcnkubG9hZExpYnJhcnkoKTtcbiIsImltcG9ydCB7IG15TGlicmFyeSB9IGZyb20gXCIuL2FwcFwiO1xuXG5jb25zdCBGb3JtSGFuZGxlciA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdEJvb2tcIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgICBmdW5jdGlvbiBnZXRGb3JtVmFsdWVzKCkge1xuICAgICAgY29uc3QgdGl0bGUgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dFRpdGxlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgICAgY29uc3QgYXV0aG9yID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRBdXRob3JcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgICBjb25zdCBwYWdlcyA9IHBhcnNlSW50KChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0UGFnZXNcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsIDEwKTtcbiAgICAgIGNvbnN0IGlzUmVhZCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0SXNSZWFkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWQ7XG5cbiAgICAgIHJldHVybiB7IHRpdGxlLCBhdXRob3IsIHBhZ2VzLCBpc1JlYWQgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXNzaW9uKGV2ZW50OiBFdmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHsgdGl0bGUsIGF1dGhvciwgcGFnZXMsIGlzUmVhZCB9ID0gZ2V0Rm9ybVZhbHVlcygpO1xuXG4gICAgICBteUxpYnJhcnkuYWRkQm9vayh0aXRsZSwgYXV0aG9yLCBwYWdlcywgaXNSZWFkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0aWFsaXplRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBzdWJtaXRCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVGb3JtU3VibWlzc2lvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGluaXRpYWxpemVFdmVudExpc3RlbmVyc1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybUhhbmRsZXI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=