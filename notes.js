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



// 4. models Folder have all the schemas to work with the data we recieve or send to our request
// *****************
// models represents a table in your DB
// sequelize.define(modelName, attributes, options)              -> This generates a table with plural name of your modelName
// // attributes are fields of the table. 
// Define table with JS Objects and insert constraints like default value, NOT NULL, PK, etc as you require (see Documentation)
// Additionally you can also add validators for fields in the table (see Documentation)
// After a model is defined, it is available within sequelize.models by its model name.
// You can give your table a custom name or force it to be same as your model name. (see Documentation)
// With model sync you can tell your Node app to keep your DB in sync with your models in the app. It will create table for you if it doesn't exist.
// *****************


// 5. controllers Folder having all logic related to routes Folder. They basically have the function to execute for every request
// async(req,res) => {Do Something}
// *****************
// sequelize model methods
// 1. modelName.create()      -> To insert a new row of record in DB. Also modelName.save() is important. query a user, store it in a variable, update a field for that user & then hit modelName.save()
// 2. modelName.findAll()       -> To find all the recors corresponding to this model . you can specify fields to slecet or use WHERE clause or use aggregate functions of SQL as well
// 3.   modelName.findAll()
//      modelName.findOne()
//      modelName.findByPk()
// -> Find a specific record using the WHERE calsue in findAll() or findOne() method
// -> Pass the parameter to findByPk without any WHERE clause

// 4. modelName.update()        -> To update row in table
// 5. modelName.destroy()       -> To delete row in table

// ************* See limit, offset for pagination. Also see order by and group by. Also see how to implement aggregation func. SUM, AVG, etc ********  (SEE DOCUMENTATION)
// ************* Also see how to increment or decrement integer values.  ********  (SEE DOCUMENTATION)
// ******* You have operators from sequelize to implemet and, or, gretaer than, less than, between etc**********(see Documentation)
// *****************



// 6. services Folder have all the interaction with the DB









// SESSIONS & COOKIES

// COOKIES are an alternative to localStorage & sessionStorage. This is used to store data & then this data is then part of all network requests you make. Include this cookies in the header. Stored in client side.
// res.setHeader("Set-Cookie", "loggedIn=true")             ->      To set a cookie on client side

// A SESSION is stored in backend (in memory or DB) rather than frontend. An info. is shared for all request coreesponding to a single user.
// A client needs to tell the server to which session he belongs to. To do so ypou need to store the id of the session in your cookie for relating cookie and session info. But this id is not stored directly intead it is hashed for security so that server can confirm it is original one. All this is done so that client can't change the cookie on their browser.

// npm install express-session
// const session = require("express-session")
// app.use(session({secret: "secret_key_for_hashing", resave: false, saveUninitialized: false}))    
// config it aas a global middleware
// resave means sessions doesn't change for every req or response it sends or recieves 
// saveUninitialized ensures no session is saved for a request because nothing was changed in the session

// Now instead of setting a cookie on client-side. 
// req.session.isLoggedIn = true                -> To set a encrypted session cookie in client
// req.session                                  -> To access a session cookie
// This adds a new cookie in your browser, you will see an encypted string. This identifies you to server.

// Always store your session in your DB. There is config required for it a/t DB you are using. (SEE CHAPTER-241)


// FLOW     
// ->  Login   -> create session & store it in DB & in cookies in client side(Done with a package)  -> Now this cookie is a part of every request that a user makes    -> Based on encrypted cookie present in frontend write your logic




// CSRF attcak -> cross-site-request-forgery
// Using csurf token to genrate a string which is signed. Now this can be store on client side directly in the cookies. But again for security purpose we store it in session.
// Use csurf as a middleware. 
// Generate this token & store this in frontend









// sendGrid and Nodemailer combination to send mails easy way
// OR 
// You can also send mails using simple nodemailer
// 1. create an acc. with sendgeid
// 2. npm install nodemailer nodemailer-sendgrid-transport
// 3. const nodemailer = require("nodemailer")          &       const sendgridTransport = require("nodemailer-sendgrid-transport")
// 4. const trasporter = nodemailer.createTransport(sendgridTransport({
    // auth: {
    //     // api_key: give your api_key from sendGrid acc. by creating a new api_key
    // }
// }))                                              // This step 4 is to initialize the setup
// 5. transporter.sendMail({
//     to: "your_target_email_address",
//     from: "your app name",
//     subject: "your subject name",
//     html: `<h1>Your message. This can be complex html as well</h1>`              //always use backtick for muti line html
// })                                               // This step 5 returns a promise use then & catch or async/await for your logic










