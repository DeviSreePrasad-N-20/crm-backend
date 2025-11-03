// middlewares/auth.js
const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ message: 'Missing Authorization header.' });

  const token = authHeader.split(' ')[1]; // "Bearer TOKEN"
  if (!token) return res.status(401).json({ message: 'Missing token.' });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: payload.id };
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token.' });
  }
}

module.exports = authMiddleware;

