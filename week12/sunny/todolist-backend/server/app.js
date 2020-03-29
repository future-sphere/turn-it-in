// app.js
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import todosRouter from './routes/todos';
import postsRouter from './routes/posts';
import authRouter from './routes/auth';
import connectToDatabase from './db'; //传进来

const app = express();

connectToDatabase(); //呼叫这个function, 相当于把db.js的逻辑全部搬过来了

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/todos', todosRouter);
app.use('/posts', postsRouter);
app.use('/auth', authRouter);

export default app;
