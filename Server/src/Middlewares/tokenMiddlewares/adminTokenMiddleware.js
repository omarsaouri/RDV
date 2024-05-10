const jwt = require("jsonwebtoken");

const adminTokenMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).send("no token");
  jwt.verify(token, process.env.JWT_SECRET_ADMIN, (err) => {
    if (err) return res.status(403).send("not authorized");
    next();
  });
};

module.exports = adminTokenMiddleware;
