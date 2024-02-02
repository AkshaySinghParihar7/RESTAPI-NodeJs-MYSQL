const jwt = require('jsonwebtoken');
const secretKey = "whoakshayparihar";

const generateToken = (email) => {
    const token = jwt.sign({email}, secretKey, { expiresIn: '1h' });
    return token;
}

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decodedToken = jwt.verify(token, secretKey);
        req.user = decodedToken; 
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid token' });
    }
};

module.exports = {
    generateToken,
    authenticateToken
}
