const express = require('express')

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
     res.status(200).json({ 
         name:'Anamika',
         email:'anamika@gmail.com',
         phone:"989898998"
     })
})

app.post('/user',(req,res)=>{
    console.log(req.body,'req body');
//   function 
    res.status(200).json({
        message:'Data get'
    })
})

app.listen(3000,()=>{
    console.log('server is running ');
})