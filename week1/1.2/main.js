// console.log("hello world");
// //console.log(a);



// //Variables - let , var and const

// var x = 1;
// x = 2;
// console.log(x);

// let y = 1;
// y = 2;
// console.log(y);

// const z = 1;
// //z = 2;
// console.log(z);




// //Data Types - Strings , Numbers and Boolean

// let firstname = "harkirat";
// let age = 18;
// let isMarried = true;

// console.log("this person name is "+firstname+" and his age is "+age+" and he is married "+isMarried);





// //if-else
// if(isMarried)
// {
//     console.log(firstname+" is married");
// }
// else
// {
//     console.log(firstname+" is not married");
// }




// //Loops
// let sum = 0;
// for(let i=0 ; i<=10000 ; i++)
// {
//     sum += i;
// }
// console.log("sum = "+sum);



// //write a program to print all the even numbers in an array
// const ages = [21,22,24,26,39,55,80];
// for(let i=0 ; i<ages.length ; i++)
// {
//     if(ages[i] % 2 == 0)
//     {
//         console.log(ages[i]+" ");
//     }
// }


// //write a program to print the biggest number in an array
// const arr = [2,1,-1,7,3,-2,0];
// let maxi = arr[0];
// for(let i=1 ; i<arr.length ; i++)
// {
//     if(arr[i] >= maxi)
//     {
//         maxi = arr[i];
//     }
// }
// console.log(maxi);



// //write a program to print all the male people's first name in a complex object
// const allUsers = [{
//         firstname : "harkirat",
//         gender : "male"
//     },
//     {
//         firstname : "sukhdeep",
//         gender : "male",
//     },
//     {
//         firstname : "priya",
//         gender : "female"
// }];

// for(let i=0 ; i<allUsers.length ; i++)
// {
//     if(allUsers[i].gender == "male")
//     {
//         console.log(allUsers[i].firstname);
//     }
// }




// //write a function that finds the sum of two numbers
// function findSum(a , b)
// {
//     return a + b;
// }
// console.log(findSum(5,7));




// let tsum = 0;
// for(let i=0 ; i<10000000000000000 ; i++)
// {
//     tsum += i;
// }
// console.log(tsum);






//callback function

function getSum(a , b)
{
    return a + b;
}

function displaySum(data)
{
    console.log("sum result is : "+data);
}

//we are only allowed to call one function after this.
displaySum(getSum(5,70));





function calculateArithmetic(a, b , arithmeticFunction)
{
    return arithmeticFunction(a,b);
}

function sum(a , b)
{
    return a + b;
}
function minus(a , b)
{
    return a - b;
}

const value = calculateArithmetic(2 , 3 , minus);
console.log(value);






//setTimeout
function greet()
{
    console.log("hello world");
}
setTimeout(greet , 3*1000);//after 3seconds(3000 millisec) greet function will be called.


//setInterval
setInterval(greet , 2000);//calls greet after every 2 seconds(at 2 sec interval).