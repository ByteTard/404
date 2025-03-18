const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.post('/save-log', async (req, res) => {
    try {
        const logEntry = req.body;
        const logLine = `${logEntry.timestamp}: ${logEntry.email}\n`;
        const logFile = path.join(__dirname, 'login_logs.txt');
        await fs.appendFile(logFile, logLine);
        res.status(200).send('Log saved successfully');
    } catch (error) {
        console.error('Error saving log:', error);
        res.status(500).send('Error saving log');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});