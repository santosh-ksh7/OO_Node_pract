const Sequelize = require("sequelize")
const sequelize = require("../utils/databaseConnection")


const Product = sequelize.define("product", {
    // attributes are fields of the table
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
})



module.exports = Product;