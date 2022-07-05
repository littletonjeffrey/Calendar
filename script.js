var currentDayEl= document.getElementByID('currentDay');
currentDayEl=moment().format("DD/MM/YYYY");

let currentDay = document.createElement("p");
document.body.header.p.appendChild(currentDay);
