const prisma = require("../db");

const allJobs = async (payload) => {

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

  return result;
};

const createJob = async (job) => {
  const result = await prisma.jobPosition.create({
    data: {
      ...job,
      author: {
        connect: {
          email: "photosnap@prisma.io"
        }
      }
    },
  })
  return result;
}

const updateJob = async (id, jobs) => {
  const result = await prisma.jobPosition.update({
    where: { id: Number(id) },
    data: {
      ...jobs,
    },
  });

  return result;
}

const findJobById = async (id) => {
  const result = await prisma.jobPosition.findUnique({
    where: { id: Number(id) },
  });

  return result;
}

module.exports = {
  allJobs,
  createJob,
  updateJob,
  findJobById
};