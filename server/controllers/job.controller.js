const prisma = require("../db");

const jobController = {
  getAllJob: async (req, res) => {
    try {
      const payload = req.body;
      const buildQuery = (key, items) => {
        return items.map((item) => ({ [key]: { contains: item } }));
      };

      let filters = [];

      for (let key in payload) {
        if (payload[key].length) {
          filters = [...filters, ...buildQuery(`${key}`, payload[key])]
        }
      }

      const or = (filters.length) ? {
        OR: [
          ...filters
        ]
      } : {};

      const result = await prisma.jobPosition.findMany({
        where: {
          ...or
        },
        orderBy: {
          id: "desc"
        },
      });

      return res.json(result);

    } catch (error) {
      res.json({ msg: error.msg })
    }
  },

  createJob: async (req, res) => {
    try {
      const result = await prisma.jobPosition.create({
        data: {
          ...req.body,
          author: {
            connect: {
              email: "photosnap@prisma.io"
            }
          }
        },
      })
      return res.json(result);

    } catch (error) {
      res.json({ msg: error.msg })
    }
  },

  updateJobById: async (req, res) => {
    try {
      const { id } = req.params;

      const result = await prisma.jobPosition.update({
        where: { id: Number(id) },
        data: {
          ...req.body,
        },
      });
      res.json(result);

    } catch (error) {
      res.json({ msg: error.msg })
    }
  },

  getJobById: async (req, res) => {
    try {
      const { id } = req.params;

      const result = await prisma.jobPosition.findUnique({
        where: { id: Number(id) },
      });
      res.json(result);

    } catch {
      res.json({ msg: error.msg })
    }
  }
}

module.exports = jobController