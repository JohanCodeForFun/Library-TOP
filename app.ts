'use strict';

let myLibrary = [];

const inputTitle = document.querySelector('#inputTitle');
const inputAuthor = document.querySelector('#inputAuthor');
const inputPages = document.querySelector('#inputPages');
const bookParagraph = document.querySelector('#bookParagraph');
const submitButton = document.querySelector('#submitBook');

const sortById = document.querySelector('#sort-by-id')
const sortByTitle = document.querySelector('#sort-by-title')
const sortByAuthor = document.querySelector('#sort-by-author')
const sortByPages = document.querySelector('#sort-by-pages')
const sortByRead = document.querySelector('#sort-by-read')


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
	<td> <button id="removeBtn" value="${value.id}" class="btn btn-danger">Remove</button> </td>
</tr>`
	);
}).join('');

booksBody?.innerHTML = tabelData
}


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

// {title: 'Zero To One', author: 'Peter Thiel', pages: '210', id: '0', read: true},
// {title: 'Hackers & Painters', author: 'Paul Graham', pages: '258', id: '1', read: true},
// {title: 'Computer Science Distilled', author: 'Wladston Ferreira Filho', pages: '168', id: '2', read: true},

const fillLibrary = () => {
	myLibrary.push(new Book('Zero To One', 'Peter Thiel', 210, 0, true));
	myLibrary.push(new Book('Hackers & Painters', 'Paul Graham', 258, 1, true));
	myLibrary.push(new Book('Computer Science Distilled', 'Wladston Ferreira Filho', 168, 2, false));
}
fillLibrary();
loadLibrary();

const addBookToLibrary = () => {
	// use findLastId() to find id from myLibrary array
	let lastId = findLastID() + 1;

	myLibrary.push(new Book(`${inputTitle.value}`, `${inputAuthor.value}`, `${inputPages.value}`, `${lastId}`, true))
	loadLibrary();
	updateBtnValue();
}

const findLastID = () => {
	let lastId = myLibrary.length - 1;
	return lastId;
}
findLastID()


// function to listen for input and update live in console.
submitButton?.addEventListener('click', addBookToLibrary)

const btns = document.querySelectorAll('#removeBtn');

const updateBtnValue = () => {
	for (const btn of btns) {
		btn.addEventListener('click', function() {
			console.log(this.value)
		})
	}
}
updateBtnValue();

// const sortByIdReverse = (a, b) => b.id - a.id;


// sort functions
let active = false

sortById?.addEventListener('click', () => {
	active = !active

	if (active) {
		sortById.classList.add('active')
		myLibrary.sort((a, b) => b.id - a.id)
		sortById.style.transform = 'rotate(180deg)';
		loadLibrary();
	} else {
		sortById.classList.remove('active')
		myLibrary.sort((a, b) => a.id - b.id)
		sortById.style.transform = 'rotate(0deg)';
		loadLibrary();
	}
})

sortByTitle?.addEventListener('click', () => {
	active = !active	

	if (active) {
		myLibrary.sort((a, b) => {

			if (a.title < b.title) { return -1; }
			if (a.title > b.title) { return 1 }
			return 0;
		}

		sortByTitle.src = "img/chevron-down-box.png"
		loadLibrary();
	} else {
		myLibrary.sort((a, b) => {
			
			if (a.title > b.title) { return -1; }
			if (a.title < b.title) { return 1 }
			return 0;
		}
		
		sortByTitle.src = "img/chevron-up-box-outline.png"
		loadLibrary();
	}
})

sortByAuthor?.addEventListener('click', () => {
	active = !active	

	if (active) {
		myLibrary.sort((a, b) => {

			if (a.author < b.author) { return -1; }
			if (a.author > b.author) { return 1 }
			return 0;
		}

		sortByAuthor.src = "img/chevron-down-box.png"
		loadLibrary();
	} else {
		myLibrary.sort((a, b) => {
			
			if (a.author > b.author) { return -1; }
			if (a.author < b.author) { return 1 }
			return 0;
		}
		
		sortByAuthor.src = "img/chevron-up-box-outline.png"
		loadLibrary();
	}
})

sortByPages?.addEventListener('click', () => {
	active = !active	

	if (active) {
		myLibrary.sort((a, b) => {

			if (a.pages < b.pages) { return -1; }
			if (a.pages > b.pages) { return 1 }
			return 0;
		}

		sortByPages.src = "img/chevron-down-box.png"
		loadLibrary();
	} else {
		myLibrary.sort((a, b) => {
			
			if (a.pages > b.pages) { return -1; }
			if (a.pages < b.pages) { return 1 }
			return 0;
		}
		
		sortByPages.src = "img/chevron-up-box-outline.png"
		loadLibrary();
	}
})


sortByRead?.addEventListener('click', () => {
	active = !active	

	if (active) {
		myLibrary.sort((a, b) => {

			if (a.read < b.read) { return -1; }
			if (a.read > b.read) { return 1 }
			return 0;
		}

		sortByRead.src = "img/chevron-down-box.png"
		loadLibrary();
	} else {
		myLibrary.sort((a, b) => {
			
			if (a.read > b.read) { return -1; }
			if (a.read < b.read) { return 1 }
			return 0;
		}
		
		sortByRead.src = "img/chevron-up-box-outline.png"
		loadLibrary();
	}
})