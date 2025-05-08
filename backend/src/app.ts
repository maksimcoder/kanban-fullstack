import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { router } from './endpoints';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());

// Использование существующих эндпоинтов
app.use('/api', router);

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}/api`);
// });
export { app };
