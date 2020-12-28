// let sum = 6

// let array = [5, -2, 4, 9, 1] 
// //we can simply loop through all of the elements in the array, 
// //and then examine every other element in the array to determine if there is a sum that matches six. 
// //If the sum matches six, we push the pair of numbers into an array.

// function twoSum(sum, array){
//     //loop through array and find two elements that equal to 6. Use map to return a new array. 

// }

// twoSum()

let array = [5, -2, 4, 9, 1]
let sum = 6
function twoSum(sum, array){
let newArray = []
for(let x in array){
for(let y in array){
  if(array[x] + array[y] === sum){
    newArray.push([array[x], array[y]])
  }

}
}
return newArray

}