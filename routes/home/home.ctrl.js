"use strict";

const { keyword } = require("color-convert");

const home = (req,res) => {
    res.render("home/index");
};

const login = (req,res) => {
    res.render("home/login");
}

// routes/home/index.js에 내보내기위해 exports  해준다.
module.exports = {
    home, login,
};
