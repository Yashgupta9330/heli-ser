const Team = require("../models/Team");

exports.TeamDetails = async (req, res) => {
    const { id } = req.params;

    try {
        // Check if ID is provided
        if (!id) {
            return res.status(422).json({
                success: false,
                message: "Invalid Data: ID is required",
            });
        }

        // Find the team by ID
        const team = await Team.findById(id).populate('Members');
        // Check if team is found
        if (!team) {
            return res.status(404).json({
                success: false,
                message: "Team not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Team fetched successfully",
            team,
        });
    } catch (error) {
        console.error("Error fetching team:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
