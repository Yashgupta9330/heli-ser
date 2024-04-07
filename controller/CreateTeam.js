

const Team = require('../models/Team');

exports.CreateTeam = async (req, res) => {
    const { TeamName, selectedUsers } = req.body;

    try {
        // Check if TeamName is provided
        if (!TeamName) {
            return res.status(422).json({
                success: false,
                message: "Invalid Data: All fields are required",
            });
        }

        // Check if selectedUsers is an array
        if (!Array.isArray(selectedUsers)) {
            return res.status(422).json({
                success: false,
                message: "Invalid Data: selectedUsers must be an array",
            });
        }

        // Create the team
        const team = await Team.create({ TeamName, Members: selectedUsers });

        return res.status(201).json({
            success: true,
            message: "Team created successfully",
            team,
        });
    } catch (error) {
        console.error("Error creating team:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
