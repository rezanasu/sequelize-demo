const express = require("express");
const router = express.Router();
const {Product, Category, ProductCategory} = require("../models")


// METHODS YANG ADA DI REST API

// GET ---> Menampilkan data

// POST ---> Create Data

// PUT ---> Update data secara keseluruhan

// PATCH ---> Update data secara sebagiang

// DELETE ---> Delete data


// Menampilkan seluruh data products
router.get("/products", async (req, res) => {
    
    const products = await Product.findAll();

    res.status(200).json(products)
})

// Menampilkan detail Product berdasarkan id

router.get("/products/:id", async (req, res) => {

    const {id} = req.params;
    
    const product = await Product.findOne({
        where: {
            id: +id
        },
        include: {
            model: Category
        }
    })

    res.status(200).json(product)
})

// Create product

router.post("/products", async (req, res) => {

    // Destructuring Objects in Javascript
    const {title, sku, quantity, price, color, category_id} = req.body;

    const createdProduct = await Product.create({
        title,
        sku,
        quantity: +quantity,
        price: +price,
        color: color
    }, {returning: true})

    await ProductCategory.create({
        product_id: createdProduct.id,
        category_id: +category_id
    })

    res.status(201).json(createdProduct)
})


// Update Product

router.put("/products/:id", async (req, res) => {

    const {id} = req.params;
    const {title, sku, quantity, price, color} = req.body;

    const product = await Product.findOne({
        where: {
            id: +id
        }
    })

    if(product) {
        await product.update({
            title: title || product.title,
            sku: sku || product.sku,
            quantity: quantity || product.quantity,
            price: price || product.price,
            color: color || product.color
        })

        res.status(200).json(product)
    } else {
        res.status(404).json({message: "Error Not Found"})
    }
})

// Delete Product

router.delete("/products/:id", async (req, res) => {

    const {id} = req.params;

    const product = await Product.findOne({
        where: {
            id: +id
        }
    })

    if(product) {
        // delete
        await product.destroy();
        res.status(200).json({message: "Product deleted successfully"})
    } else {
        res.status(404).json({message: "Error Not Found"})
    }
})

// List categories

router.get("/categories", async (req, res) => {

    const categories = await Category.findAll();

    res.status(200).json(categories)
})




module.exports = router;