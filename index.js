const express = require("express");
const cors = require("cors");
const sequelize = require("./utils/databaseConnection");
const productRouter = require("./routes/productRoutes");


const app = express();
// Middleware for every request. This top level middlewares always calls next() by default
app.use(express.json());
app.use(cors());






// Express Routers
app.use("/products", productRouter);



app.get("/", async(req, res) => {
    res.send("<h1>Hello</h1>")
})



app.get("/get-a-single-product-from-cart-to-test-join-from-multiple-table", async (req, res) => {
  try{
    const dbResponse = await sequelize.query("select products.title, products.price, products.description, users.userName, users.email, qty FROM cart INNER JOIN products ON cart.pid = products.id INNER JOIN users ON cart.uid = users.id");
    console.log(dbResponse);
    res.status(200).send({data: dbResponse});
  }catch(error){
    res.status(400).send({msg: "Unable to execute your query", error: error})
  }
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