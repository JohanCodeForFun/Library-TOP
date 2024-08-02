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

export default Book;