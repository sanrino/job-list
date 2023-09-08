const express = require("express");
const router = express.Router();

const jobRouter = require('./jobRouter');
const userRouter = require('./userRouter');

router.use("/jobs", jobRouter);
router.use("/user", userRouter);

module.exports = router;