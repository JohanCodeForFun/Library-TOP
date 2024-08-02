"use strict";

import FormHandler from "./formHandler";
import sortTableByColumn from "./sort";
import Library from "./Library";

import './styles.css';

document.addEventListener("DOMContentLoaded", () => {
  const formHandler = FormHandler.create();
  formHandler.initializeEventListeners();

  const table = document.querySelector("table") as HTMLTableElement;
  if (table) {
    sortTableByColumn(table, 0, true);
  }
})

export const myLibrary = new Library();

myLibrary.fillLibrary();

myLibrary.loadLibrary();
