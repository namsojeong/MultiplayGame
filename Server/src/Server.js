import http from 'http'; // ts가 알아서 require 변환해줌
import Express from 'express';

//JavaScript Object Notation => JSON
const data = {
    name: "밴드",
    users: [
        { id: 1, name: "하현상" },
        { id: 2, name: "김영소" },
        { id: 3, name: "노정훈" },
        { id: 4, name: "홍진호" },
        { id: 5, name: "신예찬" },
        { id: 6, name: "최상엽" },
        { id: 7, name: "조원상" },
        { id: 8, name: "신광일" },
        { id: 9, name: "장태웅" },
        { id: 10, name: "류지호" },
        { id: 11, name: "곽지현" },
        { id: 12, name: "유명종" },
        { id: 13, name: "유다빈" },
        { id: 14, name: "이준형" },
        { id: 15, name: "강신우" },
    ]
};

const app = new Express();

app.get("/", (req, res)=>{
    res.json(data);
});

app.get("/image", (req, res)=>{
    // 아직 미구현
});

const server = http.createServer(app);

server.listen(50000, () => { 
    console.log("서버가 50000번 포트에서 실행 중입니다.");
});