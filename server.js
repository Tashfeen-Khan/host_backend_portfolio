const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all domains (for testing purposes)
app.use(cors());

// API route
app.get('/api/endpoint', (req, res) => {
  res.json({ message: 'API is working' });
});

// Start the server
app.listen(3000, () => console.log('Backend is running on port 3000'));
