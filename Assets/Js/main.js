const aboutBox = document.querySelector(".section_about_box");
const more = document.querySelector(".section_about_more");

more.addEventListener("click", () => {
  aboutBox.style.height = "100%";
  more.style.display = "none";
});
