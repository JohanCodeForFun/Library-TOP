import myLibrary from "./app";

const FormHandler = (() => {
  function create() {
    const submitButton = document.querySelector("#submitBook") as HTMLButtonElement;

    function getFormValues() {
      const title = (document.querySelector("#inputTitle") as HTMLInputElement).value;
      const author = (document.querySelector("#inputAuthor") as HTMLInputElement).value;
      const pages = parseInt((document.querySelector("#inputPages") as HTMLInputElement).value, 10);
      const isRead = (document.querySelector("#inputIsRead") as HTMLInputElement).checked;

      return { title, author, pages, isRead }
    }

    function handleFormSubmission(event: Event) {
      event.preventDefault();
      const { title, author, pages, isRead } = getFormValues();

      myLibrary.addBook(title, author, pages, isRead);
    }

    function initializeEventListeners() {
      submitButton?.addEventListener("click", handleFormSubmission);
    }

    return {
      initializeEventListeners
    }
  }

  return {
    create,
  };
})();

export default FormHandler;