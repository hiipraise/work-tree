const addusername = (req, res, next) => {
  const { name, phonenumber } = req.body;
  //generate username
  //-last 4 digits of phone number
  // -join it to the name
  if (name && phonenumber) {
    const lastfour = phonenumber.slice(7, 11);
    const username = `${name}${lastfour}`;
    console.log(username);
    req.username = username;
    next();
  } else {
    return res
      .status(400)
      .json({ message: "Please provide name and phone number" });
  }
};

module.exports = addusername;
