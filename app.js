const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors')
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/travellingApp")
  .then(console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors())

const tRoute = require("./router/travellingRouter");
app.use("/travelling", tRoute);

app.listen(7000, () => {
  console.log("Server Running");
});
