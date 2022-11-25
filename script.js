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

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
