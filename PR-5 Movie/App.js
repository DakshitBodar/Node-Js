const express = require("express");
const port = 8090;
const app = express();
const dbconnect = require("./config/dbconnection");

//DB connection
dbconnect();

//Middlware
app.set("view engine", 'ejs');
app.use(express.urlencoded());
app.use('/uploads', express.static('uploads'));
app.use(express.static("public"))

app.use("/", require("./routes/movie.routes"))

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Server start at http://localhost:${port}`);
});