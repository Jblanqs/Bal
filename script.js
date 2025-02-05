document.addEventListener("DOMContentLoaded", function () {
  const questionCard = document.getElementById("question-card");
  const responseCard = document.getElementById("response-card");
  const yesButton = document.getElementById("yes-btn");
  const noButton = document.getElementById("no-btn");
  const loveButton = document.getElementById("love-btn");

  function showResponse() {
      questionCard.classList.add("hidden");
      responseCard.classList.remove("hidden");
  }

  yesButton.addEventListener("click", showResponse);

  // Make the "No" button move when hovered
  noButton.addEventListener("mouseover", function () {
      const maxX = window.innerWidth * 0.4;
      const maxY = window.innerHeight * 0.4;

      const randomX = Math.random() * maxX - maxX / 2;
      const randomY = Math.random() * maxY - maxY / 2;

      noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
  });

  // When the "Click here to know how much I love you!" button is clicked
  loveButton.addEventListener("click", function () {
      window.location.href = "letterForBal.html"; // Redirect to the letter page
  });
});
