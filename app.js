const express = require('express');
const routes = require("./routes")
const fs = require("fs");

const app = express();
const port = 3000;

app.use("/api", routes);

app.get('/', (req, res) => {
    fs.readFile("./members_Array.json", (err, data) => {
        res.send(data.toString());
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});