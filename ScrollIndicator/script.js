const progress = document.querySelector("progress");

console.log(progress);

// Sizes of the window
const windowHeight = window.innerHeight;
let scrollHeight = window.scrollY;
let pageHeight = document.body.clientHeight - windowHeight;
let percentageScrolled = 0;
let rect = null;
window.onscroll = ()=>{

    rect = document.body.getBoundingClientRect();
    console.log(windowHeight - rect.bottom);

    // Update scroll related sizes:
    scrollHeight = window.scrollY;
    pageHeight = document.body.clientHeight - windowHeight;
    // Calculate percentage scrolled
    percentageScrolled = Math.round(scrollHeight * 100 / pageHeight);
    // Update progress bar
    progress.value = `${percentageScrolled}`;   
}
