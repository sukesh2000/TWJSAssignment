const myMapFunction = (array, callback) => {
    if(typeof callback !== "function")
        return;
    let result = new Array();
    for (let index = 0; index < array.length; index++) {
        result.push(callback(array[index]));
    }

    return result;
}

let arr = new Array(1, 4, 9, 16);
console.log(myMapFunction(arr, Math.sqrt));