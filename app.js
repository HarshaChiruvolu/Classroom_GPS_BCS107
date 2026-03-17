const express = require("express");
const app = express();

const PORT = 3000;

// Example classroom GPS (change to your actual classroom location)
const gpsData = {
    latitude: 10.8505,
    longitude: 76.2711,
    location: "Classroom - IIIT Kottayam"
};

app.get("/location", (req, res) => {
    res.json(gpsData);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});