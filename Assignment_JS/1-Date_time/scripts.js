const display_1 = document.getElementById("display")
const date1= document.getElementById("date")
const day1= document.getElementById("day")
const year1= document.getElementById("year")
display_1.innerHTML = new Date();
date1.innerHTML = "Date <br>"
day1.innerHTML = "day <br>"
year1.innerHTML = "year <br>"
function Change_date() {
    let d = new Date();
    display_1.innerHTML = d;
    date1.innerHTML = "Date <br>" + d.getDate();
    day1.innerHTML = "day <br>" + d.getDay();
    year1.innerHTML = "year <br>" + d.getFullYear();
}