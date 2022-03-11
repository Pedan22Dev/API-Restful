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

//Método Put
async function put(req, res) {
    const { id }= req.params

    const product = await ProductsModel.findOneAndUpdate({ _id: id}, req.body, { new: true})

    res.send({
        message: "Success",
        product,
    })

    /* const product = await ProductsModel.findOne({ _id: id })

    await product.updateOne(req.body)

    res.send({
        message: "Success",
        product,
    }) */
}



/**/

module.exports = {
    get,
    post,
    put,
}