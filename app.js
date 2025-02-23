const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const database = require("./config/mongooseConnection")
const ownersRouter = require("./routes/ownersRouters");
const usersRouter = require("./routes/usersRouters");
const productsRouter = require("./routes/productsRouters");
const indexRouter = require("./routes/index");
const expressSession = require("connect-flash");
const flash = require("connect-flash");


require("dotenv").config();



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
    expressSession({
        resave:false,
        saveUninitialized:false,
        secret: process.env.EXPRESS_SESSION_SECRET,
    })
);
app.use(flash());
app.use("/owners",ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);



app.set("view engine" , "ejs");

app.listen(3000);