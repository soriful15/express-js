// const express = require('express')
import express, { NextFunction, Request, Response } from 'express'
const app = express()


// parsers
app.use(express.json());
app.use(express.text());

const userRouter = express.Router();
const courseRouter = express.Router();


// app.use('/', userRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/course', courseRouter);


// userRouter.get('/api/v1/users/create-user', (req: Request, res: Response) => {
userRouter.post('/create-user', (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    message: "user is crated successfully",
    data: user
  })

});
courseRouter.post('/create-course', (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    message: "course is crated successfully",
    data: course
  })

});








// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname)
  next()
}


/* // app.get('/:userId/:subId', (req:Request, res:Response) => { //params er jonno
app.get('/', logger, (req: Request, res: Response) => { //query er jonno
  // console.log(req.params) //params er jonno

  console.log(req.query) //query er jonno
  console.log(req.query.name)
  res.send('Hello Md soriful Islam World!!!')
}) */


// error
app.get('/', logger, (req: Request, res: Response, next: NextFunction) => {
  try {
    // res.send(some)
    res.send("something")
  }
  catch (error) {
    next(error)

  }

})

app.post('/', logger, (req: Request, res: Response) => {
  console.log(req.body)
  // res.send('got data')
  res.json({
    message: "successfully received data"
  })
})


// aita sobar last a use korte hoibo
app.all('*',(req:Request, res:Response)=>{
  res.status(400).json({
    success:false,
    message:"Route not found"
  })
})

// global error handle

app.use((error: any, req: Request, res: Response, next: NextFunction) => {

  if (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: "something wrong  data"
    })
  }

})


export default app;