const ourBtn = document.getElementById("clickHere");
const ourModal = document.getElementById("ourModal");
const ourIcon = document.getElementById("crossBtn");

ourBtn.addEventListener("click", () => {
  //   console.log("clicked");
  ourModal.style.display = "block";
});

ourIcon.addEventListener("click", () => {
  ourModal.style.display = "none";
});
