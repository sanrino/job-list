import { PrismaClient } from '@prisma/client'
import express from 'express';


const cors = require('cors');

const port = process.env.PORT || 3000;
const prisma = new PrismaClient();
const app = express();

app.use(cors());

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Selamat datang di API akuh");
});

const jobRouter = require('./routes/job.router')

app.use("/api/jobs", jobRouter);

/*
app.get('/users', async (req, res) => {
  const result = await prisma.user.findMany();
  res.json(result);
})

app.get(`/job/:id`, async (req, res) => {
  const { id } = req.params;

  const result = await prisma.jobPosition.findUnique({
    where: { id: Number(id) },
  });

  res.json(result);
});

app.post(`/jobs`, async (req, res) => {
  const payload = req.body;

  const buildQuery = (key: string, items: string[]) => {
    return items.map((item: string) => ({ [key]: { contains: item } }));
  };

  let filters: any[] = [];

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

  res.json(result);
})

app.post(`/create`, async (req, res) => {
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

  res.json(result)
});

app.put(`/update/:id`, async (req, res) => {
  const { id } = req.params;

  const result = await prisma.jobPosition.update({
    where: { id: Number(id) },
    data: {
      ...req.body,
    },
  });

  res.json(result);
})
*/

const server = app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
