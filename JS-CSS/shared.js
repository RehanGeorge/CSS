const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButton = document.querySelectorAll(".plan button");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

const modalNo = document.querySelector(".modal button");

// console.log(backdrop);

// Show modal and backdrop
selectPlanButton.forEach((button) => {
  button.addEventListener("click", () => {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
});

function closeModal() {
  modal.style.display = "none";
  backdrop.style.display = "none";
}

modalNo.addEventListener("click", closeModal);
backdrop.addEventListener("click", () => {
  mobileNav.style.display = "none";
  closeModal();
});

toggleButton.addEventListener("click", () => {
  mobileNav.style.display = "block";
  backdrop.style.display = "block";
});
