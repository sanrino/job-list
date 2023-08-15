const express = require("express");
const router = express.Router();

const jobController = require('../controllers/job.controller')

router.post("/", jobController.getAllJob);
router.post("/create", jobController.createJob);

module.exports = router

