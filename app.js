const express = require('express');

const app = express();
const port = 3000;

const routes = require("./routes");

app.use(express.json());
app.use("/api", routes);

app.get('/', (req, res) => {
    res.send("Hey there! Let's go work with POSTMAN!");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});