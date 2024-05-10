import { Router } from 'express'
import { authenticationMiddleware } from '../middlewares/authentication_middleware.js'
import { adminCheckMiddleware } from '../middlewares/admin_check_middleware.js'
import { CartsController } from '../controllers/carts_controller.js'

export const cartsRouter = Router()
const cartsController = new CartsController()

cartsRouter.get('/closed',authenticationMiddleware, cartsController.getCarts)
cartsRouter.post('/', authenticationMiddleware, cartsController.createCart)
cartsRouter.get('/', authenticationMiddleware, cartsController.getCart)
cartsRouter.patch('/', authenticationMiddleware, cartsController.updateCart)
cartsRouter.delete('/:productId', authenticationMiddleware, cartsController.deleteCart)