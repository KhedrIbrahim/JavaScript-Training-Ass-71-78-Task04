let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let onlyNum = numsAndStrings.filter(function (ele){
    return typeof ele === "number";
}).map(function(ele, ind, arr){
    return -ele;
})

console.log(onlyNum);
// [-1, -10, 10, 20, -5, -3]