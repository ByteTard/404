const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files (including index.html)
app.use(express.static(path.join(__dirname)));

// Endpoint to save log entries
app.post('/save-log', async (req, res) => {
    try {
        const logEntry = req.body;
        const logLine = `${logEntry.timestamp}: ${logEntry.email}\n`;
        
        // Define the log file path
        const logFile = path.join(__dirname, 'login_logs.txt');
        
        // Append the log entry to the file
        await fs.appendFile(logFile, logLine);
        
        res.status(200).send('Log saved successfully');
    } catch (error) {
        console.error('Error saving log:', error);
        res.status(500).send('Error saving log');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});