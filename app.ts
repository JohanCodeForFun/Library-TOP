let myLibrary = [];

const inputTitle = document.querySelector('#inputTitle');
const inputAuthor = document.querySelector('#inputAuthor');
const bookParagraph = document.querySelector('#bookParagraph');
const submitButton = document.querySelector('#submitBook');

// function to listen for input and update live in console.
// inputTitle?.addEventListener('input', () => console.log(`${inputTitle.value}`))

const addBookToLibrary = () => {
	bookParagraph?.textContent = `Added book, ${inputTitle?.value} ${inputAuthor?.value}`
	// let count = 0;
	// const book1 = new (Book as any)('Amazing Title', 'John Doe')
	// // do stuff here
	// console.log(book1)
}

submitButton?.addEventListener('click', addBookToLibrary)
function Book(this:any, title:string, author:string) {
	this.title,
	this.author,
	this.bookInfo = function() {
		return // ... 
	}
}