// Use crypto package inbuilt in Node.js to create random string
// 1. const crypto = require("crypto")
// 2. const createRandomString = () => {
//     crypto.randomBytes(32, (err, buffer) => {
//         if(err){
//             console.log(err)
//         }else{
//             const token = buffer.toString("hex");
//             return token
//         }
//     })
// }









// Password Reset Flow

// 1. Take the email you nedd to reset the password for
// 2. Generate a token using crypto package if a user exists
// 3. Then store the random generated token for that user in DB as 
// resetToken: token,
// resetTokenDate: new Date().getTime() + 3600000             // This means that token is valid only for 1 hour since it's generation
// 4. send a link in email as <a href="http://localhost:5000/reset-password/${token}>click to reset your password</a>"
// 5. Extract that token which is dynamic in your route in react from the URL (useParams() hook)
// 6. Now find that token in your DB 
// if 
// a token doesn't exist if not do not render the page and say reset link not valid
// else if 
// token exist and the token expiration date is greater than new Date.getTime() render the form to take new password 
//  else
// token exist and the token expiration date is lesser than new Date.getTime() render the message link expired & give a new quick link to request reset password again
// 7. If token exists & is valid for time send the user id as a response to API
// 8. Take new password and send back to your api alongwith user id that you get from response while loading up the react page
// 9. now find the user whose id & token matches & token exipry date is greater than currrent time
// if 
// all 3 condition match update the password & set token & token expiration field to null
// else
// send the appropriate response









// Validation at multiple places (very easy and straight forward)

// 1. frontend                                  // for better UX. not secure since frontend code is exposed in frontend
// 2. backend                                   // for more secure validation since backend code is not exposed
// 3. models validation                         // for additional layer of security in DB operation

// backend validator

// step-1: npm install express-validator
// step:2 const expressValidator = require("express-validator")
// step:3 Add validation to your route by adding a middleware to your route
// router.post("/some-route", expressValidator.check("email").isEmail(), yourController)

// expressValidator.check func. finds the field everywhere in your req body, header, query, cookies & then checks for validation
// expressValidator.body checks for field only in the body of req
// expressValidator.param checks for field only in the param of req
// expressValidator.query checks for field only in the query of req
// expressValidator.cookies checks for field only in the cookies of req
// expressValidator.cookie checks for field only in the cookie of req
// expressValidator.header checks for field only in the header of req
// The middleware takes a single field or an array of field

// If you want to throw your custom error messages for your checks, us the logic below
// expressValidator.check("email").isEmail().withMessage("Please enter a valid email")
// withMessage is valid only for the check which is in front of it. So if you have multi. checks you need to add multi withMessage for every cehck
// To give a default message to all your validator pass your message as a 2nd agruement to field name. See expressValidator.body("password")  below
// To match 2 fields & validate it. See xpressValidator.body("confirmPassword") below

// If you want to add a custom validator of your own, use the logic below
// expressValidator.check("email").isEmail().withMessage("Please enter a valid email").custom((value, {req} => {
    // if(value === "some_check"){                                              // value here corresponds to value stored in email
    //     throw new Error("This custom check is not passed")
    // }else{
    //     return true
    // }
// }))

// If you need to add validators on multi. fields, wrap your check func in an array
// router.post("/some-route", [
    // expressValidator.check("email").isEmail().withMessage("Please enter a valid email").custom((value, {req} => {
    // if(value !== "some_check"){                                              // value here corresponds to value stored in email
    //     throw new Error("This custom check is not passed")
    // }else{
    //     return true
    // }
// })), 
    // expressValidator.body("password", "please enter a paasword of min length 5  with only numbers and text").isLength({min: 5}).isAlaphanumeric(),
    // expressValidator.body("confirmPassword", "please enter a paasword of min length 5  with only numbers and text").custom((value, {req} => {
        // if(value !== req.body.confirmPassword){
        //     throw new Error("password have to match")
        // }else{
        //     return true
        // }
    // }))
// ], yourController)

// step:4 In your respective controller you can catch all your errors by invoking the function
// expressValidator.validationResult is a func that allows to gather all error that your validation has thrown
// const expressValidatorerror = expressValidator.validationResult(req)

// step:5 Now you can send appropriate response if you have any error. 
// All error message can be found under expressValidatorerror.array() which retrns an array of objects. Use logic to send user friendly message
// check for error using expressValidatorerror.isEmpty() which returns a boolean.