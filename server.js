require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

app.use(express.static('.')); // Serves your frontend files

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.API_KEY;
    const apiUrl = process.env.API_URL;
    if (!city) return res.status(400).json({ error: 'City is required' });
    const url = `${apiUrl}?units=metric&q=${city}&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));