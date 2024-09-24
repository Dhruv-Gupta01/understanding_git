//creating an http server
//express
//node default library => no 

const express = require("express");

const app = express();

app.use(express.json());

// function sum(n)
// {
//     let ans = 0;
//     for(let i=0 ; i<=n ; i++)
//     {
//         ans += i;
//     }
//     return ans;
// }

// app.get('/',function(req,res){
//     const n = req.query.n;
//     const x = sum(n);
//     res.send("hi your answer is " + x);
// })

var users = [{
    firstName : "john",
    kidneys : [{
        healthy : false
    }]
}]

app.get("/",function(req,res){
    //write a logic for getting no of kidneys and no of healthy kidneys of john.
    const n = users[0].kidneys.length;
    const x = users[0].kidneys.filter(kidney => kidney.healthy).length;
    //res.send("no of kidneys = " + n + "no of healthy kidneys = " + x);
    res.json({n,x});
})


app.post("/",function(req,res){
    //console.log(req.body);
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })

    res.json({
        msg:"Done"
    })
})

app.put("/",function(req,res){
    for(let i=0 ; i<users[0].kidneys.length ; i++)
    {
        users[0].kidneys[i].healthy = true; 
    }
    res.json({});
})

app.delete("/",function(req,res){
    //remove all the unhealthy kidneys
    const newKidneys = [];
    for(let i=0 ; i<users[0].kidneys.length ; i++)
    {
        if(users[0].kidneys[i].healthy)
        {
            newKidneys.push({
                healthy : true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg:"done"});
})

app.listen(3001);
