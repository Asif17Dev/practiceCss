// execute script after page load

window.onload = function digital_fn() {
  let toggle = document.querySelector("#nav .toggle-btn");
  let collapse = document.querySelector("#nav .collapse");

  toggle.addEventListener("click", function (e) {
    collapse.classList.toggle("active");
  });

  let grid = document.querySelector(
    "#site-main .recent-work-area .images-flex"
  );
  let msnry = new Masonry(grid, {
    itemSelector: ".flex-item",
    gutter: 100,
    fitwidth: true,
  });
};

var rellax = new Rellax(".rellax", {
  center: true,
});
