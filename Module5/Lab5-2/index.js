const express = require("express");
const app = express();
const calculatorRoutes = require("./routes/calculatorRoutes");
const port = 3000

app.use("/", express.static("public"));

app.use("/calculator", calculatorRoutes);

app.listen (port, () => console.log(`http://localhost:$(port)`));