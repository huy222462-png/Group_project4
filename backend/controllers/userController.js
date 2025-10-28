// controllers/userController.js
let users = []; // mảng tạm để lưu user

// GET /users
const getUsers = (req, res) => {
  res.json(users);
};

// POST /users
const addUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

module.exports = { getUsers, addUser };
