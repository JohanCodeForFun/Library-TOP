"use strict";

let myLibrary: Book[] = [];

declare let bootstrap: any;

const inputTitle = document.querySelector("#inputTitle") as HTMLInputElement;
const inputAuthor = document.querySelector("#inputAuthor") as HTMLInputElement;
const inputPages = document.querySelector("#inputPages") as HTMLInputElement;
const bookParagraph = document.querySelector("#bookParagraph");
const submitButton = document.querySelector("#submitBook");

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
  constructor(
    public title: string,
    public author: string,
    public pages: number,
    public id: number,
    public read: boolean
  ) {}
}

const fillLibrary = () => {
  const book1 = new Book("Zero To One", "Peter Thiel", 210, 0, true);
  const book2 = new Book("Hackers & Painters", "Paul Graham", 258, 1, true);
  const book3 = new Book(
    "Computer Science Distilled",
    "Wladston Ferreira Filho",
    168,
    2,
    false
  );
  myLibrary.push(book1, book2, book3);
};

fillLibrary();
loadLibrary();

const addBookToLibrary = () => {
  // use findLastId() to find id from myLibrary array
  let lastId = findLastID() + 1;

  myLibrary.push(
    new Book(
      `${inputTitle.value}`,
      `${inputAuthor.value}`,
      Number(`${inputPages.value}`),
      Number(`${lastId}`),
      true
    )
  );
  loadLibrary();
};

const findLastID = () => {
  let lastId = myLibrary.length - 1;
  return lastId;
};
findLastID();

// function to listen for input and update live in console.
submitButton?.addEventListener("click", addBookToLibrary);

// remove book function
let btns = document.querySelectorAll("#removeBtn");

btns.forEach((button) => {
  button.addEventListener("click", (event: Event) => {
    const target = event.target as HTMLButtonElement;
    if (target) console.log(target.value);

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
