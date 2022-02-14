import jwt from "jsonwebtoken";
import config from 'config'

const authMiddleware = (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "User is not authorized" });
    }
    const decodedData = jwt.verify(token, config.get('secretKey'));
    req.user = decodedData;
    next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({ message: "User is not authorized" });
  }
};

export default authMiddleware;
