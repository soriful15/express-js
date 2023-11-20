// const express = require('express')
import express, { Request, Response } from 'express'
const app = express()


// parsers
app.use(express.json());
app.use(express.text())



app.get('/', (req:Request, res:Response) => {
  res.send('Hello Md soriful Islam World!!!')
})

app.post('/', (req:Request,res:Response)=>{
console.log(req.body)
// res.send('got data')
res.json({
  message:"successfully received data"
})
})

export default app;