import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug"); // view 엔진 설정
app.set("views", __dirname + "/views"); // view 디렉토리 설정

app.use("/public", express.static(__dirname + "/public")); // static 작업: 프론트 엔드에서 구동되는 코드 디렉토리 설정

app.get("/", (req, res) => res.render("home")); // render 세팅
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log('Listening on http://localhost:3000');
// app.listen(3000, handleListen);

const server = http.createServer(app); // access to http server
const wss = new WebSocket.Server({ server }); // http + ws server on same port

wss.on("connection", (socket) => { // this socket is connection between server and client
    socket.send("Connected to Server ✅"); // sending message
    socket.on("close", () => {
        console.log("Disconnected from Server ❌");
    })
    socket.send("hello!");
});

server.listen(3000, handleListen);