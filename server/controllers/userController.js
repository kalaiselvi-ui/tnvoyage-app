import Users from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name & email required" });
    }
    //check existing user
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User Already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Users.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const user = await Users.findById(newUser._id).select("-password");

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(401).json({ message: "Email & Password is required" });
    }
    const user = await Users.findOne({ email });
    // If the email doesn't exist, stop immediately or bcrypt will crash!
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const userResponse = user.toObject();
    delete userResponse.password;

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    return res.status(200).json({
      message: "User login Successful",
      user: userResponse,
      token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

const logout = async (req, res) => {
  try {
    console.log("logout");
    return res
      .status(200)
      .json({ success: true, message: "User Logout Successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user.role.toLowerCase() !== "admin") {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};

export { register, isAdmin, login, logout };
