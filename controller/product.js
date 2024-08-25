
const model = require('../model/product.js');
const Product = model.Product;

exports.createProduct = (req, res) => {
    const product = new Product(req.body);
    product.save()
        .then(doc => res.status(201).json(doc))
        .catch(err => {
            console.error(err.message);
            res.status(400).json(err.message);
        });
}

exports.getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
}

exports.getProduct = async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.json(product);
}

exports.changeProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const doc = await Product.findOneAndReplace({ _id: id }, req.body, { returnDocument: 'after' });
        res.status(201).json(doc);
    }

    catch(err) {
        console.log(err);
        res.status(400).json(err)
    }
}

exports.updateProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const doc = await Product.findOneAndUpdate({ _id: id }, req.body, { returnDocument: 'after' });
        res.status(201).json(doc);
    }

    catch(err) {
        console.log(err);
        res.status(400).json(err)
    }
}

exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const doc = await Product.findOneAndDelete({ _id: id });
        res.status(201).json(doc);
    }

    catch(err) {
        console.log(err);
        res.status(400).json(err)
    }
}