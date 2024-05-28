const progress = document.querySelector("progress");
const pt = document.getElementById("pt");

console.log(progress);

// Sizes of the window
const windowHeight = window.innerHeight;
const main = document.querySelector("main");

let scrollHeight = window.scrollY;
let pageHeight = document.body.clientHeight - windowHeight;
let percentageScrolled = 0;

// Take margins into account separately.
// In this case, it is the top and bottom margins of the main-element
console.log(parseFloat(getComputedStyle(main).marginTop));
let margins = parseFloat(getComputedStyle(main).marginTop) + parseFloat(getComputedStyle(main).marginBottom);

window.onscroll = () => {
  // Update scroll related sizes:
  scrollHeight = window.scrollY;
  console.log("sh", scrollHeight);
  console.log("ch", document.body.clientHeight);

  // Does not
  pageHeight = document.body.clientHeight - windowHeight + margins;
  console.log("ph", pageHeight);
  // Calculate percentage scrolled
  percentageScrolled = Math.round((scrollHeight * 100) / pageHeight);
  // Update progress bar
  progress.value = `${percentageScrolled}`;
  pt.innerHTML = `&nbsp; ${percentageScrolled}%`;
};
