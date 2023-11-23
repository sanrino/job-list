const uuid = require('uuid');
const path = require('path');

const {
  allJobs,
  allJobsUser,
  createJob,
  updateJob,
  findJobById,
  deleteJob
} = require("../service/job-service");

const jobController = {
  getAllJob: async (req, res) => {
    try {
      const payload = req.body;
      const jobs = await allJobs(payload);
      return res.json(jobs);

    } catch (error) {
      res.json({ msg: error.msg })
    }
  },

  getAllJobsUser: async (req, res) => {
    try {
      const { id } = req.params;
      const jobs = await allJobsUser(id);
      return res.json(jobs);

    } catch (error) {
      res.json({ msg: error.msg })
    }
  },

  createJob: async (req, res) => {
    const { data, email } = req.body;

    try {
      const jobs = await createJob(data, email);

      return res.json(jobs);

    } catch (error) {
      res.json({ msg: error.msg })
    }
  },

  updateJobById: async (req, res) => {
    try {
      const { id } = req.params;
      const jobs = req.body;

      const result = await updateJob(id, jobs);
      res.json(result);

    } catch (error) {
      res.json({ msg: error.msg })
    }
  },

  getJobById: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await findJobById(id);
      res.json(result);
    } catch {
      console.log(error);
      res.json({ msg: error.msg })
    }
  },

  deleteJobById: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await deleteJob(id);
      res.json(result);

    } catch {
      res.json({ msg: error.msg })
    }
  }
};

module.exports = jobController;