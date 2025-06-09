document.addEventListener("DOMContentLoaded", () => {
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");
  const cardWrapper = document.querySelector(".card-wrapper");
  const cardItem = document.querySelector(".card-item");

  if (!cardItem) return;

  const cardWidth = cardItem.offsetWidth;
  const gap = 20;
  const scrollAmount = (cardWidth + gap) * 3;

  leftBtn.addEventListener("click", () => {
    cardWrapper.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  rightBtn.addEventListener("click", () => {
    cardWrapper.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });
});
