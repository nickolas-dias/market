import { Router } from 'express'
import { ProductsController } from '../controllers/products_controller.js'
import { authenticationMiddleware } from '../middlewares/authentication_middleware.js'
import { adminCheckMiddleware } from '../middlewares/admin_check_middleware.js'

export const productsRouter = Router()
const productsController = new ProductsController()

productsRouter.get('/', productsController.getProducts)
productsRouter.post('/', authenticationMiddleware, adminCheckMiddleware, productsController.createProduct)
productsRouter.get('/:id', productsController.getProduct)
productsRouter.patch('/:id', authenticationMiddleware, adminCheckMiddleware, productsController.updateProduct)
productsRouter.delete('/:id', authenticationMiddleware, adminCheckMiddleware, productsController.deleteProduct)