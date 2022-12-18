'use strict';

let myLibrary = [
	{title: 'Zero To One', author: 'Peter Thiel', pages: '210', id: '1', read: true},
	{title: 'Hackers & Painters', author: 'Paul Graham', pages: '258', id: '2', read: true},
	{title: 'Computer Science Distilled', author: 'Wladston Ferreira Filho', pages: '168', id: '3', read: true},
];

const inputTitle = document.querySelector('#inputTitle');
const inputAuthor = document.querySelector('#inputAuthor');
const inputPages = document.querySelector('#inputPages');
const bookParagraph = document.querySelector('#bookParagraph');
const submitButton = document.querySelector('#submitBook');
const booksBody = document.querySelector('#booksBody');


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
	<td> <button class="btn btn-danger">Remove</button> </td>
</tr>`
	);
}).join('');

booksBody?.innerHTML = tabelData
}
loadLibrary();


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
