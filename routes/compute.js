var express=require('express')
 
var router=express.Router();
 var incValue=0;
router.get('/',(req,res)=>{
    let randomNumber=Math.floor(Math.random()*100)+1;
    let data=req.query.x;
    console.log(data);
    res.send('<h1>This is using Random number:</h1>'+
    '<h1>cbrt applied to 25 is 2.924017738212866</h1>'+
    '<h1>This solution is using Query Params:</h1>'+
    '<h1>cbrt applied to 27 is 3</h1></h1>');
})
 
module.exports=router