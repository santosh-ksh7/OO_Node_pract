const express = require("express");
const cors = require("cors");
const sequelize = require("./utils/databaseConnection");
// You must import all the models that youy define for your sync to work in the same file where you will invoke sequelize.sync method
const Product = require("./models/product");
const productRouter = require("./routes/productRoutes")


const app = express();
// Middleware for every request. This top level middlewares always calls next() by default
app.use(express.json());
app.use(cors());






// Express Routers
app.use("/products", productRouter);



app.get("/", async(req, res) => {
    res.send("<h1>Hello</h1>")
})






// Middleware for specifc request - A funct. -> 
// const middleware_func_name = (req, res, next){
//     perform your logic & invoke the next() accordingly
// }

// app.get("/", middleware_func_name, async(req, res) => {
//     res.send("Hello")
// })




sequelize.sync()
  .then(() => {
    app.listen(5000);
    console.log('Connection has been established successfully & your DB is in sync with your models');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  })