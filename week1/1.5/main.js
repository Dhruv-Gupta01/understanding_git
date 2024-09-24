function findSum(n){
    let ans = 0;
    for(let i=0 ; i<n ; i++){
        ans += i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}   

//asynchronous function
setTimeout(findSumTill100 , 10000);


console.log("hello world");





//common async functions : setTimeout , fs.readFile , Fetch.




//fileSystem library 
const fs = require("fs");

fs.readFile("/Volumes/DhruvMac/100xDevs/week1/1.5/a.txt" , "utf-8" , function(err,data){
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log(data);
}) 

console.log("after fs");