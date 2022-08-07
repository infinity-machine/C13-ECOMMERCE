const express = require('express');
const routes = require('./routes');
const db = require('./config/connection')
const Product = require('./models/Product');
const Tag = require('./models/Tag');


// Product.create({
//   product_name: 'a lemon',
//   price: 500.00
// }).then((product) => {
//   product.createTag({
//     tag_name: 'something'
//   })
// })


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


db.sync({force: false})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  })



