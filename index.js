

const express=require('express');
const app=express();
const path=require('path');

const port=8000;

app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/views/index.html'))
})

// app.get('/about',(req,res)=>{
//     res.sendFile(path.join(__dirname,'/public/views/about.html'))
// })

app.listen(port,(err)=>{
        if(err){
            console.log(`Error in running the server:${err}`);
        }
        console.log(`Server is running on port:${port}`);
    }
)
