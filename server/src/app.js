const express = require ("express");
const morgan = require  ("morgan");
const cors = require ("cors");
const mainRouter = require ("./routes");
const bodyParser = require('body-parser');

const app = express ();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.use(mainRouter);

module.exports = app;