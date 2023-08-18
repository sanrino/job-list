const express = require("express");
const router = express.Router();

const jobController = require('../controllers/job.controller');

router.post("/", jobController.getAllJob);

router.get("/:id", jobController.getJobById);

router.post("/create", jobController.createJob);

router.put("/update/:id", jobController.updateJobById);

module.exports = router;

