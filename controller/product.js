const Product = require("../models/product");

// create a product
const addProduct = async(req, res) => {
    try{
        await Product.create({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price
        });
        res.status(201).send({msg: "Product successfully created & inserted to DB"})
    }catch(err){
        res.status(400).send({msg: "Unable to create your product", error: err})
    }
}


// get all product
const getAllProduct = async(req,res) => {
    try {
        let dbResponse = await Product.findAll();
        res.status(200).send({data: dbResponse});
    } catch(error) {
        res.status(400).send({msg: "Unable to create your product", error: err})
    }
}


// find a product by id
const getProductById = async(req, res) => {
    const {id} = req.params;
    try {
        let dbResponse = await Product.findOne({where: {id}});
        if(dbResponse){
            res.status(200).send({data: dbResponse});
        }else{
            res.status(200).send({msg: "No matching data found"});
        }
    } catch(error) {
        res.status(400).send({msg: "Unable to find your product", error: err});
    }
}



// edit a product
const editProduct = async(req, res) => {
    const {id} = req.params;
    try {
        let dbResponse = await Product.findOne({where: {id}});
        if(dbResponse){
            await Product.update({...dbResponse, ...req.body}, {where: {id}});
            res.status(200).send({msg: "Data successfully updated"});
        }else{
            res.status(200).send({msg: "No matching data found"});
        }
    } catch(error){
        res.status(400).send({msg: "Unable to edit your product", error: err});
    }
}



// delete a product
const deleteProduct = async(req, res) => {
    const {id} = req.params;
    try {
        let dbResponse = await Product.findOne({where: {id}});
        if(dbResponse){
            await Product.destroy({where: {id}});
            res.status(200).send({msg: "Data successfully deleted"});
        }else{
            res.status(200).send({msg: "No matching data found"});
        }
    } catch (error) {
        res.status(400).send({msg: "Unable to delete your product", error: err});
    }
}



module.exports = {
    addProduct: addProduct,
    getAllProduct: getAllProduct,
    getProductById: getProductById,
    editProduct: editProduct,
    deleteProduct: deleteProduct
};