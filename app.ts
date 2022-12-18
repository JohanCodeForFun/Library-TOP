'use strict';

let myLibrary = [];

const inputTitle = document.querySelector('#inputTitle');
const inputAuthor = document.querySelector('#inputAuthor');
const inputPages = document.querySelector('#inputPages');
const bookParagraph = document.querySelector('#bookParagraph');
const submitButton = document.querySelector('#submitBook');
const booksBody = document.querySelector('#booksBody');

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

const addBookToLibrary = () => {
	let id = 1;

	myLibrary.push(new Book(`${inputTitle.value}`, `${inputAuthor.value}`, `${inputPages.value}`, `${id}`, true))


	const  tabelData = myLibrary.map(value => {
		return (
			`<tr>
		<td> ${value.title} </td>
		<td> ${value.author} </td>
		<td> ${value.pages} </td>
		<td> ${id} </td>
	</tr>`
		);
	}).join('');
	
	booksBody?.innerHTML = tabelData


}

// function to listen for input and update live in console.
submitButton?.addEventListener('click', addBookToLibrary)
