const {
  allJobs,
  createJob,
  updateJob,
  findJobById
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

  createJob: async (req, res) => {
    try {
      const job = req.body;
      const jobs = await createJob(job);
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
      res.json({ msg: error.msg })
    }
  }
};

module.exports = jobController;