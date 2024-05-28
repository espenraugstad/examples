const windowHeight = window.innerHeight;
const main = document.querySelector("main");
const scrollable = document.getElementById("scrollable");

// Initialize variable to contain scrolled position and size of content.
let scrollHeight = 0;
let pageHeight = 0;

// Take margins into account separately.
// In this case, it is the top and bottom margins of the main-element
let margins =
  parseFloat(getComputedStyle(main).marginTop.slice(0,-2)) +
  parseFloat(getComputedStyle(main).marginBottom.slice(0,-2));

// Difference between scroll position and page height
let diff = 0;
// Smallest difference in scrolled height and page height to transition from "more content to view" to "end of content"
let minimalDifference = -1; // Double check this value for use.

window.onscroll = () => {
  // Update scroll related sizes:
  scrollHeight = window.scrollY;
  pageHeight = document.body.clientHeight - windowHeight + margins;
  diff = scrollHeight - pageHeight;
  
  // Determine whether or not to hide scrollable indicator.
  /* displayScrollable(diff); */

  // Update content of scrollable depending on diff
  updateScrollable(diff);
};

// Function that updates the text in the scrollable div.
function updateScrollable(diff){
    if(diff < minimalDifference){
        scrollable.innerText = "Scroll to read more...";
    } else {
        scrollable.innerText = "End of page.";
    }
}

// Function to determine whether or not the scrollable div is visible
function displayScrollable(diff) {
  if (diff >= minimalDifference && !scrollable.classList.contains("hidden")) {
    scrollable.classList.add("hidden");
  } else {
    if (scrollable.classList.contains("hidden")) {
      scrollable.classList.remove("hidden");
    }
  }
}
