const User = require("../models/User");

exports.HandleDelete = async (req, res) => {
    try {
        const { id } = req.params; 
        const existingUser = await User.findById(id);
        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

     
        await User.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "User deleted successfully",
        });
    } 
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Failed to delete user",
        });
    }
}