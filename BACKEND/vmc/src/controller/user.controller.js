const createUser = (req, res, next) => {
  const { name, phonenumber, email, password } = req.body;
  const username = req.username;
  const acctCreatedOn = new Date().toLocaleString();

  console.log(username, name, phonenumber, email, acctCreatedOn);
  if (!name || !phonenumber || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  res.json({
    message: "Account successfully created",
    data: {
      username,
      name,
      phonenumber,
      email,
      password,
      acctCreatedOn,
    },
  });
};

const getUser = (req, res, next) => {
  const { password } = req.body;
  const username = req.username;
  const acctSignIn = new Date().toLocaleString();

  console.log(username, acctSignIn);
  if (!password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  res.json({
    message: "Logged in successfully",
    data: {
      username,
      password,
      acctSignIn,
    },
  });
};

const updateUser = (req, res, next) => {
  const { username } = req.body;
  const acctUpdated = new Date().toLocaleString();

  console.log(username, acctUpdated);
  if (!username) {
    return res.status(400).json({ message: "All fields are required" });
  }
  res.json({
    message: "profile updated successfully",
    data: {
      username,
      acctUpdated,
    },
  });
};

module.exports = { createUser, getUser, updateUser };
