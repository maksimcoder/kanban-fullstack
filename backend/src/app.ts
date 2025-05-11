import express from 'express';
import { installDBTables, installEndpoints, installMiddleware } from './appConfig';

const app = express();

installMiddleware();
installDBTables();
installEndpoints();

export { app };
