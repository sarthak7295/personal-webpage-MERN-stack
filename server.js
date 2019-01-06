const express = require("express");
const mongoose = require("mongoose");
const posts = require("./route/api/posts");
const profile = require("./route/api/profile");
const users = require("./route/api/users");
const bodyParse = require('body-parser')

const app = express();

//DB config
const db = require("./config/keys").mongoURI;

//connect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log("Mongo connected"))
  .catch(err => console.log(err));



//body-parser middle ware
app.use(bodyParse.urlencoded({extended : false}))
app.use(bodyParse.json())


app.get("/", (req, res) => res.send("hell!"));


app.use("/api/posts", posts);
app.use("/api/profile", profile);
app.use("/api/users", users);

var port = process.env.port || 5000;

app.listen(port, () => console.log("server running on port " + port));
