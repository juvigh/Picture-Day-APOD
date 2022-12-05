const dateInput = document.querySelector("#date");
const dateLimit = new Date();
let day = String(dateLimit.getDate()).padStart(2, '0');
let month = String(dateLimit.getMonth() + 1).padStart(2, '0');
let year = dateLimit.getFullYear();
let dateMax = year + "-" + month + "-" + day;
console.log(dateMax)
dateInput.max = dateMax;
