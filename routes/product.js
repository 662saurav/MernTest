const express = require('express');
const router = express.Router();
const product = require('../controller/product.js');

router.post('/', product.createProduct)
    .get('/', product.getProducts)
    .get('/:id', product.getProduct)
    .put('/:id', product.changeProduct)
    .patch('/:id', product.updateProduct)
    .delete('/:id', product.deleteProduct);

exports.router = router;