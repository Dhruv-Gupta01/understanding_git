//map , filter , arrow functions

function sum(a , b)
{
    return a + b;
}

const ans = sum(3,7);
console.log(ans);




const sum2 = (a , b) => {
    return a + b;
}

const ans2 = sum(3,7);
console.log(ans2);



//Given an array , give me back a new array in which every value is multiplied by 2.
//input : [1,2,3,4,5].
//output : [2,4,6,8,10].
const input = [1,2,3,4,5];
const output = [];

for(let i=0 ; i<input.length ; i++)
{
    output.push(input[i] * 2);
}
console.log(output);

//other solution
// function transform(el)
// {
//     return el*3;
// }

// const ans3 = input.map(transform);
// console.log(ans3);



const ans3 = input.map(function (el)
{
    return el*3;
});
console.log(ans3);





//FILTERING

//given an input array , return all the even values from the array.
function filterLogic(el)
{
    return el % 2 == 0;
}
const ans4 = input.filter(filterLogic);
console.log(ans4);