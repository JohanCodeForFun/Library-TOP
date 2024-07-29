"use strict";
import FormHandler from "./formHandler";
import Library from "./Library";
document.addEventListener("DOMContentLoaded", () => {
    const formHandler = FormHandler.create();
    formHandler.initializeEventListeners();
});
// initialize popovers for modal, succesfully add book to list
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));
console.log(popoverList);
export const myLibrary = new Library();
myLibrary.fillLibrary();
myLibrary.loadLibrary();
