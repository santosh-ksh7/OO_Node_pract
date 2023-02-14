const express = require("express");
const cors = require("cors");
const sequelize = require("./utils/databaseConnection")


const app = express();
// Middleware for every request. This top level middlewares always calls next() by default
app.use(express.json());
app.use(cors());




(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }  
})()




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


app.listen((5000), () => {

})