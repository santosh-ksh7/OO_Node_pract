// res.redirect("/path-of-your-choice")
// // This redirect path should be one of your node.js routes. For server side rendering only









// // Although you can handle a url that doesn't exist in frontend using react-router-dom logic
// <Routes path="/*" element={<Some_custom_react_element_showing_404_status />} />
// Always prefer this option**************************************************************************

// OR

// // To handle the same for backend you can have at the very end of your app.use() after all your express Router
// app.use((req,res,next) => {
//     res.status(404).send({msg: "No Resource Found"})
//     // or can also send a html file for frontend with 404 code
//     res.status(404).send("<html><head><body><h4>Page not Found</h4></body></head></html>")
// })









// Tempelating engines - Used to create dynamic HTML files in the fly from the server (e.g - Pug, EJS)

// Later learn anyone section-6









// MVC architecture

// utils Folder -> All your helper functions goes in here, database connection
// middleware Folder -> All your middleware for authorization purposes

// 1. index.js
// **************************
// await sequelize.sync();
// You must import all the models that youy define for your sync to work in the same file where you will invoke sequelize.sync method
// **************************

// 2. routes Folder having all express Routes with their identifiers for filtering in index.js file

// 3. views Folder contains all the html files to be served to your requests

// section-5 chpater-75(For reference)
// To serve dynamic file as per the request from the server you need to use path module

// const path = require("path")
// res.sendFile(path.join(__dirname, "../", "../", "first_parent_folder_to_file_from_index.js", "second_parent_folder_to_file_from_index.js", ".....", "actual_file_with_extension"))

// To serve static files you need to use a express middleware for it
// e.g is css files for your html files served from the server, etc. The Css files are linked in the head tag.
// app.use(express.static(__dirname, "first_parent_folder_to_static_file", "second_parent_folder_to_static"))

// parctise an example for the same by creating and serving a styled html page making use of css file


// 4. controllers Folder having all logic related to routes Folder. They basically have the function to execute for every request
// async(req,res) => {Do Something}
// *****************
// sequelize model methods
// 1. modelName.create()      -> To insert a new row of record in DB
// 2. modelName.findAll()       -> To find all the recors corresponding to this model . you can specify fields to slecet or use WHERE clause or use aggregate functions of SQL as well
// 3.   modelName.findAll()
//      modelName.findOne()
//      modelName.findByPk()
// -> Find a specific record using the WHERE calsue in findAll() or findOne() method
// -> Pass the parameter to findByPk without any WHERE clause

// 4. modelName.update()        -> To update row in table
// 5. modelName.destroy()       -> To delete row in table

// *********** You have operators from sequelize to implemet and, or, gretaer than, less than, between etc*******************
// *****************

// 5. models Folder have all the schemas to work with the data we recieve or send to our request
// *****************
// models represents a table in your DB
// sequelize.define(modelName, attributes, options)              -> This generates a table with plural name of your modelName
// // attributes are fields of the table. Define createTable with JS Objects and insert constraints as you require
// After a model is defined, it is available within sequelize.models by its model name.
// You can give your table a custom name or force it to be same as your model name. (see Documentation)
// With model sync you can tell your Node app to keep your DB in sync with your models in the app. It will create table for you if it doesn't exist.
// *****************




// 6. services Folder have all the interaction with the DB


// ########### re-visit after sql and mongoDB for models sections only