require("dotenv").config();
const express = require ('express');
const app = express();
const cors = require ("cors");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const connectDb = require ("./utils/db");
const errorMiddleware = require("./middlewares/error-mw");

const corsOptions = {
    origin : "http://localhost:5173" ,
    methods : "GET, POST, PUT, DELETE, PATCH, HEAD",
    Credentials : true,
}

app.use(cors(corsOptions));
app.use (express.json());
app.use ("/api/auth", authRoute);
app.use ("/api/form", contactRoute);
app.use ("/api/data", serviceRoute);
app.use(errorMiddleware);

const PORT = 5000;
connectDb().then(()=>{
 app.listen(PORT);   
})
