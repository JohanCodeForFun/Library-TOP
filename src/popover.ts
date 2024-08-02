declare let bootstrap: any;

// initialize popovers for modal, succesfully add book to list
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

export const triggerPopover = () => {
  const modal = document.querySelector('#modal') as HTMLElement | null;
  const modalPopover = document.querySelector('[data-bs-toggle="popover"]') as HTMLElement | null;

  const popoverInstance = bootstrap.Popover.getInstance(modalPopover) || new bootstrap.Popover(modalPopover);

  setTimeout(() => {
    if (modal) {
      modal.style.display = "none"
      modal.setAttribute('aria-hiden', 'true')
      modal.removeAttribute('aria-modal')
      modal.removeAttribute('role')
      modal.classList.remove("fade");
    }

    popoverInstance.hide();
    closeModal();
  }, 2100);
}

const closeModal = () => {
  const backdrop = document.querySelector('.modal-backdrop')

  if (backdrop) {
    backdrop.remove();
  }
}
