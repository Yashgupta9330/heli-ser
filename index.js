const express = require("express");
const app = express();
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require('fs');

// Load environment variables
dotenv.config();

// Connect to the database
database.connect();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.REACT_APP_BASE_URL // Adjust the origin based on your frontend URL
}));

// Import your controller
const { addUser } = require("./controller/Adduser");
const { allUser } = require("./controller/Alluser");
const { HandleDelete } = require("./controller/HandleDelete");
const { Updateuser } = require("./controller/UpdateUser");
const User = require("./models/User");
const { deleteAllUsers } = require("./controller/deleteAllUsers");
const { filter } = require("./controller/Filter");
const { getAllDomains } = require("./controller/Domain");
const { CreateTeam } = require("./controller/CreateTeam");
const { TeamDetails } = require("./controller/TeamDetails");
const { allTeam } = require("./controller/ALLteam");

// Routes
app.post("/add", addUser);
app.get('/list',allUser);
app.delete('/delete/:id', HandleDelete);
app.put('/update/:id',Updateuser);
app.delete('/deleteAllUsers', deleteAllUsers);
app.get('/filter',filter);
app.get('/domain',getAllDomains);
app.post('/team',CreateTeam);
app.get('/team/:id',TeamDetails)
app.get('/allteam',allTeam)
// Default route
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: 'Your server....'
  });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
