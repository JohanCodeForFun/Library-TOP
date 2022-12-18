'use strict';

let myLibrary = [];

const inputTitle = document.querySelector('#inputTitle');
const inputAuthor = document.querySelector('#inputAuthor');
const inputPages = document.querySelector('#inputPages');
const bookParagraph = document.querySelector('#bookParagraph');
const submitButton = document.querySelector('#submitBook');

// function to listen for input and update live in console.
// inputTitle?.addEventListener('input', () => console.log(`${inputTitle.value}`))

const addBookToLibrary = () => {
	bookParagraph?.textContent = `Added book, ${inputTitle?.value} ${inputAuthor?.value} ${inputPages?.value}`
	let id = 1;
	// const book1 = new (Book as any)('Amazing Title', 'John Doe')
	// // do stuff here
	// console.log(book1)
}

submitButton?.addEventListener('click', addBookToLibrary)
function Book(this:any, title:string, author:string, pages:number) {
	this.title = title, // = inputTitle?.value,
	this.author = author, // = inputAuthor?.value,
	this.id,
	this.pages = pages // = inputPages?.value,
	this.read

	this.bookInfo = function() {
		return // ... 
	}
}

let book1 = new Book("javascript funktioner", "Johan Hellberg", 900)
console.log(book1)