require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const productRoute = require('./routes/product.js');
const path = require('path');
const mongoose = require('mongoose');
main().catch(err => console.log(err));


async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Database connected');
}

app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
app.use(cors());
app.use(express.json());
app.use('/products', productRoute.router);

app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT, () => {
    console.log(`server started on http://localhost:${process.env.PORT}`);
});