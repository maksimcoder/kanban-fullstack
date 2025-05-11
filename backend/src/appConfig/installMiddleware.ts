import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';

import { app } from "@/app";

export function installMiddleware() {
    console.log('\x1b[43m APP.Middleware: Preparing app config middlewares \x1b[0m');
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }))
    app.use(cookieParser());
    app.use(cors());
    console.log('\x1b[42m APP.Middleware: Successfuly installed app config middlewares \x1b[0m');
}