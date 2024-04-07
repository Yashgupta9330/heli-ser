const Team = require('../models/Team'); // Import your Team model here

exports.allTeam = async (req, res) => {
    try {
        const teams = await Team.find().populate('Members'); // Assuming 'members' is the field to be populated
        
        res.status(200).json({
            success: true,
            data: teams
        });
    } catch (error) {
        console.error('Error fetching teams:', error);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};
