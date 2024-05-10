import { Router } from 'express'
import { UsersController } from '../controllers/users_controller.js'
import { authenticationMiddleware } from '../middlewares/authentication_middleware.js'
import { adminCheckMiddleware } from '../middlewares/admin_check_middleware.js'

export const usersRouter = Router()
const usersController = new UsersController()

usersRouter.post('/', usersController.createUser)
usersRouter.get('/', authenticationMiddleware, usersController.getUser)
usersRouter.get('/all', authenticationMiddleware, adminCheckMiddleware, usersController.getUsers)
usersRouter.patch('/', authenticationMiddleware, usersController.updateUser)
usersRouter.delete('/', authenticationMiddleware, usersController.deleteUser)