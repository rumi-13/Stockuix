const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { createSecretToken } = require("../utils/createSecretToken");
const orderModel = require("../models/order.model");
const holdingModel = require("../models/holding.model");
const positionModel = require("../models/postition.model");

const signUp = async (req, res) => {
  const payload = Object.keys(req.body || {}).length > 0 ? req.body : req.query;
  const { fullName, email, password, number } = payload || {};

  if (!fullName || !email || !password || !number) {
    return res.status(400).json({
      message: "Missing required signup fields.",
      error: "fullName, email, password, and number are required.",
    });
  } 

  let user = await userModel.findOne({ email });
  if (user) {
    return res.status(400).json({ message: "User already exists." });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  let newUser = new userModel({
    fullName: fullName,
    email: email,
    password: hashedPassword,
    number: number,
  });
   

  const token = await createSecretToken(newUser._id);
  try {
    await newUser.save();
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      path: '/',
    };
    res.status(201).cookie("token", token, cookieOptions).json({ message: "User created successfully." , id: newUser._id});
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user.", error: error.message });
  }
};

const login = async (req, res) => {
    const { email, password } = req.body;
   console.log("Login attempt with email:", email)
    const user = await userModel.findOne({email});

    if(!user) {
        return res.status(400).json({ message: "User not found." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid) {
        return res.status(400).json({ message: "Invalid password." });
    }

    const token = await createSecretToken(user._id);
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      path: '/',
    };

    res.status(200).cookie("token", token, cookieOptions).json({ message: "Login successful." , id: user._id});

};

const logout = async (req, res) => {
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    path: '/',
  };
  res.clearCookie("token", cookieOptions);
  return res.status(200).json({ message: "Logged out successfully." });
};

const verifyAuth = async (req, res) => {
  return res.status(200).json({ authenticated: true });
};

const getCurrentUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id).select("fullName email");

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    return res.status(200).json({
      id: user._id,
      fullName: user.fullName,
      email: user.email,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to load user profile.",
      error: error.message,
    });
  }
};

const deleteAccount = async (req, res) => {
  try {
    const userId = req.user.id;

    const deletedUser = await userModel.findById(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    await Promise.all([
      orderModel.deleteMany({ user: userId }),
      holdingModel.deleteMany({ user: userId }),
      positionModel.deleteMany({ user: userId }),
      userModel.findByIdAndDelete(userId),
    ]);

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      path: '/',
    };

    res.clearCookie("token", cookieOptions);
    return res.status(200).json({ message: "Account deleted successfully." });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete account.",
      error: error.message,
    });
  }
};

module.exports = { signUp, login, logout, verifyAuth, getCurrentUser, deleteAccount };
