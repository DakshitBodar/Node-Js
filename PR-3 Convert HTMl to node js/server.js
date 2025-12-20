const express = require('express');
const port = 9000;
const server = express();   //create express server



server.set("view engine", 'ejs');
server.use(express.urlencoded());
server.use(express.static("public"));

server.get("/", (req, res) => {
    res.render("index");
});

server.get("/charts", (req, res) => {
    res.render("charts");
});

server.get("/widgets", (req, res) => {
    res.render("widgets");
});

server.get("/tables", (req, res) => {
    res.render("tables");
});

server.get("/grid", (req, res) => {
    res.render("grid");
});

server.get("/form-basic", (req, res) => {
    res.render("Froms/form-basic");
});

server.get("/form-wizard", (req, res) => {
    res.render("Froms/form-wizard");
});

server.get("/pages-buttons", (req, res) => {
    res.render("pages-buttons");
});

server.get("/icon-material", (req, res) => {
    res.render("Icons/icon-material");
});

server.get("/icon-fontawesome", (req, res) => {
    res.render("Icons/icon-fontawesome");
});

server.get("/pages-elements", (req, res) => {
    res.render("pages-elements");
});

server.get("/index2", (req, res) => {
    res.render("Addons/index2");
});

server.get("/pages-gallery", (req, res) => {
    res.render("Addons/pages-gallery");
});

server.get("/pages-calendar", (req, res) => {
    res.render("Addons/pages-calendar");
});

server.get("/pages-invoice", (req, res) => {
    res.render("Addons/pages-invoice");
});

server.get("/pages-chat", (req, res) => {
    res.render("Addons/pages-chat");
});

server.get("/authentication-login", (req, res) => {
    res.render("Authentication/authentication-login");
});

server.get("/authentication-register", (req, res) => {
    res.render("Authentication/authentication-register");
});

server.get("/error-403", (req, res) => {
    res.render("Errors/error-403");
});

server.get("/error-404", (req, res) => {
    res.render("Errors/error-404");
});

server.get("/error-405", (req, res) => {
    res.render("Errors/error-405");
});

server.get("/error-500", (req, res) => {
    res.render("Errors/error-500");
});




server.listen(port, () => {
    console.log(`server start al http://localhost:${port}`);
});