const router = require('express').Router()
const ProductController = require('../controllers/products')

router.get('/products/:id?', ProductController.get)
//router.post('/products', ProductController.post)
//router.put('/products', ProductController.put)
//router.delete('/products', ProductController.delete)













module.exports = router
    

