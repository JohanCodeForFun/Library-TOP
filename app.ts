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

let book1 = new Book("javascript Funktioner", "Johan Hellberg", 900, 1, true)
console.log(book1)
let book2 = new Book("javascript OOP", "Johan Hellberg", 300, 1, true)
console.log(book1)
let book3 = new Book("javascript ES6", "Johan Hellberg", 500, 1, true)
console.log(book1)

let bookData = [book1, book2, book3];

// example how to display data with .map
// https://stackoverflow.com/questions/14643617/create-table-using-javascript
const data = [{Name:'Sydney', Day: 'Monday', Time: '10:00AM'},{Name:'New York', Day: 'Monday',Time: '11:00AM'}, {Name:'Sydney', Day: 'Monday', Time: '10:00AM'},{Name:'New York', Day: 'Monday',Time: '11:00AM'}, {Name:'Sydney', Day: 'Monday', Time: '10:00AM'},{Name:'New York', Day: 'Monday',Time: '11:00AM'},]; // any json data or array of objects

const tabelData = bookData.map(value => {
	return (
		`<tr>
	<td> ${value.title} </td>
	<td> ${value.author} </td>
	<td> ${value.pages} </td>
	<td> ${value.read} </td>
</tr>`
	);
}).join('');

booksBody?.innerHTML = tabelData


// bookParagraph?.textContent = book1.title

let book1content = `
<tr>
	<td> ${book1.title} </td>
	<td> ${book1.author} </td>
	<td> ${book1.pages} </td>
	<td> ${book1.read} </td>
</tr>`


// booksBody?.innerHTML = `
// <tr>
// 	<td> ${book1.title} </td>
// 	<td> ${book1.author} </td>
// 	<td> ${book1.pages} </td>
// 	<td> ${book1.read} </td>
// </tr>
// <tr>
// 	<td> ${book1.title} </td>
// 	<td> ${book1.author} </td>
// 	<td> ${book1.pages} </td>
// 	<td> ${book1.read} </td>
// </tr>
// <tr>
// 	<td> ${book1.title} </td>
// 	<td> ${book1.author} </td>
// 	<td> ${book1.pages} </td>
// 	<td> ${book1.read} </td>
// </tr>
// <tr>
// 	<td> ${book1.title} </td>
// 	<td> ${book1.author} </td>
// 	<td> ${book1.pages} </td>
// 	<td> ${book1.read} </td>
// </tr>

// `
