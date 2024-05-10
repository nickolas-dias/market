import { UsersRepository } from "../repositories/users_repository.js";
import jwt from 'jsonwebtoken'

export class SessionController {
    static instance;

    constructor() {
        this.repository = new UsersRepository();
    }

    login = async (req, res) => {
        const { email, password } = req.body

        const user = await this.repository.getUserByEmail(email)

        if (!user) {
            return res.status(401).json({ message: 'E-mail ou senha invalid.' })
        }

        if (user.password !== password) {
            return res.status(401).json({ message: 'E-mail ou senha invalid.' })
        }

        const token = jwt.sign({
            userId: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
        }, 'Nickolas', { expiresIn: '1d' })

        return res.json({ token })
    }
}