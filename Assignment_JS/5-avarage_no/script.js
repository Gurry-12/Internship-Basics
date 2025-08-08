const array_of_num = [1,2,3,4,5,6,7,8,9]

let sum = 0

for (let i = 0 ; i < array_of_num.length ; i++ ){
    sum += array_of_num[i]
}

let avarage_num = sum / array_of_num.length 

alert("The avarage of the static num array is : " + avarage_num)