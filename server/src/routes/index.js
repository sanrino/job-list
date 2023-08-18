const express = require("express");
const router = express.Router();

const jobRouter = require('./job.router');

router.use("/jobs", jobRouter);

module.exports = router;