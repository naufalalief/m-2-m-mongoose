const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const db = require("./config/db");

const allRoute = require("./routes");

db.then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log(err);
});

app.use(express.json());
app.use(allRoute);
app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
