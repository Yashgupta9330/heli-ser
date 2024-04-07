const User = require("../models/User");

exports.addUser = async (req, res) => {
    try {
        const { email, firstName, lastName, gender, avatar, domain, availability } = req.body;

    
        if (!email || !firstName || !lastName || !gender || !avatar || !domain || !availability) {
            return res.status(422).json({
                success: false,
                message: "Invalid Data: All fields are required",
            });
        }
        
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists. Please sign in to continue.",
            });
        }

        const newUser = await User.create({
            first_name:firstName,
            last_name:lastName,
            email,
            gender,
            avatar,
            domain,
            available:availability
        });

        return res.status(200).json({
            success: true,
            newUser,
            message: "User registered successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered. Please try again.",
        });
    }
};
