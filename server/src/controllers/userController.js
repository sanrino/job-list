const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {
  createUser,
  findUserByEmail,
} = require("../service/user-service");

const ApiError = require("../error/ApiError");

const generateJwt = (id, email) => {
  return jwt.sign(
    { id, email },
    process.env.SECRET_KEY,
    { expiresIn: '24h' }
  )
};

const userController = {
  registration: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return next(ApiError.badRequest('Invalid email or password!'));
      }

      const candidate = await findUserByEmail(email);

      if (candidate) {
        return next(ApiError.badRequest('User with this email already exists!'));
      }

      const hashPassword = await bcrypt.hash(password, 5);

      const user = await createUser(email, hashPassword);

      const token = generateJwt(user.id, email);

      return res.json({ token });

    } catch (error) {
      res.json({ msg: error.msg })
    }
  },

  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const user = await findUserByEmail(email);
      if (!user) {
        return next(ApiError.internal('User is not found!'));
      }

      let comparePassword = bcrypt.compareSync(password, user.password);

      if (!comparePassword) {
        return next(ApiError.internal('Incorrect password!'));
      }

      const token = generateJwt(user.id, user.email);

      return res.json({ token });

    } catch (error) {
      res.json({ msg: error.msg })
    }
  },

  check: async (req, res, next) => {
    const token = generateJwt(req.user.id, req.user.email);
    return res.json({ token })
  },
};

module.exports = userController;