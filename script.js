let list = document.querySelector(".header ul");
let btn = document.querySelector(".header button");
let img = document.querySelector(".header button img");

btn.addEventListener("click", (e) => {
  if (img.alt === "menu") {
    list.style.display = "block";
    img.alt = "close";
  } else {
    list.style.display = "none";
    img.alt = "menu";
  }
});
