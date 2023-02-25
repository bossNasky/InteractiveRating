import "./../css/style.css";

const initRatingSystem = function () {
  const summaryElement = document.querySelector(".summary");
  const summaryRate = document.querySelector("#rate");
  const supportRatingElement = document.querySelector(".support-rating");
  const ratingForm = document.querySelector(".rating");
  const ratings = document.querySelectorAll("input");

  const state = {
    supportRating: 0,
  };

  const changeUI = function () {
    summaryElement.removeAttribute("hidden");
    supportRatingElement.setAttribute("hidden", true);
    summaryRate.textContent = state["supportRating"];
  };

  ratings?.forEach((rating) => {
    rating.addEventListener("change", (ev) => {
      const rateInput = ev.currentTarget;
      const rate = rateInput?.value;

      state["supportRating"] = Number(rate);
    });
  });

  ratingForm?.addEventListener("submit", (ev) => {
    ev.preventDefault();

    if (!state["supportRating"]) return;

    changeUI();
  });
};

initRatingSystem();
