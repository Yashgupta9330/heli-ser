const User = require("../models/User");

exports.Updateuser = async (req, res) => {
    const { id } = req.params; 
    const { editedUser } = req.body; // Receive the edited user object from the request body
    const { first_name, last_name, email, domain, availability } = editedUser; // Destructure the edited user object
    try {
      
        const updatedUser = await User.findByIdAndUpdate(id, { first_name, last_name, email, domain, availability }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        console.log(updatedUser);

        return res.status(200).json({ success: true, user: updatedUser, message: "User updated successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Failed to update user" });
    }
}
