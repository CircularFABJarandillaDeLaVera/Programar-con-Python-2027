(function () {
  var answerDemo = document.querySelector("[data-answer-demo]");

  if (answerDemo) {
    answerDemo.addEventListener("click", function (event) {
      var answer = event.target.closest(".cf-answer");

      if (!answer || answer.disabled) {
        return;
      }

      answerDemo.querySelectorAll(".cf-answer").forEach(function (item) {
        if (!item.classList.contains("is-correct") && !item.classList.contains("is-incorrect")) {
          item.classList.remove("is-selected");
          item.setAttribute("aria-pressed", "false");
          item.querySelector(".cf-answer__status").textContent = "Sin seleccionar";
        }
      });

      if (!answer.classList.contains("is-correct") && !answer.classList.contains("is-incorrect")) {
        answer.classList.add("is-selected");
        answer.setAttribute("aria-pressed", "true");
        answer.querySelector(".cf-answer__status").textContent = "Seleccionada";
      }
    });
  }
})();


