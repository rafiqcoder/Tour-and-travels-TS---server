import cors from 'cors'
import express, { Application } from 'express'
import { userRoutes } from './routes/user.route'

const app: Application = express()
app.use(express.json())
app.use(cors())

app.use('/api/v1/users', userRoutes)

// send a response on /api/v1/users route


export default app
