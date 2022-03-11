const ProductsModel = require('../models/products')

//Método Get
async function get(req, res) {
    const { id } = req.params

    let obj = {}

    if (id) {
        obj._id = id
    }

    const products = await ProductsModel.find(obj)

    res.send(products)
}

//Método Post
async function post(req, res) {
    const { 
        name,
        brand, 
        price,
    } = req.body

   

    const product = new ProductsModel({ 
        name,
        brand, 
        price,
    })

    product.save()

    res.send({
        message: "Success"
    })
}





/**/

module.exports = {
    get,
    post,
}