import express from'express';
import configDb from './config/database';
import configExpress from './config/express';
import routes from './routes';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 8080;
const app = express();

configExpress(app);
configDb();
routes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
