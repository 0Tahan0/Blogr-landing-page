let barsBtn = document.querySelector("#toggler-bars-btn");
barsBtn.addEventListener("click", () => {
  barsBtn.querySelector(".icon").classList.toggle("fa-bars");
  barsBtn.querySelector(".icon").classList.toggle("fa-x");
});
