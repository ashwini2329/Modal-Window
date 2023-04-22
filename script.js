"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

/**
 * Open Modal function
 */
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

/**
 * closeModal Function
 */
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

/**
 * to close the modal using close button
 */
btnCloseModal.addEventListener("click", closeModal);

/**
 * to close the modal clicking outside the modal
 */
overlay.addEventListener("click", closeModal);

/**
 * to close thee modal using Esc Key
 */
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
