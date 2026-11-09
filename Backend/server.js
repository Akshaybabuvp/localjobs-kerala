require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Allow the frontend to call this API
app.use(cors());

// Read JSON request bodies
app.use(express.json());

// Health check route to confirm the server is running
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'LocalJobs Kerala API is running',
  });
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
