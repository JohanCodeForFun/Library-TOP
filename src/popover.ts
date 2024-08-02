declare let bootstrap: any;

// initialize popovers for modal, succesfully add book to list
const popoverTrigger = document.querySelector(
  '[data-bs-toggle="popover"]'
);
new bootstrap.Popover(popoverTrigger);

export const triggerPopover = () => {
  const modal = document.querySelector('#modal') as HTMLElement | null;
  const modalPopover = document.querySelector('[data-bs-toggle="popover"]') as HTMLElement | null;
  const buttonLink = document.querySelector('#submitBook') as HTMLAnchorElement | null;


  if (!modal || !modalPopover || !buttonLink) {
    console.error('Modal, popover or button element not found');
    return;
  }

  const popoverInstance = bootstrap.Popover.getInstance(modalPopover) || new bootstrap.Popover(modalPopover);

  buttonLink.style.pointerEvents = 'none';
  buttonLink.style.color = 'lightgray';

  setTimeout(() => {
    hideModal(modal);
    restButtonLink(buttonLink);
    popoverInstance.hide();
  }, 2100);
}

const hideModal = (modal: HTMLElement) => {
  modal.style.display = "none"
  modal.setAttribute('aria-hidden', 'true')
  modal.removeAttribute('aria-modal')
  modal.removeAttribute('role')
  modal.classList.remove("fade");

  const backdrop = document.querySelector('.modal-backdrop')
  
  if (!backdrop) {
    return;
  }
  backdrop.remove();
}

const restButtonLink = (buttonLink: HTMLAnchorElement) => {
  buttonLink.style.pointerEvents = '';
  buttonLink.style.color = '';
}
