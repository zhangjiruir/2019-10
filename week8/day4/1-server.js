let express = require('express');
// express 是nodeJS的一个库  相当于 JS 的 JQ
let app = express();
app.listen(8000,function(){
    console.log('服务起于 8000端口')
})

// express 使用中间件
app.use((req,res,next)=>{
    req.qqq = 123456,
    next()
})
app.use((req,res,next)=>{
    console.log(req.qqq)
    res.header('ha','haha')
    next()
})
app.use(express.static('./static'));//express.static是express提供的一个访问静态页面的方法
app.get('/list',function(req,res){
    // 该回调函数  只有当前端请求的是/list这个路径 并且是get方法时 才会执行
    console.log(req.query)
    res.send({
        qqq : req.qqq,
        data: req.query
    })
})
app.post('/add',function(req,res){
    let str = '';
    req.on('data',function(chunk){
        str += chunk;
    })
    req.on('end',function(){
        console.log(str)

        res.send({
            code : 0,
            data : 'success'
        })
    })
})