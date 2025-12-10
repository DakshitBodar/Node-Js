const express = require('express');
const port = 9000;
const server = express();   //create express server

let students = [
    {
        "id": "101",
        "firstname": "Alice",
        "lastname": "born",
        "age": 20,
        "email": "alice@gmail.com",
        "course": "Computer Science"
    },
    {
        "id": "102",
        "firstname": "bhavesh",
        "lastname": "patel",
        "age": 30,
        "email": "bhavesh@gmail.com",
        "course": "Mechanical Engineering"
    },
    {
        "id": "103",
        "firstname": "smit",
        "lastname": "davis",
        "age": 21,
        "email": "smit@gmail.com",
        "course": "Electrical Engineering"
    }
]

server.set("view engine", 'ejs');
server.use(express.urlencoded())

server.get("/", (req, res) => {
    res.render("index", { students });
});

server.post("/add-student", (req, res) => {
    console.log("Body", req.body)
    students.push(req.body);
    return res.redirect("/");
});

server.get("/delete-student/:id", (req, res) => {
    // console.log(req.params);
    let id = req.params.id;
    students = students.filter(stu => stu.id != id);
    return res.redirect("/");
});

server.get("/edit-student/:id", (req, res) => {
    let studentdata = students.find(stu => stu.id == req.params.id);
    return res.render("editdata", { student: studentdata })
});

server.post("/update-student", (req, res) => {
    const { studentId } = req.query;
    console.log(req.query);
    let updatestu = students.map(stu => {
        if (stu.id == studentId) {
            return {
                ...req.body,
                id: studentId
            }
        } else {
            return stu;
        }
    })

    students = updatestu;
    return res.redirect("/");
})

server.listen(port, () => {
    console.log(`server start al http://localhost:${port}`);
});