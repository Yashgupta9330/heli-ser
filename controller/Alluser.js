
const user = require("../models/User");

exports.allUser = async (req, res) => {
    try {

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const startIndex = (page - 1) * limit;
        const users = await user.find().skip(startIndex).limit(limit); 
        return res.status(200).json({
           success: true,
           users: users,
           message: "List of all users",
       });

     }

       catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error in fetching Details.",
        });
    }

};