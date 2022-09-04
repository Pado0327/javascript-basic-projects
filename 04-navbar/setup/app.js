// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
'use strict';
const toggleBtn = document.querySelector('.nav-toggle');
const link = document.querySelector('.links');
toggleBtn.addEventListener('click', (e) => {
  link.classList.toggle('show-links');
});
