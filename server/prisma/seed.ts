import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const jobsData: any = [
  {
    email: 'photosnap@prisma.io',
    jobs: {
      create: [{
        company: 'Photosnap',
        logo: "./images/photosnap.svg",
        new: true,
        featured: true,
        position: "Senior Frontend Developer",
        role: "Frontend",
        level: "Senior",
        contract: "Full Time",
        location: "USA Only",
        languages: "HTML, JavaScript"
      }]
    }
  },
  {
    email: 'manage@prisma.io',
    jobs: {
      create: [{
        company: 'Manage',
        logo: "./images/manage.svg",
        new: true,
        featured: true,
        position: "Fullstack Developer",
        role: "Fullstack",
        level: "Midweight",
        contract: "Part Time",
        location: "Remote",
        languages: "Python"
      }]
    }
  },
  {
    email: 'account@prisma.io',
    jobs: {
      create: [{
        company: 'Account',
        logo: "./images/account.svg",
        new: true,
        featured: false,
        position: "Junior Frontend Developer",
        role: "Frontend",
        level: "Junior",
        contract: "Part Time",
        location: "USA Only",
        languages: "JavaScript",
        tools: "React, Sass"
      }]
    }
  },

  {
    email: 'myhomep@prisma.io',
    jobs: {
      create: [{
        company: "MyHome",
        logo: "./images/myhome.svg",
        new: false,
        featured: false,
        position: "Junior Frontend Developer",
        role: "Frontend",
        level: "Junior",
        contract: "Contract",
        location: "USA Only",
        languages: "CSS, JavaScript",
      }]
    }
  },

  {
    email: 'loopstudiosp@prisma.io',
    jobs: {
      create: [{
        company: "Loop Studios",
        logo: "./images/loop-studios.svg",
        new: false,
        featured: false,
        position: "Software Engineer",
        role: "Fullstack",
        level: "Midweight",
        contract: "Full Time",
        location: "Worldwide",
        languages: "JavaScript",
        tools: "Ruby, Sass"
      }]
    }
  },

  {
    email: 'itsp@prisma.io',
    jobs: {
      create: [{
        company: "It",
        logo: "./images/faceit.svg",
        new: false,
        featured: false,
        position: "Junior Backend Developer",
        role: "Backend",
        level: "Junior",
        contract: "Full Time",
        location: "UK Only",
        languages: "Ruby",
        tools: "RoR"
      }]
    }
  },

  {
    email: 'shortlyp@prisma.io',
    jobs: {
      create: [{
        company: "Shortly",
        logo: "./images/shortly.svg",
        new: false,
        featured: false,
        position: "Junior Developer",
        role: "Frontend",
        level: "Junior",
        contract: "Full Time",
        location: "Worldwide",
        languages: "HTML, JavaScript",
        tools: "Sass"
      }]
    }
  },

  {
    email: 'insure@prisma.io',
    jobs: {
      create: [{
        company: "Insure",
        logo: "./images/insure.svg",
        new: false,
        featured: false,
        position: "Junior Frontend Developer",
        role: "Frontend",
        level: "Junior",
        contract: "Full Time",
        location: "USA Only",
        languages: "JavaScript",
        tools: "Vue, Sass"
      }]
    }
  },

  {
    email: 'eyecamcop@prisma.io',
    jobs: {
      create: [{
        company: "Eyecam Co.",
        logo: "./images/eyecam-co.svg",
        new: false,
        featured: false,
        position: "Full Stack Engineer",
        role: "Fullstack",
        level: "Midweight",
        contract: "Full Time",
        location: "Worldwide",
        languages: "JavaScript, Python",
        tools: "Django"
      }]
    }
  },

  {
    email: 'airfiltercompany@prisma.io',
    jobs: {
      create: [{
        company: "The Air Filter Company",
        logo: "./images/the-air-filter-company.svg",
        new: false,
        featured: false,
        position: "Front-end Dev",
        role: "Frontend",
        level: "Junior",
        contract: "Part Time",
        location: "Worldwide",
        languages: "JavaScript",
        tools: "React, Sass"
      }]
    }
  },
]

async function main() {
  console.log(`Start seeding ...`)

  for (const j of jobsData) {
    console.log(j)
    const user = await prisma.user.create({
      data: j
    })
    console.log(`Created user with id: ${user.id}`)
  }

  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

