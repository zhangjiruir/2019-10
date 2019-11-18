let express = require('express');
let app = express();
app.listen(8080,function(){
    console.log('你的服务起于 8080')
})
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','http://127.0.0.1:5500')
    res.header('Access-Control-Allow-Credentials',true)
    res.header('Access-Control-Allow-Headers',"Content-Type,X-Agent,X-Token,X-Legacy-Token,X-Legacy-Uid,X-Legacy-Device-Id,X-Legacy-New-Token,X-Request-Id")
    req.method == 'OPTIONS' ? res.send('OK') : next();
})
app.post('/add/userinfo',(req,res)=>{
    res.send({
        code:0,
        data:'success'
    })
})
