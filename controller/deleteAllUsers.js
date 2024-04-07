const User = require("../models/User");

exports.deleteAllUsers = async (req, res) => {
    try {
        // Delete all users from the database
        await User.deleteMany({});

        return res.status(200).json({
            success: true,
            message: "All users deleted successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Failed to delete all users",
        });
    }
};
