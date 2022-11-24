let list = document.querySelector(".header ul");
let btn = document.querySelector(".background button");
let img = document.querySelector(".background button img");

btn.addEventListener("click", (e) => {
  if (img.alt === "menu") {
    list.style.display = "block";
    img.alt = "close";
  } else {
    list.style.display = "none";
    img.alt = "menu";
  }
});

// clear input fields

let submit = document.querySelector("#section4 button");
let textArea = document.querySelectorAll(".clean-area");

submit.addEventListener("click", (e) => {
  textArea.forEach((field) => (field.value = ""));
});
