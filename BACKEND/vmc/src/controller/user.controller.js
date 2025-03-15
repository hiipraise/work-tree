const createUser = (req, res, next) => {
  const { username, firstname, lastname, phonenumber, email, password } =
    req.body;
  const acctCreatedOn = new Date().toLocaleString();

  console.log(username, firstname, lastname, phonenumber, email, acctCreatedOn);
  if (
    !username ||
    !firstname ||
    !lastname ||
    !phonenumber ||
    !email ||
    !password
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }
  res.json({
    message: "Account successfully created",
    data: {
      username,
      firstname,
      lastname,
      phonenumber,
      email,
      password,
      acctCreatedOn,
    },
  });
};

const getUser = (req, res, next) => {
  const { username, password } = req.body;
  const acctSignIn = new Date().toLocaleString();

  console.log(username, acctSignIn);
  if (!username || !password) {
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
  if (!username ) {
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
