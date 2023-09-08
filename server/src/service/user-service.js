const prisma = require("../db");

const findUserByEmail = async (email) => {
  const result = await prisma.user.findUnique({
    where: { email: email },
  });

  return result;
};

const createUser = async (email, password) => {
  const result = await prisma.user.create({
    data: {
      email,
      password
    }
  })
  return result;
};

module.exports = {
  findUserByEmail,
  createUser
}