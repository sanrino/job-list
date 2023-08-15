const express = require("express");
const router = express.Router();

const jobController = require('../controllers/job.controller')

router.post("/", jobController.getAllJob);

module.exports = router

