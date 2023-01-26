const express = require('express');
const {configDb} = require('./config/database')
const {configExpress} = require('./config/express');
const {routes} = require('./routes')
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT || 8080;
const app = express();

configExpress(app);
configDb();
routes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
