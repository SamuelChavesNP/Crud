const express = require("express");
const todoRoutes = require("./todos.routes");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(todoRoutes);


app.listen(3333, () => console.log("Server up in 3333"));