const expressJwt = require("express-jwt");

exports.requireSignin = expressJwt({
  getToken: (req, res) => req.headers.token,
  secret: "SEcretCanEnvLater",
  algorithms: ["HS256"],
});
