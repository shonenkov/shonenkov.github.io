(function () {
  // The whole project/notebook card is a single <a>. When a user drags to
  // select the description text, the mouseup still fires a click on the link
  // and navigates away. Suppress that navigation if text was just selected.
  var SELECTABLE = ".project-card__title, .project-card__description";

  function hasTextSelection() {
    var sel = window.getSelection();
    return sel && sel.toString().trim().length > 0;
  }

  function init() {
    document.addEventListener(
      "click",
      function (event) {
        var card = event.target.closest(".project-card");
        if (!card) return;

        // Only block navigation when the click originated from selectable text
        // and there is an active, non-collapsed selection.
        if (event.target.closest(SELECTABLE) && hasTextSelection()) {
          event.preventDefault();
          event.stopPropagation();
        }
      },
      true
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
