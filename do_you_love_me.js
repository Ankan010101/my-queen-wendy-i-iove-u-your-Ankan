const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

const moveNoButton = () => {
  const margin = 20; // Safe area from screen edges
  const buttonRect = noBtn.getBoundingClientRect();
  
  // Calculate max bounds, ensuring they never go below the margin
  const maxX = Math.max(margin, window.innerWidth - buttonRect.width - margin);
  const maxY = Math.max(margin, window.innerHeight - buttonRect.height - margin);

  // Generate random coordinates within the safe zone
  const newX = Math.floor(Math.random() * (maxX - margin)) + margin;
  const newY = Math.floor(Math.random() * (maxY - margin)) + margin;

  noBtn.style.position = "fixed";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
};

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // Prevent accidental click on mobile
  moveNoButton();
});

// yes button functionality

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "block";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";
    gifResult.play();
  }, 3000);
});
