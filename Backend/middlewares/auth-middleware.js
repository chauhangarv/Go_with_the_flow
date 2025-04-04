const userModel = require('../models/user-model');
const BlacklistTokenModel = require('../models/blacklistToken-model');
const jwt = require('jsonwebtoken');
const captainModel = require('../models/captain-model');
const bcrypt = require('bcrypt');

module.exports.authUser = async(req, res, next) => {
   const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

   if (!token) {
       return res.status(401).json({ message: 'Unauthorized' });
   }

   try {
       // Check if token is blacklisted
       const isBlacklisted = await BlacklistTokenModel.findOne({ token });
       if (isBlacklisted) {
           return res.status(401).json({ message: 'Token is invalid' });
       }

       const decoded = jwt.verify(token, process.env.JWT_SECRET);
       const user = await userModel.findById(decoded._id);

       if (!user) {
           return res.status(401).json({ message: 'User not found' });
       }

       req.user = user;
       return next();

   } catch (error) {
       return res.status(401).json({ message: 'Unauthorized', error: error.message });
   }
}

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];


    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const isBlacklisted = await BlacklistTokenModel.findOne({ token: token });



    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id)
        req.captain = captain;

        return next()
    } catch (err) {
        console.log(err);

        res.status(401).json({ message: 'Unauthorized' });
    }
}