import express, { Application } from 'express'
import { userRoutes } from './routes/user.route'
import cors from 'cors'

const app:Application = express()
app.use(express.json())
app.use(cors())

app.get('/api/v1/users', userRoutes)

export default app
