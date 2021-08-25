const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../db/User');

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({email});
    if (!existingUser) {
      return res.status(404).json({message: 'Invalid user'});
    }
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({message: 'Invalid credentials'});
    }
    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: '1h' });
    res.status(200).json({result: existingUser, token});
  } catch (error) {
    res.status(500).json({message: 'Something went wrong'});
  }
};

const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  try {
    const existingUser = await User.findOne({email});
    if (existingUser) {
      return res.status(400).json({message: 'User already exists'});
    }
    if (password !== confirmPassword) {
      return res.status(400).json({message: 'Invalid password confirmation'});
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({email, password: hashedPassword, name: `${firstName} ${lastName}`});
    const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: '1h' });
    res.status(200).json({result, token});
  } catch (error) {
    res.status(500).json({message: 'Something went wrong'});
  }
};

module.exports = {
  signin,
  signup
};