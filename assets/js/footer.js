/* Adjusting Year from Footer */
const footer_year = document.getElementById("footer-year");
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

footer_year.innerText = currentYear;