
const array_of_names = ["Ram", "Shyam", "Rohan", "Mohan", "Mahesh"]

let names = document.getElementById("display")
names.innerHTML = array_of_names

let random_no = Math.floor(Math.random() * (array_of_names.length))
console.log(random_no)

alert("The name is : " + array_of_names[random_no])