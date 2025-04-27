const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all domains (or specify your frontend domain)
app.use(cors());

// Or, allow only specific domain:
// app.use(cors({ origin: 'https://yourfrontenddomain.com' }));

app.get('/api/message', (req, res) => {
  res.json({ message: 'API is working' });
});

app.listen(3000, () => console.log('Backend is running on port 3000'));
