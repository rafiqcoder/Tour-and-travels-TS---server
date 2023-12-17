import express, { Request, Response } from 'express'
const app = express()


app.get('/api/v1/users', (req:Request, res:Response) => {
  res.status(200).json({ message: 'Hello world' })
})


export default app