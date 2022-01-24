"use strict"; // 먼문법을 준수하겠다?선언

const express = require("express");
const router = express();

const ctrl = require("./home.ctrl");
//CSS파일 적용하기위함
// const path = require('path/posix');

// router.use(express.static(path.join(__dirname,'/')));

router.get("/", ctrl.home);

router.get("/login", ctrl.login );

module.exports = router; //이 router를 외부파일에서도 사용할수 있도록 던져주는것 
//그럼 메인js server.js에서 받아와서 사용하면 된다.
