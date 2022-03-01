const myFilter = (array, callback) => {
    if(typeof callback !== "function")
        return;
    let result = new Array();
    for (let index = 0; index < array.length; index++) {
        if(callback(array[index])!=false)
            result.push(array[index]);
    }

    return result;
}

let arr = new Array(10, 20, 30, 40, 50, 60);
console.log(myFilter(arr, (value)=>{ return value>=40 }));