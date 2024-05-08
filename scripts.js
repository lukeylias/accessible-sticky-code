// document.addEventListener("DOMContentLoaded", function () {
//   var container = document.querySelector(".container");

//   // Initially hide the container
//   container.classList.add("hidden");

//   window.addEventListener("scroll", function () {
//     if (window.scrollY > 240) {
//       container.classList.remove("hidden");
//     } else {
//       container.classList.add("hidden");
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  var containers = document.querySelectorAll(".container");

  containers.forEach(function (container) {
    container.classList.add("hidden");
  });

  window.addEventListener("scroll", function () {
    containers.forEach(function (container) {
      if (window.scrollY > 240) {
        container.classList.remove("hidden");
      } else {
        container.classList.add("hidden");
      }
    });
  });
});
