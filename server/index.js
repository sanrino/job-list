const express = require("express");
const fileUpload = require('express-fileupload');

const cors = require('cors');
const routes = require('./src/routes/index.js');

const errorHandler = require('./src/middleware/ErrorHandlingMiddleware.js')

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
// app.use(express.json());
app.use(express.json({ limit: '50mb' }));
app.use(fileUpload({}));

app.use("/api", routes);

app.use(errorHandler);

const server = app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
