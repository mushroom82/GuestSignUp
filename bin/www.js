"use strict";

const app = require('../server'); //server.js의 app가 상위폴더에 있기때문에 상위폴더로 이동해서 app을 받아야 한다.
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log("서버가동");
})

