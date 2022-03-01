const myReduceFunction = (array, callback) => {
    if(typeof callback !== "function" || array.length<=1)
        return;
    let total = array[0];
    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        total = callback(total, element);
    }
    return total;
}

let arr = new Array(50, 25, 175);
console.log(myReduceFunction(arr, Math.max));