const express = require("express");

const cors = require('cors');
const routes = require('./src/routes/index.js');

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

const server = app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
