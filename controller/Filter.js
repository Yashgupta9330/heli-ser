const User = require("../models/User");


exports.filter=async(req,res)=>{
try {
    let query = {};

    if (req.query.search) {
      const searchRegex = new RegExp(req.query.search, 'i');
      query.$or = [{ first_name: searchRegex }, { last_name: searchRegex }];
    }

    // Filter by domain
    if (req.query.domain) {
      query.domain = req.query.domain;
    }

    // Filter by gender
    if (req.query.gender) {
      query.gender = req.query.gender;
    }

    // Filter by availability
    if (req.query.available) {
      query.available = req.query.available;
    }
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const startIndex = (page - 1) * limit;
    const users = await User.find(query).skip(startIndex).limit(limit);
    return res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).json({ success: false, message: "Failed to fetch users" });
  }
}

