//write your code here

function averageInArray(array){
    let sum= 0;
    for (let i = 0; i < array.length ; i++){
        sum += array[i];
        
    } 
    sum = sum/array.length;
    return sum
}
console.log(averageInArray([2,2,5,10]))