const myForEachFunction = (array, callback) => {
    if(typeof callback !== "function")
        return;
    for (let index = 0; index < array.length; index++) {
        callback(array[index]);
    }
}

let arr = new Array(3, 4, 5, 6, 7);

myForEachFunction(arr, (value)=>{
    console.log(value);
})