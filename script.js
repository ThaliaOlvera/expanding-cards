console.log("Galia");

const openCard = document.querySelectorAll(".openImg");
const hideTitle = document.querySelector(".title");

openCard.forEach((openCard) => {
  openCard.addEventListener("click", () => {
    removeActiveClasses();
    openCard.classList.add("active");
  });
});

function removeActiveClasses() {
  openCard.forEach((openCard) => {
    openCard.classList.remove("active");
    hideTitle.classList.add("inactive");
  });
}
