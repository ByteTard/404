1. Client-side HTML (index.html)
This version sends the log data to a server endpoint instead of handling it locally:
2. Server-side Node.js Script (server.js)
This script sets up an Express server to receive log entries and save them to a text file:
3. Setup Instructions
Install Node.js: Make sure you have Node.js installed (https://nodejs.org/)
Create Project Directory:
Create a new folder (e.g., login-app)
Place both index.html and server.js in this folder
Initialize Node.js Project:
Open terminal in the folder
Run: npm init -y
Install Express: npm install express
Run the Server:
Run: node server.js
Visit http://localhost:3000 in your browser
How It Works
The client sends POST requests to /save-log with each form submission
The server receives the data and appends it to login_logs.txt in the same directory
No log information is displayed or downloaded on the client-side
The log file is stored server-side only
The file grows with each submission, appending new entries
Resulting login_logs.txt Example
text

Collapse

Wrap

Copy
2025-03-18T12:00:00.000Z: user1@example.com
2025-03-18T12:01:00.000Z: user2@example.com
