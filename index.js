
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Home page</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h2>About route</h2>");
});

app.listen(3000, () => console.log('Server listening at port 3000'));