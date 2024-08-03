import { myLibrary } from "./app";
declare let bootstrap: any;

const FormHandler = (() => {
  function create() {
    const submitButton = document.querySelector("#submitBook") as HTMLAnchorElement | null;

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

      if (!submitButton) {
        return;
      }
      
      if (title !== "" && author !== "" && !Number.isNaN(pages)) {
        const existingPopover = bootstrap.Popover.getInstance(submitButton);
        if (existingPopover) {
          existingPopover.dispose();
        }

        submitButton.removeAttribute("data-bs-custom-class");
        submitButton.setAttribute("data-bs-content", "Book successfully added!");

        const popover = new bootstrap.Popover(submitButton);
        popover.show();

        myLibrary.addBook(title, author, pages, isRead);
      } else {
        const existingPopover = bootstrap.Popover.getInstance(submitButton);
        if (existingPopover) {
          existingPopover.dispose();
        }

        submitButton.setAttribute("data-bs-content", "Must fill in all fields.");
        submitButton.setAttribute("data-bs-custom-class", "custom-popover");
        const popover = new bootstrap.Popover(submitButton);
        popover.show();

        setTimeout(() => {
          popover.hide();
        }, 2100);
      }
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