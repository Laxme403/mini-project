function changeAbdominals(muscle) {
  document.getElementById("mySvg").addEventListener("load", function () {
    var svgObject = this.contentDocument;
    var gElement = svgObject.getElementById(muscle);

    gElement.addEventListener("click", function () {
      window.location.href = `https://localhost:5500/${muscle}.html`;
    });

    gElement.addEventListener("mouseover", function () {
      var pathElements = gElement.querySelectorAll("path");

      pathElements.forEach(function (pathElement) {
        pathElement.addEventListener("mouseover", function () {
          pathElement.setAttribute("fill", "#646a8e");
        });
      });
    });
    gElement.addEventListener("mouseout", function () {
      var pathElements = gElement.querySelectorAll("path");

      pathElements.forEach(function (pathElement) {
        pathElement.setAttribute("fill", "#FFFFFF");
      });
    });
  });
}

const muscles = [
  "abdominals",
  "obliques",
  "forearms",
  "biceps",
  "shoulders",
  "traps",
  "chest",
  "quads",
  "calves",
];

muscles.forEach(changeAbdominals);
