"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const formHandler = FormHandler.create();
  formHandler.initializeEventListeners();
})

declare let bootstrap: any;

const bookParagraph = document.querySelector("#bookParagraph");

const sortById = document.querySelector("#sort-by-id") as HTMLImageElement;
const sortByTitle = document.querySelector("#sort-by-title") as HTMLImageElement;
const sortByAuthor = document.querySelector("#sort-by-author") as HTMLImageElement;
const sortByPages = document.querySelector("#sort-by-pages") as HTMLImageElement;
const sortByRead = document.querySelector("#sort-by-read") as HTMLImageElement;

const booksBody = document.querySelector("#booksBody")!;

// initialize popovers for modal, succesfully add book to list
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

class FindLastID {
  lastId: string;

  constructor(lastId: string) {
    this.lastId = lastId;
  }

  static getLastId(): number {
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
    const submitButton = document.querySelector("#submitBook") as HTMLButtonElement;

    function getFormValues() {
      const title = (document.querySelector("#inputTitle") as HTMLInputElement).value;
      const author = (document.querySelector("#inputAuthor") as HTMLInputElement).value;
      const pages = parseInt((document.querySelector("#inputPages") as HTMLInputElement).value, 10);
      const isRead = (document.querySelector("#inputIsRead") as HTMLInputElement).checked;

      return { title, author, pages, isRead }
    }

    function handleFormSubmission(event: Event) {
      event.preventDefault();
      const { title, author, pages, isRead } = getFormValues();

      myLibrary.addBook(title, author, pages, isRead);
    }

    function initializeEventListeners() {
      submitButton?.addEventListener("click", handleFormSubmission);
    }

    return {
      initializeEventListeners
    }
  }

  return {
    create,
  };
})();

class Book {
  #id: number;
  #title: string;
  #author: string;
  #pages: number;
  #isRead: boolean;

  constructor(id: number, title: string, author: string, pages: number, isRead: boolean) {
    this.#id = id;
    this.#title = title;
    this.#author = author;
    this.#pages = pages;
    this.#isRead = isRead;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  set title(newTitle: string) {
    this.#title = newTitle;
  }

  get author() {
    return this.#author;
  }

  set author(newAuthor: string) {
    this.#author = newAuthor;
  }

  get pages() {
    return this.#pages;
  }

  set pages(newPages: number) {
    this.#pages = newPages;
  }

  get isRead() {
    return this.#isRead;
  }

  set isRead(newIsRead: boolean) {
    this.#isRead = newIsRead;
  }
}

class Library {
  #books: Book[];

  constructor() {
    this.#books = []
  }

  addBook(title: string, author: string, pages: number, isRead: boolean): void {
    const id = this.#books.length === 0 ? 1 : Math.max(...this.#books.map(book => book.id)) + 1;
    const newBook = new Book(id, title, author, pages, isRead);
    this.#books.push(newBook);

    this.loadLibrary();
  }

  fillLibrary(): void {
    const book1 = new Book(1, "Zero To One", "Peter Thiel", 210, true);
    const book2 = new Book(2, "Hackers & Painters", "Paul Graham", 258, true);
    const book3 = new Book(3, "Computer Science Distilled", "Wladston Ferreira Filho", 168, true);
    const book4 = new Book(4, "Grokking Algorithms", "Aditya Y. Bhargava", 238, true);
    const book5 = new Book(5, "START SMALL, STAY SMALL", "Rob Walling", 201, false);
    this.#books.push(book1, book2, book3, book4, book5);
  };

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
  };

  getBooks(): Book[] {
    return this.#books;
  }

  removeBook(bookId: number): Book[] {
    this.#books = this.#books.filter(book => book.id !== bookId);

    this.loadLibrary()

    return this.#books;
  }

  getCheckedAttribute(isRead: boolean) {
    return isRead ? 'checked' : '';
  }

  updateIsRead(bookId: number): void {
    let book = this.#books.find(book => book.id === bookId);

    if (book) {
      book.isRead = !book.isRead;

      this.loadLibrary()
    } else {
      console.error("no book found");
    }
  }

  addDeleteEventListeners(): void {
    const deleteButtonsNodeList: NodeListOf<Element> = document.querySelectorAll("button.btn-danger");
    const deleteButtons: HTMLButtonElement[] = Array.from(deleteButtonsNodeList).map(node => node as HTMLButtonElement);

    deleteButtons.forEach((button) => {
      button.addEventListener("click", (event: Event) => {
        const target = event.target as HTMLButtonElement;
        if (target) {
          const bookId = parseInt(target.value);

          myLibrary.removeBook(bookId);
        };
      });
    });
  }

  addIsReadEventListeners(): void {
    const checkboxNodeList: NodeListOf<Element> = document.querySelectorAll('input[type="checkbox"]');
    const checkboxes: HTMLInputElement[] = Array.from(checkboxNodeList).map(node => node as HTMLInputElement);

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("click", (event: Event) => {
        const match = checkbox.id.match(/\d+$/);
        if (match) {
          const bookId = parseInt(match[0], 10);

          myLibrary.updateIsRead(bookId);
        } else {
          console.error('No numeric part found in the id')
        }

      });
    });
  }
}

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

function sortTableByColumn(
  table: HTMLTableElement,
  column: number,
  asc = true
) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  // Sort each row
  const sortedRows = rows.sort((a, b) => {
    const aColText = a.querySelector(`td:nth-child(${column + 1})`)!.textContent!.trim();
    const bColText = b.querySelector(`td:nth-child(${column + 1})`)!.textContent!.trim();

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
  table.querySelector(`th:nth-child(${column + 1})`)!
    .classList.toggle("th-sort-asc", asc);
  table.querySelector(`th:nth-child(${column + 1})`)!
    .classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".table-sortable th").forEach((headerCell) => {
  headerCell.addEventListener("click", () => {
    // const tableElement = headerCell.closest('.table');
    const tableElement = headerCell.parentElement?.parentElement
      ?.parentElement as HTMLTableElement;
    const headerIndex = Array.prototype.indexOf.call(
      headerCell.parentElement?.children,
      headerCell
    );
    const currentIsAscending = headerCell.classList.contains("th-sort-asc");

    sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
  });
});
