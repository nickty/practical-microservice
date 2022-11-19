const User = require("../model/user");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  console.log(req.body);
  try {
    const { email } = req.body;
    const user = await User.findOne({ email }).exec();

    if (!user) return res.status(400).send("No User found");
    const _id = user._id.valueOf();
    console.log(_id);
    const token = jwt.sign({ _id: user._id.valueOf() }, "SEcretCanEnvLater", {
      expiresIn: "7d",
    });

    console.log(token);

    res.json({
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send("Error, Try again!");
  }
};

exports.register = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email } = req.body;
    let userExist = await User.findOne({ email }).exec();
    if (userExist) return res.status(400).send("Email is taken");

    const user = await new User({
      name,
      email,
    }).save();

    return res.json({ user });
  } catch (error) {
    console.log(error);
    return res.status(400).send("Error, Try again!");
  }
};
