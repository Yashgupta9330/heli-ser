const User = require('../models/User');

exports.getAllDomains = async (req, res) => {
  try {
    const domains = await User.distinct('domain');
    return res.json(domains);
  } catch (error) {
    console.error('Error fetching domains:', error);
    return res.status(500).json({ success: false, message: 'Failed to fetch domains' });
  }
};