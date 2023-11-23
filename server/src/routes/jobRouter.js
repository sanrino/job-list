const express = require("express");
const router = express.Router();

const jobController = require('../controllers/jobController');
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", jobController.getAllJob);

router.get("/profile/:id", jobController.getAllJobsUser); //profile user jobs

router.get("/:id", jobController.getJobById);

router.post("/create", jobController.createJob);

router.put("/update/:id", authMiddleware, jobController.updateJobById);

router.delete("/delete/:id", authMiddleware, jobController.deleteJobById);

module.exports = router;

