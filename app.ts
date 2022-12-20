'use strict';

let myLibrary = [
	{title: 'Zero To One', author: 'Peter Thiel', pages: '210', id: '0', read: true},
	{title: 'Hackers & Painters', author: 'Paul Graham', pages: '258', id: '1', read: true},
	{title: 'Computer Science Distilled', author: 'Wladston Ferreira Filho', pages: '168', id: '2', read: true},
];

const inputTitle = document.querySelector('#inputTitle');
const inputAuthor = document.querySelector('#inputAuthor');
const inputPages = document.querySelector('#inputPages');
const bookParagraph = document.querySelector('#bookParagraph');
const submitButton = document.querySelector('#submitBook');


const removeBookButton = document.querySelector(`#remove${myLibrary[0].id}`)
removeBookButton?.addEventListener('click',() => console.log('click'))


const booksBody = document.querySelector('#booksBody');

// initialize popovers for modal, succesfully add book to list
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


const loadLibrary = () => {
const tabelData = myLibrary.map(value => {
	return (
		`<tr>
	<th scope="row"> ${value.id} </th>
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
	<td> <button id="remove${value.id}" class="btn btn-danger">Remove</button> </td>
</tr>`
	);
}).join('');

booksBody?.innerHTML = tabelData
}
loadLibrary();

const removeBook = () => {
	// remove book by clicking remove button
	// function, myLibrary.splice(${id}, 1)
	// forEach button with ${id}, get id value.
	// then run myLibrary.splice(${id}, 1) to remove that item
	// then update library app with the new array
	// by running loadLibrary.
}


function Book(this:any, title:string, author:string, pages:number, id:number, read:boolean) {
	this.title = title,
	this.author = author,
	this.pages = pages
	this.id = id,
	this.read = read
}

const addBookToLibrary = () => {
	let id = 1;

	myLibrary.push(new Book(`${inputTitle.value}`, `${inputAuthor.value}`, `${inputPages.value}`, `${id}`, true))

	loadLibrary();
}


// function to listen for input and update live in console.
submitButton?.addEventListener('click', addBookToLibrary)
