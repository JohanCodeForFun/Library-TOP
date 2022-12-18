'use strict';

let myLibrary = [];

const inputTitle = document.querySelector('#inputTitle');
const inputAuthor = document.querySelector('#inputAuthor');
const inputPages = document.querySelector('#inputPages');
const bookParagraph = document.querySelector('#bookParagraph');
const submitButton = document.querySelector('#submitBook');
const booksBody = document.querySelector('#booksBody');

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
function Book(this:any, title:string, author:string, pages:number, id:number, read:boolean) {
	this.title = title, // = inputTitle?.value,
	this.author = author, // = inputAuthor?.value,
	this.pages = pages // = inputPages?.value,
	this.id = id,
	this.read = read

	this.bookInfo = function() {
		return // ... 
	}
}

let book1 = new Book("javascript funktioner", "Johan Hellberg", 900, 1, true)
console.log(book1)

bookParagraph?.textContent = book1.title

booksBody?.innerHTML = `
<tr>
	<td> ${book1.title} </td>
	<td> ${book1.author} </td>
	<td> ${book1.pages} </td>
	<td> ${book1.read} </td>
</tr>
<tr>
	<td> ${book1.title} </td>
	<td> ${book1.author} </td>
	<td> ${book1.pages} </td>
	<td> ${book1.read} </td>
</tr>
<tr>
	<td> ${book1.title} </td>
	<td> ${book1.author} </td>
	<td> ${book1.pages} </td>
	<td> ${book1.read} </td>
</tr>
<tr>
	<td> ${book1.title} </td>
	<td> ${book1.author} </td>
	<td> ${book1.pages} </td>
	<td> ${book1.read} </td>
</tr>

`
