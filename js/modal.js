function openModal(open, modal) {
  document.querySelector(`.${open}`).addEventListener("click", () => {
    document.querySelector(`.${modal}`).classList.add("is-active");
    document.querySelector("body").classList.add("screen-overflow");
    document.querySelector(".modal__body").classList.add("modal-anim");
  })

  function closeModal() {
    document.querySelector(`.${modal}`).classList.remove("is-active");
    document.querySelector("body").classList.remove("screen-overflow");
  }

  document.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("modal__button-close") ||
      e.target.classList.contains("modal__overlay")
    ) {
      closeModal();
    }
  })
}

const pageWith = window.innerWidth;
if (pageWith <= 576) {
  const modalBlur = document.querySelectorAll(".modal__overlay");
  modalBlur.forEach((item) => {
    item.classList.remove("overlay-blur");
  })
}

openModal("modal-btn-1", "modal-1");
openModal("modal-btn-2", "modal-2");
openModal("modal-btn-3", "modal-1");
