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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFO1FBQ3pDLENBQUM7UUFFRCxTQUFTLG9CQUFvQixDQUFDLEtBQVk7WUFDeEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxhQUFhLEVBQUUsQ0FBQztZQUV6RCwyQ0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBRUQsU0FBUyx3QkFBd0I7WUFDL0IsWUFBWSxhQUFaLFlBQVksdUJBQVosWUFBWSxDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7UUFFRCxPQUFPO1lBQ0wsd0JBQXdCO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTCxNQUFNO0tBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFTCxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7VUNwQzNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9Cb29rLnRzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvTGlicmFyeS50cyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL2Zvcm1IYW5kbGVyLnRzIiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQm9vayB7XG4gICNpZDogbnVtYmVyO1xuICAjdGl0bGU6IHN0cmluZztcbiAgI2F1dGhvcjogc3RyaW5nO1xuICAjcGFnZXM6IG51bWJlcjtcbiAgI2lzUmVhZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCB0aXRsZTogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgcGFnZXM6IG51bWJlciwgaXNSZWFkOiBib29sZWFuKSB7XG4gICAgdGhpcy4jaWQgPSBpZDtcbiAgICB0aGlzLiN0aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuI2F1dGhvciA9IGF1dGhvcjtcbiAgICB0aGlzLiNwYWdlcyA9IHBhZ2VzO1xuICAgIHRoaXMuI2lzUmVhZCA9IGlzUmVhZDtcbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jaWQ7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3RpdGxlO1xuICB9XG5cbiAgc2V0IHRpdGxlKG5ld1RpdGxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLiN0aXRsZSA9IG5ld1RpdGxlO1xuICB9XG5cbiAgZ2V0IGF1dGhvcigpIHtcbiAgICByZXR1cm4gdGhpcy4jYXV0aG9yO1xuICB9XG5cbiAgc2V0IGF1dGhvcihuZXdBdXRob3I6IHN0cmluZykge1xuICAgIHRoaXMuI2F1dGhvciA9IG5ld0F1dGhvcjtcbiAgfVxuXG4gIGdldCBwYWdlcygpIHtcbiAgICByZXR1cm4gdGhpcy4jcGFnZXM7XG4gIH1cblxuICBzZXQgcGFnZXMobmV3UGFnZXM6IG51bWJlcikge1xuICAgIHRoaXMuI3BhZ2VzID0gbmV3UGFnZXM7XG4gIH1cblxuICBnZXQgaXNSZWFkKCkge1xuICAgIHJldHVybiB0aGlzLiNpc1JlYWQ7XG4gIH1cblxuICBzZXQgaXNSZWFkKG5ld0lzUmVhZDogYm9vbGVhbikge1xuICAgIHRoaXMuI2lzUmVhZCA9IG5ld0lzUmVhZDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29rOyIsImltcG9ydCB7IG15TGlicmFyeSB9IGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IEJvb2sgZnJvbSBcIi4vQm9va1wiO1xuXG5jb25zdCBib29rc0JvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jvb2tzQm9keVwiKSE7XG5cbmNsYXNzIExpYnJhcnkge1xuICAjYm9va3M6IEJvb2tbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiNib29rcyA9IFtdXG4gIH1cblxuICBhZGRCb29rKHRpdGxlOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBwYWdlczogbnVtYmVyLCBpc1JlYWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuI2Jvb2tzLmxlbmd0aCA9PT0gMCA/IDEgOiBNYXRoLm1heCguLi50aGlzLiNib29rcy5tYXAoYm9vayA9PiBib29rLmlkKSkgKyAxO1xuICAgIGNvbnN0IG5ld0Jvb2sgPSBuZXcgQm9vayhpZCwgdGl0bGUsIGF1dGhvciwgcGFnZXMsIGlzUmVhZCk7XG4gICAgdGhpcy4jYm9va3MucHVzaChuZXdCb29rKTtcblxuICAgIHRoaXMubG9hZExpYnJhcnkoKTtcbiAgfVxuXG4gIGZpbGxMaWJyYXJ5KCk6IHZvaWQge1xuICAgIGNvbnN0IGJvb2sxID0gbmV3IEJvb2soMSwgXCJaZXJvIFRvIE9uZVwiLCBcIlBldGVyIFRoaWVsXCIsIDIxMCwgdHJ1ZSk7XG4gICAgY29uc3QgYm9vazIgPSBuZXcgQm9vaygyLCBcIkhhY2tlcnMgJiBQYWludGVyc1wiLCBcIlBhdWwgR3JhaGFtXCIsIDI1OCwgdHJ1ZSk7XG4gICAgY29uc3QgYm9vazMgPSBuZXcgQm9vaygzLCBcIkNvbXB1dGVyIFNjaWVuY2UgRGlzdGlsbGVkXCIsIFwiV2xhZHN0b24gRmVycmVpcmEgRmlsaG9cIiwgMTY4LCB0cnVlKTtcbiAgICBjb25zdCBib29rNCA9IG5ldyBCb29rKDQsIFwiR3Jva2tpbmcgQWxnb3JpdGhtc1wiLCBcIkFkaXR5YSBZLiBCaGFyZ2F2YVwiLCAyMzgsIHRydWUpO1xuICAgIGNvbnN0IGJvb2s1ID0gbmV3IEJvb2soNSwgXCJTVEFSVCBTTUFMTCwgU1RBWSBTTUFMTFwiLCBcIlJvYiBXYWxsaW5nXCIsIDIwMSwgZmFsc2UpO1xuICAgIHRoaXMuI2Jvb2tzLnB1c2goYm9vazEsIGJvb2syLCBib29rMywgYm9vazQsIGJvb2s1KTtcbiAgfTtcblxuICBsb2FkTGlicmFyeSgpIHtcbiAgICBjb25zdCB0YWJlbERhdGEgPSB0aGlzLmdldEJvb2tzKClcbiAgICAgIC5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+ICR7dmFsdWUudGl0bGV9IDwvdGQ+XG4gICAgICAgICAgPHRkPiAke3ZhbHVlLmF1dGhvcn0gPC90ZD5cbiAgICAgICAgICA8dGQ+ICR7dmFsdWUucGFnZXN9IDwvdGQ+XG4gICAgICAgICAgPHRkPiBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJmbGV4Q2hlY2tEZWZhdWx0LSR7dmFsdWUuaWR9XCI+UmVhZDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiXCIgaWQ9XCJmbGV4Q2hlY2tEZWZhdWx0LSR7dmFsdWUuaWR9XCIgJHt0aGlzLmdldENoZWNrZWRBdHRyaWJ1dGUodmFsdWUuaXNSZWFkKX0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQ+IDxidXR0b24gdmFsdWU9XCIke3ZhbHVlLmlkfVwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIj5SZW1vdmU8L2J1dHRvbj4gPC90ZD5cbiAgICAgICAgPC90cj5gO1xuICAgICAgfSlcbiAgICAgIC5qb2luKFwiXCIpO1xuXG4gICAgYm9va3NCb2R5LmlubmVySFRNTCA9IHRhYmVsRGF0YTtcblxuICAgIHRoaXMuYWRkRGVsZXRlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmFkZElzUmVhZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgZ2V0Qm9va3MoKTogQm9va1tdIHtcbiAgICByZXR1cm4gdGhpcy4jYm9va3M7XG4gIH1cblxuICByZW1vdmVCb29rKGJvb2tJZDogbnVtYmVyKTogQm9va1tdIHtcbiAgICB0aGlzLiNib29rcyA9IHRoaXMuI2Jvb2tzLmZpbHRlcihib29rID0+IGJvb2suaWQgIT09IGJvb2tJZCk7XG5cbiAgICB0aGlzLmxvYWRMaWJyYXJ5KClcblxuICAgIHJldHVybiB0aGlzLiNib29rcztcbiAgfVxuXG4gIGdldENoZWNrZWRBdHRyaWJ1dGUoaXNSZWFkOiBib29sZWFuKSB7XG4gICAgcmV0dXJuIGlzUmVhZCA/ICdjaGVja2VkJyA6ICcnO1xuICB9XG5cbiAgdXBkYXRlSXNSZWFkKGJvb2tJZDogbnVtYmVyKTogdm9pZCB7XG4gICAgbGV0IGJvb2sgPSB0aGlzLiNib29rcy5maW5kKGJvb2sgPT4gYm9vay5pZCA9PT0gYm9va0lkKTtcblxuICAgIGlmIChib29rKSB7XG4gICAgICBib29rLmlzUmVhZCA9ICFib29rLmlzUmVhZDtcblxuICAgICAgdGhpcy5sb2FkTGlicmFyeSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJubyBib29rIGZvdW5kXCIpO1xuICAgIH1cbiAgfVxuXG4gIGFkZERlbGV0ZUV2ZW50TGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbnNOb2RlTGlzdDogTm9kZUxpc3RPZjxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b24uYnRuLWRhbmdlclwiKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b25zOiBIVE1MQnV0dG9uRWxlbWVudFtdID0gQXJyYXkuZnJvbShkZWxldGVCdXR0b25zTm9kZUxpc3QpLm1hcChub2RlID0+IG5vZGUgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpO1xuXG4gICAgZGVsZXRlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICBjb25zdCBib29rSWQgPSBwYXJzZUludCh0YXJnZXQudmFsdWUpO1xuXG4gICAgICAgICAgbXlMaWJyYXJ5LnJlbW92ZUJvb2soYm9va0lkKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkSXNSZWFkRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgY29uc3QgY2hlY2tib3hOb2RlTGlzdDogTm9kZUxpc3RPZjxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuICAgIGNvbnN0IGNoZWNrYm94ZXM6IEhUTUxJbnB1dEVsZW1lbnRbXSA9IEFycmF5LmZyb20oY2hlY2tib3hOb2RlTGlzdCkubWFwKG5vZGUgPT4gbm9kZSBhcyBIVE1MSW5wdXRFbGVtZW50KTtcbiAgICBjb25zdCBmaWx0ZXJlZENoZWNrYm94ZXMgPSBjaGVja2JveGVzLmZpbHRlcihjaGVja2JveCA9PiBjaGVja2JveC5pZCAhPT0gXCJpbnB1dElzUmVhZFwiKVxuXG4gICAgZmlsdGVyZWRDaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaCA9IGNoZWNrYm94LmlkLm1hdGNoKC9cXGQrJC8pO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBib29rSWQgPSBwYXJzZUludChtYXRjaFswXSwgMTApO1xuXG4gICAgICAgICAgbXlMaWJyYXJ5LnVwZGF0ZUlzUmVhZChib29rSWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIG51bWVyaWMgcGFydCBmb3VuZCBpbiB0aGUgaWQnKVxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpYnJhcnk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGb3JtSGFuZGxlciBmcm9tIFwiLi9mb3JtSGFuZGxlclwiO1xuaW1wb3J0IHNvcnRUYWJsZUJ5Q29sdW1uIGZyb20gXCIuL3NvcnRcIjtcbmltcG9ydCBMaWJyYXJ5IGZyb20gXCIuL0xpYnJhcnlcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBmb3JtSGFuZGxlciA9IEZvcm1IYW5kbGVyLmNyZWF0ZSgpO1xuICBmb3JtSGFuZGxlci5pbml0aWFsaXplRXZlbnRMaXN0ZW5lcnMoKTtcbn0pXG5cbmRlY2xhcmUgbGV0IGJvb3RzdHJhcDogYW55O1xuXG5cblxuLy8gaW5pdGlhbGl6ZSBwb3BvdmVycyBmb3IgbW9kYWwsIHN1Y2Nlc2Z1bGx5IGFkZCBib29rIHRvIGxpc3RcbmNvbnN0IHBvcG92ZXJUcmlnZ2VyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICdbZGF0YS1icy10b2dnbGU9XCJwb3BvdmVyXCJdJ1xuKTtcbmNvbnN0IHBvcG92ZXJMaXN0ID0gWy4uLnBvcG92ZXJUcmlnZ2VyTGlzdF0ubWFwKFxuICAocG9wb3ZlclRyaWdnZXJFbCkgPT4gbmV3IGJvb3RzdHJhcC5Qb3BvdmVyKHBvcG92ZXJUcmlnZ2VyRWwpXG4pO1xuXG5leHBvcnQgY29uc3QgbXlMaWJyYXJ5ID0gbmV3IExpYnJhcnkoKTtcblxubXlMaWJyYXJ5LmZpbGxMaWJyYXJ5KCk7XG5cbm15TGlicmFyeS5sb2FkTGlicmFyeSgpO1xuIiwiaW1wb3J0IHsgbXlMaWJyYXJ5IH0gZnJvbSBcIi4vYXBwXCI7XG5cbmNvbnN0IEZvcm1IYW5kbGVyID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0Qm9va1wiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblxuICAgIGZ1bmN0aW9uIGdldEZvcm1WYWx1ZXMoKSB7XG4gICAgICBjb25zdCB0aXRsZSA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0VGl0bGVcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgICBjb25zdCBhdXRob3IgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dEF1dGhvclwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICAgIGNvbnN0IHBhZ2VzID0gcGFyc2VJbnQoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRQYWdlc1wiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSwgMTApO1xuICAgICAgY29uc3QgaXNSZWFkID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRJc1JlYWRcIikgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZDtcblxuICAgICAgcmV0dXJuIHsgdGl0bGUsIGF1dGhvciwgcGFnZXMsIGlzUmVhZCB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pc3Npb24oZXZlbnQ6IEV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgeyB0aXRsZSwgYXV0aG9yLCBwYWdlcywgaXNSZWFkIH0gPSBnZXRGb3JtVmFsdWVzKCk7XG5cbiAgICAgIG15TGlicmFyeS5hZGRCb29rKHRpdGxlLCBhdXRob3IsIHBhZ2VzLCBpc1JlYWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemVFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHN1Ym1pdEJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUZvcm1TdWJtaXNzaW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaW5pdGlhbGl6ZUV2ZW50TGlzdGVuZXJzXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGUsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtSGFuZGxlcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==