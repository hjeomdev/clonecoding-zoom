import express from "express";

const app = express();

// view 세팅
app.set("view engine", "pug");
app.set("views", __dirname + "/views");

// static 작업
app.use("/public", express.static(__dirname + "/public"));

// render 세팅
app.get("/", (req, res) => res.render("home"));

const handleListen = () => console.log('Listening on http://localhost:3000');
app.listen(3000);