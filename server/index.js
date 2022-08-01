require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose")


app.get("/", (req, res) => {
    res.send("Hello Wolrd");
})

app.listen(process.env.PORT, () => {
    console.log(`이 서버는 ${process.env.PORT} 포트에서 실행중입니다.`);
})

mongoose.connect("mongodb+srv://kimbro97:SbCyF5vtSqfIdIPj@mongodbtutorial.tpt2b.mongodb.net/?retryWrites=true&w=majority")


