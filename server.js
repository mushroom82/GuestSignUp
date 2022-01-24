//모듈
const express = require('express');
const app = express();

const PORT = 3000;

//라우팅
const home = require("./routes/home");

// //CSS파일 적용하기위함
const path = require('path/posix');
app.use(express.static(path.join(__dirname,'/')));

// 앱 세팅
app.set("views","./views");
app.set("view engine","ejs");



//use -> 미들웨어를 등록해주는 메서드 .
app.use('/', home); 

module.exports = app; //app을 내보내주면 bin의 wwww.js에서 app을 받아서 사용할수 있다.


// app.get('/',function(req,res){
//      res.send("여기는 루트입니다.");

// })
// app.get('/login',function(req,res){
//     res.send("여기는 로그인입니다.");

// })


/*
 const http = require('http');
const express = require('express');
const fs = require('fs');
const app = express();
const server = http.createServer(app);
const PORT = 8080;
const WEBPATH = ".webpage";





//DB연결 테스트
const {Client} = require('pg');
const client = new Client({
    host: '172.17.101.57', 
    user: 'postgres',
    password: 'SeAH1234', 
    database: 'postgres', 
    port: '5431'
});

client.connect();
const sql = 'select * from public.user'

// client.query('Select Now()',(err,res) =>{
//     console.log(err,res)
//     client.end()
// });
 
client.query(sql,(err,res) => {
    if(err){
        console.log(err.stack)
    }else{
        console.log(res.rows)
    }
})


//로컬호스트 접근 테스트
const path = require('path/posix');
// const path = require('path');
app.use(express.static(path.join(__dirname,'/')));

app.listen(8080,function(){
    console.log('8080')

    // console.log(path.join(__dirname ,'../GuestSignUp','visit.html'))
    console.log(path.join(__dirname,'/')) 
});

// app.get('/',req)

app.get('/',function(요청,응답){
    
    // 응답.sendFile(path.resolve('../','../','visit.html') )
     응답.sendFile(__dirname + '/visit.html')
});


 */