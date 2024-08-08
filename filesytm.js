//const { error } = require('console')
const fspromises = require('fs').promises;
const { error } = require('console');
const { readFile, appendFile } = require('fs');
const path = require('path') 

const Mypromises=async(err)=>{
    await appendFile(path.join(__dirname,'files','starter.txt'),'\n hie mrH what can we do for you today',(err ,data)=>{
        if(err) throw new error;
    
     })
 

    await readFile(path.join(__dirname,'files','starter.txt'),'utf8',(err ,data)=>{
       if(err) throw new error;
        console.log(data);
    })




}
Mypromises();

