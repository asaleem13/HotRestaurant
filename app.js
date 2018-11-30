// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 7015;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Set up vars and data
var reservations = [
    {
      name: "Yoda",
      phone: "323-456-5963",
      email: "carne@asada.com",
      id: 2000
    },
    {
        name: "Yoda",
      phone: "818-456-5963",
      email: "dfsf@asada.com",
      id: 2001
    },
    {
        name: "Yoda",
      phone: "310-456-5963",
      email: "gjgh@asada.com",
      id: 2002
    }
  ];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  // Displays all reservations
  app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });



 // Create New Reservations - takes in JSON input
app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservations = req.body;

    newReservations.routeName = newReservations.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservations);
  
    reservations.push(newReservations);
  
    res.json(newReservations);
  });
   


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  