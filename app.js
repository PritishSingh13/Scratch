const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const database = require("./config/mongooseConnection")
const ownersRouter = require("./routes/ownersRouters");
const usersRouter = require("./routes/usersRouters");
const productsRouter = require("./routes/productsRouters");
const indexRouter = require("./routes/index");
const session = require("express-session");
const flash = require("connect-flash");

require("dotenv").config();



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.use(session({
    secret: process.env.EXPRESS_SESSION_SECRET || "default_secret_key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  // Set to true if using HTTPS
}));


app.set("view engine", "ejs");


app.use(flash());





app.use(flash());
app.use("/owners",ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/", indexRouter);



app.set("view engine" , "ejs");

app.listen(3000);