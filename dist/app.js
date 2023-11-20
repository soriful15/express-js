"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
// app.use('/', userRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/course', courseRouter);
// userRouter.get('/api/v1/users/create-user', (req: Request, res: Response) => {
userRouter.post('/create-user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "user is crated successfully",
        data: user
    });
});
courseRouter.post('/create-course', (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "course is crated successfully",
        data: course
    });
});
// middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
/* // app.get('/:userId/:subId', (req:Request, res:Response) => { //params er jonno
app.get('/', logger, (req: Request, res: Response) => { //query er jonno
  // console.log(req.params) //params er jonno

  console.log(req.query) //query er jonno
  console.log(req.query.name)
  res.send('Hello Md soriful Islam World!!!')
}) */
// error
app.get('/', logger, (req, res, next) => {
    try {
        // res.send(some)
        res.send("something");
    }
    catch (error) {
        next(error);
    }
});
app.post('/', logger, (req, res) => {
    console.log(req.body);
    // res.send('got data')
    res.json({
        message: "successfully received data"
    });
});
// aita sobar last a use korte hoibo
app.all('*', (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route not found"
    });
});
// global error handle
app.use((error, req, res, next) => {
    if (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "something wrong  data"
        });
    }
});
exports.default = app;
