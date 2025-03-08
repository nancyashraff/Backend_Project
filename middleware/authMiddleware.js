const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.split(' ')[1]; // Get token from headers
        if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');

        if (!req.user) return res.status(401).json({ message: 'User not found' });

        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};
