import { myLibrary } from "./app";
import Book from "./Book";

const booksBody = document.querySelector("#booksBody")!;

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

export default Library;