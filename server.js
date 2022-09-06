const express = require("express")
const fs = require("fs")
const { request } = require("http")
const server = express()

server.use(express.static("pages"))

server.use(express.urlencoded({ extended: true }))

server.post("/login", (req, res) => {
    console.log(req.body.password)
    res.send("server is responding back")
    let data = JSON.parse(fs.readFileSync("info.json", "utf-8"))
    console.log(data.password);
    if (req.body.email === data.email) {
        console.log("Rätt email");
    }
    else {
        console.log("Fel email");
    }
    if (req.body.password === data.password) {
        console.log("rätt lösen");
    } else {
        console.log("Fel lösen");
    }
})
server.listen(3000, (err) => {
    if (err) console.log(err)
    console.log("connect")
})

server.post("/signup", (req, res) => {
    let data = fs.writeFileSync("info.json", JSON.stringify(req.body))
    res.send("saved")
})