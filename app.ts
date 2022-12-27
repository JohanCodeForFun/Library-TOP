"use strict";

let myLibrary: Book[] = [];
declare let bootstrap: any;

const inputTitle = <HTMLInputElement>document.querySelector("#inputTitle");
const inputAuthor = <HTMLInputElement>document.querySelector("#inputAuthor");
const inputPages = <HTMLInputElement>document.querySelector("#inputPages");
const bookParagraph = <HTMLInputElement>(
  document.querySelector("#bookParagraph")
);
const submitButton = <HTMLInputElement>document.querySelector("#submitBook");

const sortById = document.querySelector<HTMLElement>(
  "#sort-by-id"
) as HTMLImageElement;
const sortByTitle = document.querySelector<HTMLElement>(
  "#sort-by-title"
) as HTMLImageElement;
const sortByAuthor = document.querySelector<HTMLElement>(
  "#sort-by-author"
) as HTMLImageElement;
const sortByPages = document.querySelector<HTMLElement>(
  "#sort-by-pages"
) as HTMLImageElement;
const sortByRead = document.querySelector<HTMLElement>(
  "#sort-by-read"
) as HTMLImageElement;

// const image = document.getElementById('photo') as HTMLImageElement | null;

// if (image !== null) {
//   image.src = 'photo.jpg';
// }

const booksBody = document.querySelector("#booksBody");

// initialize popovers for modal, succesfully add book to list
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

const loadLibrary = () => {
  const tabelData = myLibrary
    .map((value) => {
      return `<tr>
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
</tr>`;
    })
    .join("");

  booksBody.innerHTML = tabelData;
};


function Book(
  this: any,
  title: string,
  author: string,
  pages: number,
  id: number,
  read: boolean
) {
  (this.title = title), (this.author = author), (this.pages = pages);
  (this.id = id), (this.read = read);
}

// {title: 'Zero To One', author: 'Peter Thiel', pages: '210', id: '0', read: true},
// {title: 'Hackers & Painters', author: 'Paul Graham', pages: '258', id: '1', read: true},
// {title: 'Computer Science Distilled', author: 'Wladston Ferreira Filho', pages: '168', id: '2', read: true},

const fillLibrary = () => {
	const book1 = new Book("Zero To One", "Peter Thiel", 210, 0, true);
	const book2 = new Book("Hackers & Painters", "Paul Graham", 258, 1, true);
	const book3 = new Book("Computer Science Distilled", "Wladston Ferreira Filho", 168, 2, false);
	myLibrary.push(book1, book2, book3)

  // myLibrary.push(new Book("Zero To One", "Peter Thiel", 210, 0, true));
  // myLibrary.push(new Book("Hackers & Painters", "Paul Graham", 258, 1, true));
  // myLibrary.push(
  //   new Book("Computer Science Distilled", "Wladston Ferreira Filho", 168, 2, false));
};
fillLibrary();
loadLibrary();

const addBookToLibrary = () => {
  // use findLastId() to find id from myLibrary array
  let lastId = findLastID() + 1;

  myLibrary.push(
    new Book(
      `${inputTitle.value}`,
      `${inputAuthor.value}`,
      Number(`${inputPages.value}`),
      Number(`${lastId}`),
      true
    )
  );
  loadLibrary();
};

const findLastID = () => {
  let lastId = myLibrary.length - 1;
  return lastId;
};
findLastID();

// function to listen for input and update live in console.
submitButton?.addEventListener("click", addBookToLibrary);





// remove book function
let btns = document.querySelectorAll("#removeBtn");



btns.forEach((button) => {
  button.addEventListener("click", (e) => {
		console.log(e.target.value)
		// myLibrary.splice(e.target.value, 0);
		let library2 = myLibrary.filter((delete) => delete.value > 5));
		loadLibrary();
});


// const result = words.filter(word => word.length > 6);






// const removeBook = () => {
//   console.log(this.value);
// };
// removeBook();




// sort functions
let active = false;

sortById?.addEventListener("click", () => {
  active = !active;

  if (active) {
    sortById.classList.add("active");
    myLibrary.sort((a, b) => b.id - a.id);
    sortById.style.transform = "rotate(180deg)";
    loadLibrary();
  } else {
    sortById.classList.remove("active");
    myLibrary.sort((a, b) => a.id - b.id);
    sortById.style.transform = "rotate(0deg)";
    loadLibrary();
  }
});

sortByTitle?.addEventListener("click", () => {
  active = !active;

  if (active) {
    myLibrary.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });

    sortByTitle.src = "img/chevron-down-box.png";
    sortByTitle.style.transform = "rotate(0deg)";
    loadLibrary();
  } else {
    myLibrary.sort((a, b) => {
      if (a.title > b.title) {
        return -1;
      }
      if (a.title < b.title) {
        return 1;
      }
      return 0;
    });

    sortByTitle.src = "img/chevron-down-box.png";
    sortByTitle.style.transform = "rotate(180deg)";
    loadLibrary();
  }
});

sortByAuthor?.addEventListener("click", () => {
  active = !active;

  if (active) {
    myLibrary.sort((a, b) => {
      if (a.author < b.author) {
        return -1;
      }
      if (a.author > b.author) {
        return 1;
      }
      return 0;
    });

    sortByAuthor.src = "img/chevron-down-box.png";
    sortByAuthor.style.transform = "rotate(0deg)";
    loadLibrary();
  } else {
    myLibrary.sort((a, b) => {
      if (a.author > b.author) {
        return -1;
      }
      if (a.author < b.author) {
        return 1;
      }
      return 0;
    });

    sortByAuthor.src = "img/chevron-down-box.png";
    sortByAuthor.style.transform = "rotate(180deg)";
    loadLibrary();
  }
});

sortByPages?.addEventListener("click", () => {
  active = !active;

  if (active) {
    myLibrary.sort((a, b) => {
      if (a.pages < b.pages) {
        return -1;
      }
      if (a.pages > b.pages) {
        return 1;
      }
      return 0;
    });

    sortByPages.src = "img/chevron-down-box.png";
    sortByPages.style.transform = "rotate(0deg)";
    loadLibrary();
  } else {
    myLibrary.sort((a, b) => {
      if (a.pages > b.pages) {
        return -1;
      }
      if (a.pages < b.pages) {
        return 1;
      }
      return 0;
    });

    sortByPages.src = "img/chevron-down-box.png";
    sortByPages.style.transform = "rotate(180deg)";
    loadLibrary();
  }
});

sortByRead?.addEventListener("click", () => {
  active = !active;

  if (active) {
    myLibrary.sort((a, b) => {
      if (a.read < b.read) {
        return -1;
      }
      if (a.read > b.read) {
        return 1;
      }
      return 0;
    });

    sortByRead.src = "img/chevron-down-box.png";
    sortByRead.style.transform = "rotate(0deg)";
    loadLibrary();
  } else {
    myLibrary.sort((a, b) => {
      if (a.read > b.read) {
        return -1;
      }
      if (a.read < b.read) {
        return 1;
      }
      return 0;
    });

    sortByRead.src = "img/chevron-down-box.png";
    sortByRead.style.transform = "rotate(180deg)";
    loadLibrary();
  }
});

// removeBtn.addEventListener('click', () => console.log('click removeBtn'))
